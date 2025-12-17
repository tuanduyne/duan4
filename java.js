const searchInput = document.querySelector(".search__input");
const searchIcon = document.querySelector(".search__icon");

  function performSearch() {
    const keyword = searchInput.value.trim();

    if (keyword === "") {
      alert("Ditme chưa nhập đòi tìm cc");
      return;
    }
    console.log("Tìm kiếm:", keyword);
 window.location.href = `/search.html?query=${encodeURIComponent(keyword)}`;
  }

  searchIcon.addEventListener("click", performSearch);
  searchInput.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
      performSearch();
    }
  });
const tabs = document.querySelectorAll(".tab");
const contents = document.querySelectorAll(".content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {

    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    contents.forEach(c => c.classList.remove("active"));
    document.getElementById(tab.dataset.target).classList.add("active");
  });
});
const buttons = document.querySelectorAll(".account-top .btn");
const forms = document.querySelectorAll(".form");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {

    // đổi trạng thái button
    buttons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // đổi form hiển thị
    forms.forEach(f => f.classList.remove("active"));
    document
      .querySelector("." + btn.dataset.target)
      .classList.add("active");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector(".menu-toggle i");
  const mobileMenu = document.getElementById("mobileMenu");
  const overlay = document.getElementById("overlay");

  function closeMenu() {
    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    toggle.classList.remove("fa-xmark");
    toggle.classList.add("fa-bars");
  }

  toggle.addEventListener("click", () => {
    const isOpen = mobileMenu.classList.toggle("active");
    overlay.classList.toggle("active");

    if (isOpen) {
      toggle.classList.remove("fa-bars");
      toggle.classList.add("fa-xmark");
    } else {
      closeMenu();
    }
  });

  overlay.addEventListener("click", closeMenu);

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".menu-header");
  let lastScrollY = window.scrollY;

  window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > lastScrollY && currentScroll > 80) {
      // scroll xuống
      header.classList.add("hide");
    } else {
      // scroll lên
      header.classList.remove("hide");
    }

    lastScrollY = currentScroll;
  });
});
fetch("footer.html")
  .then(res => res.text())
  .then(html => {
    document.getElementById("footer").innerHTML = html;
  });
  const ftMidTitle = document.querySelector(".ft-mid h4");
const ftMid = document.querySelector(".ft-mid");

if (ftMidTitle) {
  ftMidTitle.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      ftMid.classList.toggle("active");
    }
  });
}
