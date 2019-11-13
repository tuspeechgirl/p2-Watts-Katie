
//READ MORE BUTTONS//

function myPush() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");



  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
};
function myPush2() {
  var dots2 = document.getElementById("dots2");
  var moreText2 = document.getElementById("more2");
  var btnText2 = document.getElementById("myBtn2");



  if (dots2.style.display === "none") {
    dots2.style.display = "inline";
    btnText2.innerHTML = "Read more";
    moreText2.style.display = "none";
  } else {
    dots2.style.display = "none";
    btnText2.innerHTML = "Read less";
    moreText2.style.display = "inline";
  }
};

function myPush3() {
  var dots3 = document.getElementById("dots3");
  var moreText3 = document.getElementById("more3");
  var btnText3 = document.getElementById("myBtn3");



  if (dots3.style.display === "none") {
    dots3.style.display = "inline";
    btnText3.innerHTML = "Read more";
    moreText3.style.display = "none";
  } else {
    dots3.style.display = "none";
    btnText3.innerHTML = "Read less";
    moreText3.style.display = "inline";
  }
};
//READ MORE ENDS//


// When the user clicks on <div>, open the popup
function myFunctionPop() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
window.addEventListener("click", myFunctionPop);

//Accordian//
var accordianHeaders = document.querySelectorAll('#accordian .accordian-headers');
var accordianDescriptions = document.querySelectorAll('#accordian .accordian-description');

//drop-down//
function expandAccordianDescription() {

//handles toggle//
  for (i = 0; i < accordianHeaders.length; i++) {
    accordianHeaders[i].childNodes[3].innerHTML = '<i class="fas fa-heart"></i>';
    accordianDescriptions[i].classList.remove('accordian-open');
  }


this.nextElementSibling.classList.toggle('accordian-open');
this.childNodes[3].innerHTML = '<i class="fas fa-hand-holding-heart"></i>';
}

//Add event click//
for (i=0; i < accordianHeaders.length; i++) {

accordianHeaders[i].addEventListener('click', expandAccordianDescription);
}



//API CODE//
var mainSection = document.getElementById('page-body');
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        //Code Dealing With The API Data Goes Here


        var sectionTwo = document.getElementById('main'); //selects main//
        var addlink = document.createElement('p');
        sectionTwo.appendChild(addlink);
        var text1= document.createTextNode(apiResult[1].product_link);
        addlink.appendChild(text1);




    }
};
xmlhttp.open('GET', 'http://makeup-api.herokuapp.com/api/v1/products.json', true);
xmlhttp.send();
