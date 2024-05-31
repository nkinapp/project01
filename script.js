function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")
  
  //subistituir img
  if (html.classList.contains("light")) {
    //se tiver light mode, add img ligh 
    img.setAttribute("src", "./assests/avatar-light.png")
  } else {
    // se tiver sem light mode, manter img
    img.setAttribute("src", "./assests/avatar.png")
  }
  
}
