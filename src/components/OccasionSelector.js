import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChampagneGlasses, faChevronDown, faCake, faGem, faCalendarPlus, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState, useEffect } from "react";
import '../assets/OccasionSelector.css';

const styles = {
    select: {
        borderRadius: '.5rem',
        border: '1px solid #CCC',
        padding: '.25rem .5rem',
        fontSize: '1.1rem',
        position: 'relative',
        userSelect: 'none'
    },
    chevron: {
        height: '10px',
        width: '8px',
        position: 'absolute',
        right: '5px',
        top: '10px'
    },
    dropdownMenu: {
        border: '1px solid #CCC',
        padding: '.25rem 0',
        borderRadius: '.5rem',
        fontSize: '1.1rem',
        marginTop: '.5rem',
        userSelect: 'none',
        position: 'absolute',
        width: '100%',
        backgroundColor: '#FFF'
    },
    dropdownItem: {
        padding: '.5rem',
        borderBottom: '1px solid #CCC'
    }
}

function OccasionSelector({style, setOccasion}) {
    const [ isOpen, setOpen ] = useState(false);
    const [value, setValue] = useState('');
    const ref = useRef();

    const options = {
        birthday: {icon: faCake, text: 'Birthday'},
        engagement: {icon: faGem, text: 'Engagement'},
        anniversary: {icon: faCalendarPlus, text: 'Anniversary'}
    }

    const setSelectValue= (value) => {
        setValue(value);
        setOpen(false);
        setOccasion(value);
    }

    const toggleOpen = (e) => {
        e.preventDefault();
        setOpen(isOpen => (!isOpen));
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if(ref.current && !ref.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener('click', handleClickOutside, true);

        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        }
    });

    return (
        <div ref={ref} style={{...{position: 'relative'}, ...style}} >
            <div style={styles.select} onClick={toggleOpen} onKeyDown={toggleOpen} tabIndex="0">
                {!options[value] ?
                    <><FontAwesomeIcon icon={faChampagneGlasses} /> Select an occasion</> :
                    <><FontAwesomeIcon icon={options[value]['icon']} /> {options[value]['text']}</>
                }

                {isOpen ?
                    <span><FontAwesomeIcon style={styles.chevron} icon={faChevronUp} /></span> :
                    <span><FontAwesomeIcon style={styles.chevron} icon={faChevronDown} /></span>
                }
            </div>

            {isOpen && 
                <div style={styles.dropdownMenu}>
                    <div className="dropdown-item" onClick={e => setSelectValue('birthday')} style={styles.dropdownItem}> <FontAwesomeIcon icon={faCake} />  Birthday</div>
                    <div className="dropdown-item" onClick={e => setSelectValue('engagement')} style={styles.dropdownItem}> <FontAwesomeIcon icon={faGem} /> Engagement</div>
                    <div className="dropdown-item" onClick={e => setSelectValue('anniversary')} style={{...styles.dropdownItem, ...{borderBottom: 0}}}> <FontAwesomeIcon icon={faCalendarPlus} /> Anniversary</div>
                </div>
            }
            <input type="hidden" name="occasion" value={value} />
        </div>
    )
}

export default OccasionSelector;