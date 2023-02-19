const BASE_API = "http://localhost:8080/api";
const JSON_API = "http://localhost:8080/jsonApi";
const POST_API = "http://localhost:8080/postApi";
const SLOW_API = "http://localhost:8080/slowApi";

// ----------------------------------------------------------------

/* BASE API START */
// OPTION - 1
fetch(BASE_API)
  .then((res) => res.text())
  .then(console.log)
  .catch((error) => console.log(error));

// PARAMETERS
const url = new URL(BASE_API);
url.searchParams.set("firstName", "Conner");
url.searchParams.set("lastName", "Topkaç");

fetch(url)
  .then((res) => res.text())
  .then(console.log)
  .catch((error) => console.log(error));

// ------------------------------------------------------------------------------------------------

// OPTION - 2

async function main() {
  const url = new URL(BASE_API);
  url.searchParams.set("firstName", "Tolga");
  url.searchParams.set("lastName", "Topkaç");

  try {
    const response = await fetch(url);
    console.log(response.status);
    console.log(response.ok);
    const text = await response.text();
    console.log(text);
  } catch (error) {
    console.log(error);
  }
}

main();
/* BASE API END */
// ------------------------------------------------------------------------------------------------
/* JSON API START */
async function jsonApi() {
  try {
    const response = await fetch(JSON_API);
    const obj = await response.json();
    console.log(obj);
  } catch (error) {
    console.log(error);
  }
}
/* JSON API END */

/* POST API START */
async function postApi() {
  const data = {
    name: "Tolga",
  };

  const headers = new Headers();
  headers.append("Content-Type", "application/json; charset=utf-8");

  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers,
  };

  try {
    const response = await fetch(POST_API, options);
    const text = await response.json();
    console.log(text);
  } catch (error) {
    console.log(error);
  }
}
/* POST API END */

// working with forms

// WORKING FORM
const form = document.querySelector("form");
form.addEventListener("submit", onSubmit);

async function onSubmit(event) {
  event.preventDefault();

  const options = {
    method: "POST",
    body: new FormData(form),
  };
  try {
    const response = await fetch(POST_API, options);
    const text = await response.text();
    console.log(text);
  } catch (e) {
    console.log(e);
  }
}
// WORKING FORM

/* SLOW API */

async function slowApi() {
  const abortController = new AbortController();
  setTimeout(() => abortController.abort(), 2000);
  try {
    const response = await fetch(SLOW_API, {
      signal: abortController.signal,
    });
    const text = await response.text();
    console.log(text);
  } catch (e) {
    console.log(e);
  }
}

slowApi();
