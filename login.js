function rohanFormHandler(form) {
    var rohanData = new FormData(form);
    temp = [];

    for (var pair of rohanData.entries()) {
        temp.push(pair[1])
    }

    // handle username and password checks here 
    

    // change
    window.location.replace("index.html");
    
}

document.getElementById('log').addEventListener("submit", function (e) {
    e.preventDefault();
    rohanFormHandler(e.target);
});