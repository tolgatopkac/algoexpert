# Working With The Server

### Fetch

A JavaScript function for making network requests.
`fetch(url)` returns a pending Promise. Once the network request completes, the promise will either resolve or reject. Any response other than a network error will result in a resolved Promise.

The `url`parameter can be either a string or a `URL` object.
This function can also take an options object as a second parameter. These are some of the more common options to use :

- **method** : The request method as a string, such as `GET` or `POST`.
- **body**: The body of the request, oftentimes used to pass `FormData`
- **headers**: Headers to be added to the network request, oftentimes by creating `Headers`
  object, although a standart object can be used as well.
- **signal**: An **AbortSignal**, usually coming from **AbortController.** If the signal's `abort( )` method is called, the request will be aborted.

When the request comes back from the server, the Promise returned by fetch will resolve to `Response` object. This object has a variety of properties and methods for interacting with the network response. These are some of the most useful ones:

- **response.text( ):** Returns a Promise with a text representation of the response body.
- **response.json( ):** Returns a Promise with an object representation of the response body.
- **response.status:** A number representation of the response status code. A successful request will be in the 200 - 299 range, most commonly 200.
- **response.ok:** A boolean representation of the response status code. A succesful request in the 200 - 299 range will be `true`, everything else evaluates to false.
- **response.header:** A `Headers` object containing the headers included with the response.
