import resturant from '../assets/restaurant.jpg';
import Footer from '../components/Footer';
import ReservationForm from '../components/ReservationForm';
import '../assets/Reservations.css';

const styles = {
    header: {
        backgroundImage: `url(${resturant})`,
        minHeight: '30vh',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    h1: {
        fontSize: '4rem',
        margin: '0 20%',
        color: '#FFF',
        textShadow: '1px 1px 2px #000'
    }
}

function Reservations() {
    return (
        <>
            <div style={styles.header}>
                <h1 style={styles.h1}>Reservations</h1>
            </div>

            <section className='reservation-form'>
                <h2>Reserve a Table</h2>

                <ReservationForm />
            </section>

            <Footer />
        </>
    )
}

export default Reservations;