### Promise

An object used for asynchronous operations. These objects have a state of either `pending` , `fulfilled` or `rejected`.

A Promise is created with the `Promise( )` constructor, which takes in a callback function, oftentimes called the **executor.** This callback function has two callback functions as parameter:

- **resolve (value):** Fullfills the Promise and sets its value.
- **reject(error):** Rejects the Promise and sets an error message.

The Promise object has three primary functions:

- **then(fullfilledFn rejectedFn):** Calls fulfilledFn if the Promise is fulfilled and rejectedFn if it is rejected. Returns a new fulfilled Promise with the return value of the callback function.
- **catch(rejectedFn):** Calls rejectedFn if the Promise is rejected, returns a new fulfilled Promise with the return value of the callback function.
- **finally(callback):** Calls the callback function whenever the Promise is **settled** (fulfilled or rejected)
  Since these functions all return a new Promise, they can be chained together, such as
  `promise.then(doX).then(doY).catch(handleError).finally(doZ)`

### async function

A function declared using the `async` keyword, causing the function to implicitly return a **Promise** and allowing for usage of the **await** keyword.
Asynchronous functions are primarily an alternative syntax to chaining calls to `Promise.then`

### await

A keyword indicating that JavaScript should wait for a Promise to settle before continuing execution of the code. Traditionally this is only available in **async functions,** but it can also be used at the top level of **modules**
