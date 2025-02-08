FROM oven/bun:1.1.38

WORKDIR /app

COPY package.json bun.lockb ./

ENV SKIP_HOOKS=true

RUN bun install

RUN bun add next velite rehype-autolink-headings rehype-slug

COPY . .

EXPOSE 3333 6006

CMD ["sh", "-c", "bun web start"]