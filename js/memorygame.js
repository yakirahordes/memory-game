const container = document.getElementById("gameContainer")
let counter=0;
let lasttargetclass;

//check for same class



function checkfit(e){   
    if(e.target.getAttribute("class")===lasttargetclass){
        const elementsCollection=document.getElementsByClassName(lasttargetclass);
        const elementsArray=Array.from(elementsCollection);
        const myTimeout = setTimeout(sustain, 2000);
        function sustain() {
            elementsArray.forEach(element => {
                element.style.display="none"; 
             });
            clearTimeout(myTimeout);
        }
        
    }else{
        document.getElementsByClassName(lasttargetclass).style.backgroundColor="grey";
        
    }
}
//storage class and count clicks
function countClick(e){
   if(counter===0){
    //console.log(e.target.classList); 
    lasttargetclass=e.target.getAttribute("class"); 
    counter++;
    console.log(lasttargetclass);
    console.log(counter);
} else{
        checkfit(e);
        counter=0;
    }
}
//creates all the dives,gives them  class name and text content.
const cardstext=[]
const section1CardsArr = [1,2,3,4,5,6,1,2,3,4,5,6];
for (let i = 0; i < section1CardsArr.length; i++) {
    const element = document.createElement('div');
    element.textContent=section1CardsArr[i];
    element.style.backgroundColor="grey";
    element.addEventListener("click",countClick);
    container.appendChild(element);
     element.setAttribute("class", section1CardsArr[i]);
     element.addEventListener("click",cardsColor);
}
function cardsColor (e) {
 if (e.target.getAttribute("class")=== "1" ) {
    e.target.style.backgroundColor="red";
 } else if (e.target.getAttribute("class")=== "2" ) {
    e.target.style.backgroundColor="pink";
 } else if (e.target.getAttribute("class")=== "3" ) {
    e.target.style.backgroundColor="green";
 } else if (e.target.getAttribute("class")=== "4" ) {
    e.target.style.backgroundColor="blue";
 } else if (e.target.getAttribute("class")=== "5" ) {
    e.target.style.backgroundColor="yellow";
 } else  {
    e.target.style.backgroundColor="orange";
 }
}