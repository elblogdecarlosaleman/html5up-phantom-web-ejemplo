window.onload = (event) => {
    var allimg = document.querySelectorAll("img");

    for (var i = 0; i < allimg.length; i++) {
        // allimg[i].src = "https://i.ibb.co/F7Jr6JB/perfil.jpg";
        allimg[i].setAttribute("src", "https://i.ibb.co/F7Jr6JB/perfil.jpg");
    }
};