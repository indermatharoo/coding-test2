'use strict';

/** Initialize constant. */
const dotenv   = require('dotenv');
const {parsed} = dotenv.config();
const fetch    = require('node-fetch');
const Promise  = require('promise');
const {Product}= require('./product');
const products = [];

/** 
 * The function crawl data from api.
 */
function fetchData(category) {
    
    /**
     * Initialize class variables.
     * @param {url} containes api url.
     * @param {resolve} function.
     * @param {reject} function.
     * @return Promise.
     */
    function fetchProducts(url, resolve, reject) 
    {
        fetch(parsed.apiUrl + url)
        .then(res => res.json())
        .then(body => {
            let next = body.next;
            let tmpProducts = body.objects;

            // Looping the fetched data
            tmpProducts.forEach(function(product){
                // check if product category matches with given category
                if(category.toLowerCase() == product.category.toLowerCase())
                    products.push(new Product(product));
            });
            // fetch the paginated data.
            if(next != null)
                fetchProducts(next, resolve, reject); // call the function recursively
            else
                resolve(products); // eventually return response.
        })
        .catch(err => reject(err)) // catch if any error occurred during processs
        ;
    }

    // return a promise
    return new Promise(function(resolve, reject) {
        fetchProducts('/api/products/1',resolve,reject);
    })

}

exports.fetchData= fetchData;
