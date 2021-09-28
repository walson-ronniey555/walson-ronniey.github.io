const navSlide = () => {
  const burger = document.querySelector("#click");
  const nav = document.querySelector(".nav-bar");
  const buttn = document.querySelector("#btn");
  const navLinks = document.querySelector(".main-nav-bar");

  burger.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");
  });

  burger.addEventListener("click", () => {
    navLinks.classList.toggle("nav-acp");
  });
};

navSlide();
