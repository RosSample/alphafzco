function showMore(id, h) {
    var btnText = document.getElementById(id);
    var hide = document.getElementsByClassName(h);
    if (btnText.innerHTML === "Less") {
        btnText.innerHTML = "More";
        hide.style.display = "none";
    } else {
        btnText.innerHTML = "Less";
        hide.style.display = "block";
    }
}