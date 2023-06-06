# Facturacion.ReportApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiReportGet**](ReportApi.md#apiReportGet) | **GET** /api/Report | 
[**apiReportIdDelete**](ReportApi.md#apiReportIdDelete) | **DELETE** /api/Report/{id} | 
[**apiReportIdPut**](ReportApi.md#apiReportIdPut) | **PUT** /api/Report/{id} | 
[**apiReportPost**](ReportApi.md#apiReportPost) | **POST** /api/Report | 



## apiReportGet

> apiReportGet()



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.ReportApi();
apiInstance.apiReportGet((error, data, response) => {
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


## apiReportIdDelete

> apiReportIdDelete(id)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.ReportApi();
let id = "id_example"; // String | 
apiInstance.apiReportIdDelete(id, (error, data, response) => {
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


## apiReportIdPut

> apiReportIdPut(id, opts)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.ReportApi();
let id = "id_example"; // String | 
let opts = {
  'report': new Facturacion.Report() // Report | 
};
apiInstance.apiReportIdPut(id, opts, (error, data, response) => {
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
 **report** | [**Report**](Report.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## apiReportPost

> apiReportPost(opts)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.ReportApi();
let opts = {
  'report': new Facturacion.Report() // Report | 
};
apiInstance.apiReportPost(opts, (error, data, response) => {
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
 **report** | [**Report**](Report.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

