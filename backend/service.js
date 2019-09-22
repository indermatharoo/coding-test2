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
            body.objects.forEach(function(product){
                if(category.toLowerCase() == product.category.toLowerCase())
                    products.push(new Product(product));
            });
            if(next != null)
                fetchProducts(next, resolve, reject);
            else
                resolve(products);
        })
        .catch(err => reject(err))
        ;
    }

    // return a promise
    return new Promise(function(resolve, reject) {
        fetchProducts('/api/products/1',resolve,reject);
    })

}

exports.fetchData= fetchData;
