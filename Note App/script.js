const addBtn = document.getElementById("add");
const deleteBtns = document.querySelectorAll(".delete");
const editBtns = document.querySelectorAll(".add");

const notes = JSON.parse(localStorage.getItem("notes"));
if (notes) {
  notes.forEach((n) => {
    addNote(n);
  });
}

addBtn.addEventListener("click", () => {
  addNote("");
});

function addNote(text) {
  const note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="tools">
    <button class="edit">&#x270E;</button>
    <button class="delete">&#x1F5D1;</button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `;

  const deleteBtn = note.querySelector(".delete");
  const editBtn = note.querySelector(".edit");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textArea");

  main.innerHTML = `<pre>${text}</pre>`;
  textArea.value = text;

  deleteBtn.addEventListener("click", (e) => {
    note.remove();
    updateNotes();
  });

  editBtn.addEventListener("click", (e) => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", () => {
    main.innerHTML = `<pre>${textArea.value}</pre>`;
    updateNotes();
  });

  document.body.appendChild(note);
  updateNotes();
}

function updateNotes() {
  const textAreas = document.querySelectorAll("textarea");
  const notes = [];
  textAreas.forEach((note) => notes.push(note.value));
  localStorage.setItem("notes", JSON.stringify(notes));
}
