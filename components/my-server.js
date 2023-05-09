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

            this.myIndex = document.querySelector("#myIndex");
            this.myServer = document.querySelector("#myServer");

            this.anadirServidor = this.shadowRoot.querySelector("#anadir_servidor");

            this.guardarServidor = this.shadowRoot.querySelector("#guardar_servidor");
            this.cancelarServidor = this.shadowRoot.querySelector("#cancelar_servidor");

            this.cerrarServer = this.shadowRoot.querySelector("#cerrar_servers");

            this.anadirServidor.addEventListener("click", (e)=>{
                this.modal = this.shadowRoot.querySelector("#modalsito")
                this.modal.classList.remove("modal_padre")
            })

            this.cerrarServer.addEventListener("click", (e)=>{
                this.myIndex.classList.remove("modal_padre")
                this.myServer.classList.add("modal_padre")
            })

            this.guardarServidor.addEventListener("click", (e) => {



                this.modal.classList.add("modal_padre")
            })

            this.cancelarServidor.addEventListener("click", (e) => {
                this.modal.classList.add("modal_padre")
            })
        })
    }

}

customElements.define(name, myServer)