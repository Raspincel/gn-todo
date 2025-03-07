# Como rodar o projeto

## Frontend

Para rodar o frontend, preencha o arquivo `.env` com as variáveis de ambiente necessárias, tais como no arquivo `.env.example`. Neste caso, há apenas a variável `VITE_API_BASE_URL`, que deve ser preenchida com o endereço da API.

Exemplo:

```
VITE_API_BASE_URL=http://localhost:3000
```

Após preencher o arquivo `.env`, baixe as dependências do projeto e rode o servidor de desenvolvimento:

```bash
yarn
yarn dev
```

O site estará disponível em `http://localhost:5137`.

## Backend

Para rodar o backend, preencha o arquivo `.env` com as variáveis de ambiente necessárias, tais como no arquivo `.env.example`. Existem 4 variáveis:

- `PORT`: porta em que o servidor irá rodar
- `HOST`: host em que o servidor irá rodar
- `DATABASE_URL`: URL de conexão com o banco de dados
- `DIRECT_URL`: URL de conexão com direta com o banco de dados que você deseja usar, exigida caso hospede o banco de dados em um serviço como Supabase

Exemplo:

```bash
PORT=3000
HOST=localhost
DATABASE_URL="postgresql://postgres.dtfciiaelamalyfeogpl:<PASSWORD>@aws-0-us-west-1.pooler.supabase.com:6543/postgres?pgbouncer=true"
DIRECT_URL="postgresql://postgres.dtfciiaelamalyfeogpl:<PASSWORD>@aws-0-us-west-1.pooler.supabase.com:5432/postgres"
```

Após preencher o arquivo `.env`, baixe as dependências do projeto e rode o servidor de desenvolvimento:

```bash
yarn
yarn dev
```

O servidor estará disponível no host e porta especificados no arquivo `.env`, por exemplo `http://localhost:3000`.