import React, { useState } from 'react';

import { SlugConfig, getSluggedText } from './../slugify';

export const SlugView = () => {

    const [input, setInput] = useState('');
    const [sluggedText, setSluggedText] = useState('');
    const [showAdditional, setShowAdditional] = useState(false);

    const [keepCapitalization, setKeepCapitalization] = useState(false);
    const [capitalizeEveryFirst, setCapitalizeEveryFirst] = useState(false);
    const [useUnderscores, setUseUnderscores] = useState(false);

    const options = [
        { id: 'capitalizeEveryFirst', label: 'Capitalize every first letter', onChange: setCapitalizeEveryFirst, checked: capitalizeEveryFirst },
        { id: 'keepCapitalization', label: 'Keep current capitalization', onChange: setKeepCapitalization, checked: keepCapitalization },
        { id: 'useUnderscores', label: 'Use underscores instead', onChange: setUseUnderscores, checked: useUnderscores },
        //{ id: 'setMaxLength', label: 'Set max length (including dashes)' }
    ];

    const onTextInput = (event: any) => setInput(event.target.value);
    const doReset = () => {
        setInput('');
        setSluggedText('');
    }


    const doSlugify = () => {

        // Set the options for the slug operation and perform it
        const slugConfig: SlugConfig = { keepCapitalization, capitalizeEveryFirst, useUnderscores };
        const sText = getSluggedText(input, slugConfig);

        // Set the slug
        setSluggedText(sText);
    }

    const doCopy = () => {

    }


    const buttons = [
        { id: 'slugify', text: 'Slugify it', onClick: doSlugify },
        { id: 'copy', text: 'Copy', onClick: doCopy },
        { id: 'reset', text: 'Reset', onClick: doReset },
    ];

    return (
        <div className="slug-view">
            <p>Turn your boring text <span className='italic'>Slugly</span>!</p>

            {/** Input section for the text */}
            <div className="field">
                <label className="input-label">Enter your ordinary text</label>
                <input placeholder="Anything entered here will be slugged &mdash; no take backs" type="text" className="input" onChange={(event) => onTextInput(event)} value={input} />
            </div>

            {/** Slug configuration section */}
            <div className="slug-view__add">
                <a onClick={() => setShowAdditional(!showAdditional)} className="link">Add some spice</a>
                {showAdditional &&
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
                }
            </div>

            {/** Display the sluggified text */}
            <div className="field">
                <label className="input-label">Your new slugly text</label>
                <input disabled placeholder="The slugged text will appear here" className="input" value={sluggedText} />
            </div>

            {/** Buttons section */}
            <ul className="buttons-list">
                {/** Display each available button */}
                {buttons.map((button, index) => {
                    return (
                        <li key={index}><button id={button.id} className={`btn ${button.id}`} onClick={() => { button.onClick() }}>{button.text}</button></li>
                    )
                })}
            </ul>
        </div>
    )
}