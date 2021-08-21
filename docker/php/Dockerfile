FROM php:7.4-fpm

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# RUN apk --update add tzdata && \
#   cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
#   apk del tzdata && \
#   rm -rf /var/cache/apk/*

RUN apt-get update \
  && apt-get install -y zlib1g-dev mariadb-client vim libzip-dev \
  && docker-php-ext-install zip pdo_mysql
