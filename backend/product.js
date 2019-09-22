'use strict';

/** 
 * The class represent product which comes from api.
 */
class Product {

    /**
     * Initializing product variables.
     * @param {product} containes product data.
     * @return void.
     */
    constructor(product) {
        this.category    = product.category;
        this.title       = product.title;
        this.weight      = product.weight;
        this.size        = {}
        this.size.width  = product.size.width;
        this.size.length = product.size.length;
        this.size.height = product.size.height;
        this.averageCubicWeight = 0;
    }

}

exports.Product = Product;