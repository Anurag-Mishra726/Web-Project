document.addEventListener("DOMContentLoaded", function() {

    const dropDownContainer = document.getElementsByClassName("dropdown");
    const dropDownButton = document.getElementById("dropbtn");
    const dropDownContent = document.getElementsByClassName("dropdown-content");

    if (dropDownButton && dropDownContent) {
    dropDownButton.addEventListener("click", function(event){
        event.preventDefault();
        dropDownContent[0].classList.toggle("show");
    });

    document.addEventListener("click", function(event){
        if(!dropDownContainer[0].contains(event.target) && event.target !== dropDownButton){
            dropDownContent[0].classList.remove("show");
        }
    });
    }
});