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
    constructor(project) {
        this.category    = project.category;
        this.title       = project.title;
        this.weight      = project.weight;
        this.size        = {}
        this.size.width  = project.size.width;
        this.size.length = project.size.length;
        this.size.height = project.size.height;
        this.averageCubicWeight = 0;
    }

}

exports.Product = Product;