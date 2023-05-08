import React from 'react';
import RaceOption from './RaceOption';
import MonsterOption from './MonsterOption';

const RaceSelector = ({races, onRaceSelect, monsters, onMonsterSelect}) => {
    

const raceOptions = races.map((race, index) => {
    return <RaceOption key={index} race={race} index={index}></RaceOption>
})
const monsterOptions = monsters.map((monster, index) => {
    return <MonsterOption key={index} monster={monster} index={index}></MonsterOption>
})

const handleRaceSelect = (event) => {
    onRaceSelect(races[event.target.value])
}
const handleMonsterSelect = (event) => {
    onMonsterSelect(monsters[event.target.value])
}

    return ( 
        <>
        <div className='drop-down-container'>

        <div className="race-drop-down">
            <select onChange={handleRaceSelect}>
            <option value="" selected > Which Race would you like to be? :</option>
            {raceOptions}
        </select>
        </div>

        <div className="monster-drop-down">
             <select onChange={handleMonsterSelect}>
             <option value="" selected > Which Monster would you like to be? :</option>
             {monsterOptions}
            </select>
        </div>
        </div>
        </>
     );
}
 
export default RaceSelector;