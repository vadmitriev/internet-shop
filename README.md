# Интернет-магазин на React, Redux и Typescript.
Веб-приложение "Интернет-магазин" с использованием библиотеки React, в качестве стейт-менеджера использован Redux с Redux-saga. <br>
Приложение включает в себя главную страницу и страницу корзины. <br>
Формулировка задания расположена <a href="https://gist.github.com/skycrazyk/b363010b7d29bea97393f6731f83846b" target="_blank">здесь</a>.
<br><br>
Возможности:
* Добавление товаров в корзину и удаление из нее;
* Изменение количества добавленных товаров;
* Перерасчет суммарной стоимости товаров при изменении их количества;
* Сохранение состояния приложения после перезагрузки страницы;
* Возможность в коде инициализации приложения указать список id дилеров, товары которых будут подгружаться на страницу.

## Демо
Посмотреть можно по ссылке: <a href="https://shop-cf2b6.web.app" target="_blank">shop-cf2b6.web.app</a>

## Установка
```console
git clone https://github.com/vadmitriev/internet-shop.git
```
``` console
cd todolist
```
``` console
cp env.sample .env
```

С использованием Nodejs локально:
``` console
npm install
```
```console
npm run start
```

С использованием Docker-контейнера:
```console
docker build -t shop .
```
``` console
docker run --publish 3000:3000 shop
```
