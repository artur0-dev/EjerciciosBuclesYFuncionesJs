const xMen = [
    { name: 'Wolverine', year: 1974 },
    { name: 'Cyclops', year: 1963 },
    { name: 'Storm', year: 1975 },
    { name: 'Phoenix', year: 1963 },
    { name: 'Beast', year: 1963 },
    { name: 'Gambit', year: 1990 },
    { name: 'Nightcrawler', year: 1975 },
    { name: 'Magneto', year: 1963 },
    { name: 'Professor X', year: 1963 },
    { name: 'Mystique', year: 1978 }
  ];
  

  const findOldestXMen=(xMen)=>{
    for (let i = 1; i < xMen.length; i++) {
      if(xMen[i].year < xMen[0].year  ){
          return xMen[i]
      }
  }
  }
console.log(findOldestXMen(xMen));  
  