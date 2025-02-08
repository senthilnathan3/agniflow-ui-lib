FROM oven/bun:1.1.38

WORKDIR /app

COPY package.json bun.lockb ./

ENV SKIP_HOOKS=true

RUN bun install

COPY . .

EXPOSE 3333 6006

RUN bun web build

CMD ["sh", "-c", "bun web start"]
