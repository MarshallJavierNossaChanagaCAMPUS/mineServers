import config from "./config.js";

export default class myIndex extends HTMLElement{
    static url = import.meta.url;
    static async components(){
        return await ((await fetch(config.uri(myIndex.url))).text());
    };
    constructor(){
        super();
        this.attachShadow({mode: "open"});
        Promise.resolve(myIndex.components()).then(html => {
            this.shadowRoot.innerHTML = html;
        })
    };
};

customElements.define(config.name(myIndex.url), myIndex);