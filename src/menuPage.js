import { clearPage } from './index.js';
import MenuPictureOne from './menuOne.jpg'
import MenuPictureTwo from './menuTwo.jpg';
import MenuPictureThree from './menuThree.jpg';

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

    headerWrapper.appendChild(header);
    content.appendChild(headerWrapper);
    content.appendChild(menuItem("Chai Tea", MenuPictureOne, "The basic\
    -but still mighty- Chai Tea. Price: $4.99"));
    content.appendChild(menuItem("Chamomile Elixir", MenuPictureTwo, "Relaxing\
    and delicious Chamomile tea. Fit to soothe all of your anxieties. Price: \
    $3.99"))
    content.appendChild(menuItem("Sleepyhead Special", MenuPictureThree, "Do\
    you truly wish to experience complete serenity? To slumber without care,\
    and to escape to the ethereal world of Dreams? Imbibe of our founder's\
    own special concoction, the Sleepyhead Special.\
    Price: 12x Violet Crystals"))

    wrapper.appendChild(content);
}


function menuItem(name, img, description) {
    const title = document.createElement("h1");
    title.textContent = name;

    const header = document.createElement('div');
    header.classList.add('menuItemHeader');
    header.appendChild(title);

    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;
    itemDescription.classList.add('menuItemText');

    const picture = new Image();
    picture.src = img;
    picture.width = "300";

    const wrapper = document.createElement("div");
    wrapper.classList.add("menuItem");

    wrapper.appendChild(header);
    wrapper.appendChild(picture);
    wrapper.appendChild(itemDescription);

    return wrapper;
}