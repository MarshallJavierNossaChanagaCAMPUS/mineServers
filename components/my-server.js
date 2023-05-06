let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js", "");

console.log(name);

export class myServer extends HTMLElement{
    static async components(){
        return (await(await fetch(pathName.replace(".js", ".html"))).text());
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"}); 
    }
    connectedCallback(){
        Promise.resolve(myServer.components()).then(html=>{
            this.shadowRoot.innerHTML = html
        })
    }

}

customElements.define(name, myServer)