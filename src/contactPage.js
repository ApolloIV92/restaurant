import { clearPage } from './index.js';

export function loadContactPage() {
    console.log("test");
    clearPage();
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    const para = document.createElement("p");
    header.textContent = "Contact us!";
    para.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.\
    Suscipit quasi harum minima amet, cumque saepe velit, \
    eum corrupti ipsa, expedita odit ab ipsum? Dolores \
    harum iure impedit exercitationem aliquid aspernatur."
    content.appendChild(header);
    content.appendChild(para);
}