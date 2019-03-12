// printToDom function 
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};



// const imgJS = () => {
//     const new Image();
//     for (let i = 0; i < projects.screenshot.length; i++) {
//     document.getElementsByClassName('projectsPage')
//     }
// };



// const imgJS = new Image();
// imgJS.src = 'image.png';
// imgJS.onclick = function() {
//     window.location.href = 'https://www.dropbox.com/s/a2g9ax3y74054ca/JP%20PRESS%20LOWREZ%20b%26w%201.jpg?dl=0';
// };
// document.getElementById('projectsPage').projects.screenshot(imgJS);
// projects.screenshot.innerHTML = "   https://www.dropbox.com/s/a2g9ax3y74054ca/JP%20PRESS%20LOWREZ%20b%26w%201.jpg?dl=0"

const projects = [
    {
        title: "Cool Project", 
        screenshot: "imgs/art-ball-shaped-circle-414860.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",
    },
    { 
        title: "Cool Project", 
        screenshot: "./imgs/art-ball-shaped-circle-414860.jpg",
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",

    },
    {
        title: "Cool Project", 
        screenshot: "./imgs/art-ball-shaped-circle-414860.jpg",
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",

    },
    {
        title: "Uncool Project", 
        screenshot: "./imgs/art-ball-shaped-circle-414860.jpg",
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: false,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",

    },
    {
        title: "Cool Project", 
        screenshot: "./imgs/art-ball-shaped-circle-414860.jpg", 
        description: "This is the best project", // A good project description includes 'the what', 'the why', and 'the how'.
        technologiesUsed: "HTML, CSS, Vanilla JavaScript, Version Control with Github",
        available: true,
        url: "https://github.com/nss-evening-cohort-8/js-part-deux", // Towards the latter part of the class, you will learn how to host your projects and people will be able to view them live. Cool, right? Welp, until then, just use your GitHub link in this spot as well.
        githubUrl: "https://github.com/nss-evening-cohort-8/js-part-deux",

    },
];





// createProjectCards function
const createProjectCards = () => {
    let domString = '';
    for (let i = 0; i < projects.length; i++) {
        if (projects[i].available === true) {
        domString += `<div class="card">`;
        domString +=   `<h2 class="titleH2">${projects[i].title}</h2>`;
        domString +=   `<img class="projectImages" src="${projects[i].screenshot}">`;
        domString +=   `<p class="jsDescrip"><strong>Description:</strong> ${projects[i].description}</p>`;
        domString +=   `<p class="jsTech"><strong>Technolgies Used:</strong></br> ${projects[i].technologiesUsed}</p>`;
        domString +=   `<p class="jsAvail"><strong>Available:</strong> ${projects[i].available}</p>`;
        domString +=   `<p><a class="jsLinks" href="${projects[i].url}">Link</a></p>`;
        domString +=   `<p><a class="jsLinks" href="${projects[i].githubUrl}">GitHub Link</a></p>`;
        domString += `</div>`;
      } else {
          console.log('false');
      }
    printToDom('projectsPage', domString);
    }
};


const init = () => {
    createProjectCards();
};
init();

