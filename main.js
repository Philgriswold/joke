const jokeComponent = document.querySelector(".dadJoke");

const API = {
    createJokes() {
        return fetch("https://icanhazdadjoke.com/", {
                method: "GET",
                headers: {
                    "accept": "application/json"
                },
            }).then(response => response.json())
            .then(result => jokeComponent.innerHTML = postJoke(result))
    }
}

const postJoke = (newJoke) => {
    return `
     <div>
        <p>Heres the joke!  ${newJoke.joke}</p>
    </div>`
}

API.createJokes();