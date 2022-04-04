function showMore(id, h) {
    var btnText = document.getElementById(id);
    var hide = document.getElementsByClassName(h);
    if (btnText.innerHTML === "Less") {
        btnText.innerHTML = "More";
        for (let i = 0; i < hide.length; i++) {
            hide[i].style.display = "none";
        }
    } else {
        btnText.innerHTML = "Less";
        for (let i = 0; i < hide.length; i++) {
            hide[i].style.display = "block";
        }
    }
}