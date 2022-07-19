import Pic from './tea.jpg';
import { clearPage } from './index.js';

export function loadHomePage() {
    clearPage();

    const wrapper = document.getElementById('mainWrapper');
    const content = document.createElement('div')
    content.classList.add('contentHome');
    const headerWrapper = document.createElement('div');
    const header = document.createElement("h1");
    const img = new Image();
    img.src = Pic;
    const para = document.createElement("p");

    header.textContent = "Sleepyhead Cafe"
    header.classList.add('logo');
    headerWrapper.classList.add('headerWrapper');
    img.src = Pic;
    img.setAttribute("width", 400);
    para.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.\
    Suscipit quasi harum minima amet, cumque saepe velit, \
    eum corrupti ipsa, expedita odit ab ipsum? Dolores \
    harum iure impedit exercitationem aliquid aspernatur."

    headerWrapper.appendChild(header);

    content.appendChild(headerWrapper);
    content.appendChild(img);
    content.appendChild(para);

    wrapper.appendChild(content);
}
