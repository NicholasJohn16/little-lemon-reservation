const styles = {
    grid: {
        // display: 'flex',
        // alignContent: 'center',
        // justifyContent: 'center',
        // height: '100%'
    },
    form: {
        width: '35vh',
        border: '1px solid #CCC',
        minHeight: '5rem',
        margin: '10rem auto',
        borderRadius: '.5rem'
    },
    cardTitle: {
        margin: 0,
        fontSize: '1.25rem'
    },
    cardHeader: {
        borderBottom: '1px solid #CCC',
        padding: '.5rem'
    },
    cardBody: {
        padding: '.5rem'
    },
    cardFooter: {
        borderTop: '1px solid #CCC',
        padding: '.5rem'
    },
    button: {
        borderRadius: '.5rem',
        backgroundColor: '#F4CE14',
        padding: '.5rem 1rem',
        // fontSize: '18px',
        textDecoration: 'none',
        color: '#000',
        fontWeight: 'bold',
        // display: 'block'
        border: 0,
    },
    label: {
        display: 'block',
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
}


function Login() {

    return (
        <div style={styles.grid}>
            <form>
            <div style={styles.form}>
                <div style={styles.cardHeader}>
                    <h4 style={styles.cardTitle}>Login</h4>
                </div>
                <div style={styles.cardBody} >

                    <div>
                        <label style={styles.label} htmlFor="email">E-mail</label>
                        <input style={styles.input} type="text" id="email" name="email" />
                    </div>

                    <div>
                        <label style={styles.label} htmlFor="password">Passord</label>
                        <input style={styles.input} type="password" id="password" name="password" />
                    </div>

                </div>
                <div style={styles.cardFooter}>
                    <button style={styles.button} type="submit">Login</button>
                </div>
            </div>
            </form>
        </div>
    )
}

export default Login;