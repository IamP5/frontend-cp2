const HEADER = document.getElementById('header');
const MAIN = document.getElementById('main');
const FOOTER = document.getElementById('footer');
const BODY = document.body;

fetch('header')
  .then(response => response.text())
  .then(text => {
    const node = parseHtmlTextToNode(text);
    BODY.insertBefore(node, BODY.firstChild);
  });

/*fetch('main')
  .then(response => response.text())
  .then(text => {
    MAIN.innerHTML = text;
  });*/

fetch('footer')
  .then(response => response.text())
  .then(text => {
    const node = parseHtmlTextToNode(text);
    BODY.appendChild(node);
  });

function parseHtmlTextToNode(text) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(text, 'text/html');
  return doc.body.firstChild;
} 