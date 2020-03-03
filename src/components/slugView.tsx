import React, { useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { SlugConfig, getSluggedText } from './../slugify';
import { AdditionalSlugOptions } from './additionalSlugOptions';
import { ActionButtons } from './actionButtons';

export const SlugView = () => {

    // State variables for input, slugged text, and displaying additional options
    const [input, setInput] = useState('');
    const [sluggedText, setSluggedText] = useState('');
    const [showAdditional, setShowAdditional] = useState(false);

    // State variables for the additional options
    const [keepCapitalization, setKeepCapitalization] = useState(false);
    const [capitalizeEveryFirst, setCapitalizeEveryFirst] = useState(false);
    const [useUnderscores, setUseUnderscores] = useState(false);

    // Available options list
    const options = [
        { id: 'capitalizeEveryFirst', label: 'Capitalize every first letter', onChange: setCapitalizeEveryFirst, checked: capitalizeEveryFirst },
        { id: 'keepCapitalization', label: 'Keep current capitalization', onChange: setKeepCapitalization, checked: keepCapitalization },
        { id: 'useUnderscores', label: 'Use underscores instead', onChange: setUseUnderscores, checked: useUnderscores },
    ];

    /** Set the text input */
    const onTextInput = (event: any) => setInput(event.target.value);

    /** Resets the text input and the slugged text */
    const doReset = () => {
        setInput('');
        setSluggedText('');
    }

    /** Handles slugification! */
    const doSlugify = () => {

        // Set the options for the slug operation and perform it
        const slugConfig: SlugConfig = { keepCapitalization, capitalizeEveryFirst, useUnderscores };
        const sText = getSluggedText(input, slugConfig);

        // Set the slug
        setSluggedText(sText);
    }

    /** Handles copying the slugged text to clipboard */
    const doCopy = () => {

    }

    // Available action buttons
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
                {showAdditional && <AdditionalSlugOptions options={options} />}
            </div>

            {/** Display the sluggified text */}
            <div className="field">
                <label className="input-label">Your new slugly text</label>
                <input disabled placeholder="The slugged text will appear here" className="input" value={sluggedText} />
            </div>

            {/** Buttons section */}
            <ActionButtons buttons={buttons} />
        </div>
    )
}