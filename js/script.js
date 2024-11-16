// memberi toggle class active untuk search form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");
const searchBtn = document.querySelector("#search-btn");

// ketika icon search di click
searchBtn.addEventListener("click", function (e) {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
});

// memberi toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu di click
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// memberi toggle class active untuk shopping-cart
const shoppingCart = document.querySelector(".shopping-cart");
// ketika icon shopping-cart di click
document.querySelector("#shopping-cart-btn").onclick = (e) => {
  shoppingCart.classList.toggle("active");
  e.preventDefault();
};

// click di luar content untuk menghilangkan active nya
const hamburger = document.querySelector("#hamburger-menu");
const iconShoppingCart = document.querySelector("#shopping-cart-btn");

document.addEventListener("click", function (e) {
  // untuk menghilangkan hamburger menu
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }

  // untuk menghilangkan search Form
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }

  // untuk menghilangkan shopping cart
  if (
    !iconShoppingCart.contains(e.target) &&
    !shoppingCart.contains(e.target)
  ) {
    shoppingCart.classList.remove("active");
  }
});

// modal box item
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailBtns = document.querySelectorAll(".item-detail-btn");

itemDetailBtns.forEach(function (btn) {
  btn.onclick = (e) => {
    itemDetailModal.style.display = "flex";
    e.preventDefault();
  };
});

// click tombol close modal
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
  e.preventDefault();
};

// click di luar box modal
const navBar = document.querySelector(".navbar");
// window.onclick = (e) => {
//   if (e.target === itemDetailModal) {
//     itemDetailModal.style.display = "none";
//   }

window.onclick = (e) => {
  if (itemDetailModal.contains(e.target) || navBar.contains(e.target)) {
    itemDetailModal.style.display = "none";
    e.preventDefault();
  }
};
