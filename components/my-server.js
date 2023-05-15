import { getServers, postServer } from "../api/api.js";
import config from "../storage/config.js";

export class myServer extends HTMLElement {
    static url = import.meta.url;
    static async components() {
        return await ((await fetch(config.uri(myServer.url))).text());
    };
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    };
    handleEvent(e) {
        e.preventDefault();
        (e.type == "click") ? this.worker() : undefined;
    };
    async worker(){
        this.form = this.shadowRoot.querySelector("#form");

        this.data = Object.fromEntries(new FormData(this.form));

        this.dataAPI;

        const listServer  = async () => {
            try {
                let res = await fetch(`https://mcapi.us/server/status?ip=${this.data.ip}`);
                this.dataAPI = await res.json();
                return this.dataAPI
            } catch (error) {
                console.log(error);
            };
        }

        await listServer();

        await postServer(this.dataAPI);

       
    }
    async showServers(){
        console.log("hola4");

        

        this.dataJson;

        addEventListener("DOMContentLoaded", (e) => {
            const nose = async () => {


                
                
            const getServers = async () => {
                let url = `http://localhost:3000/servers`;
                try {
                    let res = await fetch(url);
                    this.dataJson = await res.json();
                    return this.dataJson;
                } catch (error) {
                    console.log(error);
                }
            };

            await getServers();

            const ws = new Worker("./storage/worker.js", {type: "module"});
    
            ws.postMessage({module: "postServer", data: this.dataJson});
    
            ws.addEventListener("message", (e) => {
                this.serversCards = this.shadowRoot.querySelector('#servers');
                console.log(e.data);
                console.log(this.serversCards);

                this.serversCards.innerHTML = e.data

                ws.terminate();
            })
            }
            nose()
        })
    }
    connectedCallback() {
        this.showServers()
        Promise.resolve(myServer.components()).then(html => {
            this.shadowRoot.innerHTML = html;

            this.index = document.querySelector("#myIndex");
            this.servers = document.querySelector("#myServer");

            this.eliminar = this.shadowRoot.querySelector("#eliminar_servidor");
            this.eliminador = this.shadowRoot.querySelector("#eliminador");
            this.anadir = this.shadowRoot.querySelector("#anadir_servidor");
            this.cerrar = this.shadowRoot.querySelector("#cerrar_servers");

            this.anadirModal =  this.shadowRoot.querySelector("#modalsito");

            this.guardarModal = this.shadowRoot.querySelector("#guardar_servidor");
            this.cerrarModal = this.shadowRoot.querySelector("#cancelar_servidor");

            this.eliminar.addEventListener("click", (e) => {
                
                this.eliminador.classList.remove("modal_padre");
                
            })

            this.eliminador.addEventListener("click", (e) => {
                console.log("chaito chao");
            })

            this.anadir.addEventListener("click", (e) => {
                this.anadirModal.classList.remove("modal_padre");
            });

            this.guardarModal.addEventListener("click", (e) => {
                this.anadirModal.classList.add("modal_padre");
                this.handleEvent(e);
            });

            this.cerrarModal.addEventListener("click", (e) => {
                this.anadirModal.classList.add("modal_padre");
            })

            this.cerrar.addEventListener("click", (e) => {
                this.index.classList.remove("modal_padre");
                this.servers.classList.add("modal_padre");
            });
        });
    };
};

customElements.define(config.name(myServer.url), myServer);