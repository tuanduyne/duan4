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
