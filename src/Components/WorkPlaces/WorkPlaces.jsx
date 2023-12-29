import React from "react";
import { defaultWorkPlace } from "../MyForm/MyForm.jsx";
import NewWorkPlace from "./NewWorkPlace.jsx";

const WorkPlaces = ({ user, setUser }) => {
    function handleAddWorkplace() {
        setUser({
            ...user,
            workPlaces: [...user.workPlaces, { ...defaultWorkPlace }],
        });
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
                    {user.workPlaces.map((workplace, index) => (
                        <NewWorkPlace
                            key={index}
                            workplace={workplace}
                            index={index}
                            user={user}
                            setUser={setUser}
                        />
                    ))}
                </tbody>
            </table>
            <button type="button" onClick={handleAddWorkplace}>
                Добавить место работы
            </button>
        </>
    );
};

export default WorkPlaces;
