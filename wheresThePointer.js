// Attach one listener that will detect clicks on any of the <td>
// elements.  Should update that element's innerHTML to be the
// x, y coordinates of the mouse at the time of the click

const tdList = document.querySelectorAll("td");
console.log(tdList);

console.log(tdList[1].getBoundingClientRect().x);

/*eventFunc = (item) => {
    item.getBoundingClientRect();
   console.log.log(item.getBoundingClientRect());
  }

tdList.forEach(eventFunc);*/


tdList.forEach(function(item) {
    item.addEventListener("click", function() {
        const x = this.getBoundingClientRect().x;
        const y = this.getBoundingClientRect().y;
        this.innerText = `This Square's coordinates are: \n \n ${x} , ${y}`
    });
});