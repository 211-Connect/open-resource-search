# Open Resource Search

The goal of this app is to provide all 211s with an equal opportunity at a rich user experience, modern speed and efficiency for data searchability, and a low barrier to entry.

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_GOOGLE_API_KEY`

`NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`

`NEXT_PUBLIC_URL`

## Run Locally

#### dependencies

1. Amazon Web Services

- Cognito
- Simple Email Service

2. ElasticSearch
3. A hosting platform

- We recommend Vercel
- Other options include Digital Ocean, Netlify, Render, etc.

4. A MySQL database

- We use prisma as an ORM.

#### Set up

Clone the project

```bash
  git clone https://github.com/211-Connect/open-resource-search
```

Go to the project directory

```bash
  cd open-resource-search
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```
