# ReadME

# Nova-Foundation
[![Build Status](https://travis-ci.org/fac-graduate-programme/Nova-Foundation.svg?branch=staging)](https://travis-ci.org/fac-graduate-programme/Nova-Foundation)

Repository for the Founders Program project "Nova Foundation App". Aug 2019

## Introduction

We designed and developed a progressive web app with comfort and emotional support in mind. The app functions as a place to keep memories, 
learn about grief and trauma. We included breathing exercises and ways to track ones mood.

## Requirements

- node.js 
- mongoDB service

## Installation

### Live version: https://nova-foundation.herokuapp.com/

### To run this project locally, run the following commands in your terminal:

Clone repo:

```git clone ``` the repository

In your terminal, navigate into the root of the repo and install dependencies ```npm i```

`npm run client:init ` in the repo folder

and then in a new terminal `npm run dev` it should run a developement server 


## Configuration

You will need a .env, this shoud be provided by our team


## Stack

- **FrontEnd**: Reactjs
- **BackEnd**: Nodejs
- **Server**: Expressjs
- **Database**: MongoDB
- **Image hosting**: cloudinary
- **Testing**: Jasmine.js

## Team
|     <a href="https://github.com/Dalmano" target="_blank">**Dylan**</a>      |      <a href="https://github.com/engshorouq" target="_blank">**Shorouq**</a>       |
| :-------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------: |
|       [![Dylan](https://avatars2.githubusercontent.com/u/30301023?s=400&v=4)]()        |        [![Shorouq](https://avatars1.githubusercontent.com/u/34021892?s=400&v=4)]()         |
| <a href="https://github.com/Dalmano" target="_blank">`https://github.com/Dalmano`</a> | <a href="https://github.com/engshorouq" target="_blank">`https://github.com/engshorouq`</a> |

|     <a href="https://github.com/IsraaSulaiman" target="_blank">**Israa**</a>      |          <a href="https://github.com/Oliversw" target="_blank">**Kate**</a>           |
| :---------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------: |
|             [![Israa](https://avatars0.githubusercontent.com/u/35868173?s=400&v=4)]()              |   [![Kate](https://avatars2.githubusercontent.com/u/39469813?s=460&v=4)]()   |
| <a href="https://github.com/IsraaSulaiman" target="_blank">`https://github.com/IsraaSulaiman`</a> | <a href="https://github.com/dubhcait" target="_blank">`https://github.com/dubhcait`</a> |

## Process

The process included a 1 week build sprint and 3 build weeks

### All User Stories/Backlog Items
- As a user, I want to see a disclaimer before I proceed to navigate the page. 
- As a user, I want to know what Nova is about.
- As a user, I want to create a new account in Nova app.
- As a user, I want to login to my account.
- As a user, I want to navigate through the pages easily on my mobile. 
- As a user, I want to feel not alone and like somebody cares by asking me about my feelings/thoughts.
- As a user, I want to know what kind of support Nova provides to make me feel better.
- As a user, I want to find good resources of information and suggestions to help me let go of negative feelings/trauma.
- As a user, I want to have a non-judmental space where I write my diaries during trigger times.
- As a user, I want to have a place to save lillies/pictures for my loved ones.
- As a user, I want to delete any picture any time I want.
- As a user, I want to see all the pictures I save in my personal corner.
- As a user, I want to do some exercises when I feel overwhelmed/bereaved.
- As a user, I want to find some distractions, like reading poems.
- As a user, I want to add a poem that helped me/that I love.
- As a user, I want to read the stories of other people who experienced loss of loved ones.
- As a user, I want to be able to share my story when I feel I am ready for that.

### Week 1

We each came up with a design 

![](https://i.imgur.com/rjIzX6h.png)

Then we took the elements we enjoyed the most and built on them together to come up with a prototype 

![](https://i.imgur.com/Xl120f9.png)

### Week 2 - 4

We build the common components initially, there were a lot of overlapping elements. We built a prototype of a simple test project for firebase storage. 

We build a lot of the pages first and then moved to the functionality, we set up mongoDB and tested the quries with jasmine.

For organisational purposes we used a standup blog to keep track of who was doing which issues and any blocker people were facing
