var list = document.getElementsByTagName("img");
var width = 0;
var height = 0;
for (var i = 0; i < list.length; i++) {
  console.log(list);
  width = list[i].clientWidth;
  height = list[i].clientHeight;
  var whichPicture = Math.floor(Math.random() * 7);
  switch(whichPicture) {
    case 0:
      list[i].style.width = width;
      list[i].style.height = height;
      list[i].style.overflowY = "hidden";
      list[i].src = "http://i.imgur.com/c3ldIRR.jpg";
      break;
    case 1:
      list[i].style.width = width;
      list[i].style.height = height;
      list[i].style.overflowY = "hidden";
      list[i].src = "http://i.imgur.com/oU1XOHB.jpg";
      break;
    case 2:
      list[i].style.width = width;
      list[i].style.height = height;
      list[i].style.overflowY = "hidden";
      list[i].src = "http://i.imgur.com/5kxZRpu.jpg";
      break;
    case 3:
      list[i].style.width = width;
      list[i].style.height = height;
      list[i].style.overflowY = "hidden";
      list[i].src = "http://i.imgur.com/Q0nS0FX.jpg";
      break;
    case 4:
      list[i].style.width = width;
      list[i].style.height = height;
      list[i].style.overflowY = "hidden";
      list[i].src = "http://i.imgur.com/GuxryOU.jpg";
      break;
    case 5:
      list[i].style.width = width;
      list[i].style.height = height;
      list[i].style.overflowY = "hidden";
      list[i].src = "http://i.imgur.com/84wOivT.jpg";
      break;
    case 6:
      list[i].style.width = width;
      list[i].style.height = height;
      list[i].style.overflowY = "hidden";
      list[i].src = "http://i.imgur.com/D3FMlLn.jpg";
      break;
  }
}
