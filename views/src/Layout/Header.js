import React, { PureComponent } from 'react';

export class Header extends PureComponent {
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
                        <a href="#">Menu</a>
                        <a href="#">Menu</a>
                        <a href="#">Menu</a>
                        <a href="#">Menu</a>
                    </nav>
                    <section className="user">
                        <img src="#" alt="avatar"/>
                        <nav className="user-menu">
                            <a href="#">Menu</a>
                            <a href="#">Menu</a>
                            <a href="#">Menu</a>
                            <a href="#">Menu</a>
                        </nav>
                    </section>
                </section>
            </header>
        )
    }
}