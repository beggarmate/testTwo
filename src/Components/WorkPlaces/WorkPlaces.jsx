import React, { useEffect, useState } from "react";
import NewWorkPlace from "./NewWorkPlace.jsx";
import getId from "./getId.js";

const emptyWorkPlace = {
    organization: "",
    startYear: "",
    endYear: "",
};

const WorkPlaces = ({ result, allReset, setHasAllValid }) => {
    const [workPlaces, setWorkPlaces] = useState([]);

    useEffect(() => {
        setWorkPlaces([]);
    }, [allReset]);

    useEffect(() => {
        result.workPlaces = [...workPlaces];
    }, [workPlaces]);

    function addWorkPlaceHandler() {
        setWorkPlaces([...workPlaces, { ...emptyWorkPlace, id: getId() }]);
    }
    function removeWorkPlace(index) {
        setWorkPlaces(
            workPlaces.filter((el, ind) => {
                if (ind !== index) {
                    return true;
                }
            })
        );
    }

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Организация</th>
                        <th>Год начала работы</th>
                        <th>Год окончания работы</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {workPlaces.map((workplace, index) => (
                        <NewWorkPlace
                            id={workplace.id}
                            key={workplace.id}
                            index={index}
                            result={result}
                            workPlaces={workPlaces}
                            setWorkPlaces={setWorkPlaces}
                            setHasAllValid={setHasAllValid}
                            removeWorkPlace={removeWorkPlace}
                        />
                    ))}
                </tbody>
            </table>
            <button
                type="button"
                onClick={addWorkPlaceHandler}
            >
                Добавить место работы
            </button>
        </>
    );
};

export default WorkPlaces;
