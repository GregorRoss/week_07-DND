import React from 'react';

const RaceOption = ({index, race}) => {
    return ( 
            <option value={index}>{race.name}</option>
     );
}
 
export default RaceOption;