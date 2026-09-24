// navigation bar
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("nav").innerHTML = `
    <nav>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="resume.html">Resume</a></li>
            <li><a href="portfolio.html">Portfolio</a></li>
        </ul>
    </nav>
    `;
});

//footer
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("footer").innerHTML = `
    <footer>
        <p> <a href="https://app.joinhandshake.com/profiles/ybw4p7"
            target="_blank">Handshake</a>
        </p>
    </footer>
    `;
});

let allButton = document.getElementById("all");
let mlButton = document.getElementById("ml");
let dbButton = document.getElementById("db");
let dlButton = document.getElementById("dl");

let projects = document.querySelectorAll(".project");

if(allButton) {
    allButton.addEventListener("click", function() {
        projects.forEach(function(project) {
            project.style.display = "block";
        });
    });

    mlButton.addEventListener("click", function() {
        projects.forEach(function(project) {
            if (project.className.includes("ml")) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });

    });

    dbButton.addEventListener("click", function() {
        projects.forEach(function(project) {
            if (project.className.includes("db")) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });

    dlButton.addEventListener("click", function() {
        projects.forEach(function(project) {
            if (project.className.includes("dl")) {
                project.style.display = "block";
            } else {
                project.style.display = "none";
            }
        });
    });
}

let learnMoreButtons = document.querySelectorAll(".learn-more");
learnMoreButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        let details = button.parentElement.querySelector(".project-details");
        if (details.style.display == "block") {
            details.style.display = "none";
            button.textContent = "Learn More";
        } else {
            details.style.display = "block";
            button.textContent = "Learn Less";
        }
    });
});