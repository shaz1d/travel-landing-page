// /*========## SHOW MENU ========##*/

const menuBtn = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

document.onclick = function (e) {
  if (
    e.target != menuBtn &&
    e.target != navMenu &&
    e.target.className !== "_nav-list" &&
    e.target.className !== "_nav-item"
  ) {
    menuBtn.classList.remove("open");
    navMenu.classList.remove("show-menu");
  }
};

// Menu Toggle
menuBtn.onclick = function () {
  menuBtn.classList.toggle("open");
  navMenu.classList.toggle("show-menu");
};

/*========## SHOW PopUp Video========##*/
const videoOpenBtn = document.querySelectorAll("._island-video-btn");
const videoPopup = document.querySelectorAll("._island-popup");
const videoCloseBtn = document.querySelectorAll("._popup-close");
const video = document.querySelectorAll("._island-popup-video");

function popUp(i) {
  videoPopup[i].classList.add("show-popup");
}

videoOpenBtn.forEach((a) =>
  a.addEventListener("click", function () {
    popUp(a.id);
  })
);

videoCloseBtn.forEach((b) => {
  b.addEventListener("click", () => {
    videoPopup.forEach((c) => {
      c.classList.remove("show-popup");
    });

    video.forEach((i) => {
      const source = i.src;
      i.src = "";
      i.src = source;
    });
  });
});

/*========## Swiper Js ========##*/
let swiper = new Swiper(".gallery-thumbs", {
  spaceBetween: 0,
  slidesPerView: 0,
});
let swiper2 = new Swiper(".gallery-top", {
  effect: "fade",
  thumbs: {
    swiper: swiper,
  },
});
/*========## GSAP Animation ========##*/
const controlImg = document.querySelectorAll("._controls-img");

function SlideAnimation() {
  gsap.from("._island-subtitle", {
    opacity: 0,
    duration: 0.2,
    delay: 0.2,
    y: -20,
  });
  gsap.from("._island-title", {
    opacity: 0,
    duration: 0.3,
    delay: 0.3,
    y: -20,
  });
  gsap.from("._island-description", {
    opacity: 0,
    duration: 0.4,
    delay: 0.4,
    y: -20,
  });
  gsap.from("._explore-btn", { opacity: 0, duration: 0.5, delay: 0.5, y: -20 });
  gsap.from("._island-video", {
    opacity: 0,
    duration: 0.6,
    delay: 0.6,
    y: -20,
  });

  videoPopup.forEach((i) => {
    i.classList.remove("show-popup");
  });
}

controlImg.forEach((e) => {
  e.addEventListener("click", SlideAnimation);
});
/*========##  ========##*/
/*========##  ========##*/
/*========##  ========##*/
