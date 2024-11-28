const movies = [
    { title: 'Inception', duration: 148 },
    { title: 'The Dark Knight', duration: 152 },
    { title: 'Interstellar', duration: 169 },
    { title: 'Dunkirk', duration: 106 },
    { title: 'The Prestige', duration: 130 },
    { title: 'Memento', duration: 113 },
    { title: 'Batman Begins', duration: 140 },
    { title: 'The Dark Knight Rises', duration: 164 },
    { title: 'Tenet', duration: 150 },
    { title: 'Insomnia', duration: 118 }
  ];
  let duracionPelis = [];
const averageMovieDuration=(movies)=> {
    for (let i = 0; i < movies.length; i++) {
        const minutos = Math.floor(movies[i].duration / 60);
        const segundosRestantes = movies[i].duration % 60;
        movies[i].duration = minutos+'m y '+ segundosRestantes+'s';
        duracionPelis.push(movies[i]);
    }
    return duracionPelis;
}

console.log(averageMovieDuration(movies));
  
  