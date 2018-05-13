headerToggle.onclick = function expandMenu() {

  var headerNavList = document.getElementById('headerNavList');
  var headerTop = document.getElementById('headerTop');

  let headerNavListClass = headerNavList.classList;
  let headerTopClass = headerTop.classList;

  // console.log(headerNavClass);
      console.log(headerNavList.style.display);
  if (headerNavList.style.display === "none" || headerNavList.style.display === "") {

      headerNavList.style.display = "block";
      headerNavList.style.opacity = "1";
      console.log(headerNavList.style.opacity);
      headerTop.style.paddingBottom = "145px";

      console.log(headerNavList.style.display);
  } else {
    headerNavList.style.display = "none";
    headerTop.style.paddingBottom = "0px";

    }



}
