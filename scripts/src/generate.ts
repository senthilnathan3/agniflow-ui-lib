import fs from 'node:fs';
import { Effect, Match, pipe } from 'effect';
import Handlebars from 'handlebars';
import helpers from 'handlebars-helpers';
import v from 'voca';

helpers({ handlebars: Handlebars });

const reactTemplate = Handlebars.compile(fs.readFileSync('./src/templates/react.hbs', 'utf-8'));

const camelCase = (s: string) => v.chain(s).camelCase().value();

class FetchError {
  readonly _tag = 'FetchError';
  constructor(readonly error: unknown) {}
}

class JSONError {
  readonly _tag = 'JSONError';
  constructor(readonly error: unknown) {}
}

const fetchAllComponents = () =>
  pipe(
    Effect.tryPromise({
      try: () => fetch(`https://ark-ui.com/api/types/react`),
      catch: (error) => new FetchError(error),
    }),
    Effect.flatMap((response) =>
      Effect.tryPromise({
        try: () => response.json() as Promise<string[]>,
        catch: (error) => new JSONError(error),
      }),
    ),
    Effect.catchAll(() => Effect.succeed<string[]>([])),
  );

const fetchComponent = (component: string) =>
  pipe(
    Effect.tryPromise({
      try: () => fetch(`https://ark-ui.com/api/types/react/${component}`),
      catch: (error) => new FetchError(error),
    }),
    Effect.flatMap((response) =>
      Effect.tryPromise({
        try: () => response.json(),
        catch: (error) => new JSONError(error),
      }),
    ),
    Effect.map((data) => Object.entries(data)),
  );

const programm = () =>
  pipe(
    fetchAllComponents(),
    Effect.map((components) =>
      components.filter(
        (component) =>
          !['environment', 'format', 'locale', 'portal', 'presence', 'toast'].includes(
            component,
          ),
      ),
    ),
    Effect.flatMap((components) =>
      Effect.forEach(components, (component) =>
        pipe(
          fetchComponent(component),
          Effect.map((data) =>
            data
              .sort(([a], [b]) => (a.startsWith('Root') ? -1 : b.startsWith('Root') ? 1 : 0))
              .map(([name, type]) => [
                component === 'tabs' ? name.replace('Tab', '') : name,
                type,
              ])
              .map(([name, type]) => ({
                name,
                tag: type.tag,
                html: type.element,
                slot: Match.value(name).pipe(
                  Match.when(
                    (name) => name.startsWith('Root'),
                    () => 'root',
                  ),
                  Match.when(
                    (name) => name.includes('Hidden'),
                    () => undefined,
                  ),
                  Match.orElse(() => camelCase(name)),
                ),
                isProvider: name.startsWith('Root'),
              })),
          ),
          Effect.map((parts) =>
            reactTemplate({
              component,
              recipe: Match.value(component).pipe(
                Match.when('switch', () => 'switchRecipe'),
                Match.orElse(() => camelCase(component)),
              ),
              usesRootProvider: parts.some((part) => part.isProvider && !part.html),
              parts,
            }),
          ),
          Effect.map((html) =>
            fs.writeFileSync(
              `../components/react/src/components/ui/primitives/${component}.tsx`,
              html,
            ),
          ),
        ),
      ),
    ),
  );

Effect.runPromise(programm());
