# Facturacion.InventoryApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiInventoryGet**](InventoryApi.md#apiInventoryGet) | **GET** /api/Inventory | 
[**apiInventoryIdDelete**](InventoryApi.md#apiInventoryIdDelete) | **DELETE** /api/Inventory/{id} | 
[**apiInventoryPost**](InventoryApi.md#apiInventoryPost) | **POST** /api/Inventory | 



## apiInventoryGet

> apiInventoryGet()



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.InventoryApi();
apiInstance.apiInventoryGet((error, data, response) => {
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


## apiInventoryIdDelete

> apiInventoryIdDelete(id)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.InventoryApi();
let id = "id_example"; // String | 
apiInstance.apiInventoryIdDelete(id, (error, data, response) => {
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


## apiInventoryPost

> apiInventoryPost(opts)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.InventoryApi();
let opts = {
  'inventory': new Facturacion.Inventory() // Inventory | 
};
apiInstance.apiInventoryPost(opts, (error, data, response) => {
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
 **inventory** | [**Inventory**](Inventory.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

