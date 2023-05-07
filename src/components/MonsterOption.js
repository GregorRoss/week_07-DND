import React from 'react';

const MonsterOption = ({index, monster}) => {
    return ( 
            <option value={index}>{monster.name}</option>
     );
}
 
export default MonsterOption;