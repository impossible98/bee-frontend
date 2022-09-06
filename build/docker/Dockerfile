# one
FROM impossible98/nodejs as one
WORKDIR /src/
COPY ./ ./
RUN make install \
    && make build
# two
FROM nginx:alpine
COPY --from=one /src/dist/ /usr/share/nginx/html/
