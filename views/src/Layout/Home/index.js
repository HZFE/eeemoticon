import React, { PureComponent } from 'react';
import Main from './Main';
import Random from './Random';

export default class Home extends PureComponent {
    
    render () {
        return [
            <Main key="home-main"></Main>,
            <Random key="home-random"></Random>
        ]
    }
}