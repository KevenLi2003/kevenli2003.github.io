/* Because of Carousel if you resize the window and the posts seem out of place please refresh the page - that should fix it */

function openNav() {
    document.getElementById("mySidenav").style.transform = "translateX(0px)";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.transform = "translateX(-250px)";
    document.getElementById("main").style.marginLeft = "0";
}