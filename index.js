document.addEventListener("DOMContentLoaded", () => {

  const button = document.querySelector("button");
  const div = document.querySelector("div");
  // const buffer = 50;

  div.addEventListener("mouseenter", e => {

    div.style.transform = `translate(${Math.random(1)*1000}px, ${Math.random(1) * 1000}px)`;
  });

  document.addEventListener("mousemove", e => {
    // console.log("MOUSE X:", e.clientX);
    // console.log("MOUSE Y:", e.clientY);
    const {mouseX: clientX, mouseY: clientY} = e;
    const {left, top, right, bottom} = button.getBoundingClientRect();
    // console.log(top, right, bottom, left);
  });

  button.addEventListener("click", e => {
    e.preventDefault();
    alert("YOU GOT ME");
  });
});