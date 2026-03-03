document.addEventListener("DOMContentLoaded", function() {
    // open log button
    const modal = document.getElementById("formModal");
    const openBtns = document.querySelectorAll(".open-form-btn");
    const closeBtn = document.getElementById("closeFormBtn");

    if (modal && openBtns.length > 0) {
        openBtns.forEach(btn => {
            btn.addEventListener("click", function() {
                modal.showModal();
            });
        });
    }

    if (closeBtn && modal) {
        closeBtn.addEventListener("click", function() {
            modal.close();
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('mediaSearch');
    
    if (searchBar) {
        searchBar.addEventListener('input', () => {
            const query = searchBar.value.toLowerCase().trim();
            const cards = document.querySelectorAll('.grid .card');
            let hasVisibleCards = false;

            cards.forEach(card => {
                // Search specifically in h3 (title), p (author), and genre-list
                const title = card.querySelector('h3')?.innerText.toLowerCase() || "";
                const details = card.querySelector('.content')?.innerText.toLowerCase() || "";
                const combinedText = `${title} ${details}`;

                if (combinedText.includes(query)) {
                    card.style.display = "block";
                    hasVisibleCards = true;
                } else {
                    card.style.display = "none";
                }
            });

            // Optional: Handle "No results found" message
            const container = document.getElementById('book-container');
            let noResults = document.getElementById('no-results-msg');
            
            if (!hasVisibleCards && query !== "") {
                if (!noResults) {
                    noResults = document.createElement('p');
                    noResults.id = 'no-results-msg';
                    noResults.innerText = "No matches found... 🔍";
                    noResults.style.padding = "20px";
                    noResults.style.color = "var(--muted)";
                    container.parentNode.appendChild(noResults);
                }
            } else if (noResults) {
                noResults.remove();
            }
        });
    }
});

// add the button to make the search bar appear
document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.getElementsByClassName("mobile-search-button");
    const closeBtn = document.getElementsByClassName("close-btn");
    const searchBar = document.getElementById("mobileSearchBar");

    
    openBtn[0].addEventListener("click", () => {
        searchBar.style.display = "block";
    });

    closeBtn[0].addEventListener("click", () => {
        searchBar.style.display = "none";
    });


    // Close if user taps outside
    document.addEventListener('click', (e) => {
        if (!searchBar.contains(e.target) && !openBtn[0].contains(e.target)) {
            searchBar.style.display = "none";
        }
    });

    // Close on ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchBar.style.display = "none";
        }
    });
    
});


// test for mobile search 
document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('mobileMediaSearch');
    
    if (searchBar) {
        searchBar.addEventListener('input', () => {
            const query = searchBar.value.toLowerCase().trim();
            const cards = document.querySelectorAll('.grid .card');
            let hasVisibleCards = false;

            cards.forEach(card => {
                // Search specifically in h3 (title), p (author), and genre-list
                const title = card.querySelector('h3')?.innerText.toLowerCase() || "";
                const details = card.querySelector('.content')?.innerText.toLowerCase() || "";
                const combinedText = `${title} ${details}`;

                if (combinedText.includes(query)) {
                    card.style.display = "block";
                    hasVisibleCards = true;
                } else {
                    card.style.display = "none";
                }
            });

            // Optional: Handle "No results found" message
            const container = document.getElementById('book-container');
            let noResults = document.getElementById('no-results-msg');
            
            if (!hasVisibleCards && query !== "") {
                if (!noResults) {
                    noResults = document.createElement('p');
                    noResults.id = 'no-results-msg';
                    noResults.innerText = "No matches found... 🔍";
                    noResults.style.padding = "20px";
                    noResults.style.color = "var(--muted)";
                    container.parentNode.appendChild(noResults);
                }
            } else if (noResults) {
                noResults.remove();
            }
        });
    }
});