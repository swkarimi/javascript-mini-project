const nSize = 6;
const board = document.querySelector(".board-container");
let win = false;

for (let i = 0; i < nSize; i++) {
  const row = document.createElement("div");
  row.classList.add("row");
  for (let j = 0; j < nSize; j++) {
    const cell = document.createElement("div");
    cell.classList.add("toggle-container");
    cell.innerHTML = `
          <input type="checkbox" id="r${i}c${j}" class="toggle" />
          <label for="r${i}c${j}" class="label">
              <div class="ball"></div>
          </label>    
    `;
    row.append(cell);
  }
  board.appendChild(row);
}

const toggles = document.querySelectorAll(".toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", (e) => {
    const row = +e.target.id[1];
    const col = +e.target.id[3];
    //left
    toggleCheckbox(row, col - 1);
    //right
    toggleCheckbox(row, col + 1);
    //up
    toggleCheckbox(row - 1, col);
    //down
    toggleCheckbox(row + 1, col);
  });
});

function toggleCheckbox(r, c) {
  if (r >= 0 && r < nSize && c >= 0 && c < nSize) {
    const cellID = `r${r}c${c}`;
    const cell = document.getElementById(cellID);
    if (cell.checked) {
      cell.checked = false;
    } else {
      cell.checked = true;
    }
  }
}
