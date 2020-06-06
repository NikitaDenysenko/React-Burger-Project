import React, { Component } from 'react';

import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

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
        showCockpit: true,
        authenticated: false,
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

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true; //false - prevents an update
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');
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

    loginHandler = () => {
        this.setState({authenticated: true});
    };

    render() {
        console.log('[App.js] render');
        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                    isAuthenticated={this.state.authenticated}
                />
            );
        }

        return (
            <Aux>
                <button
                    onClick={() => {
                        this.setState({ showCockpit: false });
                    }}>
                    Remove Cockpit
                </button>
                <AuthContext.Provider value={{
                    authenticated: this.state.authenticated,
                    login: this.loginHandler
                }}>
                    {this.state.showCockpit ? (
                        <Cockpit
                            title={this.props.appTitle}
                            showPersons={this.state.showPersons}
                            personsLength={this.state.persons.length}
                            clicked={this.togglePersonsHandler}
                        />
                    ) : null}
                    {persons}
                </AuthContext.Provider>
            </Aux>
        );
    }
}

export default WithClass(App, classes.App);
