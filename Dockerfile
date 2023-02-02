ARG NODE_IMG=node:16.13.1-alpine3.13

FROM ${NODE_IMG} AS builder

WORKDIR /tap-nest

COPY package.json .
COPY package-lock.json .
COPY nest-cli.json .
COPY tsconfig.build.json .
COPY tsconfig.json .
RUN npm ci
COPY src ./src
RUN npm run build

RUN mv node_modules build_node_modules \
  && npm ci --omit=dev

FROM ${NODE_IMG}

RUN addgroup -S appusergroup && \
  adduser -S -G appusergroup appuser

RUN mkdir -p temp
RUN chown -R appuser:appusergroup temp
RUN chmod 755 temp

COPY --chown=appuser:appusergroup --from=builder /tap-nest/dist ./dist/
COPY --chown=appuser:appusergroup --from=builder /tap-nest/node_modules ./node_modules/
COPY --chown=appuser:appusergroup --from=builder /tap-nest/package.json ./package.json

EXPOSE 3000

USER appuser
CMD ["node", "dist/main"]
