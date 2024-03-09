console.log("Let's get this party started!");

async function getGif() {
    const searchTerm = document.getElementById("searchInput").value;

    try {
        const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
            params: {
                q: searchTerm,
                api_key: "65HRsbwTXzw7KfRW8hgL0Fr74lzhyhVG",
            },
        });

        console.log("API Response:", res);
        renderGifs(res.data.data);
    } catch (error) {
        console.error("Error fetching GIFS", error);
    }
}

function renderGifs(gifs) {
    console.log("Rendering GIFs:", gifs);

    const ul = document.querySelector("#gifs");

    // Clear previous results
    ul.innerHTML = '';

    for (let gif of gifs) {
        const newLI = document.createElement("LI");
        ul.append(newLI);
    }
}

const btn = document.querySelector("#getGif");
btn.addEventListener('click', getGif);
