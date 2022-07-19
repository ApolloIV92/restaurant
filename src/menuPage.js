import { clearPage } from './index.js';
import MenuPictureOne from './menuOne.jpg'

export function loadMenuPage() {
    clearPage();

    const wrapper = document.getElementById('mainWrapper');

    const content = document.createElement('div');
    content.classList.add('contentMenu');

    const header = document.createElement("h1");
    header.textContent = "Menu";
    header.classList.add('logo');

    const headerWrapper = document.createElement('div');
    headerWrapper.classList.add('headerWrapper')

    const para = document.createElement("p");
    para.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.\
    Suscipit quasi harum minima amet, cumque saepe velit, \
    eum corrupti ipsa, expedita odit ab ipsum? Dolores \
    harum iure impedit exercitationem aliquid aspernatur."



    headerWrapper.appendChild(header);
    content.appendChild(headerWrapper);
    content.appendChild(menuItem("Chai Tea", MenuPictureOne, "test"));
    content.appendChild(para);

    wrapper.appendChild(content);
}


function menuItem(name, img, description) {
    const title = document.createElement("h1");
    title.textContent = name;
    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;
    const picture = new Image();
    picture.src = img;
    picture.width = "300";

    const wrapper = document.createElement("div");
    wrapper.classList.add("menuItem");
    wrapper.appendChild(title);
    wrapper.appendChild(picture);
    wrapper.appendChild(itemDescription);

    return wrapper;
}