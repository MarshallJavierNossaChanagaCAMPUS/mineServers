import config from "../storage/config.js";

export class myServer extends HTMLElement {
  static url = import.meta.url;
  static async components() {
    return await ((await fetch(config.uri(myServer.url))).text());
  };
  constructor(){
    super();
    this.attachShadow({mode: "open"});
  };
  connectedCallback(){
    Promise.resolve(myServer.components()).then( html => {
      this.shadowRoot.innerHTML = html;
      this.cerrar = this.shadowRoot.querySelector("#cerrar_servers")
    });
  };
};

customElements.define(config.name(myServer.url), myServer);