let worker = {
    postServer(e) {
        let plantilla;

        e.forEach(element => {
            plantilla += `
            <div class="cards">
                <img src="${element.favicon}" width="19%">
                <div class="server_padre">
                    <div class="server_info">
                        <h2>Servidor de minecraft</h2>
                        <h2>${element.players.now}/${element.players.max} <img class="senal-icon" src="../img/signal.png" width="35px"></h2>
                    </div>
                    <div class="server_text">
                        <h2>${element.motd || element.motd_json}</h2>
                    </div>
                </div>
            </div>
            `
        });

        return plantilla;
    }
}

self.addEventListener("message", (e) => {
    postMessage(worker[`${e.data.module}`](e.data.data))
})