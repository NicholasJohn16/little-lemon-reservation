import { useState, useEffect, useReducer, useRef } from "react";
import OccasionSelector from "./OccasionSelector";
import { fetchAPI, submitAPI } from "../utils/api";
import '../assets/ReservationForm.css';
import { useNavigate } from "react-router-dom";

const styles = {
    form: {
        marginBottom: '1.5rem',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1rem',
        justifyItem: 'center'
    },
    label: {
        display: 'block',
        // fontWeight: 'bold',
        marginBottom: '.5rem',
        marginTop: '.5rem',
        width: '100%'
    },
    input: {
        display: 'block',
        height: '2rem',
        lineHeight: '2rem',
        fontSize: '1.1rem',
        width: '100%',
        padding: '1px .5rem',
        borderRadius: '.5rem',
        border: '1px solid #CCC',
        boxSizing: 'border-box'
    },
    range: {
        display: 'block',
        width: '100%',
        accentColor: '#495E57'
    },
    select: {
        // display: 'block',
        width: '100%',
        height: '2rem',
        backgroundColor: '#FFF',
        borderRadius: '.5rem',
        border: '1px solid #CCC',
        fontSize: '1.1rem',
        padding: '1px .5rem'
    },
    helpText: {
        fontSize: '.75rem',
        color: '#000',
        margin: '.5rem 0 0 0'
    },
    button: {
        borderRadius: '.5rem',
        backgroundColor: '#F4CE14',
        padding: '1rem 2rem',
        fontSize: '18px',
        textDecoration: 'none',
        color: '#000',
        fontWeight: 'bold',
        display: 'block',
        border: '0',
        marginLeft: 'auto'
    },
    textarea: {
        width: '100%',
        borderRadius: '.5rem',
        border: '1px solid #CCC',
        padding: '.5rem',
        boxSizing: 'border-box'
    }
}

function updateTimes(state, action) {
    if(action.type === 'date_changed') {
        return fetchAPI(new Date(action.date));
    }
}

function initializeTimes(date) {
    return fetchAPI(date);
}

const ReservationForm = () => {
    const [ data, setData ] = useState({guest_count: 1, comments: ""});
    const date = new Date();
    const min = date.getFullYear() + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-'  + ("0" + date.getDate()).slice(-2);
    const max = (date.getFullYear() + 1) + '-' + ("0" + (date.getMonth() + 1)).slice(-2) + '-'  + ("0" + date.getDate()).slice(-2);
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes(date));
    const formRef = useRef();
    const navigate = useNavigate();
    

    // const allTimes = ['17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'];

    const setOccasion = (occasion) => {
        setData(data => ({...data, ...{occasion: occasion}}));
    }

    const updateFormData = (property, val) => {
        setData(data => (
            {...data, ...{[property]: val}}
        ));

        console.log(data);
    }

    const handleDateChange = (e) => {
        updateFormData('date', e.target.value);
        updateFormData('time', "");
        dispatch({type: 'date_changed', date: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        console.log(formData);

        if(submitAPI(formData)) {
            navigate('confirmed', {state: formData});
        }
    }

    // useEffect(() => {
    //     let fetched = fetchAPI(new Date(data.date));
    //     console.log(fetched);

    // }, [data.date]);

    return (
        <form style={styles.form} ref={formRef} onSubmit={handleSubmit}>
            <div className="span-4 span-md-2 span-lg-1">
                <label style={styles.label} htmlFor="first_name">First Name</label>
                <input style={styles.input} onChange={e => updateFormData('first_name', e.target.value)} type="text" id="first_name" name="first_name" required />
            </div>

            <div className="span-4 span-md-2 span-lg-1">
                <label style={styles.label} htmlFor="last_name">Last Name</label>
                <input style={styles.input} onChange={e => updateFormData('last_name', e.target.value)} type="text" id="last_name" name="last_name" required/>
            </div>

            <div className="span-4 span-md-2 span-lg-1">
                <label style={styles.label} htmlFor="phone_number">Phone Number</label>
                <input 
                    style={styles.input} 
                    onChange={e => updateFormData('phone_number', e.target.value)} 
                    type="tel" 
                    id="phone_number" 
                    name="phone_number" 
                    pattern="[0-9]{10}"
                    required />
            </div>

            <div className="span-4 span-md-2 span-lg-1">
                <label style={styles.label} htmlFor="email">E-mail</label>
                <input style={styles.input} onChange={e => updateFormData('email', e.target.value)} type="text" id="email" name="email" required />
            </div>

            <div className="span-4 span-md-2 span-lg-2">
                <label style={styles.label} htmlFor="guest_count">Number of Guests</label>
                <p style={{margin:0}}>{data.guest_count}</p>
                <input 
                    style={styles.range}
                    onChange={e => updateFormData('guest_count', e.target.value)} 
                    value={data.guest_count}
                    type="range"
                    name="guest_count"
                    id="guest_count"
                    min="1"
                    max="12"
                    step="1" />
                <span style={styles.helpText}>For larger parties, please call for special accomedations.</span>
            </div>

            <div className="span-2 span-md-1">
                <label style={styles.label} htmlFor="date">Date</label>
                <input style={styles.input} onChange={handleDateChange} defaultValue={min} min={min} max={max} type="date" id="date" name="date" required />
            </div>

            <div className="span-2 span-md-1">
                <label style={styles.label} htmlFor="time">Time</label>
                <select id="time" name="time" value={data.time} onChange={e => updateFormData('time', e.target.value)} style={styles.select} required>
                    <option value="">Select a time</option>
                    {availableTimes && availableTimes.map(time => (
                        <option value={time} key={time}>{time}</option>
                    ))}
                </select>
            </div>

            <div className="span-4 span-lg-2">
                <label style={styles.label} id="occasion-label">Occasion</label>
                <OccasionSelector aria-labelledby="occasion-label" setOccasion={setOccasion} />
            </div>

            <div className="span-4">
                <label style={styles.label} htmlFor="comments">Comments</label>
                <textarea 
                    onChange={e => updateFormData('comments', e.target.value)}
                    style={styles.textarea} 
                    max="256"
                    name="comments" id="comments"></textarea>
                <p style={styles.helpText}>{data.comments.length > 256 ? 'Too Long!!' : (256 - data.comments.length) + " Characters Left"}</p>
            </div>

            <div className="span-4">
                <button style={styles.button} type="submit">Submit</button>
            </div>
        </form>
    )
}

export default ReservationForm;

export { initializeTimes, updateTimes };