// If an li element is clicked, toggle the class "done" on the <li>
document.querySelectorAll('li').forEach(e => e.addEventListener("mousedown", function(e) {
  e.target.parentNode.classList.toggle("done");
}));

// If a delete link is clicked, delete the li element / remove from the DOM
document.querySelectorAll('a.delete').forEach(e => e.addEventListener("mousedown", function(e) {
  e.preventDefault();
  e.target.parentNode.remove();
}));
// If an 'Add' link is clicked, adds the item as a new list item with
// addListItem function has been started to help you get going!
// Make sure to add an event listener(s) to your new <li> (if needed)
// Finish function here
const addListItem = function(e) {
  e.preventDefault();
  const input = e.target.parentNode.getElementsByTagName('input')[0];
  const text = input.value; // use this text to create a new <li>

  // Finish function here
  if (text.trim() != "") {
    let ulElement = e.target.parentNode.previousSibling.previousSibling;
    let liEl = document.createElement("li");
    let spanEl = document.createElement('span');
    spanEl.appendChild(document.createTextNode(text));
    liEl.appendChild(spanEl);
    addEvent(liEl);

    let deleteEl = document.createElement("a");
    deleteEl.classList.add("delete");
    deleteEl.append(document.createTextNode("Delete"));
    deleteEl.setAttribute("id", "delete" + Math.ceil(Math.random()*10));
    liEl.appendChild(deleteEl);
    addEvent(deleteEl);

    let upEl = document.createElement("a");
    upEl.classList.add("arrow");
    upEl.append(document.createTextNode("Up \u2191"));
    upEl.setAttribute("id", "up" + Math.ceil(Math.random()*10));
    liEl.appendChild(upEl);
    addEvent(upEl);
    
    let downEl = document.createElement("a");
    downEl.classList.add("arrow");
    downEl.append(document.createTextNode("Down \u2193"));
    downEl.setAttribute("id", "down" + Math.ceil(Math.random()*10));
    liEl.appendChild(downEl);
    addEvent(downEl);

    ulElement.appendChild(liEl);
  }
};

const addEvent = (target, event = 'click') => {
  if (target != undefined && target != null) {
    if (target.classList.contains("delete")){
      target.addEventListener(event, function() {
        this.parentNode.remove();
      });
    } else if (target.nodeName.toLowerCase() == "a" && target.getAttribute("id").indexOf("up") > -1){
      target.addEventListener(event, (e) => {
        e.stopPropagation();
        target.parentNode.parentNode.insertBefore(target.parentNode, target.parentNode.previousElementSibling);
      });
    }else if (target.nodeName.toLowerCase() == "a" && target.getAttribute("id").indexOf("down") > -1){
      target.addEventListener(event, (e) => {
        e.stopPropagation();
        if (target.parentNode.nextElementSibling != null) {
          target.parentNode.parentNode.insertBefore(target.parentNode.nextElementSibling, target.parentNode);
        }
      });
    }
  }
}
document.querySelectorAll('a.add-item').forEach(e => e.addEventListener("mousedown", (e) => {
  addListItem(e);
}));


