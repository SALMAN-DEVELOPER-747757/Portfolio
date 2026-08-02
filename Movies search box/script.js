const apiKey = "ca3c7622";

const searchBtn = document.querySelector("button");
const movieInput = document.getElementById("movieName");
const result = document.getElementById("result");

async function searchMovie() {
    const movie = movieInput.value.trim();

    if (movie === "") {
        result.innerHTML = `
            <h2 class="error">Please enter a movie name.</h2>
        `;
        return;
    }

    const url = `https://www.omdbapi.com/?t=${encodeURIComponent(movie)}&apikey=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.Response === "True") {
            result.innerHTML = `
                <div class="movie">
                    <img src="${data.Poster}" alt="${data.Title}">

                    <div class="info">
                        <h2>${data.Title}</h2>

                        <p><strong>Year:</strong> ${data.Year}</p>

                        <p><strong>Genre:</strong> ${data.Genre}</p>

                        <p><strong>Runtime:</strong> ${data.Runtime}</p>

                        <p><strong>IMDb Rating:</strong> ⭐ ${data.imdbRating}</p>

                        <p><strong>Released:</strong> ${data.Released}</p>

                        <p><strong>Director:</strong> ${data.Director}</p>

                        <p><strong>Actors:</strong> ${data.Actors}</p>

                        <p><strong>Language:</strong> ${data.Language}</p>

                        <p><strong>Country:</strong> ${data.Country}</p>

                        <p><strong>Awards:</strong> ${data.Awards}</p>

                        <p><strong>Plot:</strong> ${data.Plot}</p>
                    </div>
                </div>
            `;
        } else {
            result.innerHTML = `
                <h2 class="error">${data.Error}</h2>
            `;
        }

    } catch (error) {
        result.innerHTML = `
            <h2 class="error">Unable to connect. Please check your internet connection.</h2>
        `;
        console.error(error);
    }
}

// Search when button is clicked
searchBtn.addEventListener("click", searchMovie);

// Search when Enter key is pressed
movieInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        searchMovie();
    }
});