const magicWand = document.getElementById("magic-wand");
const wall = document.getElementById("wall");
const nSize = 4;
let isTiled = true;

for (let i = 0; i < nSize; i++) {
  for (let j = 0; j < nSize; j++) {
    const tileEl = document.createElement("div");
    tileEl.classList.add("tile");
    tileEl.style.top = i * 25 + "%";
    tileEl.style.left = j * 25 + "%";
    tileEl.style.backgroundPositionX = -j * 100 + "px";
    tileEl.style.backgroundPositionY = -i * 100 + "px";
    wall.appendChild(tileEl);
  }
}

magicWand.addEventListener("click", () => {
  const tiles = document.querySelectorAll(".tile");
  if (isTiled) {
    const xWidth = window.innerWidth - 100;
    const xHeight = window.innerHeight - 100;
    tiles.forEach((tile) => {
      tile.style.top = getRandom(xHeight) - wall.offsetTop + "px";
      tile.style.left = getRandom(xWidth) - wall.offsetLeft + "px";
      tile.style.borderWidth = "1px";
    });
    wall.style.borderWidth = "0px";
    isTiled = false;
  } else {
    tiles.forEach((tile, idx) => {
      tile.style.top = Math.floor(idx / nSize) * 25 + "%";
      tile.style.left = (idx % nSize) * 25 + "%";
      setTimeout(() => {
        tile.style.borderWidth = "0";
      }, 1000);
    });
    setTimeout(() => {
      wall.style.borderWidth = "1px";
    }, 1000);
    isTiled = true;
  }
});

function getRandom(n) {
  return Math.floor(Math.random() * n);
}
