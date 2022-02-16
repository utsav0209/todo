import React from 'react';

const CheckBox = ({onClick, checked}) => {

    const onChange = (e) => {
        onClick(e.target.checked)
    }

    return (
        <input type="checkbox" onChange={onChange} checked={checked}/>
    );
};

export default CheckBox;