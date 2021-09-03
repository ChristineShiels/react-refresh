import { Component } from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css'

class MeetupItem extends Component {
    render() {
        return (
            <Card>
                <li className={classes.item}>
                    <div className={classes.image}>
                        <img src={this.props.image} alt={this.props.title} />
                    </div>
                    <div className={classes.content}>
                        <h3>{this.props.title}</h3>
                        <address>{this.props.address}</address>
                        <p>{this.props.description}</p>
                    </div>
                    <div className={classes.actions}>
                        <button>To Favourites</button>
                    </div>
                </li>
            </Card>
        )
    }
}

export default MeetupItem;