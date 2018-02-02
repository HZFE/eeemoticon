import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

const i18n = {
    home: {
        en: 'Home',
        cn: '主页'
    }
}
let lang = localStorage.getItem('lang') || 'cn';

export function setLang (l) {
    console.log(React, ReactDOM, App);
    lang = l;
    localStorage.setItem('lang', l);
    ReactDOM.render(<App />, document.getElementById('root'));
}
export default function t (name) {
    return i18n[name][lang];
}