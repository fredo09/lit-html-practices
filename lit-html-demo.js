import { html, render } from "./node_modules/lit-html/lit-html.js";

const bool = true;

const miTemplate = (sitioWeb) => {
  return html` <h1>Me Gusta ${sitioWeb}</h1> `;
};

const miTemplateSecond = (gustos) => {
  return html`
    <h2>Mis Gustos son:</h2>
    <ul>
      ${gustos.map((gusto) => {
        return html` <li>${gusto}</li> `;
      })}
    </ul>
  `;
};

const ObjectoTemplateResult1 = miTemplate("DesarrolloWeb.");
const ObjectoTemplateResult2 = miTemplate("Fred-Academy.");
const ObjectoTemplateResult3 = miTemplateSecond([
  "Fotografia",
  "programar",
  "Videojuegos",
  "futbol",
  "leer",
]);

render(ObjectoTemplateResult1, document.getElementById("ej1"));
render(ObjectoTemplateResult2, document.getElementById("ej2"));
render(ObjectoTemplateResult3, document.getElementById("ej3"));
