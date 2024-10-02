function rohanFormHandler(form) {
    var rohanData = new FormData(form);

    alert("skibidi toilet simulator");
}

document.getElementById('log').addEventListener("submit", function (e) {
    e.preventDefault();
    rohanFormHandler(e.target);
});