// Creat Element 'div'
let divElm = document.createElement("div");

// Add text to the created Element 'div'
let val = localStorage.getItem("text");
let text;
if (val == null) {
  text = document.createTextNode("Click to edit it");
} else {
  text = document.createTextNode(val);
}

// insert the text to the Element 'div'
divElm.appendChild(text);
// console.log(text);

// Give Element id,style and class 'div'
divElm.setAttribute("id", "elem");
divElm.setAttribute("class", "elem");
divElm.setAttribute(
  "style",
  "border:10px solid rgb(223, 12, 117); width: 150px; border-radius: 20px; margin: 34px; padding:23px; text-align:center;"
);
// console.log(divElm);

// Select the DOM container class
let container = document.querySelector(".container");
// console.log(container);

// Select the DOM id
let first = document.getElementById("clickit");

// Insert the text on the DOM
container.insertBefore(divElm, first);

// Add Event Listener  to the divElm
divElm.addEventListener("click", function () {
  let noTextAreas = document.getElementsByClassName("textarea").length;
  if (noTextAreas == 0) {
    let html = elem.innerHTML;
    divElm.innerHTML = `
        <textarea class="textarea" id="textarea"  rows="3">${html}</textarea>
        
        `;
  }
  let textarea = document.getElementById("textarea");
  textarea.addEventListener("blur", function () {
    elem.innerHTML = textarea.value;
    localStorage.setItem("text", textarea.value);
  });
});
