# Timilink
Test task

## Необходимо установить для сборщика
* node.js [install](https://nodejs.org/en/download/)
* git [install](https://git-scm.com/)
* gulp (глобально) в node.js command prompt напишите `npm i -g gulp`

### Установка сборщика
Запустите node.js command prompt, перейдите в директорию проекта, напишите:
```terminal
npm install
bower install
```

### Режим разработчика
Запустите node.js command prompt, перейдите в директорию проекта, напишите:
```terminal
gulp serve
```
Изменения файлов в директории `/app` автоматически синхронизируются с браузером.
`/app` : здесь находится исходный неинтерпретированный код Вашего лэндинга.
Для стилей используется sass https://sass-scss.ru

### Сборка минифицированная (production)
```terminal
gulp build
```
Будет создана директория `/dist`
