const menuDrawer = (isOpening) => {
  const sideMenu = document.getElementById("sideMenu")

  if (isOpening) {
    sideMenu.style.left = "0";
  } else {
    sideMenu.style.left = "-100vw";
  }
};
