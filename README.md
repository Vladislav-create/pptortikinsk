# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Деплой Node.js, с уcтановкой Nginx и SSL Let's Encrypt

[![DigitalOcean Referral Badge](https://web-platforms.sfo2.cdn.digitaloceanspaces.com/WWW/Badge%201.svg)](https://www.digitalocean.com/?refcode=96eb2d860a30&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge)

## Установка сервера
Сервер будет установлен на Digital Ocean. Получите 100$ при регистрации, перейдя по [этой реферальной ссылке](https://www.digitalocean.com/?refcode=96eb2d860a30&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge).

- На старнице Droplets, создайте новый Ubuntu сервер, и подключите ssh ключ.

 ## Установка необходимых библиотек

- Подключитесь к серверу по SSH.
- Обновите состояние пакетов:
```
sudo apt update
```
- Установите Curl:
```
sudo apt install curl
```
- Установите NVM (Node Version Manager):
```
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
source ~/.profile 
```
- Установите Node:
```
# Установить последную версию
nvm install node
# Установить конкретную версию
nvm install 14.17.3
nvm use 14.17.3
# Установить версию по умолчанию
nvm alias default 14.17.3
# Проверить активную версию 
node -v
```
- Склонируйте Git репозиторий:
```
git clone (https ссылка на репозиторий)
```
- Зайдите в папку приложения и установите node_modules:
```
ls -l # Посмотреть список файлов
cd (имя репозитория)
npm install
```
- Установите PM2 и запустите node приложение:
```
npm install -g pm2
NODE_ENV=production pm2 start npm --name strapi -- run start # Запустить в режиме продакшн npm run start скрипт и назвать "strapi"
pm2 status # Статус процессов
pm2 logs # Показать логи приложения (Ctrl + C чтобы выйти)
pm2 startup ubuntu # Запускать pm2 при рестарте системы
pm2 save # Сохранить процесс чтобы при перезапуске сам запускался
```
## Установка firewall

```
ufw status
ufw enable # Oтвечаем 'y'
ufw allow ssh
ufw allow http
ufw allow https
```
## Установка Nginx
```
sudo apt install nginx # Отвечаем 'y'
sudo nano /etc/nginx/sites-available/default 
```
- Поля server_name и location / {} измените на:
```
server_name your-domain.com www.your-domain.com;

location / {
    proxy_pass http://localhost:5000; # Порт на котором запускается node.js приложение
    proxy_http_version 1.1;
    proxy_set_header Upgrade $http_upgrade;
    proxy_set_header Connection 'upgrade';
    proxy_set_header Host $host;
    proxy_cache_bypass $http_upgrade;
}
```
- Ctrl + X чтобы выйти, 'y' чтобы сохранить
- Если запущен Apache сервер, его необходимо остановить
```
service apache2 status
sudo systemctl disable apache2 && sudo systemctl stop apache2
```
- Проверьте синтаксис Nginx и перезапустите сервер
```
sudo nginx -t
sudo service nginx restart
```

## Привязка домена
- Добавьте домен в DigitalOcean (страница Networking, вкладка Domains).
- Добавьте две записи типа 'A'. В первой Hostname равен '@', во второй 'www'. Нажмите на поле с IP и выберете droplet (сервер).
- На странице регистратора вашего домена добавьте DNS записи:
```
ns1.digitalocean.com
ns2.digitalocean.com
ns3.digitalocean.com
```
- Подождите до 48 часов (может быть и 5 минут) пока обновятся DNS записи

## Установка SSL сертфиката Let's Encrypt
```
sudo apt install certbot python3-certbot-nginx # Отвечаем 'y'
sudo certbot --nginx -d your-domain.com -d www.your-domain.com
certbot renew --dry-run
```

**Да будет свет**

