import { React, useEffect, useState } from 'react';
import { getPlants } from '../../utils/network';
import './PlantsCatalog.scss';

const PlantsCatalog = () => {
    const [plants, setPlants] = useState([]);
    const [detailPlant, setDetailPlant] = useState(0);

    useEffect(() => {
        getPlants().then((res) => {
            console.log(res);
            setPlants(res.plants);
        });
    }, []);

    const showPlant = (e) => {
        setDetailPlant(e.currentTarget.dataset.id - 1);
    };

    return (
        <div className="plantsCatalog">
            <div className="detailPlant">
                <h2>{plants[detailPlant]?.name}</h2>
                <p>{plants[detailPlant]?.description}</p>
            </div>
            {plants.map((plant) => (
                <div className="plant" key={plant.id} data-id={plant.id} onClick={showPlant}>
                    <span>{plant.name}</span>
                    <br />
                </div>
            ))}
        </div>
    );
};

export default PlantsCatalog;
