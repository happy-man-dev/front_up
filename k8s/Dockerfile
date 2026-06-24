FROM node:22 as builder

WORKDIR /app

# 4. 安装依赖（--frozen-lockfile 保证版本一致性）
RUN yarn install 

# 6. 执行构建
RUN yarn run build:prod

FROM cgr.dev/chainguard/nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.app.conf /etc/nginx/conf.d/
COPY --from=builder /app/dist /usr/share/nginx/html/
