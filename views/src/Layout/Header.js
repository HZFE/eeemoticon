import React, { PureComponent } from 'react';
import t from '../utils/i18n';

export default class Header extends PureComponent {
    constructor (props) {
        super(props);
        this.state = {};
    }
    render () {
        return (
            <header>
                <section className="logo"></section>
                <section className="main-menu">
                    <input type="text" placeholder="Search..."/>
                    <nav>
                        <a href="#">{t('home')}</a>
                        <a href="#">{t('home')}</a>
                        <a href="#">{t('home')}</a>
                        <a href="#">{t('home')}</a>
                    </nav>
                    <section className="user">
                        <img src="#" alt="avatar"/>
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