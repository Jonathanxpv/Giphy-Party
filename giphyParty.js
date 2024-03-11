document.addEventListener("DOMContentLoaded", function () {
    console.log("Let's get this party started!");

    const form = document.getElementById("searchForm");
    const removeAllButton = document.getElementById("removeAllGifs");
    const ul = document.getElementById("gifs");

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        const searchTerm = document.getElementById("input").value;

        try {
            const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
                params: {
                    q: searchTerm,
                    api_key: "65HRsbwTXzw7KfRW8hgL0Fr74lzhyhVG",
                },
            });

            console.log("API Response:", res);

            // Render a random GIF from the current search results
            renderRandomGif(res.data.data);
        } catch (error) {
            console.error("Error fetching GIFS", error);
        }
    });

    removeAllButton.addEventListener("click", function () {
        clearGifs();
    });

    function renderRandomGif(gifs) {
        // Check if there are any GIFs in the current search results
        if (gifs.length > 0) {
            // Select a random index
            const randomIndex = Math.floor(Math.random() * gifs.length);
            const randomGif = gifs[randomIndex];

            const newLI = document.createElement("LI");
            const img = document.createElement("img");

            // Set the src attribute of the img element to the random GIF URL
            img.src = randomGif.images.fixed_height.url;

            newLI.appendChild(img);
            ul.appendChild(newLI);
        }
    }

    function clearGifs() {
        // Remove all child elements (GIFs) from the ul element
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    }
});

