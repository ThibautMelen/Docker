#PHP MYSQL APACHE Env

FROM php:7.2.7-fpm-alpine3.7

MAINTAINER thmelen <thmelen@student.42.fr>

RUN apk update -y &&
	apk upgrade -y

RUN docker-php-ext-install mysqli
