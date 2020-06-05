import React, { Component } from 'react';

import classes from  './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            { id: '1', name: 'Nick', age: 19 },
            { id: '2', name: 'Den', age: 10 },
            { id: '3', name: 'Valera', age: 54 },
        ],
        otherState: 'some other value',
        showPersons: false,
    };

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps ', props);
        return state;
    }

    // componentWillMount() {
    //     console.log('[App.js] componentWillMount');
    // }
 
    componentDidMount() {
        console.log('[App.js] componentDidMount');
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex((p) => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex],
        };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({
            persons: persons,
        });
    };

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    };

    togglePersonsHandler = () => {
        //"this" always returns to the class
        const doesShow = this.state.showPersons;
        this.setState({ showPersons: !doesShow });
    };

    render() {
        console.log('[App.js] render');
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons 
                        persons={this.state.persons}
                        clicked={this.deletePersonHandler}  
                        changed={this.nameChangedHandler}  />;     
        }

        return (
            <div className={classes.App}>
                <Cockpit
                    title={this.props.appTitle} 
                    showPersons={this.state.showPersons} 
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}/>
                {persons}
            </div>
        );
    }
}

export default App;
