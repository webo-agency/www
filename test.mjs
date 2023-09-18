// fetch-polyfill.js
import fetch, {
    Blob,
    blobFrom,
    blobFromSync,
    File,
    fileFrom,
    fileFromSync,
    FormData,
    Headers,
    Request,
    Response,
  } from 'node-fetch'
  
  if (!globalThis.fetch) {
    globalThis.fetch = fetch
    globalThis.Headers = Headers
    globalThis.Request = Request
    globalThis.Response = Response
  }
  
  const response = await fetch("http://192.168.0.215:3000/api/contact", {
  "headers": {
    "accept": "*/*",
    "accept-language": "pl-PL,pl;q=0.9,en-US;q=0.8,en;q=0.7,fr;q=0.6",
    "cache-control": "no-cache",
    "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryWdRWTONdFo7zXJDf",
    "pragma": "no-cache",
    "Referer": "http://192.168.0.215:3000/kontakt",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": "------WebKitFormBoundaryWdRWTONdFo7zXJDf\r\nContent-Disposition: form-data; name=\"service\"\r\n\r\nSklep\r\n------WebKitFormBoundaryWdRWTONdFo7zXJDf\r\nContent-Disposition: form-data; name=\"name\"\r\n\r\nPLIK_TEST\r\n------WebKitFormBoundaryWdRWTONdFo7zXJDf\r\nContent-Disposition: form-data; name=\"company\"\r\n\r\ntest\r\n------WebKitFormBoundaryWdRWTONdFo7zXJDf\r\nContent-Disposition: form-data; name=\"mail\"\r\n\r\npatryk@webo.agency\r\n------WebKitFormBoundaryWdRWTONdFo7zXJDf\r\nContent-Disposition: form-data; name=\"phone\"\r\n\r\n123123123\r\n------WebKitFormBoundaryWdRWTONdFo7zXJDf\r\nContent-Disposition: form-data; name=\"description\"\r\n\r\ntest\r\n------WebKitFormBoundaryWdRWTONdFo7zXJDf--\r\n",
  "method": "POST"
})

const body = await response.text();

console.log(body);