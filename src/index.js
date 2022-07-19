import './styles.css';
import { loadHomePage } from "./homePage.js";
import { loadMenuPage } from "./menuPage.js";
import { loadContactPage } from "./contactPage.js";
import Github from './github-logo.png';


function initPage() {
    const homePageBtn = document.getElementById("homePage");
    const menuBtn = document.getElementById("menu");
    const contactBtn = document.getElementById("contact");

    
    
    const footer = document.getElementById('footer');
    
    const githubLogo = new Image();
    githubLogo.src = Github;
    githubLogo.width = "40";

    const githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/ApolloIV92/';
    githubLink.innerHTML = "<img src="+Github+" width=40></img>";

    const footerText = document.createElement('span');
    footerText.innerHTML = "Created by Rick Orzel for\
     <a href=https://www.theodinproject.com/>The Odin Project.</a>"

     const creditText = document.createElement('span');
     creditText.innerHTML = "Background image by\
     <a href=https://unsplash.com/@stefany_andrade>Stefany Andrade</a>\
     on <a href=https://unsplash.com/>Unsplash.</a>\
     <a href=https://github.com/ApolloIV92/restaurant/blob/main/README.md>\
      Additional image credits.</a>"

    footer.appendChild(githubLink);
    footer.appendChild(footerText);
    footer.appendChild(creditText);

    homePageBtn.addEventListener("click", () => loadHomePage());
    menuBtn.addEventListener("click", () => loadMenuPage());
    contactBtn.addEventListener("click", () => loadContactPage());
}

export function clearPage() {
    const wrapper = document.getElementById("mainWrapper");
    if(wrapper.children[1]) {
        wrapper.removeChild(wrapper.children[1]);
    }
}

initPage();

loadHomePage();
