import { useLocation } from 'react-router-dom';
import '../assets/Reservations.css';
import Footer from '../components/Footer';

const styles = {
    alert: {
        borderRadius: '.5rem',
        backgroundColor: '#FBDABB',
        border: '1px solid #EE9972',
        padding: '2rem 1.5rem',
        margin: '4rem'
    },
}

const ConfirmedBooking = () => {
    const { state } = useLocation();
    console.log(state);
    return (
        <>
            <section className="reservation-form">

                <div style={styles.alert}>
                    <h1 style={{marginTop: 0}}>Reservation Confirmed!</h1>

                    <p style={{marginTop: 0}}>Thank you for your reservation, {state.get('first_name')} {state.get('last_name')}!</p>

                    <p>Your reservation for 
                    {state.get('guest_count')} {state.get('guest_count') > 1 ? 'guests' : 'guest'} is 
                    confirmed. We look forward to see you on {state.get('date')} at {state.get('time')}. A confirmation email has been sent to {state.get('email')}.</p>

                    <p style={{marginBottom: 0}}>If you have any questions or need to change or cancel your reservation, please call us directly at (555) 555-5555.</p>
                </div>

            </section>


            <Footer />
        </>
    )
}

export default ConfirmedBooking;