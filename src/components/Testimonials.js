import avatar from '../assets/avatar.jpg'
import '../assets/Testimonials.css';

const styles = {
    section: {
        // padding: '1.5rem 20%',
        display: 'grid',
        backgroundColor: '#EE9972'
    },
    h2: {
        fontSize: '40px',
        fontWeight: '650',
    },
    testimonials: {
        display: 'grid',
        // gridTemplateColumns: 'repeat(4, 1fr)',
        // gridTemplateRows: '1fr',
        overflow: 'hidden',
        gap: '1rem'
    },
    testimonial: {
        // border: '1px solid black',
        borderRadius: '.5rem',
        padding: '1rem',
        backgroundColor: 'rgba(255, 255, 255, .15)',
    },
    text: {
        fontStyle: 'italic'
    },
    avatar: {
        borderRadius: '50%',
        height: '2rem',
        width: '2rem',
        verticalAlign: 'middle',
        marginRight: '.5rem'
    }
}

const Testimonials = () => {
    return (
        <section className='testimonials-section' style={styles.section}>
            <h2 style={styles.h2}>Testimonials</h2>


            <div className='testimonials' style={styles.testimonials}>


                <div>
                    <div style={styles.testimonial}>
                        <p style={styles.text}>"Sodales ut eu sem integer vitae justo eget. Natoque penatibus et magnis dis parturient montes nascetur ridiculus mus. Vulputate sapien nec sagittis aliquam malesuada bibendum arcu vitae elementum."</p>
                        <div style={{}}>
                            <img src={avatar} style={styles.avatar} alt="User's avatar" /> <span>Ronda Carson</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={styles.testimonial}>
                        <p style={styles.text}>"Ipsum dolor sit amet consectetur adipiscing elit duis. Consectetur a erat nam at lectus urna duis convallis convallis. Feugiat in fermentum posuere urna nec. Scelerisque mauris pellentesque pulvinar pellentesque habitant morbi tristique."</p>
                        <div style={{}}>
                            <img src={avatar} style={styles.avatar} alt="User's avatar" /> <span>Ros Summer</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={styles.testimonial}>
                        <p style={styles.text}>"Morbi quis commodo odio aenean sed. Netus et malesuada fames ac turpis egestas. Massa eget egestas purus viverra accumsan. Donec ac odio tempor orci dapibus ultrices in iaculis. Ornare suspendisse sed nisi lacus sed."</p>
                        <div style={{}}>
                            <img src={avatar} style={styles.avatar} alt="User's avatar" /> <span>Freddie Genette</span>
                        </div>
                    </div>
                </div>
                <div>
                    <div style={styles.testimonial}>
                        <p style={styles.text}>"Varius morbi enim nunc faucibus a pellentesque sit amet. Est velit egestas dui id ornare arcu odio. Luctus accumsan tortor posuere ac ut. Nulla malesuada pellentesque elit eget gravida cum sociis."</p>
                        <div style={{}}>
                            <img src={avatar} style={styles.avatar} alt="User's avatar" /> <span>Cyndi Maris</span>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default Testimonials;