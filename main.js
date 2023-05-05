let url = "https://mcapi.us/server/status?ip=mc.universocraft.com";
let servers = document.querySelector(".servers");
let server = [];

const listAPI = async function () {
    try {
        const data = await fetch(url);
        const data2 = await data.json();
        server.push(data2)
        
    } catch (error) {
        console.log(error);
    }
}

console.log(server);

const showServer = async function () {
    await listAPI();
    servers.insertAdjacentHTML("beforeend", `
    <div class="server">
        <img src="${server[0].favicon}" width="15%">
        <div class="server_padre">
            <div class="server_info">
                <h2>Servidor de minecraft</h2>
                <h2>777/777</h2>
            </div>
            <div class="server_text">
                <h2>${server[0].motd}</h2>
            </div>
        </div>
    </div>
`)
}

showServer()

