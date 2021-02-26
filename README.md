# Barefoot Nomad - Making company travel and accomodation easy and convinient.


![Node.js CI](https://github.com/atlp-rwanda/elite-bn-frontend/workflows/Action%20CI/badge.svg)  [![Maintainability](https://api.codeclimate.com/v1/badges/3c16f080732707287cb9/maintainability)](https://codeclimate.com/github/atlp-rwanda/elite-bn-frontend/maintainability)  [![Test Coverage](https://api.codeclimate.com/v1/badges/3c16f080732707287cb9/test_coverage)](https://codeclimate.com/github/atlp-rwanda/elite-bn-frontend/test_coverage)


![Design preview for the Barefoot Nomad web Platform](UI.png)

## Description

Make company global travel and accommodation easy and convenient for the strong workforce of savvy members of staff, by leveraging the modern web.

## hosted version of the application

If you want to have a look on the hosted version of the app click **[HERE](https://naughty-mirzakhani-b9436a.netlify.app/)**

## How to get access to the Docker Container/Image

- Go on [Dockerhub](https://hub.docker.com/) website, if you don't have an account, you will be asked to create one

- The image is accessible on this link `https://hub.docker.com/repository/docker/pextech/elite-barefoot`

- To run the image locally run the following command to pull the image  `docker push pextech/elite-barefoot:frontend`

- to start the image run `docker run -it -p 8080:80 --name barefootnginxapp elite-barefoot/frontend`

# Dependencies ⚙︎

- React js
- Node js
- Redux
- Webpack
- Tailwind ss
- Jest
- Babel
- Eslint
- Prettier
- PostCss etc...

# Setting up and running the application 🔧

Clone the repository on your local computer using the command below

> `git clone https://github.com/atlp-rwanda/elite-bn-frontend.git`

Install all project dependencies using the command below

> `npm i`

To start the development server run the command below

> `npm run dev`

To build the application run the command below

> `npm run build`

To start the application in production mode run the command below

> `npm start`

# Contribute

If you ever have an idea on how you might help improve the app, you are welcome to contribute your changes to the repository, Just follow the steps below:

Assumming you have the repo cloned on your PC,

- Pull the latest changes from the remote repo by running:

```
git pull origin develop
```

NB: You need to be on the develop branch when you do this

- Create & switch to the new branch where you will add your changes by running:

```
git checkout -b `yournewbranchname`
```

- After adding your changes, commit and push them to create a pull request against the develop branch. We will review and merge them if they are helpful.

# Authors

team Elite &copy;2021.
