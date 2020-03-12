import React, { useState } from 'react';

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

    /** Set the text input */
    const onTextInput = (event: any) => setInput(event.target.value);

    /** On'enter' key press, execute slugification */
    const keyPressed = (event: any) => {
        if (event.key === 'Enter') {
            doSlugify();
        }
    }

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

    return (
        <div className="slug-view">
            <p>Turn your boring text <span className='italic'>Slugly</span>!</p>

            {/** Input section for the text */}
            <div className="field">
                <label className="input-label">Enter your ordinary text</label>
                <input placeholder="Anything entered here will be slugged &mdash; no take backs" type="text" className="input" onChange={(event) => onTextInput(event)} value={input} onKeyPress={keyPressed} />
            </div>

            {/** Slug configuration section */}
            <div className="slug-view__add">
                <a onClick={() => setShowAdditional(!showAdditional)} className="link">Add some spice</a>
                {showAdditional && <AdditionalSlugOptions
                    setCapitalizeEveryFirst={setCapitalizeEveryFirst} capitalizeEveryFirst={capitalizeEveryFirst}
                    setKeepCapitalization={setKeepCapitalization} keepCapitalization={keepCapitalization}
                    setUseUnderscores={setUseUnderscores} useUnderscores={useUnderscores} />}
            </div>

            {/** Display the sluggified text */}
            <div className="field">
                <label className="input-label">Your new slugly text</label>
                <input disabled placeholder="The slugged text will appear here" className="input" value={sluggedText} />
            </div>

            {/** Buttons section */}
            <ActionButtons doSlugify={doSlugify} doReset={doReset} sluggedText={sluggedText} />
        </div>
    )
}