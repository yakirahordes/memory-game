const form = document.getElementById("my-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    userNameValues();
});



function userNameValues() {

    let userNameValue = document.getElementById("username").value;
    return userNameValue;
}

function passwordValues() {

    let passwordValue = document.getElementById("password").value;
    return passwordValue;
}


form.addEventListener("submit", checkLocalStorage);
function checkLocalStorage() {
    let storageDataArr = JSON.parse(localStorage.getItem("userDataArr"));

    let userNameitem = storageDataArr.map(getUserName);
    let passworditem = storageDataArr.map(getPassword);

    if (userNameitem.includes(userNameValues()) && passworditem.includes(passwordValues()) || storageDataArr === null) {
        console.log("exists");
        document.getElementById("button").addEventListener("click", buttonLink);
        function buttonLink () {
            location.href = "./pages/memorygame.html";
        }
    } else {
        
        console.log("doesnt exist");
        alert("user name does not exist, please sign in to continue.");
    }
}


function getUserName(item) {
    return item.userName;
}

function getPassword(item) {
    return item.password;
}



