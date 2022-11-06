const showPassEL = document.querySelector(".show-pass");
const clipboardBtn = document.querySelector(".btn-clipboard");
const GPBtn = document.querySelector(".generate-btn");
const lengthEl = document.getElementById("length");

const uppercase = Array.from({ length: 26 }, (_, idx) =>
  String.fromCharCode(idx + 65)
);
const lowercase = Array.from({ length: 26 }, (_, idx) =>
  String.fromCharCode(idx + 97)
);
const digits = Array.from({ length: 10 }, (_, idx) =>
  String.fromCharCode(idx + 48)
);
const symbols = "!@#$%^&*/()-+_=[]{}<>.;:,".split("");

lengthEl.addEventListener("keydown", (e) => {
  e.preventDefault();
});

function generatePassword() {
  const lenPassword = +lengthEl.value;
  const passwordIndex = [...Array(lenPassword).keys()];
  const password = [...Array(lenPassword)];
  const uppercaseChecked = document.getElementById("uppercase").checked;
  const lowercaseChecked = document.getElementById("lowercase").checked;
  const digitChecked = document.getElementById("digit").checked;
  const symbolChecked = document.getElementById("symbol").checked;

  function getRandomIndex() {
    const idx = Math.floor(Math.random() * passwordIndex.length);
    const res = passwordIndex[idx];
    passwordIndex[idx] = passwordIndex[passwordIndex.length - 1];
    passwordIndex.pop();
    return res;
  }

  let allowedChr = [];
  if (uppercaseChecked) allowedChr = [...allowedChr, ...uppercase];
  if (lowercaseChecked) allowedChr = [...allowedChr, ...lowercase];
  if (digitChecked) allowedChr = [...allowedChr, ...digits, ...digits];
  if (symbolChecked) allowedChr = [...allowedChr, ...symbols];

  for (let i = 0; i < lenPassword; i++) {
    password[getRandomIndex()] =
      allowedChr[Math.floor(Math.random() * allowedChr.length)];
  }
  showPassEL.innerText = password.join("");
}

GPBtn.addEventListener("click", generatePassword);

clipboardBtn.addEventListener("click", () => {
  clipboardBtn.innerHTML = "&#x2713;";
  setTimeout(() => {
    clipboardBtn.innerHTML = "&#x1F4C4;";
  }, 800);
  navigator.clipboard.writeText(showPassEL.innerText);
});
