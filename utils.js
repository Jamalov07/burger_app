const createElement = (tagName, className, content) => {
    const element = document.createElement(tagName);
    if (className) element.setAttribute("src", className);
    if (content) element.innerHTML = content;
    return element;
  };