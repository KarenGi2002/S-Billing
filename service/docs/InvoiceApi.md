# Facturacion.InvoiceApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiInvoiceGet**](InvoiceApi.md#apiInvoiceGet) | **GET** /api/Invoice | 
[**apiInvoiceIdDelete**](InvoiceApi.md#apiInvoiceIdDelete) | **DELETE** /api/Invoice/{id} | 
[**apiInvoiceIdPut**](InvoiceApi.md#apiInvoiceIdPut) | **PUT** /api/Invoice/{id} | 
[**apiInvoicePost**](InvoiceApi.md#apiInvoicePost) | **POST** /api/Invoice | 



## apiInvoiceGet

> apiInvoiceGet()



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.InvoiceApi();
apiInstance.apiInvoiceGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiInvoiceIdDelete

> apiInvoiceIdDelete(id)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.InvoiceApi();
let id = "id_example"; // String | 
apiInstance.apiInvoiceIdDelete(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: Not defined


## apiInvoiceIdPut

> apiInvoiceIdPut(id, opts)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.InvoiceApi();
let id = "id_example"; // String | 
let opts = {
  'invoice': new Facturacion.Invoice() // Invoice | 
};
apiInstance.apiInvoiceIdPut(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **invoice** | [**Invoice**](Invoice.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## apiInvoicePost

> apiInvoicePost(opts)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.InvoiceApi();
let opts = {
  'invoice': new Facturacion.Invoice() // Invoice | 
};
apiInstance.apiInvoicePost(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **invoice** | [**Invoice**](Invoice.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

