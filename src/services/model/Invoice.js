/**
 * facturacion
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import Customer from './Customer';
import Product from './Product';
import Report from './Report';

/**
 * The Invoice model module.
 * @module model/Invoice
 * @version 1.0
 */
class Invoice {
    /**
     * Constructs a new <code>Invoice</code>.
     * @alias module:model/Invoice
     */
    constructor() { 
        
        Invoice.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Invoice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Invoice} obj Optional instance to populate.
     * @return {module:model/Invoice} The populated <code>Invoice</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Invoice();

            if (data.hasOwnProperty('invoiceId')) {
                obj['invoiceId'] = ApiClient.convertToType(data['invoiceId'], 'String');
            }
            if (data.hasOwnProperty('reportId')) {
                obj['reportId'] = ApiClient.convertToType(data['reportId'], 'String');
            }
            if (data.hasOwnProperty('customerId')) {
                obj['customerId'] = ApiClient.convertToType(data['customerId'], 'String');
            }
            if (data.hasOwnProperty('subTotal')) {
                obj['subTotal'] = ApiClient.convertToType(data['subTotal'], 'Number');
            }
            if (data.hasOwnProperty('isv')) {
                obj['isv'] = ApiClient.convertToType(data['isv'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
            }
            if (data.hasOwnProperty('report')) {
                obj['report'] = Report.constructFromObject(data['report']);
            }
            if (data.hasOwnProperty('customer')) {
                obj['customer'] = Customer.constructFromObject(data['customer']);
            }
            if (data.hasOwnProperty('products')) {
                obj['products'] = ApiClient.convertToType(data['products'], [Product]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Invoice</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Invoice</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['invoiceId'] && !(typeof data['invoiceId'] === 'string' || data['invoiceId'] instanceof String)) {
            throw new Error("Expected the field `invoiceId` to be a primitive type in the JSON string but got " + data['invoiceId']);
        }
        // ensure the json data is a string
        if (data['reportId'] && !(typeof data['reportId'] === 'string' || data['reportId'] instanceof String)) {
            throw new Error("Expected the field `reportId` to be a primitive type in the JSON string but got " + data['reportId']);
        }
        // ensure the json data is a string
        if (data['customerId'] && !(typeof data['customerId'] === 'string' || data['customerId'] instanceof String)) {
            throw new Error("Expected the field `customerId` to be a primitive type in the JSON string but got " + data['customerId']);
        }
        // validate the optional field `report`
        if (data['report']) { // data not null
          Report.validateJSON(data['report']);
        }
        // validate the optional field `customer`
        if (data['customer']) { // data not null
          Customer.validateJSON(data['customer']);
        }
        if (data['products']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['products'])) {
                throw new Error("Expected the field `products` to be an array in the JSON data but got " + data['products']);
            }
            // validate the optional field `products` (array)
            for (const item of data['products']) {
                Product.validateJSON(item);
            }
        }

        return true;
    }


}



/**
 * @member {String} invoiceId
 */
Invoice.prototype['invoiceId'] = undefined;

/**
 * @member {String} reportId
 */
Invoice.prototype['reportId'] = undefined;

/**
 * @member {String} customerId
 */
Invoice.prototype['customerId'] = undefined;

/**
 * @member {Number} subTotal
 */
Invoice.prototype['subTotal'] = undefined;

/**
 * @member {Number} isv
 */
Invoice.prototype['isv'] = undefined;

/**
 * @member {Number} total
 */
Invoice.prototype['total'] = undefined;

/**
 * @member {Date} creationDate
 */
Invoice.prototype['creationDate'] = undefined;

/**
 * @member {module:model/Report} report
 */
Invoice.prototype['report'] = undefined;

/**
 * @member {module:model/Customer} customer
 */
Invoice.prototype['customer'] = undefined;

/**
 * @member {Array.<module:model/Product>} products
 */
Invoice.prototype['products'] = undefined;






export default Invoice;

