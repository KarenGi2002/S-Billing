# Facturacion.ArticleApi

All URIs are relative to *http://localhost*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiArticleGet**](ArticleApi.md#apiArticleGet) | **GET** /api/Article | 
[**apiArticleIdDelete**](ArticleApi.md#apiArticleIdDelete) | **DELETE** /api/Article/{id} | 
[**apiArticleIdPut**](ArticleApi.md#apiArticleIdPut) | **PUT** /api/Article/{id} | 
[**apiArticlePost**](ArticleApi.md#apiArticlePost) | **POST** /api/Article | 



## apiArticleGet

> apiArticleGet()



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.ArticleApi();
apiInstance.apiArticleGet((error, data, response) => {
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


## apiArticleIdDelete

> apiArticleIdDelete(id)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.ArticleApi();
let id = "id_example"; // String | 
apiInstance.apiArticleIdDelete(id, (error, data, response) => {
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


## apiArticleIdPut

> apiArticleIdPut(id, opts)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.ArticleApi();
let id = "id_example"; // String | 
let opts = {
  'article': new Facturacion.Article() // Article | 
};
apiInstance.apiArticleIdPut(id, opts, (error, data, response) => {
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
 **article** | [**Article**](Article.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined


## apiArticlePost

> apiArticlePost(opts)



### Example

```javascript
import Facturacion from 'facturacion';

let apiInstance = new Facturacion.ArticleApi();
let opts = {
  'article': new Facturacion.Article() // Article | 
};
apiInstance.apiArticlePost(opts, (error, data, response) => {
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
 **article** | [**Article**](Article.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/json, application/*+json
- **Accept**: Not defined

