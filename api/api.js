let url = `http://localhost:3000/servers`;


//Obtener el json server
export const getServers = async () => {
    try {
        let res = await fetch(url);
        let dataJson = await res.json();
        return dataJson;
    } catch (error) {
        console.log(error);
    }
}

//Subir servidor al json server
export const postServer = async (server) => {
    try {
        await fetch (url, {
            method: "POST",
            body: JSON.stringify(server),
            headers: {"Content-Type" : "application/json"}
        })
    } catch (error) {
        console.log(error);
    }
    
}

//Eliminar servidor por id
export const deleteServer = async (id) => {
    try {
        await fetch(`${url}/${id}`, {
            method: "DELETE"
        })
    } catch (error) {
        console.log(error);
    } 
}