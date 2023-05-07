const RaceDetail =({selectedRace}) => {

    console.log(selectedRace);
    return (
    <>
    <div className="race-detail">
        <h2>{selectedRace.name}</h2>
        <h3>Alignment :</h3>
        <p>{selectedRace.alignment}</p>
        <h3>Size :</h3>
        <p>{selectedRace.size_description}</p>
        <h3>Language :</h3>
        <p>{selectedRace.language_desc}</p>


    </div>
    </>
)

}

export default RaceDetail;