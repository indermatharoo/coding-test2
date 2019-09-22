'use strict';

/** Initialize constant. */
const program = require('commander');
const service = require('./service');
const {martix} = require('./matrix');

// Defining command line interface metadata.
program
  .version('1.0.0')
  .description('Shipping Weight Calculation System.');

// Defining commands
program
    .command('averageWeight <category>')
    .alias('a')
    .description('Calculate average weight')
    .action(async category => {
        let products    = await service.fetchData(category);  // fetch products from api.
        let totalWeight = 0;

        // calculate total weight
        products.forEach(function(product){
          var calculation = new martix(product);
          totalWeight += calculation.result;
        });

        totalWeight /= products.length; // calculating average cubic weight
        console.log('The average average cubic weight of ' + category + " is = " + totalWeight.toFixed(2) + "Kg");
    })
    ;

program.parse(process.argv);

