# Mental Health Wellness.net

The purpose of this website is to create a digitized journal to record the emotional state of each of its users for the sake of monitoring the mental wellness of each individual. 

Each page hosts different facets of this website:

[LOGIN] - Allows user to log in to their individual account, where all of their associated data (i.e. login information, journal log entries, email, etc.) can be associated according to each user account.

[RESOURCES] - A page linking to PDFs outlining tutorials how to take care of you or someone else struggling in their mental health. As well as additional links directing you to extra resources to outreach when self help solutions are not as viable.

[INDEX] - Our origin story to how the pandemic affect the general mental health of the population, and how we came choose this path of topic to present our website on. Contains our mission statement and 

[CONTACTUS] - Our different social media pages you can further inquire the developers of this website on any other existent questions.


# Mental Health Wellness Website Installation

This package was buid using Node.js LTS (16.x).
Other package dependency and version information can be found in `package.json`.

# Mental Health Wellness.net Documentation
```
node server.js [options]

--port, -p	Set the port number for the server to listen on.    Must be an integer
            between 1 and 65535. Defaults to 5000.

--help, -h	Return this message and exit.
```

# Mental Health Wellness API Documentation

## Endpoints

### /app/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/
```

#### Response body

```
{"message":"App is running on port (5000)"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 35
ETag: W/"23-KNmhzXgQhtEE5ovS3fuLixylNK0"
Date: Thu, 30 Apr 2022 15:42:49 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/moreInfo (GET)

#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/delete (GET)

#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/register (GET)

#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/login (POST)

#### Request cURL

```

```

#### Response body

```

```

#### Response headers

```

```

### /app/feeling/:user (POST)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"guess":"heads"}' http://localhost:5000/app/flip/call/
```

#### Response body

```
{"call":"heads","flip":"heads","result":"win"}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 46
ETag: W/"2e-U/q8iZ4JKqczXPIvtwiVRpEFlRc"
Date: Thu, 07 Apr 2022 16:30:07 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```

### /app/graph/:id (GET)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"number":"30"}' http://localhost:5000/app/flip/coins/`
```

#### Response body

```
{"raw":["heads","heads","heads","tails","heads","heads","tails","tails","tails","heads","heads","heads","heads","heads","heads","tails","tails","heads","heads","heads","heads","heads","heads","heads","tails","heads","tails","heads","tails","heads"],"summary":{"heads":21,"tails":9}}
```

#### Response headers

```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 283
ETag: W/"11b-9dPTqGfngSPFEOq4loChIlpdSIE"
Date: Thu, 07 Apr 2022 15:23:35 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```