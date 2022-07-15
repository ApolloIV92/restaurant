export function loadPage() {
    const content = document.getElementById("content");
    const header = document.createElement("h1");
    const img = document.createElement("img");
    const para = document.createElement("p");

    header.textContent = "Wonderful tacos!"
    img.src = "../src/tacos.jpg";
    img.setAttribute("width", 500);
    para.textContent = "Lorem ipsum dolor sit amet consectetur, adipisicing elit.\
    Suscipit quasi harum minima amet, cumque saepe velit, \
    eum corrupti ipsa, expedita odit ab ipsum? Dolores \
    harum iure impedit exercitationem aliquid aspernatur."

    content.appendChild(header);
    content.appendChild(img);
    content.appendChild(para);
}

