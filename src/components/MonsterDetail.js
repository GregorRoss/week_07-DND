const MonsterDetail =({selectedMonster}) => {

    console.log(selectedMonster);
    return (
    <>
    <div className="monster-detail">
        <h2>{selectedMonster.name}</h2>
        
        <p>Alignment : {selectedMonster.alignment}</p>
        <p>Size : {selectedMonster.size}</p>
        <p>Type : {selectedMonster.type}</p>
        <p>Size : {selectedMonster.size}</p>
        <p> Languages : {selectedMonster.languages}</p>
        <p> Description : {selectedMonster.desc}</p>
        <img src={"https://www.dnd5eapi.co"+selectedMonster.image}/>


    </div>
    </>
)

}

export default MonsterDetail;