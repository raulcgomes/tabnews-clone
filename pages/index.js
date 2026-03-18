function getDateTime(){
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    return `${hour}:${minute}`;
}

function Home(){
    return <h1>Desafio do projeto era impactar a vida de alguém que é importante pra mim. <br></br>
            Te amo mais que tudo nesse mundo! Sou muito grato por vc! <br></br>
            E esse horario está certo? {getDateTime()}</h1>
}

if(typeof getDataTime === 'function'){
    console.log("A função getDateTime está definida corretamente.");
} else {
    console.log("A função getDateTime não está definida.");
}

export default Home;