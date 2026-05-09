function getDateTime() {
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();
  return `${hour}:${minute}`;
}

function Home() {
  return (
    <h1 suppressHydrationWarning>
      Desafio do projeto era impactar a vida de alguém que é importante pra mim.{" "}
      <br></br>
      Esse horario está certo? {getDateTime()}
    </h1>
  );
}

if (typeof getDateTime === "function") {
  console.log("A função getDateTime está definida corretamente.");
} else {
  console.log("A função getDateTime não está definida.");
  console.log(typeof getDateTime);
}

export default Home;
