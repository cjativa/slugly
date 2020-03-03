import React, { useState } from 'react';

export const AdditionalSlugOptions = (props) => {

    const { setCapitalizeEveryFirst, capitalizeEveryFirst, setKeepCapitalization, keepCapitalization, setUseUnderscores, useUnderscores } = props;

    // Available options list
    const options = [
        { id: 'capitalizeEveryFirst', label: 'Capitalize every first letter', onChange: setCapitalizeEveryFirst, checked: capitalizeEveryFirst },
        { id: 'keepCapitalization', label: 'Keep current capitalization', onChange: setKeepCapitalization, checked: keepCapitalization },
        { id: 'useUnderscores', label: 'Use underscores instead', onChange: setUseUnderscores, checked: useUnderscores },
    ];

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