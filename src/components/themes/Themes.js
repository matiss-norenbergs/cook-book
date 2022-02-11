import { useState } from 'react';
import './Themes.css';

const Themes = () => {
    const themes = {
        light: { bg: '#dfdfdf', bg2: '#fff', title: '#555', white: '#fff', dark: '#666', grey: '#888' },
        dark:  { bg: '#444', bg2: '#333', title: '#dfdfdf', white: '#ddd', dark: '#ddd', grey: '#999' }
    };

    const light = () => {
        console.log('Activated light mode!');
        document.documentElement.style.setProperty('--background', themes.light.bg);
        document.documentElement.style.setProperty('--background2', themes.light.bg2);
        document.documentElement.style.setProperty('--title', themes.light.title);
        document.documentElement.style.setProperty('--white', themes.light.white);
        document.documentElement.style.setProperty('--dark', themes.light.dark);
        document.documentElement.style.setProperty('--grey', themes.light.grey);
        localStorage.setItem('mode', 'light');
    }

    const dark = () => {
        console.log('Activated dark mode!');
        document.documentElement.style.setProperty('--background', themes.dark.bg);
        document.documentElement.style.setProperty('--background2', themes.dark.bg2);
        document.documentElement.style.setProperty('--title', themes.dark.title);
        document.documentElement.style.setProperty('--white', themes.dark.white);
        document.documentElement.style.setProperty('--dark', themes.dark.dark);
        document.documentElement.style.setProperty('--grey', themes.dark.grey);
        localStorage.setItem('mode', 'dark');
    }

    const purple = () => {
        console.log('Activated purple color!');
        document.documentElement.style.setProperty('--purple', '#58249c');
        localStorage.setItem('color', 'purple');
    }

    const green = () => {
        console.log('Activated green color!');
        document.documentElement.style.setProperty('--purple', '#283');
        localStorage.setItem('color', 'green');
    }

    const red = () => {
        console.log('Activated red color!');
        document.documentElement.style.setProperty('--purple', '#811');
        localStorage.setItem('color', 'red');
    }

    const lightMode = localStorage.getItem('mode');

    if(lightMode){
        lightMode === 'light' ? light() : dark()
    }else{
        console.log('Mode not set!');
    }

    const color = localStorage.getItem('color');

    if(color){
        color === 'purple' ? purple() : color === 'green' ? green() : red()
    }else{
        console.log('User hasn\'t set a value!');
    }

    return(
        <div className="themes">
            <div className="modes">
                <button className='themes-btn' onClick={light} style={{background: '#dfdfdf'}}></button>
                <button className='themes-btn' onClick={dark} style={{background: '#555'}}></button>
            </div>
            <div className="colors">
                <button className='themes-btn' onClick={purple} style={{background: '#58249c'}}></button>
                <button className='themes-btn' onClick={green} style={{background: '#283'}}></button>
                <button className='themes-btn' onClick={red} style={{background: '#811'}}></button>
            </div>
        </div>
    )
}

export default Themes;