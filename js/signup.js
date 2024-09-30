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
}



form.addEventListener("submit", (event) => {
    event.preventDefault();
    userValueToObj();
});


function userValueToObj() {

    let userNameValue = document.getElementById("username").value;
    let passwordValue = document.getElementById("password").value;

    const userDataObj = {};
    userDataObj.userName = userNameValue;
    userDataObj.password = passwordValue;
    return userDataObj;
}

