import React, { useState } from 'react';

export const ActionButtons = (props) => {

    const { buttons } = props;
    return (
        <ul className="buttons-list">

            {/** Display each available button */}
            {buttons.map((button, index) => {
                return (
                    <li key={index}>
                        <button id={button.id} className={`btn ${button.id}`} onClick={() => { button.onClick() }}>{button.text}</button>
                    </li>
                )
            })}
        </ul>
    )
}