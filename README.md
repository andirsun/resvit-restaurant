# resvit-restaurant.

restaurant app resvit.

Backend : node js with expressjs library 
frontend : reactjs 

Changes publication (in case of adding modules to package.json)

* ssh user@host
* cd resvit-restaurant
* git pull origin master
* cd "Changed folder"
* npm install
* cd ..
* docker-compose up
* ctrl c (After the application is up. Interrupts docker compose running process)
* docker ps -a (Look for our front and back images names (the longest names) and copy them)
* docker start frontendImage backendImage
* Done!
