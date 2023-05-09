import "./components/my-server.js";
import  "./components/my-index.js";

let dataServers = [];

/* Botones index */

/* let index = document.querySelector("#main_index");
let multiplayerBtn = document.querySelector("#multiplayer"); */

/* Botones servers */

/* let serverss = document.querySelector("#container_multiplayer");
let servers = document.querySelector(".servers");

let anadirServidor = document.querySelector("#anadir_servidor");
let cerrar = document.querySelector("#cerrar_servers"); */

/* Botones modal */

/* let modal = document.querySelector(".modal_padre");

let guardarServidor = document.querySelector("#guardar_servidor");
let cancelarServidor = document.querySelector("#cancelar_servidor");

serverss.classList.add("modal_padre"); */

/* Eventos de escucha */

/* multiplayerBtn.addEventListener("click", (e) => {
  e.preventDefault();
  index.classList.add("modal_padre");
  serverss.classList.remove("modal_padre");
});

anadirServidor.addEventListener("click", (e) => {
  e.preventDefault();
  serverss.classList.add("modal_padre");
  modal.classList.remove("modal_padre");
});

cerrar.addEventListener("click", (e) => {
  e.preventDefault();
  index.classList.remove("modal_padre");
  serverss.classList.add("modal_padre");
});

cancelarServidor.addEventListener("click", (e) => {
  e.preventDefault();
  serverss.classList.remove("modal_padre");
  modal.classList.add("modal_padre");
});

guardarServidor.addEventListener("click", (e) => {
  e.preventDefault();

  let name = document.querySelector('input[name="name"]').value;
  let ip = document.querySelector('input[name="ip"]').value;
  let url = `https://mcapi.us/server/status?ip=${ip}`;

  const listAPI = async function () {
    try {
      const data = await fetch(url);
      const data2 = await data.json();
      dataServers.unshift(data2);
    } catch (error) {
      console.log(error);
    }
  };

  const showServer = async function () {
    await listAPI();
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
    );
  };

  showServer();

  serverss.classList.remove("modal_padre");
  modal.classList.add("modal_padre");
}); */

