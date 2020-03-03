import React, { useState } from 'react';

export const AdditionalSlugOptions = (props) => {

    const { options } = props;

    return (
        <ul className="options-list">
            {/** Iterate through each of our options and show them */}
            {options.map((option, index) => {
                return (
                    <li key={index}>
                        <input type="checkbox" id={option.id} onChange={(e) => option.onChange(!option.checked)} checked={option.checked} />
                        <label htmlFor="keep-cap">{option.label}</label>
                    </li>
                );
            })}
        </ul>
    )
}