docker build . -t elite-barefoot/frontend &&\
docker run -it -p 8080:80 --name barefootnginxapp elite-barefoot/frontend