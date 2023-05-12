let worker = {  
    async postServer(data2){
        console.log(data2);
    }
}

self.addEventListener("message", (e) => {
    postMessage(worker[`${e.data.module}`](e.data.data))
})