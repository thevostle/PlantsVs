import { React, useEffect, useState } from 'react';
import { getPlants } from '../../utils/network';
import './PlantsCatalog.scss';

const PlantsCatalog = () => {
    const [plants, setPlants] = useState([]);
    const [detailPlant, setDetailPlant] = useState(1);

    useEffect(() => {
        getPlants().then((res) => {
            console.log(res);
            setPlants(res.plants);
        });
    }, []);

    const showPlant = (e) => {
        console.log(e.currentTarget.dataset.id);
        setDetailPlant(e.currentTarget.dataset.id);
        console.log(plants[detailPlant]);
    };

    return (
        <div className="plantsCatalog">
            <div className="detailPlant">
                {/* {plants[detailPlant - 1]} */}
                {/* {plants[detailPlant - 1].description} */}
            </div>
            {plants.map((plant) => (
                <div className="plant" key={plant.id} data-id={plant.id}>
                    <span onClick={showPlant}>{plant.name}</span>
                    <br />
                </div>
            ))}
        </div>
    );
};

export default PlantsCatalog;
