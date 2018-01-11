# rescaClient.GetContentApi

All URIs are relative to *http://127.0.0.1:7443/api/v0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getContent**](GetContentApi.md#getContent) | **GET** /getContent | get content


<a name="getContent"></a>
# **getContent**
> Content getContent()

get content

### Example
```javascript
import rescaClient from 'rescaClient';
let defaultClient = rescaClient.ApiClient.instance;

// Configure HTTP basic authorization: basic
let basic = defaultClient.authentications['basic'];
basic.username = 'YOUR USERNAME';
basic.password = 'YOUR PASSWORD';

// Configure OAuth2 access token for authorization: oauth
let oauth = defaultClient.authentications['oauth'];
oauth.accessToken = 'YOUR ACCESS TOKEN';

let apiInstance = new rescaClient.GetContentApi();
apiInstance.getContent().then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Content**](Content.md)

### Authorization

[basic](../README.md#basic), [oauth](../README.md#oauth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

