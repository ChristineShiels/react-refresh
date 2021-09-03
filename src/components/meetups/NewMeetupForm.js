import { checkPropTypes } from 'prop-types';
import { useRef } from 'react';
import Card from '../ui/Card';
import classes from './NewMeetupForm.module.css';

function NewMeetupForm (props) {
    // constructor() {
    //     super();
    //     this.state = {
    //         title: "",
    //         image: "",
    //         address: "",
    //         description ""
    //     }
    // }
    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(e) {
        e.preventDefault();

        const userTitle = titleInputRef.current.value;
        const userImage = imageInputRef.current.value;
        const userAddress = addressInputRef.current.value;
        const userDesc = descriptionInputRef.current.value;

        const meetupData = {
            title: userTitle,
            image: userImage,
            address: userAddress,
            description: userDesc
        };

        props.onAddMeetup(meetupData);
    }

    // changeHandler = (e) => {
    //     const target = e.target;
    //     const value = e.value;
    //     const name = target.id;
    //     this.setState({
    //         [name]: value
    //     })
    // }


    
        return (
            <Card>
                <form className={classes.NewMeetupForm} onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor="title">Meetup Title</label>
                        <input type="text" required id="title" ref={titleInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="image">Image</label>
                        <input type="url" required id="image" ref={imageInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="address">Address</label>
                        <input type="text" required id="address" ref={addressInputRef}/>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="description" cols="30" rows="5" required ref={descriptionInputRef}></textarea>
                    </div>
                    <div className={classes.actions}>
                        <button type="submit">Add Meetup</button>
                    </div>
                </form>
            </Card>
        )
    
}

export default NewMeetupForm;