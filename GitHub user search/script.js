const searchBtn = document.getElementById("searchBtn");
const result = document.getElementById("result");

searchBtn.addEventListener("click", () => {

    const username = document.getElementById("username").value;

    if(username === ""){
        result.innerHTML = "<p class='error'>Please enter a username.</p>";
        return;
    }

    fetch(`https://api.github.com/users/${username}`)
    .then(response => {

        if(!response.ok){
            throw new Error("User Not Found");
        }

        return response.json();

    })
    .then(data => {

        result.innerHTML = `
            <div class="card">
                <img src="${data.avatar_url}">
                <h2>${data.name || "No Name"}</h2>
                <p>@${data.login}</p>

                <p><strong>Followers:</strong> ${data.followers}</p>
                <p><strong>Following:</strong> ${data.following}</p>
                <p><strong>Repositories:</strong> ${data.public_repos}</p>

                <a href="${data.html_url}" target="_blank">
                    Visit Profile
                </a>
            </div>
        `;

    })
    .catch(error => {

        result.innerHTML = `<p class="error">${error.message}</p>`;

    });

});