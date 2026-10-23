# Estágio 1: Build (Construção do App React/Vite)
FROM node:20-alpine AS builder

WORKDIR /app

# Copia os arquivos de dependência
COPY package.json package-lock.json* bun.lock* ./

# Instala as dependências (usando npm, compatível com a estrutura)
RUN npm install --legacy-peer-deps

# Copia o restante do código
COPY . .

# Faz o build da aplicação Vite (gera a pasta /dist)
RUN npm run build

# Estágio 2: Produção (Servidor Nginx)
FROM nginx:alpine

# Remove os arquivos html padrão do nginx
RUN rm -rf /usr/share/nginx/html/*

# Copia o build gerado no estágio anterior
COPY --from=builder /app/dist /usr/share/nginx/html

# Configuração essencial do Nginx com controle estrito de cache para SPAs e Service Workers
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
