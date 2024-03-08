const drow_area = document.querySelector("#drow_area canvas"),// drow area
  ctx = drow_area.getContext("2d"),
  drow_width = document.querySelector("#drow_width"), //brush width
  colo_pick = document.querySelector("#colo_pick"), // color picker
  clearBtn = document.querySelector("#clear"), //clear button
  downlode_image = document.querySelector("#downlode_image") //image downlode;

//   global variable
let isDrow = false,
  isColor = "#000000",
  isPanWeight = 5,
  isDrow_snap = false;

//   mouse click action
drow_area.addEventListener("mousedown", () => {
  isDrow = true;
  ctx.beginPath();
  ctx.lineWidth = isPanWeight;
  ctx.strokeStyle = isColor;
});

// downlode image 
downlode_image.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = `drowing.jpg`;
  link.href = drow_area.toDataURL();
  link.click();
});

// clear canvas
clearBtn.addEventListener("click", () => {
  ctx.clearRect(0, 0, drow_area.width, drow_area.height);
});

// color picker
colo_pick.addEventListener("input", (e) => {
  isColor = e.target.value;
});

// brush width
drow_width.addEventListener("change", (e) => {
  isPanWeight = e.target.value;
});

// drow action none
drow_area.addEventListener("mouseup", () => {
  isDrow = false;
});

// defind canvas height/width
window.addEventListener("load", () => {
  drow_area.width = drow_area.offsetWidth;
  drow_area.height = drow_area.offsetHeight;
});

// drow action active
drow_area.addEventListener("mousemove", (e) => {
  if (!isDrow) return;

  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
});
