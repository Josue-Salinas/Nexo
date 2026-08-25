const button = document.getElementById("startExperience");

const card = document.querySelector(".demo-card");

const experience = document.getElementById("experience");


button.addEventListener("click", function() {

    card.style.display = "none";

    experience.style.display = "block";

});