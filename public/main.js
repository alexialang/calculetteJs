let touches = [...document.querySelectorAll(".button")];
let liKeycode = touches.map((touche) => touche.dataset.key);
let screen = document.querySelector(".screen");

document.addEventListener("keydown", (e) => {
  let value = e.keyBoardEvent.code.toString();
  calcul(value);
});

document.addEventListener("click", (e) => {
  let value = e.target.dataset.key;
  calcul(value);
});

// Fonction calculer
let calcul = (value) => {
  if (liKeycode.includes(value)) {
    switch (value) {
      case "8":
        screen.textContent = "";
        break;
      case "13":
        let result = eval(screen.textContent);
        screen.textContent = result;
        break;
      default:
        let indexKeycode = liKeycode.indexOf(value);
        let touche = touches[indexKeycode];
        screen.textContent += touche.innerHTML;
    }
  }
};

window.addEventListener("error", (e) => {
  screen.textContent = "Error";
});
