import Pic from './tea.jpg';
import { clearPage } from './index.js';

export function loadHomePage() {
    clearPage();

    const wrapper = document.getElementById('mainWrapper');

    const content = document.createElement('div')
    content.classList.add('contentHome');

    const headerWrapper = document.createElement('div');
    headerWrapper.classList.add('headerWrapper');

    const header = document.createElement("h1");
    header.textContent = "Sleepyhead Cafe"
    header.classList.add('logo');

    const subHeader = document.createElement('h2');
    subHeader.textContent = "A Subsidiary of Mozart's Mattresses";
    subHeader.classList.add('subLogo');

    const img = new Image();
    img.src = Pic;
    img.setAttribute("width", 400);

    const para = document.createElement("p");
    para.textContent = "Are you ready for the sleep of your dreams? Come see\
    us at our new Caffeine-Free cafe. Try our Chai Tea, Chamomile Elixir,\
    or the favorite of Mozart Mattresses himself- the Sleepyhead Special\
    blend."
 

    headerWrapper.appendChild(header);
    headerWrapper.appendChild(subHeader);

    content.appendChild(headerWrapper);
    content.appendChild(img);
    content.appendChild(para);

    wrapper.appendChild(content);
}
