const elements = [
    ["link", {type: "text/css", rel: "stylesheet", href: "https://pyscript.net/alpha/pyscript.css"}],
    ["script", {defer: "true", type: "text/javascript", src: "https://pyscript.net/alpha/pyscript.js"}],
];

for (let [tagName, attributes] of elements) {
    let element = document.createElement(tagName);
    Object.entries(attributes).forEach(args => element.setAttribute(...args));
    document.body.appendChild(element);
}

document.addEventListener("DOMContentLoaded", () => {
    const pyScript = document.createElement("py-script");
    pyScript.innerHTML = document.scripts[document.scripts.length - 1].innerText.trim();
    document.body.appendChild(pyScript);
});