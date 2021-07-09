FROM php:7.3-alpine

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

RUN apk --update add tzdata && \
  cp /usr/share/zoneinfo/Asia/Tokyo /etc/localtime && \
  apk del tzdata && \
  rm -rf /var/cache/apk/*

RUN docker-php-ext-install pdo pdo_mysql mysqli mbstring

WORKDIR /www

COPY php.ini /usr/local/etc/php/php.ini
