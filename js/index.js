const tabsBtns = document.querySelectorAll(".travels-tabs__menu-btn");
const tabs = document.querySelectorAll(".travels-tabs__item");

tabsBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const targetBtn = e.target;
    const activeTabId = targetBtn.dataset.tab;
    const activeTab = document.getElementById(activeTabId);
    tabsBtns.forEach((btn) => btn.classList.remove("active"));
    tabs.forEach((tab) => tab.classList.remove("active"));
    targetBtn.classList.add("active");
    activeTab.classList.add("active");
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth > 1296) {
    new Swiper(".slider-companies", {
      loop: true,
      autoplay: true,
      slidesPerView: 4,
    });
  } else {
    const sliderCompanies = document.querySelector(".slider-companies");
    const sliderCompaniesWrapper =
      sliderCompanies.querySelector(".swiper-wrapper");
    const sliderCompaniesSlides =
      sliderCompanies.querySelectorAll(".swiper-slide");
    sliderCompanies.classList.remove("swiper");
    sliderCompaniesWrapper.classList.replace(
      "swiper-wrapper",
      "slider-companies__wrapper"
    );
    sliderCompaniesSlides.forEach((slide) =>
      slide.classList.remove("swiper-slide")
    );
  }
});

const burgerBtn = document.querySelector(".burger-btn");
const headerMenu = document.querySelector(".header__menu");
const headerMenuLinks = document.querySelectorAll(".header__menu-link");
const body = document.querySelector("body");

const activateMenuHeader = () => {
  burgerBtn.classList.toggle("active");
  headerMenu.classList.toggle("active");
  body.classList.toggle("overflow-hidden");
}

burgerBtn.addEventListener("click", (e) => {
  activateMenuHeader()
});

headerMenuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    if (headerMenu.classList.contains("active")) {
      activateMenuHeader()
    }
  });
});
