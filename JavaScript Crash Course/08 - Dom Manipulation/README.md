# DOM Manipluation

Using JavaScript to change the content, structure or styles of the page. There are a lot of functions and properties related to dom manipulation, but these are some of the more common ones :

### Getting Elements :

- **document.getElementById(id)** : Gets a single elements based on its `id` attribute.
- **document.querySelector(cssSelector):** Gets a single element based on a CSS **selector.** If multiple elements match the selector, returns the first one.
- **document.querySelectorAll(cssSelector):** Gets all elements matching a CSS **selector** as a **NodeList.**
- **document.getElementsByTagName(tagName):** Gets all elements with a specific **tag** as an **HTMLCollection**
- **document.getElementsByClassName(className):** Gets all elements with a specific **class** as an **HTMLCollection**

### Setting Attributes :

- **element.style.property:** Sets a CSS property using inline styles, although CSS classes should usually be preferred. The **style** object will only contain inline styles, not those set with CSS.
- **element.setAttribute('attriube', 'value'):** Sets an HTML **attribute** to a specific value.
- **element.textContent:** The text content of an element, including that of any children. Note: this is slightly different from **element.innerText** which only gets text that is actually rendered and **element.innerHTML** which gets the entire HTML code as a string.
- **element.attribute:** An alternative to the **setAttribute** function, attributes can be directly edited via their property name. For example, `element.value` would get the value attribute of the element.
- **element.classList:** An object for updating CSS **classes.** Specifically, this contains 3 primary functions: **add(className), remove(className)** and **toggle(className)**

### Adding and Removing Elements :

- **document.createElement(tagName):** Creates a new HTML **element.**
- **document.createTextNode(text):** Creates a text node as an alternative to setting **textContent**
- **document.createDocumentFragment()** : Creates a document fragment, which is useful for appending multiple elements at once after a loop.
- **element.appendChild(element)** Appends an element to the end of the contents of another element.
- **element.append(node1, node2, . . .):** Appends 1 or more nodes (elements or text) to the end of the contents of another elements.
- **elements.prepend(node1,node2, . . .) ** Prepends 1 or more nodes (elements or text) to the beginning of the contents of another element.
- **element.remove( )** : Removes the element from the DOM.

### Sizes and Scrolling

- **window.innerWidth:** The width of the browser window.
- **window.innerHeight:** The height of the browser window.
- **window.getComputedStyle(element):** Gets styles as they are currently rendered on the page, converted top pixels.
- **element.clientHeight: ** The height of visible content and padding.
- **element.scrollHeight:** The height of all content and padding, including content scrolled out of view.
- **element.offsetTop**: The distance from the outer top border of the element to the inner top border of the nearest positioned parent.
- **element.scrollIntoView()** Scrolls the container so the element is in view.
- **element.scrollTo(optionsObj)** Scrolls the element to a specified **top** value in the options object. Additionally, `behavior: 'smooth'` will create a smooth transition.
