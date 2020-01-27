#  TestCafe

As a part of the assignment of automate a web application I choosed the next framework:

- WebdriverIO V5
- CucumberJS 
- Chai (assertion)
- Docker: Selenium hub, Selenium node Chrome (dev).
- Page Objects Model, Data driven.
- Report: Allure

The reason why I chose WebdriveriIO as far is easier way to automate tests not mattering the website code of language, it's the best tool to handle differents Web JS frameworks or for apps as well. In addition, Cucumber is my preferred tool to automate, no because writing test case is a way easier, readable for everyone, data driven, reduce coding, etc but also for real-life allows me to integrate the Bussines and Tech sides in one single "file".


# Requirement
   As I User 
   I want to navigate to http://cafetownsend-angular-rails.herokuapp.com/
   So I can do LogIn, LogOut, Create and Delete an employer 
    
# Tools Needed
  - *Node.js* >= 10.15.x [how to install Node](https://nodejs.org/en/download/)
  - *Yarn* >= 1.16.x [how to install Yarn](https://yarnpkg.com/en/docs/install#debian-stable)
  - *Docker* >= 2.1 [how to install docker](https://docs.docker.com/docker-for-mac/install/) 
  - *Git* >= 2.x [how to install git on mac](https://www.atlassian.com/es/git/tutorials/install-git)
 
## Getting started

### 1) Clone/download the repo
Create a folder and clone or download the repo inside of it
```sh
$ mkdir myFolder && cd myFolder
$ git clone https://github.com/arochagabriel/cafetownsend-assignment.git
$ cd cafetownsend-assignment/
```
### 2) Install dependencies
```sh
$ yarn install
```

### 3) Run Docker, Selenium enviroment
Explore and open Docker in your notebook, once is up and running, move to your project with your terminal
```sh
$ cd cafetownsend-assignment/
```
 and make sure that is listed the 'docker-compose.yml' file and execute 
```sh
$ docker-compose build && docker-compose up
```
*You may be wondering, why does it have two selenium-chrome nodes?*, ***Well in automation parallel and atomic execution is key to success 😎. We are executing all test cases at the same time.***

### 4) Run Test
In your terminal 
```sh
$ cd cafetownsend-assignment/
$ yarn tests:e2e
```
### 5) Get your Report 
In your terminal 
```sh
$ cd cafetownsend-assignment/
$ yarn report:generate
$ yarn report:open
```
Automatically you'll see a tab open with Allure report about your testing.

## For Maintainability
1) If you want to see the interaction and your test execution 
    - Install VNC Viewer in your notebook
    - After the step 3 (Run Docker, Selenium enviroment), open vnc viewer and create the conexions (two by each nodes)
        -0.0.0.0:5901, password: 'secret'
        -0.0.0.0:5902, password: 'secret'
2) Ways to add more test case
    - Create your feature file inside (test/e2e/features)
    - Create your steps-definitions (test/e2e/steps)
    - Create and identify the elements that you're going interactive with (test/e2e/pages)





 
