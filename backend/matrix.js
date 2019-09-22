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
        this.convertCentimeterIntoMeter();
        this.getIndustryStandardCubicWeight();
    }
    
    /**
     * Convert centemeters into meters.
     * @return void.
     */
    convertCentimeterIntoMeter() {
        this.height = this.height / 100;
        this.length = this.length / 100
        this.width  = this.width  / 100
    }

    /**
     * Calculate average standart weight.
     * length * height * width * (industry standard cubic weight conversion factor)
     * @return void.
     */
    getIndustryStandardCubicWeight() {
        this.result = this.height * this.length * this.width * parsed.standardConversion;
    }

}

exports.martix = martix;    