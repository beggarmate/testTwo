import React, { useState } from "react";
import WorkPlaceInput from "./WorkPlaceInput/WorkPlaceInput";
import organizationInputValidate from "./WorkPlaceInput/organizationInputValidate";
import startYearInputValidate from "./WorkPlaceInput/startYearInputValidate";
import endYearInputValidate from "./WorkPlaceInput/endYearInputValidate";

const NewWorkPlace = ({
    id,
    index,
    result,
    workPlaces,
    setWorkPlaces,
    setHasAllValid,
    removeWorkPlace,
}) => {
    const [correctInput, setCorrectInput] = useState({
        correctOrganization: true,
        correctStartYear: true,
        correctEndYear: true,
    });

    return (
        <tr>
            <td>
                <WorkPlaceInput
                    inputType={"text"}
                    setHasAllValid={setHasAllValid}
                    setWorkPlaces={setWorkPlaces}
                    validator={organizationInputValidate}
                    targetInput={"organization"}
                    workPlaces={workPlaces}
                    id={id}
                    result={result}
                />
            </td>
            <td>
                <WorkPlaceInput
                    inputType={"number"}
                    setHasAllValid={setHasAllValid}
                    setWorkPlaces={setWorkPlaces}
                    targetInput={"startYear"}
                    validator={startYearInputValidate}
                    workPlaces={workPlaces}
                    id={id}
                    result={result}
                />
            </td>
            <td>
                <WorkPlaceInput
                    inputType={"number"}
                    setHasAllValid={setHasAllValid}
                    targetInput={"endYear"}
                    setWorkPlaces={setWorkPlaces}
                    validator={endYearInputValidate}
                    workPlaces={workPlaces}
                    id={id}
                    result={result}
                />
            </td>
            <td>
                <button
                    type="button"
                    onClick={() => removeWorkPlace(index)}
                >
                    Удалить
                </button>
            </td>
        </tr>
    );
};

export default NewWorkPlace;
