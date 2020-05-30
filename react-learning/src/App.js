import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const App = (props) => {
    const [personsState, setPersonsState] = useState({
        persons: [
            { name: 'Nick', age: 19 },
            { name: 'Den', age: 10 },
            { name: 'Valera', age: 54 },
        ],
        otherState: 'some other value',
    });

    const switchNameHandler = (newName) => {
        setPersonsState({
            persons: [
                { name: newName, age: 19 },
                { name: 'Den', age: 27 },
                { name: 'Valera', age: 54 },
            ],
            otherState: personsState.otherState,
        });
    };

    const nameChangedHandler = (event) => {
        setPersonsState({
            persons: [
                { name: 'Nick', age: 19 },
                { name: event.target.value, age: 27 },
                { name: 'Valera', age: 54 },
            ],
            otherState: personsState.otherState,
        });
    };

    const style = {
        backgroundColor: 'white',
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer',
    };

    return (
        <div className='App'>
            <h1>Hello</h1>
            <button style={style} onClick={() => switchNameHandler('Nickolas')}>
                Switch Name
            </button>
            <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
            <Person
                name={personsState.persons[1].name}
                age={personsState.persons[1].age}
                click={switchNameHandler.bind(this, 'Smith')}
                changed={nameChangedHandler}>
                My Hobbies: racing
            </Person>
            <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
        </div>
    );
};

export default App;
