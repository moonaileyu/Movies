const movies = [
    {
        number: 1,
        movieName: "Metropolis",
        year: 1927,
        rating: 8.3
    },
    {
        number: 2,
        movieName: "City Lights",
        year: 1931,
        rating: 8.5
    },
    {
        number: 3,
        movieName: "Modern Times",
        year: 1936,
        rating: 8.5
    },
    {
        number: 4,
        movieName: "Citizen Kane",
        year: 1941,
        rating: 7.9
    },
    {
        number: 5,
        movieName: "Bicycle Thieves",
        year: 1948,
        rating: 8.3
    },
    {
        number: 6,
        movieName: "Rashomon",
        year: 1950,
        rating: 8.2
    },
    {
        number: 7,
        movieName: "Singin' in the Rain",
        year: 1952,
        rating: 8.3
    },
    {
        number: 8,
        movieName: "Seven Samurai",
        year: 1954,
        rating: 8.6
    },
    {
        number: 9,
        movieName: "12 Angry Men",
        year: 1957,
        rating: 9.0
    },
    {
        number: 10,
        movieName: "Psycho",
        year: 1960,
        rating: 8.5
    },
    {
        number: 11,
        movieName: "2001: A Space Odyssey",
        year: 1968,
        rating: 8.3
    },
    {
        number: 12,
        movieName: "The Godfather",
        year: 1972,
        rating: 9.2
    },
    {
        number: 13,
        movieName: "Jaws",
        year: 1975,
        rating: 8.1
    },
    {
        number: 14,
        movieName: "Star Wars",
        year: 1977,
        rating: 8.6
    },
    {
        number: 15,
        movieName: "Apocalypse Now",
        year: 1979,
        rating: 8.4
    },
    {
        number: 16,
        movieName: "Blade Runner",
        year: 1982,
        rating: 8.1
    },
    {
        number: 17,
        movieName: "Pulp Fiction",
        year: 1994,
        rating: 8.8
    },
    {
        number: 18,
        movieName: "The Matrix",
        year: 1999,
        rating: 8.7
    },
    {
        number: 19,
        movieName: "Spirited Away",
        year: 2001,
        rating: 8.6
    },
    {
        number: 20,
        movieName: "Parasite",
        year: 2019,
        rating: 8.5
    }
];

const moviesContainer = document.getElementById("movies");

let html = "";

for (let i = 0; i < movies.length; i++) {
    html += `
        <div class="movie-card">
            <h3>${movies[i].number}. ${movies[i].movieName}</h3>
            <p>Рік: ${movies[i].year}</p>
            <p>Рейтинг: ★ ${movies[i].rating}</p>
        </div>
    `;
}

moviesContainer.innerHTML = html;