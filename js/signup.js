const form = document.getElementById("my-form");


form.addEventListener("submit", userObjToArr);

function userObjToArr() {

    let storageDataArr = JSON.parse(localStorage.getItem("userDataArr"));
    
    if (storageDataArr === null) {
        storageDataArr = [];
        storageDataArr.push(userValueToObj());
    } else {
        storageDataArr.push(userValueToObj());
    }

    localStorage.setItem("userDataArr", JSON.stringify(storageDataArr));
    document.getElementById("button").addEventListener("click", buttonLink);
        function buttonLink () {
            location.href = "../pages/memorygame.html";
        }
}



form.addEventListener("submit", (event) => {
    event.preventDefault();
    userValueToObj();
});


function userValueToObj() {

    let userNameValue = document.getElementById("username").value;
    let passwordValue = document.getElementById("password").value;
//יוצרת אובייקטים עם הערכים של היוזרניים והפסווארד
    const userDataObj = {};
    userDataObj.userName = userNameValue;
    userDataObj.password = passwordValue;
    return userDataObj;
}

