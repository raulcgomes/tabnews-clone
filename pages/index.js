function getDateTime(){
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    return `${hour}:${minute}`;
}

function Home(){
    return <h1>Clau esse link funciona? E isso está certo? {getDateTime()}</h1>
}

if(typeof getDataTime === 'function'){
    console.log("A função getDateTime está definida corretamente.");
} else {
    console.log("A função getDateTime não está definida.");
}

export default Home;