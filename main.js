// printToDom function 
const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint;
};

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
    printToDom('mainDiv', domString);
    }
};

// const hideProjects = () => {
//     let domString = '';
//     console.log(domString);
//     printToDom('mainDiv', domString);
// };


const bioDivBuilder = (e) => {
    console.log(e);
    e.preventDefault();
    let domString = '';
        domString += `<div class="mainDiv topPage" id="bioPage">`;
        domString += `    <div class="">`;
        domString += `      <h1 id="aboutH1"><span id="josh2">Josh</span>Pantana</h1>`;
        domString += `     <h3></em>software developer</em></h3>`;
        domString += `     <p id="bio">Hello! I’m Josh Pantana. I’m a full-stack software developer residing in Nashville, TN. I have a serious passion for designing an intuitive and inspiring UI/UX experience. Nearly 6 weeks into my journey of becoming a full stack web developer, I'm in love with the process of creating highly functional, aesthetically engaging sites. Lets make the web a more beautiful place together!</p>`;
        domString += `    </div>`;
        domString += `  </div>`;
        printToDom('mainDiv', domString);
        console.log(domString);
        buttonEvents();
};

const techDivBuilder = (e) => {
    e.preventDefault();
    let domString = '';
        domString += `        <div id="triangleBackground">`
        domString += `            <div class="fullPage" id="technologiesPage">`
        domString += `                <h1 class="" id="techProf">Technologies</h1>`
        domString += `            </div>`
        domString += `                <ul class="tech-container container"> `
        domString += `                    <li>`
        domString += `                        <div class="techImgDiv">`
        domString += `                            <img data-wow-delay=".1s" class="techImg wow bounceIn logo-width" 
                                                    src="imgs/html5.png" style="visibility: visible; animation-delay: 0.1s; 
                                                    animation-name: pulse;">`
        domString += `                        <h3 class="techH3">HTML5</h3>`
        domString += `                        </div>`
        domString += `                    </li>`
        domString += `                    <li></li>`
        domString += `                        <div class="techImgDiv">`
        domString += `                            <img data-wow-delay=".1s" class="techImg wow bounceIn logo-width" 
                                                    src="imgs/css3.png" style="visibility: visible; animation-delay: 0.1s; 
                                                    animation-name: pulse;">`
        domString += `                        <h3 class="techH3">CSS3</h3>`
        domString += `                        </div>`
        domString += `                    </li>`
        domString += `                    <li>`
        domString += `                        <div class="techImgDiv">`
        domString += `                            <img data-wow-delay=".1s" class="techImg wow bounceIn logo-width" 
                                                    src="imgs/JS6_Logo.png" style="visibility: visible; animation-delay: 0.1s; 
                                                    animation-name: pulse;">`
        domString += `                        <h3 class="techH3">JavaScript</h3>`
        domString += `                        </div>`
        domString += `                    </li>`
        domString += `                    <li>`
        domString += `                        <div class="techImgDiv">`
        domString += `                            <img data-wow-delay=".1s" class="techImg wow bounceIn logo-width" 
                                                    src="imgs/bootstrap.png" style="visibility: visible; animation-delay: 0.1s; 
                                                    animation-name: pulse;">`
        domString += `                        <h3 class="techH3">Bootstrap</h3>`
        domString += `                        </div>`
        domString += `                    </li>`
        domString += `                    <li>`
        domString += `                        <div class="techImgDiv">`
        domString += `                            <img data-wow-delay=".1s" class="techImg wow bounceIn logo-width" 
                                                    src="imgs/xcode-logo.png" style="visibility: visible; animation-delay: 0.1s; 
                                                    animation-name: pulse;">`
        domString += `                        <h3 class="techH3">xcode</h3>`
        domString += `                        </div>`
        domString += `                    </li>`
        domString += `                </ul>`
        domString += `            </div>`
        domString += `         </div>`
        console.log(domString);
        printToDom('mainDiv', domString);
        buttonEvents();
};

// const projectsDomBuilder = (e) => {
//     e.preventDefault();
//     let domstring = '';
//         domstring += `<div class="projects-page clearfix">`;
//         domstring += `  <div id="projectsDiv">`;
//         domstring += `      <h1 id="projectsH1" class="projectsH" id="">Projects</h1>`;
//         domstring += `  </div>`;
//         domstring += `  <div class="jsPage" id="projectsPage"></div>`;
//         domstring += `</div>`;
//         console.log(domstring);
//     createProjectCards();
//     buttonEvents();
// };

const buttonEvents = () => {
    document.getElementById('bioLink').addEventListener('click', bioDivBuilder);
    document.getElementById('techLink').addEventListener('click', techDivBuilder);
    document.getElementById('projectLink').addEventListener('click', projectsDomBuilder);

};


const init = () => {
    buttonEvents();
};

init();


