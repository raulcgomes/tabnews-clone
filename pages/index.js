function getDateTime(){
    const now = new Date();
    const hour = now.getHours();
    const minute = now.getMinutes();
    return `${hour}:${minute}`;
}

function Home(){
    return <h1>Clau esse link funciona? E isso está certo? {getDateTime()}</h1>
}

export default Home;