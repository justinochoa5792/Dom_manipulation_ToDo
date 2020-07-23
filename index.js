const addItems = document.querySelector("#todo");
const uLItems = document.querySelector("#list");

addItems.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    const newItemText = this.value;
    const newItem = document.createElement("li");
    newItem.innerText = newItemText;
    uLItems.appendChild(newItem);
    this.value = "";
  }
});
