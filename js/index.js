
const darkMood = document.getElementById("darkmood");
const moonIcon = document.getElementById("moonIcon");

console.log(darkMood);


darkMood.addEventListener("click" , function(){

    document.body.classList.toggle("dark");

    if( moonIcon.classList.contains("fa-moon") == true ) {
        moonIcon.classList.add("fa-sun");
        moonIcon.classList.remove("fa-moon");
    }
    else {
        moonIcon.classList.remove("fa-sun");
        moonIcon.classList.add("fa-moon");
    }

})


