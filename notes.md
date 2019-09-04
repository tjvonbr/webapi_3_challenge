Notes

React apps are broken down into components.

Express APIs are broken down into Express Routers.

## Middleware

- can see the request and do something with the information from the request
- can stop the request and produce a response
- can do nothing
- can do the same with the response object
- **can modify the request or response object**

Three types:

- built-in: no need to npm i
- third party: need to install using npm
- custom: we build it

Can be used:

- globally with server.use()
- locally at a request handler