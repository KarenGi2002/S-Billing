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


import ApiClient from './ApiClient';
import Article from './model/Article';
import Customer from './model/Customer';
import CustomerTypes from './model/CustomerTypes';
import Inventory from './model/Inventory';
import Invoice from './model/Invoice';
import Product from './model/Product';
import User from './model/User';
import ArticleApi from './api/ArticleApi';
import CustomerApi from './api/CustomerApi';
import HomeApi from './api/HomeApi';
import InventoryApi from './api/InventoryApi';
import InvoiceApi from './api/InvoiceApi';
import ProductApi from './api/ProductApi';
import UserApi from './api/UserApi';


/**
* JS API client generated by OpenAPI Generator.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var Facturacion = require('index'); // See note below*.
* var xxxSvc = new Facturacion.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new Facturacion.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new Facturacion.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new Facturacion.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version 1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The Article model constructor.
     * @property {module:model/Article}
     */
    Article,

    /**
     * The Customer model constructor.
     * @property {module:model/Customer}
     */
    Customer,

    /**
     * The CustomerTypes model constructor.
     * @property {module:model/CustomerTypes}
     */
    CustomerTypes,

    /**
     * The Inventory model constructor.
     * @property {module:model/Inventory}
     */
    Inventory,

    /**
     * The Invoice model constructor.
     * @property {module:model/Invoice}
     */
    Invoice,

    /**
     * The Product model constructor.
     * @property {module:model/Product}
     */
    Product,

    /**
     * The User model constructor.
     * @property {module:model/User}
     */
    User,

    /**
    * The ArticleApi service constructor.
    * @property {module:api/ArticleApi}
    */
    ArticleApi,

    /**
    * The CustomerApi service constructor.
    * @property {module:api/CustomerApi}
    */
    CustomerApi,

    /**
    * The HomeApi service constructor.
    * @property {module:api/HomeApi}
    */
    HomeApi,

    /**
    * The InventoryApi service constructor.
    * @property {module:api/InventoryApi}
    */
    InventoryApi,

    /**
    * The InvoiceApi service constructor.
    * @property {module:api/InvoiceApi}
    */
    InvoiceApi,

    /**
    * The ProductApi service constructor.
    * @property {module:api/ProductApi}
    */
    ProductApi,

    /**
    * The UserApi service constructor.
    * @property {module:api/UserApi}
    */
    UserApi
};
