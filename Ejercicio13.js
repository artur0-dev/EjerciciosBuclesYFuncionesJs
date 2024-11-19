const actors = [
    { name: 'Leonardo DiCaprio', born: 1974 },
    { name: 'Tom Hanks', born: 1956 },
    { name: 'Meryl Streep', born: 1949 },
    { name: 'Brad Pitt', born: 1963 },
    { name: 'Johnny Depp', born: 1963 },
    { name: 'Scarlett Johansson', born: 1984 },
    { name: 'Jennifer Lawrence', born: 1990 },
    { name: 'Denzel Washington', born: 1954 },
    { name: 'Morgan Freeman', born: 1937 },
    { name: 'Cate Blanchett', born: 1969 }
  ];
  let edades = [];
  function calculateActorsAges(actors) {
    let edad = 0
    let ano = new Date(Date.now()).getFullYear();
    for (let i = 0; i < actors.length; i++) {
        edad =ano - actors[i].born;
        nombre = actors[i].name;
        edades.push(nombre,edad);
    }
    return edades
  }
  console.log(calculateActorsAges(actors));
  