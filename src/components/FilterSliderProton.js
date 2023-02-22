import React from 'react';
import {makeStyles, Slider} from "@mui/material";

const marks = [

    {
        value: 0,
        label: '$0',
    },
    {
        value: 250,
        label: '$250',
    },
    {
        value: 500,
        label: '$500',
    },
    {
        value: 750,
        label: '$750',
    },
    {
        value: 1000,
        label: '$1,000',
    },
];
const FilterSliderProton = ({ value, changedPrice }) => {
    return (
        <div>
            <Slider
                value={value}
                onChange={changedPrice}
                valueLabelDisplay='on'
                min={0}
                max={1000}
                step={10}
                marks={marks}
                valueLabelDisplay="auto"
            />
        </div>
    );
};

export default FilterSliderProton;