import { html, render } from "./node_modules/lit-html/lit-html.js";

class PasswordTexts extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.password = this.getAttribute("password");
  }

  template() {
    return html` <span
        >Your password is
        <strong
          >${this.isValid(this.password) ? "valid 👍" : "INVALID 👎"}</strong
        ></span
      >
      ${this.isValid(this.password)
        ? html`<div>Strength: <progress value=${
            this.password.length - 3
          } max="5"</progress></div>`
        : ``}`;
  }

  set password(value) {
    this._password = value;
    this.setAttribute("password", this._password);
    this.update();
  }

  get password() {
    return this._password;
  }

  update() {
    render(this.template(), this.shadowRoot, { eventContext: this });
  }

  isValid(passwd) {
    /**
     * La contraseña es válida si:
     * tiene al menos 4
     * Tiene al menos una letra minúscula.
     * Tiene al menos una letra mayúscula.
     * tiene al menos un dígito
     **/
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,}/;
    return re.test(passwd);
  }
}

//Definimos nuectro Web Component
customElements.define("password-checker", PasswordTexts);
