# Docker
### [Задание](https://kodaktor.ru/g/dockerportfolio)
`задание выполнено на платформе vscale.io`

* Создаем сервер на `vscale.io` с докером.
* Заходим, с использованием логина и пароля, который нам вышлют на почту.
* Создаем свой образ, используя `Dockerfile` и `default.conf`
* Заходим в консоль, после этого поэтапно прописывая команды.
  1. Создаем директорию `mkdir -p /home/docker/legaimage`
  2. Создаем 2 файла `Dockefile` и `default.conf` через `nano`
  3. Создаем наш образ, запускаем сборку `docker build -t legaimage`
  4. После успешной сборки, проверяем наличие образа с помощью `docker images`
  ![image](https://user-images.githubusercontent.com/44378669/72359786-f26cd300-36ff-11ea-8f01-fd0420c2c3b0.png)
  -----------------------------------
  5. Создаем контейнер с любым именем допустим `lega1`, используем `docker run --name lega -p 80:1234 -d legaimage` 
  6. Контейнер должен сразу же запуститься, проверим с помощью `docker ps`
  ![image](https://user-images.githubusercontent.com/44378669/72360058-758e2900-3700-11ea-87f1-7bd45bd8dc4f.png)
  -----------------------------------
  7. Далее поменяем, что нибудь в `index.html`. Напишем `docker exec -it lega1 env TERM=xterm nano /data/public/index.html`
  ![image](https://user-images.githubusercontent.com/44378669/72360261-c00fa580-3700-11ea-83e9-d012ca2ea9dc.png)
  -----------------------------------
  #### Замечание: Для остановки контейнера пишем `docker stop lega1`, для запуска пишем `docker start lega1`. Проверить наличе всех контейнеров `docker ps -a`
  

