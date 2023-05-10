let pathName = new URL(import.meta.url).pathname;
let name = pathName.split("/").pop().replace(".js", "");

export class myServer extends HTMLElement{
    static async components(){
        return (await(await fetch(pathName.replace(".js", ".html"))).text());
    }
    constructor(){
        super();
        this.attachShadow({mode: "open"}); 
    }
    async getJson(){
        this.urlJson = `http://localhost:3000/servers`
            try {
                let res = await fetch(this.urlJson)
                let data = await res.json();
                console.log(data);
                /* data.forEach(dataServers => {
                  servers.insertAdjacentHTML(
                    "beforeend",     `
                    <div class="cards" id="${ip}">
                          <img src="${dataServers[0].favicon}" width="15%">
                          <div class="server_padre">
                              <div class="server_info">
                                  <h2>${name}</h2>
                                  <h2>${dataServers[0].players.now}/${dataServers[0].players.max} <img class="senal-icon" src="../img/signal.png" width="35px"></h2>
                              </div>
                              <div class="server_text">
                                  <h2>${dataServers[0].motd || dataServers[0].motd_json}</h2>
                              </div>
                          </div>
                      </div>
                  `
                  )
                }) */
              } catch (error) {
                console.log(error);
              }
    }
    connectedCallback(){
        Promise.resolve(myServer.components()).then(html=>{
            this.shadowRoot.innerHTML = html

            /* Querys selectores xd */

            this.myIndex = document.querySelector("#myIndex");
            this.myServer = document.querySelector("#myServer");

            this.anadirServidor = this.shadowRoot.querySelector("#anadir_servidor");

            this.guardarServidor = this.shadowRoot.querySelector("#guardar_servidor");
            this.cancelarServidor = this.shadowRoot.querySelector("#cancelar_servidor");

            this.cerrarServer = this.shadowRoot.querySelector("#cerrar_servers");

            /* Escuchadores de eventos */

            this.anadirServidor.addEventListener("click", (e)=>{
                e.preventDefault();
                this.modal = this.shadowRoot.querySelector("#modalsito");
                this.modal.classList.remove("modal_padre");
            });

            this.cerrarServer.addEventListener("click", (e)=>{
                e.preventDefault();
                this.myIndex.classList.remove("modal_padre");
                this.myServer.classList.add("modal_padre");
            });

            /* Escuchador guardar servidor */
        
            this.guardarServidor.addEventListener("click", (e) => {
                e.preventDefault();
                e.stopPropagation()
                this.form = this.shadowRoot.querySelector("#form");
                this.formData = Object.fromEntries(new FormData(this.form));
                console.log(this.formData);

                /* Url mineAPI & json server */

                this.url = `https://mcapi.us/server/status?ip=${this.formData.ip}`;
                this.urlJson = `http://localhost:3000/servers`

                /* Llama a la mineAPI */

                this.listAPI = async function () {
                    try {
                    const data = await fetch(this.url);
                    const data2 = await data.json();
                    try {

                        /* Postear datos mineAPI al json server */

                        const res = await fetch(this.urlJson, {
                            method: "POST",
                            body: JSON.stringify(data2),
                            headers: {"Content-Type": "application/json"}
                        });
                    } catch (error) {
                        console.log(error);
                    }
                    } catch (error) {
                    console.log(error);
                    }
                };

                this.listAPI();

                this.modal.classList.add("modal_padre");

                return false;
            });

            this.cancelarServidor.addEventListener("click", (e) => {
                e.preventDefault();
                this.modal.classList.add("modal_padre");
            });

        })
    }

}

customElements.define(name, myServer);