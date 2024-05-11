window.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById('menu');
    const cancelIcon = document.getElementById('cancel');
    const links = document.getElementById('links');

    menuIcon.addEventListener("click", () => {
        if (links.style.display === "block") {
            links.style.display = "none";
            menuIcon.style.display = "block";
            cancelIcon.style.display = "none";
        } else {
            links.style.display = "block";
            menuIcon.style.display = "none";
            cancelIcon.style.display = "block";
        }
    });

    cancelIcon.addEventListener("click", () => {
        links.style.display = "none";
        menuIcon.style.display = "block";
        cancelIcon.style.display = "none";
    });

    let btn = document.getElementsByClassName("btn-2");
    btn[0].addEventListener("click",function(){
        window.location.href="RAVI.pdf (4).pdf";
    })
});

