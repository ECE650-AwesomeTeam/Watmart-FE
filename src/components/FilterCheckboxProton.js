import React from 'react';
import {makeStyles} from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const FilterCheckboxProton = ({ changeChecked, cuisine }) => {
    // const classes = useStyles();
    const { checked, label, id } = cuisine;
    return (
        <div>
            <FormControlLabel
                control={
                    <Checkbox
                        size='small'
                        checked={checked}
                        onChange={() => changeChecked(id)}
                        inputProps={{ 'aria-label': 'checkbox with small size' }}
                    />
                }
                label={label}
            />
        </div>
    );
};

export default FilterCheckboxProton;