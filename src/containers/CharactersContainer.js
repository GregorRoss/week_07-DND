import React, {useState, useEffect} from 'react';
import RaceSelector from '../components/RaceSelector';
import RaceDetail from '../components/RaceDetail';
import MonsterDetail from '../components/MonsterDetail';

const CharacterContainer = () => {
    const [races, setRaces] = useState([])
    const [selectedRace, setSelectedRace] = useState(null)
    const [monsters, setMonsters] = useState([])
    const [selectedMonster, setSelectedMonster] = useState(null)


   useEffect(() =>{
    getAllRaces()
    getAllMonsters()
   }, [])
 
// pulls all the races from the DND site and sets the State for races  
const getAllRaces =() => {
    fetch("https://www.dnd5eapi.co/api/races")
    .then((response) => response.json())
    .then((data) => setRaces(data.results))
    
}
// pulls all the Monsters from the DND site and sets the State for Monsters  
const getAllMonsters =() => {
    fetch("https://www.dnd5eapi.co/api/monsters")
    .then((response) => response.json())
    .then((data) => setMonsters(data.results))
    
}

// with the race selected pulls the selectd race from DND and sets the State for the selected race
const onRaceSelect = (race) => {
    fetch("https://www.dnd5eapi.co"+race.url)
    .then((response) => response.json())
    .then((data) => setSelectedRace(data))
}

// with the monster selected pulls the selectd monster from DND and sets the State for the selected monster
const onMonsterSelect = (monster) => {
    fetch("https://www.dnd5eapi.co"+monster.url)
    .then((response) => response.json())
    .then((data) => setSelectedMonster(data))
}



    return ( 
        <>
            <h1>
                DND Character App
            </h1>
            {races.length >2? <RaceSelector races={races} onRaceSelect={onRaceSelect} monsters={monsters} onMonsterSelect={onMonsterSelect}/> : null}
            {selectedRace? <RaceDetail selectedRace={selectedRace} /> : null}
            {selectedMonster? <MonsterDetail selectedMonster={selectedMonster}/> : null}

        </>
     );
}
 
export default CharacterContainer;