const tl = gsap.timeline();

tl.from(".anim", {
  x: -500,
  stagger: 0.1,
  duration: 0.75,
  opacity: 0,
})
  .from(".top", {
    ease: "power1",
    y: 100,
    opacity: 0,
  })
  .from(".topa", {
    stagger: 0.1,
    y: 150,
    opacity: 0,
  });

var ok = true;
const toogle = document.getElementById("toggle");
toogle.addEventListener("click", () => {
  const link = document.querySelector(".link");
  const brand = document.querySelector(".brand");
  brand.classList.toggle("show");
  link.classList.toggle("active");
  if (ok) {
    tl.from(".linkl", {
      x: -500,
      stagger: 0.1,
      duration: 1,
      ease: "power4",
      opacity: 0,
    });
    ok = false;
  } else {
    ok = true;
  }
});
