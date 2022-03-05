# Shop-RestApi
## Shop-API for handling the orders, products, and user data.

From:

https://github.com/umangag07/Shop-RestApi

Article:

https://aws.plainenglish.io/how-to-upload-photos-to-amazon-s3-bucket-using-node-js-b567188a662a

Depends on this REST API:

https://javascript.plainenglish.io/how-to-make-rest-api-with-node-js-express-and-mongodb-dfce5e70e830

https://javascript.plainenglish.io/making-api-endpoints-for-rest-api-in-nodejs-ec688c18aaa

Use the URI-: https://shop-restapi.herokuapp.com/ and the below mentioned routes to access the API.

## Set .env file

Get AWS Access key and secret key from:

https://awscli.amazonaws.com/v2/documentation/api/latest/reference/configure/get.html

.env.example file:

```java
PORT = 3000 
DB_CONNECTION="Get from MongoDB Atlas Dashboard"
AWS_ACCESS_KEY_ID="exampleAKIA2FYET3LYEFGEF2AHJ"
AWS_ACCESS_KEY_SECRET="exampleycOIx4DIVmeoU+8bajusH4/Gnan0Xv2YZrB5K8gO"
AWS_BUCKET_NAME="your bucket name"
```

```java
aws configure get aws_access_key_id

aws configure get aws_secret_access_key
```

## Run locallly

```java
npm install

npm run start
```

http://localhost:3000/

{"message":"It works"}


## 1. /user
   * /getMyAllUserJustForME  Request Type [GET],(JWT-Token in header provided during login) -: will give all the users in json format.
   * /signup Request Type [POST], body with 2 fields in json format(email,password) -: This will make the acccount [<b>Note-:Password will be stored after hasing only.</b>].
   * /login  Request Type [POST], body with 2 fields in json format(email,password) -: It will give the JWT access token if credentials are correct to access other routes.
   * /:userId Request Type [Delete],(JWT-Token in header provided during login) -: To delete the user with the specific id provide in params. 
## 2. /products
   * Request Type [GET] -: will give all the products in json format
   * Request Type [POST],(JWT-Token in header provided during login), body in json with 3 fields(name,price,image)-: will post the product.
## 3. /products/:productId
   * Request Type [GET] -: will give the specific product with the requested id in params.
   * Request Type [Patch],(JWT-Token in header provided during login)-: pass those fields in body whose data needed to be patched.
   * Request Type [Delete],(JWT-Token in header provided during login) -: It will delete the product of given ID in the params.
## 4. /orders   
   * Request Type [GET],(JWT-Token in header provided during login) -: will give all the orders in json format
   * Request Type [POST],(JWT-Token in header provided during login), body in json with 3 fields(productId,quantity,producturl{made with passing productId only})-: will post the Order details.
## 5. /orders/:orderId
   * Request Type [GET],(JWT-Token in header provided during login) -: will give the specific details of order with the requested id in params.
   * Request Type [Patch],(JWT-Token in header provided during login)-: pass those fields in body whose data needed to be patched.
   * Request Type [Delete],(JWT-Token in header provided during login) -: It will delete the order details of given ID in the params.
 
   
