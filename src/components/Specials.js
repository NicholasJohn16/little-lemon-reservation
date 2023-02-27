import Button from './Button';
import '../assets/Specials.css'

import greekSalad from '../assets/greek-salad.jpg';
import bruchetta from '../assets/bruchetta.png';
import lemonDesert from '../assets/lemon-dessert.jpg';


const styles = {
    section: {
        // padding: '1.5rem 20%',
    },
    header: {
        display: 'grid', 
        gridTemplateColumns: '7fr auto',
        alignItems: 'center' 
    },
    h2: {
        fontSize: '40px',
        fontWeight: '650'
    },
    cards: {
        display: 'grid',
        // gridTemplateColumns: 'repeat(3, 1fr)',
        gap: '2rem'
    },
    card: {
        borderRadius: '.5rem',
        border: '1px solid #ccc',
        // display: 'flex',
        // flexFlow: 'column'
    },
    cardHeader: {
        display: 'grid',
        gridTemplateColumns: '1fr auto',
        alignItems: 'center',
        // marginBottom: '1.5rem'
    },
    cardTitle: {
        margin: '0',
        // fontSize: '24px',
        fontWeight: '650'
    },
    cardPrice: {
        fontSize: '16px',
        fontWeight: 'bold',
        color: '#EE9972'
    },
    cardImg: {
        maxWidth: '100%'
    },
    cardBody: {
        padding: '1rem 1rem 0 1rem',
        flex: '1',
    },
    cardText: {
        lineHeight: '1.2rem',
        color: '#495E57',
        flex: '1 1 auto'
    },
    cardFooter: {
        padding: '0 1rem 1rem 1rem'
    }
}

const Specials = () => {
    return (
        <section className="specials" style={styles.section}>

            <header style={styles.header}>
                <h2 style={styles.h2}>Specials</h2>

                <Button href="/menu">Online Menu</Button>
            </header>

            <div className="cards" style={styles.cards}>

                <div className="card" style={styles.card}>
                    <img className="card-img" style={styles.cardImg} src={greekSalad} alt="Greek Salad" />

                    <div style={styles.cardBody}>
                        <header style={styles.cardHeader}>
                            <h4 style={styles.cardTitle}>Greek Salad</h4>
                            <span style={styles.cardPrice}>$12.99</span>
                        </header>

                        <p style={styles.cardText}>The famous greek salad of crispy lettuce, peppers, 
                            olives and our Chicago style feta cheese, garnished 
                            with crunchy garlic and rosemary croutons.</p>

                    </div>
                    <div className="card-footer" style={styles.cardFooter}>
                        <Button style={{textAlign: 'center'}} href='/order'>Order a delivery</Button>
                    </div>
                </div>

                <div className="card" style={styles.card}>
                    <img className='card-img' style={styles.cardImg} src={bruchetta} alt="Greek Salad" />

                    <div style={styles.cardBody}>
                        <header style={styles.cardHeader}>
                            <h4 style={styles.cardTitle}>Bruchetta</h4>
                            <span style={styles.cardPrice}>$5.99</span>
                        </header>

                        <p style={styles.cardText}>Our Bruschetta is made from grilled bread that has 
                            been smeared with garlic and seasoned with salt and 
                            olive oil.</p>

                    </div>
                    <div className='card-footer' style={styles.cardFooter}>
                        <Button style={{textAlign: 'center'}} href='/order'>Order a delivery</Button>
                    </div>
                </div>

                <div className="card" style={styles.card}>
                    <img className="card-img" style={styles.cardImg} src={lemonDesert} alt="Greek Salad" />

                    <div style={styles.cardBody}>
                        <header style={styles.cardHeader}>
                            <h4 style={styles.cardTitle}>Lemon Dessert</h4>
                            <span style={styles.cardPrice}>$5.00</span>
                        </header>

                        <p style={styles.cardText}>This comes straight from grandma’s recipe book, 
                            every last ingredient has been sourced and is as 
                            authentic as can be imagined.</p>

                    </div>
                    <div className="card-footer" style={styles.cardFooter}>
                        <Button style={{textAlign: 'center'}} href='/order'>Order a delivery</Button>
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Specials;