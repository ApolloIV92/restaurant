import { clearPage } from './index.js';
import Mozart from './mozart.jpg';

export function loadContactPage() {
    clearPage();

    const wrapper = document.getElementById("mainWrapper");
    const content = document.createElement('div');
    content.classList.add('contentContact');

    const header = document.createElement("h1");
    header.textContent = "Who are we?";
    header.classList.add('logo');

    const headerWrapper = document.createElement('div');
    headerWrapper.classList.add('headerWrapper')
    headerWrapper.appendChild(header);

    const mozartPic = new Image();
    mozartPic.src = Mozart;
    mozartPic.width = "400";

    const paraOne = document.createElement('p');
    paraOne.textContent = "The well rested already know our founder Mozart\
    Mattresses from his world acclaimed mattress empire. Now he is showing\
    the world his other passion- hot drinks. Mozart Mattresses has concocted\
    our menu carefully to pair with his own brand of mattresses and deliver\
    the best night's sleep possible."

    const paraTwo = document.createElement('p');
    paraTwo.textContent = "1-800-MATTRSS"

    const paraThree = document.createElement('p');
    paraThree.textContent = "3205 Mattress Lane";

    const paraFour = document.createElement('p');
    paraFour.textContent = "Dacula, GA 30019";
    

    content.appendChild(headerWrapper);
    content.appendChild(mozartPic);
    content.appendChild(paraOne);
    content.appendChild(paraTwo);
    content.appendChild(paraThree);
    content.appendChild(paraFour);

    wrapper.appendChild(content);

}