const link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href = "https://pyscript.net/alpha/pyscript.css";
document.body.appendChild(link);

const script = document.createElement("script");
script.defer = true;
script.type = "text/javascript";
script.src = "https://pyscript.net/alpha/pyscript.js";
document.body.appendChild(script);

document.addEventListener("DOMContentLoaded", () => {
    const pyScript = document.createElement("py-script");
    pyScript.innerHTML = document.scripts[document.scripts.length - 1].innerText.trim();
    document.body.appendChild(pyScript);
});