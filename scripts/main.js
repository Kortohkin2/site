var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/uin.jpg") {
    myImage.setAttribute("src", "images/uin2.png");
  } else {
    myImage.setAttribute("src", "images/uin.jpg");
  }
};
