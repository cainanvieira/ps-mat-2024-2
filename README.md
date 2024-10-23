# Criação do projeto back-end:
npx @aka-demy/create-express-app

perguntas feitas pelo comando:
*OK to proceed? y
Give a name for the app: back-end
Language: Javascript
Template engine: None
Package manager: npm

# Executar no terminal:
cd back-end
npm run dev

# Instalação do Prisma (ORL):
npm install prisma --save-dev

# inicialização do Prisma:
npx prisma init --datasource-provider postgresql

# Executando uma migration no Prisma 

npx prisma migrate dev --name create-cars (criando a tabela cars)

npx prisma migrate dev --name create-customers (criando a tabela customers)

npx prisma migrate dev --name create-users (criando a tabela users)

npx prisma migrate dev --name create-sellers (criando a tabela sellers)

npx prisma migrate dev --name alter-customers (alterando a tabela customers)

npx prisma migrate dev --name alter-cars (alterando a tabela cars)

# Para cryptografar senha
npm install bcrypt

# Para atualizar o Schema Prisma
npx prisma generate

# Instalar token pro login
npm install jsonwebtoken

# Para ler o token
npm install dotenv

# FRONT-END
# Para instalar o cors
npm install cors 

# Para arrumar o problema do cors
npm audit fix