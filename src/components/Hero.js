import resturantFood from '../assets/restaurant-food.jpg';
import Button from './Button';
import '../assets/Hero.css';

const styles = {
    section: {
        // padding: '1.5rem 20%',
        backgroundColor: '#495E57',
        display: 'grid',
        // gridTemplateColumns: '1fr 1fr',
        color: '#FFF'
    },
    h1: {
        margin: 0,
        fontSize: '3.5rem',
        marginBottom: '.5rem',
        color: '#F4CE14'
    },
    h2: {
        margin: 0,
        fontSize: '2rem',
        lineHeight: '2.375rem',
        fontWeight: 'normal'
    },
    p: {
        fontSize: '1.25rem',
        margin: '3rem 0',
        lineHeight: '1.75rem'
    },
    img: {
        borderRadius: '.5rem',
        width: '100%',
        // height: '100%',
        // objectFit: 'contain'
    }
}

function Hero() {
    return (
        <section className="hero" style={styles.section}>

            <div style={{display: 'block'}}>
                <h1 style={styles.h1}>Little Lemon</h1>
                <h2 style={styles.h2}>Chicago</h2>


                <p style={styles.p}>We are a family owned Mediterranean restaurant, focused on 
                    traditional recipes served with a modern twist.</p>

                <Button style={{display: 'inline-block'}} href="/reservations">Reserve a Table</Button>
            </div>

            <img style={styles.img} src={resturantFood} alt="Food served on board" />
        </section>
    )
}

export default Hero;