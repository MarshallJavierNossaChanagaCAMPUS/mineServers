import {
    getServers,
    postServer,
    deleteServer
} from "../api/api.js";

let worker = {
    postServer(e) {
        console.log(e);
        let plantilla = `
        <div class="cards">
            <img src="${e.favicon}" width="19%">
            <div class="server_padre">
                <div class="server_info">
                    <h2>Servidor de minecraft</h2>
                    <h2>${e.players.now}/${e.players.max} <img class="senal-icon" src="../img/signal.png" width="35px"></h2>
                </div>
                <div class="server_text">
                    <h2>${e.motd || e.motd_json}</h2>
                </div>
            </div>
        </div>
        `

        return plantilla;
    }
}

self.addEventListener("message", (e) => {
    postMessage(worker[`${e.data.module}`](e.data.data))
})