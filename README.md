# Coding Challenge

A command line application which calculate average cubic weight of the products of specific categories. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

## Prerequisites

What things you need to install the software and how to install them
- Docker

## Installation

* Install [Docker](https://docs.docker.com/get-started/)
* Build: `docker-compose build`
* Run: `docker-compose up`
* Run: `docker-compose exec node-backend node shipping averageWeight "Air Conditioners"`


#### Environment Variables 

The following environment variables need to be set up on the system.

- .env
```
apiUrl - set api url here(default value is already assigned).
standardConverstion  - set standard cublic convertion here(default value is already assigned)
```

## Resources

* [React](https://reactjs.org/)
* [Node](https://nodejs.org/en/)
* [Commander](https://www.npmjs.com/package/commander/)
* [Dotenv](https://www.npmjs.com/package/dotenv/)
* [Node Fetch](https://www.npmjs.com/package/node-fetch/)
* [Promise](https://www.npmjs.com/package/promise/)

