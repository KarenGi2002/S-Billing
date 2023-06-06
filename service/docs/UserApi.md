# Facturacion.UserApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiUserGet**](UserApi.md#apiUserGet) | **GET** /api/User | 
[**apiUserIdDelete**](UserApi.md#apiUserIdDelete) | **DELETE** /api/User/{id} | 
[**apiUserIdPut**](UserApi.md#apiUserIdPut) | **PUT** /api/User/{id} | 
[**apiUserPost**](UserApi.md#apiUserPost) | **POST** /api/User | 



## apiUserGet

> apiUserGet()



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.UserApi();
apiInstance.apiUserGet((error, data, response) => {
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


## apiUserIdDelete

> apiUserIdDelete(id)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.UserApi();
let id = "id_example"; // String | 
apiInstance.apiUserIdDelete(id, (error, data, response) => {
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


## apiUserIdPut

> apiUserIdPut(id, opts)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.UserApi();
let id = "id_example"; // String | 
let opts = {
  'user': new Facturacion.User() // User | 
};
apiInstance.apiUserIdPut(id, opts, (error, data, response) => {
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
 **user** | [**User**](User.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## apiUserPost

> apiUserPost(opts)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.UserApi();
let opts = {
  'user': new Facturacion.User() // User | 
};
apiInstance.apiUserPost(opts, (error, data, response) => {
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
 **user** | [**User**](User.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

