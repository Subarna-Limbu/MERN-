async function getJoke() {
  const res = await fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json"
    }
  });
  const data = await res.json();
  console.log(data.joke);
}

getJoke();
