

    document.addEventListener('DOMContentLoaded', function() {
        const watchlistContainer = document.getElementById('watchlist');
    
        // Function to load watchlist items from localStorage
        function loadWatchlist() {
            const watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
            if (watchlistContainer) {
                watchlistContainer.innerHTML = watchlist.map(movie => `
                    <li>
                       <img src="./img/Default.jpeg" alt="${movie.title}" class="movie-image"> 
                       <span>${movie.title}</span> </ul>
                       <button onclick="removeFromWatchlist(this)">Remove</button> 
                    </li>
                `).join("");
            } else {
                console.error('Watchlist container element not found.');
            }
        }
    // Function to remove a movie from watchlist
    window.removeFromWatchlist = function(button) {
        const item = button.parentElement;
        const title = item.querySelector('span').textContent;
        let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
        watchlist = watchlist.filter(movie => movie.title !== title);
        localStorage.setItem('watchlist', JSON.stringify(watchlist));
        loadWatchlist(); // Reload watchlist after removing
    };

    // Load watchlist on page load
    loadWatchlist();
});