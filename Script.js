var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname, event) {
  for (var tablink of tablinks) {
    tablink.classList.remove("active-link");
  }
  for (var tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("side-menu");

function openmenu() {
  sidemenu.style.right = "0";
}

function closemenu() {
  sidemenu.style.right = "-170px";
}

function msg() {
  alert("Message sent successfully");
}

const sideMenu = document.getElementById("side-menu");
const menuLinks = document.querySelectorAll("#side-menu a");

menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    sideMenu.style.right = "-170px";
  });
});
