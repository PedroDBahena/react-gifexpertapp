import React, { useState } from 'react'
import PropTypes from "prop-types";

const AddCategory = ({ setCategories }) => {

    const [inputVal, setInputVal] = useState('');

    const handleInputChange = (e) => {
        setInputVal(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (inputVal.trim().length > 2) {
            setCategories(categories => [inputVal, ...categories]);
            setInputVal('');
        }

    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputVal} onChange={handleInputChange} />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

export default AddCategory;
