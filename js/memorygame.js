const container = document.getElementById("gameContainer");
let counter = 0;
let lasttargetclass;

let WinnerCounter = 0;


function checkfit(e) {
   const elementsCollection = document.getElementsByClassName(lasttargetclass);
   const elementsArray = Array.from(elementsCollection);

   for (let i = 0; i < elementsArray.length; i++) {

      if (e.target.getAttribute("class") === lasttargetclass) {
         const myTimeout = setTimeout(sustainNone, 1000);
         function sustainNone() {
            // elementsArray[i].style.display = "none";
            WinnerCounter++;
            if (WinnerCounter === section1CardsArr.length) {
               alert("you won!!!");
            }
         }


      } else {
         const myTimeout = setTimeout(sustainToGrey, 1000);
         function sustainToGrey() {
            e.target.style.backgroundColor = "grey";
            elementsArray[i].style.backgroundColor = "grey";
         }
      }
   }

}




//storage class and count clicks

function countClick(e) {
   if (counter === 0) {
      lasttargetclass = e.target.getAttribute("class");
      counter++;
   } else {
      checkfit(e);
      counter = 0;
   }
}

//creates all the divs,gives them  class name and text content.

let section1CardsArr = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6];
function createDiv () {
for (let i = 0; i < section1CardsArr.length; i++) {
   const element = document.createElement('div');
   element.textContent = section1CardsArr[i];
   element.style.backgroundColor = "grey";
   container.appendChild(element);
   element.setAttribute("class", section1CardsArr[i]);
   element.addEventListener("click", cardsColor);
   element.addEventListener("click", countClick);
}
}



function cardsColor(e) {
   switch (e.target.getAttribute("class")) {
      case "1":
         e.target.style.backgroundColor = "red";
         break;
      case "2":
         e.target.style.backgroundColor = "pink";
         break;
      case "3":
         e.target.style.backgroundColor = "green";
         break;
      case "4":
         e.target.style.backgroundColor = "blue";
         break;
      case "5":
         e.target.style.backgroundColor = "yellow";
         break;
      case "6":
         e.target.style.backgroundColor = "orange";
         break;
   }
}



function startNewGame() {
   section1CardsArr.sort(function () { return 0.5 - Math.random() });

   clearBoard();
   createDiv();
} 


function clearBoard () {

 container.innerHTML= "";  
}