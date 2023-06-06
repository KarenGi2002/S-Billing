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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Facturacion);
  }
}(this, function(expect, Facturacion) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Facturacion.InventoryApi();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('InventoryApi', function() {
    describe('apiInventoryGet', function() {
      it('should call apiInventoryGet successfully', function(done) {
        //uncomment below and update the code to test apiInventoryGet
        //instance.apiInventoryGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiInventoryIdDelete', function() {
      it('should call apiInventoryIdDelete successfully', function(done) {
        //uncomment below and update the code to test apiInventoryIdDelete
        //instance.apiInventoryIdDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('apiInventoryPost', function() {
      it('should call apiInventoryPost successfully', function(done) {
        //uncomment below and update the code to test apiInventoryPost
        //instance.apiInventoryPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
