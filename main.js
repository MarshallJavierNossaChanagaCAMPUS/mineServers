
let servers = document.querySelector(".servers");
let server = [];
let header = document.querySelector("#header");
let modal = document.querySelector(".modal_padre");
let anadirServidor = document.querySelector("#anadir_servidor");
let guardarServidor = document.querySelector("#guardar_servidor");
let cancelarServidor = document.querySelector("#cancelar_servidor");


/* const listAPI = async function () {
    try {
        const data = await fetch(url);
        const data2 = await data.json();
        server.push(data2)
        
    } catch (error) {
        console.log(error);
    }
}

 const showServer = async function () {
    await listAPI();
    servers.insertAdjacentHTML("beforeend", `
    <div class="server">
        <img src="${server[0].favicon}" width="15%">
        <div class="server_padre">
            <div class="server_info">
                <h2>Servidor de minecraft</h2>
                <h2>${server[0].players.now}/${server[0].players.max} <img class="senal-icon" src="../img/signal.png" width="35px"></h2>
            </div>
            <div class="server_text">
                <h2>${server[0].motd}</h2>
            </div>
        </div>
    </div>
`)
} 

showServer() */

anadirServidor.addEventListener("click", (e)=>{
    e.preventDefault();
    header.classList.add("modal_padre");
    modal.classList.remove("modal_padre");
})

cancelarServidor.addEventListener("click", (e)=>{
    e.preventDefault();
    header.classList.remove("modal_padre");
    modal.classList.add("modal_padre");
})

guardarServidor.addEventListener("click", (e)=>{
    e.preventDefault();
    let name = document.querySelector('input[name="name"]').value;
    let ip = document.querySelector('input[name="ip"]').value;
    let url = `https://mcapi.us/server/status?ip=${ip}`;

    const listAPI = async function () {
        try {
            const data = await fetch(url);
            const data2 = await data.json();
            server.unshift(data2)
            
        } catch (error) {
            console.log(error);
        }
    }
    
     const showServer = async function () {
        await listAPI();
        servers.insertAdjacentHTML("beforeend", `
        <div class="server">
            <img src="${server[0].favicon}" width="15%">
            <div class="server_padre">
                <div class="server_info">
                    <h2>${name}</h2>
                    <h2>${server[0].players.now}/${server[0].players.max} <img class="senal-icon" src="../img/signal.png" width="35px"></h2>
                </div>
                <div class="server_text">
                    <h2>${server[0].motd}</h2>
                </div>
            </div>
        </div>
    `)
    } 
    
    showServer()

    console.log(name);
    console.log(ip);

    header.classList.remove("modal_padre");
    modal.classList.add("modal_padre");

    console.log(server);
})