import { useState } from 'react';

export default function ToggleSwitch({ states = [], size = 16, name = 'test', text = 'אפשרות פילטור' }) {

    const [isChecked, onToggle] = states;

    const wrapperInlineStyles = {
        fontSize: `${size}px`,
    }

    return(
        <div id="toggle-switch" className="wrapper">
            <div className="wrapper__content" style={wrapperInlineStyles}>
                <div className="wrapper__content__text">{text}</div>
                <div className="wrapper__content__input">
                    <input type="checkbox" checked={isChecked} onChange={onToggle} className="wrapper__content__input__checkbox" id={`toggle-switch-${name}`} name={name} />
                    <label htmlFor={`toggle-switch-${name}`} className="wrapper__content__input__label"></label>
                </div>
            </div>
        </div>
    )
}