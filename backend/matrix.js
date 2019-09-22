'use strict';

/** Initialize constant. */
const dotenv   = require('dotenv');
const {parsed}   = dotenv.config();

/** 
 * The class will used to calculate average cubic weight.
 */
class martix {

    /**
     * Initialize class variables.
     * @param {product} containes product data.
     * @return void.
     */
    constructor(product) {
        this.height = product.size.height;
        this.length = product.size.length;
        this.width  = product.size.width;
        this.result = 0;
        this.init();
        this.calculate();
    }
    
    /**
     * Convert centemeters into meters.
     * @return void.
     */
    init() {
        this.height = this.height / 100;
        this.length = this.length / 100
        this.width  = this.width  / 100
    }

    /**
     * Calculate average standart weight.
     * @return void.
     */
    calculate() {
        this.result = this.height * this.length * this.width * parsed.standardConversation;
    }

}

exports.martix = martix;    