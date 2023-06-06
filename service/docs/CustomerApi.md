# Facturacion.CustomerApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiCustomerGet**](CustomerApi.md#apiCustomerGet) | **GET** /api/Customer | 
[**apiCustomerIdDelete**](CustomerApi.md#apiCustomerIdDelete) | **DELETE** /api/Customer/{id} | 
[**apiCustomerIdPut**](CustomerApi.md#apiCustomerIdPut) | **PUT** /api/Customer/{id} | 
[**apiCustomerPost**](CustomerApi.md#apiCustomerPost) | **POST** /api/Customer | 



## apiCustomerGet

> apiCustomerGet()



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.CustomerApi();
apiInstance.apiCustomerGet((error, data, response) => {
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


## apiCustomerIdDelete

> apiCustomerIdDelete(id)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.CustomerApi();
let id = "id_example"; // String | 
apiInstance.apiCustomerIdDelete(id, (error, data, response) => {
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


## apiCustomerIdPut

> apiCustomerIdPut(id, opts)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.CustomerApi();
let id = "id_example"; // String | 
let opts = {
  'customer': new Facturacion.Customer() // Customer | 
};
apiInstance.apiCustomerIdPut(id, opts, (error, data, response) => {
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
 **customer** | [**Customer**](Customer.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## apiCustomerPost

> apiCustomerPost(opts)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.CustomerApi();
let opts = {
  'customer': new Facturacion.Customer() // Customer | 
};
apiInstance.apiCustomerPost(opts, (error, data, response) => {
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
 **customer** | [**Customer**](Customer.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

