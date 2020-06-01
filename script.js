var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 4000);
}

function showInformation() {
    const name = document.getElementById("name").value;
    const mail = document.getElementById("mail").value;
    var text = ""
    const subject = document.getElementById("subject").value;
    const mesage = document.getElementById("mesage").value
    if (name === "" || mail === "") {
        text = "Input not valid";
    } else {
        console.log(name, mail, '????');

        document.getElementById("name1").innerHTML = name;
        document.getElementById("mail2").innerHTML = mail;
        document.getElementById("subject3").innerHTML = subject;
        document.getElementById("mesage4").innerHTML = mesage;
    }
    document.getElementById("notvalid").innerHTML = text
}