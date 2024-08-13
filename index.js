
const testToShow = document.querySelector(".container");
const buttonSubmit = document.querySelector(".submit");
const buttonTest = document.querySelector(".btn");
const heading = document.querySelector(".heading");

// const buttonTest = document.querySelector(".btn");
// const testToShow = document.querySelector(".container");
// const heading = document.querySelector(".heading");
// const buttonSubmit = document.querySelector(".submit");
// i=0;
// function textPrint() {
//     const textToPrint = "Do you want to check your knowledge?";
//     const textWhereToPrint = document.querySelector(".text");
//     if (i<textToPrint.length) {
//         textWhereToPrint.textContent += textToPrint.charAt(i);
//         i++;
//     }
    
// }

// setInterval (textPrint,150);

gsap.from (".mainbox", {
    opacity:0,
    x:400,
    ease: "bounce",
    duration:2,
    delay:1
})

gsap.to (".text", {
    delay:3,
    text: "Are you sure about your knowledge?",
    duration: 3,
    yoyo: true,
    repeat:1
})

gsap.to (".text", {
    text: "Click at the button below to check!",
    duration: 5,
    delay:9
})

gsap.from (".btn", {
    opacity:0,
    rotate:360,
    duration:2,
    delay:12
})


buttonTest.addEventListener("click", showTest);

function showTest() {
    testToShow.style.display = "block";
    gsap.from (".question", {
        opacity:0,
        y: 200,
        duration:1,
        stagger: 1
    })
    heading.style.display = "none"
}

buttonSubmit.addEventListener("click", showTheScore);

function showTheScore(e) {
    e.preventDefault();
    points=0;
    if (document.querySelector("#correctOne").checked){
        points++;
    }
    if (document.querySelector("#correctTwo").checked){
        points++;
    }
    if (document.querySelector("#correctThree").checked){
        points++;
    }
    if (document.querySelector("#correctFour").checked){
        points++;
    }
    if (document.querySelector("#correctFive").checked){
        points++;
    }
    if (document.querySelector("#correctSix").checked){
        points++;
    }
    if (document.querySelector("#correctSeven").checked){
        points++;
    }
    if (document.querySelector("#correctEight").checked){
        points++;
    }
    if (document.querySelector("#correctNine").checked){
        points++;
    }
    if (document.querySelector("#correctTen").checked){
        points++;
    }
    console.log (points);
    if (points>7) {
        Swal.fire({
            title: 'Great job! You are an expert!',
            text: 'Your score is '+ points + " out of 10",
            imageUrl: 'https://images.unsplash.com/photo-1519834785169-98be25ec3f84?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80',
            imageWidth: 300,
            imageHeight: 450,
            imageAlt: 'Custom image',
          })
    }
    else if (points>4 && points<8) {
        Swal.fire({
            title: 'You can do it better!',
            text: 'Your score is '+ points + " out of 10",
            imageUrl: 'https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
            imageWidth: 300,
            imageHeight: 450,
            imageAlt: 'Custom image',
          })
    }
    else {
        Swal.fire({
            title: 'Oops! You need to work a bit more..',
            text: 'Your score is '+ points + " out of 10",
            imageUrl: 'https://images.unsplash.com/photo-1429087969512-1e85aab2683d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTd8fGNlbGVicmF0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
            imageWidth: 300,
            imageHeight: 450,
            imageAlt: 'Custom image',
          })
    }
}


