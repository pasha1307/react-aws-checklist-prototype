import React from "react";
import {Checkbox, FormControlLabel} from "@material-ui/core";

const StepTwo = (props) => {
    return (
        <div className={props.classes.fieldCheckboxes}>
            {props.data.map((el, index) => (
                <FormControlLabel
                    control={
                        <Checkbox
                            key={index}
                            onChange={props.handleRewOverall}
                            name={el.label}
                            checked={props.rewOverall[el.label] || false}
                            color="primary"
                        />
                    }
                    label={el.label}
                />
            ))}
        </div>
    )
}

export default StepTwo;
