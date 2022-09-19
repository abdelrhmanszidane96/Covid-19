
/* Define Global Variables */
 let sections = document.querySelectorAll('section')
let navLi = document.querySelectorAll('nav ul li a');


/* which section is active */
window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (scrollY >= sectionTop - 65) {
            current = section.getAttribute('id');
        }
    });
    navLi.forEach(li => {
        li.classList.remove('active');
        document.querySelector('nav ul li a[href*= ' + current + ']').classList.add('active');
    });
});
/* which section is active */

/* go to the top btn */
function scrollToTop(){
   window.scrollTo(0, 0); 
}
/* go to the top btn */



/* defines all the btns */
let firstBtn = document.getElementById("diseaseBtn");
let secondBtn = document.getElementById("spreadBtn");
let thirdBtn = document.getElementById("protectBtn");
let fourthBtn = document.getElementById("symptomsBtn");
let fifthBtn = document.getElementById("outbreakeBtn");
let sixthBtn = document.getElementById("mythBtn");

/* defines all the accs */
let firstAcc = document.getElementById("accordion-1")
let secondAcc = document.getElementById("accordion-2")
let thirdAcc = document.getElementById("accordion-3")
let fourthAcc = document.getElementById("accordion-4")
let fifthAcc = document.getElementById("accordion-5")
let sixthAcc = document.getElementById("accordion-6")



firstBtn.addEventListener("click",collapseOne);
secondBtn.addEventListener("click",collapseTwo);
thirdBtn.addEventListener("click",collapseThree);
fourthBtn.addEventListener("click",collapseFour);
fifthBtn.addEventListener("click",collapseFive);
sixthBtn.addEventListener("click",collapseSix);

function collapseOne(){
    firstAcc.classList.remove("d-none");
    secondAcc.classList.add("d-none");
    thirdAcc.classList.add("d-none");
    fourthAcc.classList.add("d-none");
    fifthAcc.classList.add("d-none");
    sixthAcc.classList.add("d-none");

}




function collapseTwo(){
    firstAcc.classList.add("d-none");
    secondAcc.classList.remove("d-none");
    thirdAcc.classList.add("d-none");
    fourthAcc.classList.add("d-none");
    fifthAcc.classList.add("d-none");
    sixthAcc.classList.add("d-none");

}


function collapseThree(){
    firstAcc.classList.add("d-none");
    secondAcc.classList.add("d-none");
    thirdAcc.classList.remove("d-none");
    fourthAcc.classList.add("d-none");
    fifthAcc.classList.add("d-none");
    sixthAcc.classList.add("d-none");

}

function collapseFour(){
    firstAcc.classList.add("d-none");
    secondAcc.classList.add("d-none");
    thirdAcc.classList.add("d-none");
    fourthAcc.classList.remove("d-none");
    fifthAcc.classList.add("d-none");
    sixthAcc.classList.add("d-none");

}

function collapseFive(){
    firstAcc.classList.add("d-none");
    secondAcc.classList.add("d-none");
    thirdAcc.classList.add("d-none");
    fourthAcc.classList.add("d-none");
    fifthAcc.classList.remove("d-none");
    sixthAcc.classList.add("d-none");

}


function collapseSix(){
    firstAcc.classList.add("d-none");
    secondAcc.classList.add("d-none");
    thirdAcc.classList.add("d-none");
    fourthAcc.classList.add("d-none");
    fifthAcc.classList.add("d-none");
    sixthAcc.classList.remove("d-none");

}





