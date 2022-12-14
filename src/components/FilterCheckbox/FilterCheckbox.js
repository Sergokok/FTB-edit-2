import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox({checkClick, isShort}) {
    return (
        <div className="filter-checkbox">
            <label className="filter-checkbox__container">
                <input
                    className="filter-checkbox__input"
                    type="checkBox"
                    onChange={checkClick}
                    checked={isShort}
                />
            </label>
            <p className="filter-checkbox__text">Короткометражки</p>
        </div>
    )
}

export default FilterCheckbox;
