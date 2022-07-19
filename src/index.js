import './styles.css';
import { loadHomePage } from "./homePage.js";
import { loadMenuPage } from "./menuPage.js";
import { loadContactPage } from "./contactPage.js";
import Background from './background.jpg'

function initPage() {
    const homePageBtn = document.getElementById("homePage");
    const menuBtn = document.getElementById("menu");
    const contactBtn = document.getElementById("contact");

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