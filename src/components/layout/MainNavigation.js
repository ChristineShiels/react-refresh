import { Component } from 'react';
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';

class MainNavigation extends Component {
    render() {
        return (
            <header className={classes.header}>
                <div className={classes.logo}>React Meetups</div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">All Meetups</Link>
                        </li>
                        <li>
                            <Link to="/new-meetup">New Meetup</Link>
                        </li><li>
                            <Link to="/favourites">Favourites</Link>
                        </li>
                    </ul>
                </nav>

            </header>
        )
    }
}

export default MainNavigation;