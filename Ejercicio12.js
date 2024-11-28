const mutants = [
    { name: 'Wolverine', power: 'regeneration' },
    { name: 'Magneto', power: 'magnetism' },
    { name: 'Professor X', power: 'telepathy' },
    { name: 'Jean Grey', power: 'telekinesis' },
    { name: 'Rogue', power: 'power absorption' },
    { name: 'Storm', power: 'weather manipulation' },
    { name: 'Mystique', power: 'shape-shifting' },
    { name: 'Beast', power: 'superhuman strength' },
    { name: 'Colossus', power: 'steel skin' },
    { name: 'Nightcrawler', power: 'teleportation' }
    
  ];
  

const findMutantByPower=(mutants, power) =>{
    let cuenta = 0;
    let siOno = 'No'
    for (let i = 0; i < mutants.length; i++) {
         if(mutants[i].power===power){
             siOno = 'Si';
             cuenta+=1
         }
     }
     if(siOno==='Si'){
         return siOno+' Fueron encontrados '+cuenta
     }else{
         return 'No se encontró ninguno'
     }
}
console.log(findMutantByPower(mutants,'telepathy'));
console.log(findMutantByPower(mutants,'nothing'));