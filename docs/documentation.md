# Mental Health Wellness.net

The purpose of this website is to create a digitized journal to record the emotional state of each of its users for the sake of monitoring the mental wellness of each individual. 

Each page hosts different facets of this website:


[RESOURCES] - A page linking to PDFs outlining tutorials how to take care of you or someone else struggling in their mental health. As well as additional links directing you to extra resources to outreach when self help solutions are not as viable.

[INDEX] - Our origin story to how the pandemic affect the general mental health of the population, and how we came choose this path of topic to present our website on. Contains our mission statement and 



# Mental Health Wellness Website Installation

This package was buid using Node.js LTS (16.x).
Other package dependency and version information can be found in `package.json`.

In order to work with this prototype run the following in the command line
```
npm install
```
for each dependency listed below
* better-sqlite3 
    - Databases are made and are accessed through this dependency
* express
    - A middleware for running the server
* cors
    - Helps allow the API to move through pages

Once dependencies are install run 
```
node index.js
```
This will run the server on port 5555 and you can access the website on http://localhost:5555/





# Mental Health Wellness API Documentation

## Endpoints

### /app/ (GET)

#### Request cURL

```
curl -i http://localhost:5555/app/
```

#### Response body

```
200 OK
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/plain
Date: Sun, 01 May 2022 17:17:27 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked
```

### /app/moreInfo (GET)

#### Request cURL

```
curl -i http://localhost:5555/app/moreInfo
```

#### Response body

```
200 OK
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/plain
Date: Sun, 01 May 2022 17:17:27 GMT
Connection: keep-alive
Keep-Alive: timeout=5
Transfer-Encoding: chunked
```


### /app/register (GET)
* Takes in a response body of "username" and "password" 
* Registers the user into the user database
* Returns whether registration was successful or not in a string

#### Request cURL

```
curl -i --data "username=user&password=password" http://localhost:5555/app/register/
```

#### Response body

```
"You're Registered!"
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 24
ETag: W/"28-lVVSu4o/9nrV1H+90IZECR9cPrA"
Date: Sun, 01 May 2022 17:42:00 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/login (GET)
* Like registration takes in a username and a password as a req body
* Returns a json object of the status of the login
* Options are {"status":"incorrectPassword"} if password does not match database,{"status":"LOGIN"} if login is successful or {"status":"badUsername} if the username is not present within the database

#### Request cURL

```
curl -i --data "username=user&password=password" http://localhost:5555/app/login
```

#### Response body

```
"{"status":"LOGIN"}"
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 24
ETag: W/"18-lVVSu4o/9nrV1H+90IZECR9cerA"
Date: Sun, 01 May 2022 17:42:00 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/feeling/user (POST)
* Only accessable within website when login has occured
* Takes in username and a feeling number and posts those as well as the current date into a database
* Returns the a json of changes in the data base and the last id entered

#### Request cURL

```
curl -i --data "username=user&feeling=8" http://localhost:5555/app/feeling/user
```

#### Response body

```
{"changes":1,"lastInsertRowid":33}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 34
ETag: W/"22-4i7+CPUVLDfQydzSfY9ng07iqFM"
Date: Sun, 01 May 2022 17:34:52 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/graph/:username (GET)
* Uses req.params to retrieve username once logged in.
* Then retrieves the feeling data {feeling, date} from the sql database
* While information is being retieved the endpoint puts data into a 2d array with the date in the first column and feeling in the second

#### Request cURL

```
curl -i http://localhost:5555/app/graph/user
```

#### Response body

```
[["2022-05-01",8]]
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 18
ETag: W/"12-azqjG8VHruhgZHcAlkiKpi48Pqg"
Date: Sun, 01 May 2022 17:37:50 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```