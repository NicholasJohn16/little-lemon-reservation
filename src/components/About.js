import imgA from '../assets/mario-and-adrian-a.jpg';
import imgB from '../assets/mario-and-adrian-b.jpg';
import '../assets/About.css';

const styles = {
    section: {
        // padding: '1.5rem 20%',
        display: 'grid',
        // gridTemplateColumns: 'repeat(2, 1fr)',
        columnGap: '2rem',
        height: 'calc(100% + 100px)'
    },
    imgA: {
        maxWidth: '100%',
        position: 'absolute',
        right: '0',
        borderRadius: '.5rem'
    },
    imgB: {
        maxWidth: '100%',
        position: 'absolute',
        bottom: '0',
        borderRadius: '.5rem'
    },
    h2: {
        fontSize: '2.5rem',
        fontWeight: '650',
        marginBottom: 0,
        color: '#F4CE14'
    },
    h4: {
        fontSize: '1.5rem',
        marginTop: 0
    },
    p: {
        fontSize: '1.25rem',
        fontWeight: 'bold'
    },
    images: {
        position: 'relative',
        minHeight: '450px'
    }
}

const About = () => {
    return (
        <section className='about' style={styles.section}>
            <header>
                <h2 style={styles.h2}>Little Lemon</h2>
                <h4 style={styles.h4}>Chicago</h4>
            </header>
            <div className='description'>
                <p style={styles.p}>Amet minim mollit non deserunt ullamco est sit aliqua dolor
                     do amet sint. Velit officia consequat duis enim velit 
                     mollit. Exercitation veniam consequat sunt nostrud amet. 
                     Amet minim mollit non deserunt ullamco est sit aliqua 
                     dolor do amet sint. Velit officia consequat duis enim 
                     velit mollit.</p>
            </div>
            <div className='images' style={styles.images}>
                <img style={styles.imgA} src={imgA} alt="Mario & Adrian in the Kitchen" />
                <img style={styles.imgB} src={imgB} alt="Mario & Adrian in the Kitchen" />
            </div>
        </section>
    )
}

export default About;