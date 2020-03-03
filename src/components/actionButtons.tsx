import React, { useState } from "react";
import { CopyToClipboard } from 'react-copy-to-clipboard';

export const ActionButtons = (props) => {

    const [copied, setCopied] = useState(false);
    const { doSlugify, doReset, sluggedText } = props;

    const doCopy = () => setCopied(true);

    return (
        <ul className="buttons-list">
            <li>
                <button id="slugify" className="btn slugify" onClick={() => { doSlugify() }}>Slugify it</button>
            </li>
            <li>
                <CopyToClipboard text={sluggedText} onCopy={() => { doCopy() }}>
                    <button id="copy" className="btn copy">Copy</button>
                </CopyToClipboard>
            </li>
            <li>
                <button id="reset" className="btn reset" onClick={() => { doReset() }}>Reset</button>
            </li>
        </ul>
    )
}