import { useEffect, useState, useRef } from 'react';
import './Themes.css';

const Themes = () => {
    const [custom, setCustom] = useState('#000000');
    const initialRender = useRef(true);
    const setStyling = document.documentElement.style;

    const themes = {
        light: { bg: '#dfdfdf', bg2: '#fff', title: '#555', white: '#fff', dark: '#666', grey: '#888' },
        dark:  { bg: '#444', bg2: '#333', title: '#dfdfdf', white: '#ddd', dark: '#ddd', grey: '#bbb' }
    };

    //----------------- Functions for setting themes --------------------------------

    const setMode = (mode, type) => {
        setStyling.setProperty('--background', mode.bg);
        setStyling.setProperty('--background2', mode.bg2);
        setStyling.setProperty('--title', mode.title);
        setStyling.setProperty('--white', mode.white);
        setStyling.setProperty('--dark', mode.dark);
        setStyling.setProperty('--grey', mode.grey);

        if(type){
            localStorage.setItem('mode', type);
        }
    }

    const setColor = (code, color) => {
        setStyling.setProperty('--purple', code);
        
        if(color){
            localStorage.setItem('color', color);
        }
    }

    useEffect(() => {
        if(initialRender.current){
            initialRender.current = false;
        }else{
            setColor(custom, custom)
        }
    }, [custom]);

    //----------------- Setting theme if the values have been specified --------------------------------

    const lightMode = localStorage.getItem('mode');
    const color = localStorage.getItem('color');

    if(lightMode){
        lightMode === 'light' ? setMode(themes.light) : setMode(themes.dark)
    }

    if(color){
        color === 'purple' ? setColor('#58249c') : color === 'green' ? setColor('#283') : color === 'red' ? setColor('#811') : setColor(color)
    }

    return(
        <div className="themes">
            <div className="modes">
                <button className='themes-btn' onClick={() => setMode(themes.light, 'light')} style={{background: '#dfdfdf'}}></button>
                <button className='themes-btn' onClick={() => setMode(themes.dark, 'dark')} style={{background: '#555'}}></button>
            </div>
            <div className="colors">
                <button className='themes-btn' onClick={() => setColor('#58249c', 'purple')} style={{background: '#58249c'}}></button>
                <button className='themes-btn' onClick={() => setColor('#283', 'green')} style={{background: '#283'}}></button>
                <button className='themes-btn' onClick={() => setColor('#811', 'red')} style={{background: '#811'}}></button>
                <input className='themes-btn inputColor' type="color" value={custom} onChange={(e) => setCustom(e.target.value)} />
            </div>
        </div>
    )
}

export default Themes;