const watchlistContainer = document.getElementById("watchlist");

function displayWatchlist() {
    const watchlistItems = JSON.parse(localStorage.getItem('watchlist')) || [];
    watchlistContainer.innerHTML = watchlistItems.map(movie => `
        <div class="watchlist-item">
            <img src="${movie.image}" alt="${movie.title}" style="width: 100px; height: auto;">
            <span>${movie.title}</span>
            <button onclick="removeFromWatchlist('${movie.title}')">Remove</button>
        </div>
    `).join("");
}

window.removeFromWatchlist = function(title) {
    let watchlistItems = JSON.parse(localStorage.getItem('watchlist')) || [];
    watchlistItems = watchlistItems.filter(movie => movie.title !== title);
    localStorage.setItem('watchlist', JSON.stringify(watchlistItems));
    displayWatchlist();
};

// Load the watchlist from local storage on page load
window.addEventListener('load', displayWatchlist);