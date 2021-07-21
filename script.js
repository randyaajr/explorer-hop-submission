const eHopSub = () => {
  let item = document.createElement("div");
  let itemSize = document.getElementById("sizeSelection").value + "px";
  let itemColour = document.getElementById("colourSelection").value;
  item.style.height = itemSize;
  item.style.width = itemSize;
  item.style.backgroundColor = itemColour;
  item.classList.add("box");
  document.getElementById("genBoxes").appendChild(item);
};
document.getElementById("boxGeneration").onclick = eHopSub;
