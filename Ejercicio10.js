const capitals = {
    Spain: 'Madrid',
    France: 'Paris',
    Italy: 'Rome',
    Germany: 'Berlin',
    Portugal: 'Lisbon',
    Poland: 'Warsaw',
    Greece: 'Athens',
    Austria: 'Vienna',
    Hungary: 'Budapest',
    Ireland: 'Dublin'
  };
  
  const getCapital=(country)=>{
    if(!country || !capitals[country]){
        return 'No está en la lista'
    }else{
        for (let key in capitals) {
            if (key === country) {
                return capitals[key];
            }
        }
    }
  }
  console.log(getCapital('Spain'));
  console.log(getCapital('Italy'));
  console.log(getCapital('Portugal'));
  console.log(getCapital('Hungary'));
  console.log(getCapital('Argentina'));
  