function changeBackgroundColor(): void {
  let newColor = colors[Math.floor(Math.random() * colorsIndex)];

  while (body.style.backgroundColor == newColor) {
    newColor = colors[Math.floor(Math.random() * colorsIndex)];
  }
  body.style.backgroundColor = newColor;
  color.innerHTML = newColor;
  color.style.color = newColor;
}

let body = document.getElementById("body") as HTMLElement;
let colors: string[] = ["blue", "green", "orange", "purple", "red", "yellow", "pink"];
let colorsIndex: number = colors.length - 1;
let color = document.getElementById("colorId") as HTMLElement;
let btn = document.getElementById("colorBtn") as HTMLElement;
btn.addEventListener("click", changeBackgroundColor);