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

# Configuração essencial do Nginx para Single Page Applications (React Router)
# Redireciona todas as requisições não encontradas para o index.html
RUN echo 'server { \
    listen       80; \
    server_name  localhost; \
    location / { \
        root   /usr/share/nginx/html; \
        index  index.html index.htm; \
        try_files $$uri $$uri/ /index.html; \
    } \
}' > /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
