# Connecting JavaScript to HTML

## script Tag

The HTML tag for adding JavaScript to the document. Usually the `<script>` appears in the `<head>` with no children. Instead of children, it usually has the `src` attribute set to the path of a JavaScript file.

By default, script block the browser from continuing to parse and render the rest of the DOM until the script has finished downloading and executing. However, there are two boolean attributes that can change this behavior:

- **defer** Fetch the script asynchronously without blocking the page. Only execute the script after the DOM has finished being parsed.
- **async** Fetch the script asynchronously without blocking the page.Whenever the script is ready, stop parsing the DOM and execute the script. This is usually only for scripts that do not need access to the DOM, because otherwise the behavior will be inconsistent based on how quickly the script downloade

Alternatively, scripts were traditionally placed at he bottom of the `<body>` to ensure the DOM finished loading before running the script. However, this is usually slower than using the **defer** attribute, since the script will not be downloaded until reaching the script tag at the end of body.
