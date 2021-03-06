import React, { PureComponent } from 'react';
import t from '../utils/i18n';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from 'react-router-dom';

export default class Header extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <header>
                <section className="logo">
                    <h1>EEEmoticon</h1>
                </section>
                <section className="main-menu">
                    {/* <nav>
                        <Link to="/">{t('home')}</Link>
                        <Link to="/search">{t('search')}</Link>
                    </nav> */}
                    <section className="user">
                        <div className="wrap">
                            <input type="text" placeholder="Search..."/>
                            <img src={require('../img/avatar.jpg')} alt="avatar"/>
                        </div>
                        <nav className="user-menu">
                            <a href="#">{t('home')}</a>
                            <a href="#">{t('home')}</a>
                            <a href="#">{t('home')}</a>
                            <a href="#">{t('home')}</a>
                        </nav>
                    </section>
                </section>
            </header>
        )
    }
}