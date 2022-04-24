import { React, useEffect, useState } from 'react';
import { getPlants } from '../../utils/network';
import './PlantsCatalog.scss';

const PlantsCatalog = () => {
    const [plants, setPlants] = useState([]);
    const [detailPlant, setDetailPlant] = useState(0);

    useEffect(() => {
        getPlants().then((res) => {
            setPlants(res.plants);
        });
    }, []);

    const showPlant = (e) => {
        setDetailPlant(e.currentTarget.dataset.id - 1);
    };

    return (
        <div className="plantsCatalog">
            <div className="detailPlant">
                <h2 className="plantsCatalog__plantTitle">{plants[detailPlant]?.meta.name}</h2>
                <p className="detailPlant__plantDescription">
                    {plants[detailPlant]?.meta.description}
                </p>
                <ul>
                    {plants[detailPlant]
                        ? Object.entries(plants[detailPlant].properties).map((prop, index) => (
                              <li key={index}>
                                  {prop[0]}: {prop[1]}
                              </li>
                          ))
                        : ''}
                </ul>
            </div>
            {plants.map((plant) => (
                <div
                    className="plants"
                    key={plant.meta.id}
                    data-id={plant.meta.id}
                    onClick={showPlant}
                >
                    <span className="plants__link">{plant.meta.name}</span>
                    <br />
                </div>
            ))}
        </div>
    );
};

export default PlantsCatalog;
