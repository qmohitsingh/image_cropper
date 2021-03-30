import React from 'react';
import Select from 'react-styled-select'

const options = [
    { label: "One", value: 1},
    { label: "Two", value: 2},
];


const Dropdown = ({onOpen, onChange}) => {

    return (
        <>
            <Select
                options={options}
                onOpen={onOpen}
                onChange={onChange}
                classes={{
                    selectMenu: 'my-custom-value',
                    selectArrow: 'my-custom-arrow'
                }}
            />
        </>
    );
}

export default Dropdown;