import React from 'react';
import {makeStyles, ToggleButton, ToggleButtonGroup} from '@mui/material';
const FilterListToggle = ({options, value,selectToggle}) => {

    return (
        <ToggleButtonGroup
        value={value}
        onChange={selectToggle}
        color="primary"
        exclusive
        >
            {options.map(({label,id,value})=> (
                <ToggleButton
                    key={id}
                    value={value}>
                {label}
                </ToggleButton>))}
        </ToggleButtonGroup>
    );

};

export default FilterListToggle;
