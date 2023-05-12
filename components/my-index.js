import config from "../storage/config.js";

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
            this.myServer = document.querySelector("#myServer");
            this.myIndex = document.querySelector("#myIndex");
            this.multiplayer = this.shadowRoot.querySelector("#multiplayer");
            this.multiplayer.addEventListener("click", (e)=>{
                this.myIndex.classList.add("modal_padre")
                this.myServer.classList.remove("modal_padre")
            })
        })
    };
};

customElements.define(config.name(myIndex.url), myIndex);