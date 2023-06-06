# Facturacion.ProductApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiProductGet**](ProductApi.md#apiProductGet) | **GET** /api/Product | 
[**apiProductIdDelete**](ProductApi.md#apiProductIdDelete) | **DELETE** /api/Product/{id} | 
[**apiProductIdPut**](ProductApi.md#apiProductIdPut) | **PUT** /api/Product/{id} | 
[**apiProductPost**](ProductApi.md#apiProductPost) | **POST** /api/Product | 



## apiProductGet

> apiProductGet()



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.ProductApi();
apiInstance.apiProductGet((error, data, response) => {
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


## apiProductIdDelete

> apiProductIdDelete(id)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.ProductApi();
let id = "id_example"; // String | 
apiInstance.apiProductIdDelete(id, (error, data, response) => {
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


## apiProductIdPut

> apiProductIdPut(id, opts)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.ProductApi();
let id = "id_example"; // String | 
let opts = {
  'product': new Facturacion.Product() // Product | 
};
apiInstance.apiProductIdPut(id, opts, (error, data, response) => {
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
 **product** | [**Product**](Product.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## apiProductPost

> apiProductPost(opts)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.ProductApi();
let opts = {
  'product': new Facturacion.Product() // Product | 
};
apiInstance.apiProductPost(opts, (error, data, response) => {
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
 **product** | [**Product**](Product.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

