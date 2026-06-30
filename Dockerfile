FROM node:22 as builder

ARG BUILD_CMD=build:prod

WORKDIR /app
# 复制依赖文件（利用 Docker 缓存层）
COPY package.json yarn.lock ./

# 安装依赖
RUN yarn install --frozen-lockfile

# 复制源代码
COPY . .

# 执行构建
RUN yarn run ${BUILD_CMD}

FROM cgr.dev/chainguard/nginx:latest
COPY nginx.conf /etc/nginx/nginx.conf
COPY nginx.app.conf /etc/nginx/conf.d/
COPY --from=builder /app/dist /usr/share/nginx/html/
