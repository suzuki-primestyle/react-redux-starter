# Overview

This is sample for

- react and react-redux
- routing

## Dependency

- php7
- composer
- nodejs >= 10
- yarn

## Installation

```
$ composer intall
$ yarn install
```

## Build

```
# for Mac
$ yarn run dev

# work around for Windows
$ ./node_modules/webpack/bin/webpack.js --progress --hide-modules --config=node_modules/laravel-mix/setup/webpack.config.js
```

## run

```
$ cd public
$ php -S localhost:8000
```

and check following url

- localhost:8000/app/
- localhost:8000/app/auth/login
- localhost:8000/app/auth/signup

## Basic Structure

This directory structure loosly follows 'ducks' style.   

https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be

Each screen/meta-info has their own directory and it contains Component(s), action, actionTypes, reducer.(it doesn't have to contain all of them).   

Each reducers are registered to rootReducers.   

Allow to use invisible component(only run specific processes)   
Because React is Component Oriented framework, it's easy to run a process with trigger by component's lifecycle(for example, componentDidMount etc).
