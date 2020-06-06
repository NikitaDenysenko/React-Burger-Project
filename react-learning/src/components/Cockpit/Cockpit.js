import React, { useEffect, useRef, useContext } from 'react';

import classes from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);

    useEffect(() => {
        console.log('[Cockpit.js] useEffect'); //runs for every update
        //http request...
        toggleBtnRef.current.click();
        return () => {
            console.log('[Cockpit.js] clean up work useEffect');
        };
    }, [props.persons]);

    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] clean up work 2 useEffect');
        };
    });

    const assignedClasses = [];
    let btnClass = '';
    if (props.showPersons) {
        btnClass = classes.Red;
    }

    if (props.personsLength <= 2) {
        assignedClasses.push(classes.red);
    }
    if (props.personsLength <= 1) {
        assignedClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>It is working</p>
            <button ref={toggleBtnRef} className={btnClass} onClick={props.clicked}>
                Toggle Persons
            </button>
            <button onClick={authContext.login}>Log in</button>
        </div>
    );
};

export default React.memo(Cockpit);
