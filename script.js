// Smooth Scroll For links

var navMenuAnchorTags = document.querySelectorAll("#nav-menu a");

for (var i = 0; i < navMenuAnchorTags.length; i++) {

    navMenuAnchorTags[i].addEventListener('click', function (event) {

        event.preventDefault();
        var targetSectionID = this.getAttribute('href');
        console.log(targetSectionID);

        var targetSection = document.querySelector(targetSectionID);
        console.log(targetSection);

        var interval = setInterval(function () {

            var targetSectionCoordinates = targetSection.getBoundingClientRect();

            if (targetSectionCoordinates.top <= 0) {
                clearInterval(interval);
                return;
            }

            window.scrollBy(0, 50);

        }, 10);
    })

}

// Smooth Scroll For Drop Down List

var listAnchorTag = document.querySelectorAll('#list a');

for (var i = 0; i < listAnchorTag.length; i++) {

    listAnchorTag[i].addEventListener('click', function (event) {

        event.preventDefault();
        var targetSectionID = this.getAttribute('href');
        console.log(targetSectionID);

        var targetSection = document.querySelector(targetSectionID);
        console.log(targetSection);

        var interval = setInterval(function () {

            var targetSectionCoordinates = targetSection.getBoundingClientRect();

            if (targetSectionCoordinates.top <= 0) {
                clearInterval(interval);
                return;
            }

            window.scrollBy(0, 50);

        }, 10);
    })

}

// Auto Fill Skills percentage

var skillSection = document.getElementById("Skill");
var progressBar = document.querySelectorAll(".inner-div");
var star4 = document.getElementsByClassName("star-4");
var star2 = document.getElementsByClassName("star-2");
var annimationDone = false;
var skill = [];
for (let i = 0; i < progressBar.length; i++) {
    skill.push(0);
}
window.addEventListener('scroll', checkscroll);

function initializeBar() {

    for (var bar of progressBar) {
        bar.style.width = 0 + '%';
    }
}

initializeBar();

function fillBar(i) {

    let targetWidth = i.getAttribute('data-value');
    let currentWidth = 0;
    var interval = setInterval(function () {
        if (currentWidth > targetWidth) {
            clearInterval(interval);
            return;
        }
        currentWidth++;
        i.style.width = currentWidth + '%';
    }, 5)
}
var perBar = document.querySelector("#percentage-scroll");
let count=0;

function checkscroll() {
    count++;
    if(count == 5){
        count =1;
        perBar.innerText = parseInt(perBar.innerText)+1+"%"+"views";
    }
    for (let i = 0; i < progressBar.length; i++) {
        skillSectionCoordinates = progressBar[i].getBoundingClientRect();
        if (skill[i] == 0 && skillSectionCoordinates.top < window.innerHeight) {
            skill[i] = 1;
            fillBar(progressBar[i]);
        }
        console.log(i);
    }
}
var bars = document.querySelector(".bars");
var dropdown = document.querySelector(".dropdown-list");
bars.addEventListener('click', () => {
    if (dropdown.style.display == "block") {
        dropdown.style.display = "none";
    } else {
        dropdown.style.display = "block";
        dropdown.style.position = "absolute";
        dropdown.style.top = "7.5%";
        dropdown.style.right = "3%";
    }
});