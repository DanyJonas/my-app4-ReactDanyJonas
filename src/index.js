import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import index from './js/index';

class MagicEightBall extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            randomIndex: ''
        };
        this.ask = this.ask.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    ask() {
        if(this.state.userInput) {
            this.setState({
                randomIndex: Math.floor(Math.random() * 20),
                userInput: ''
            });
        }
    }
    handleChange(event) {
        this.setState({
            userInput: event.target.value
        });
    }
    render() {
        const possibleAnswers = [
            'Seguramente',
      'Está decidido así',
      'Sin lugar a dudas',
      'Sí, deinitivamente',
      'Puedes apostar que sí',
      'Así como lo veo, sí ',
      'Se vé bien',
      'Sí',
      'Todo apunta que sí',
      'Repite de nuevo',
      'Pregunta más tarde',
      'Mejor no decirte ahora',
      'No puedo predecir ahora',
      'Concentrate y pregunta de nuevo',
      "No cuentes con ello",
      'Mi respuesta es nó',
      'Mis fuentes dicen que no',
      'Probablemente no',
      'Que pregunta más tonta',
      'Muy dudoso'
        ];
        const answer = possibleAnswers[this.state.randomIndex];//javascript antes del return
       
       
        const inputStyle = {
           width: 235,
           margin: 5,
           border: '1px solid black' 
        };
        
        {if(this.state.userInput.length > 20) {
           inputStyle.border = '3px solid red'
         }
        }
        
        return (
            <div>
                <input 
                    type='text'
                    value={this.state.userInput}
                    onChange={this.handleChange}
                    style={inputStyle}
                />
                <br />
                <button onClick={this.ask}>Preguntale a la bola mágica!</button>
                <br />
                <h3>Respuesta:</h3>
                <p>
                    {answer}
                </p>
                <div class='divider'></div>
            </div>
        );
    }
}
const root1 = ReactDOM.createRoot(document.getElementById('root1'));
root1.render(<MagicEightBall />);

class MyComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }
    toggleDisplay() {
        this.setState((state) => ({
            display: !state.display
        }));
    }
    render() {
        
            return (
                <div>
                    <button onClick={this.toggleDisplay}>Toggle Display</button>
                    {this.state.display &&<h1>Displayed!</h1>}
                     <div class='divider'></div>
                </div>
            );
        
       
    }
}
const root2 = ReactDOM.createRoot(document.getElementById('root2'));
root2.render(<MyComponent />);

const inputStyle2 = {
    width: 235,
    margin: 5
}

class CheckUserAge extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        input: '',
        userAge: ''
    }
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
 }
 handleChange(e) {
    this.setState({
        input: e.target.value,
        userAge: ''
    });
 }
 submit() {
    this.setState(state => ({
        userAge: state.input
    }));
 }
 render() {
    const buttonOne = <button onClick={this.submit}>Submit</button>;
    const buttonTwo = <button>You May Enter</button>;
    const buttonThree = <button>You Shall Not Pass</button>;

    return (
        <div>
            <h3>Enter Your Age to Continue</h3>
            <input 
                style={inputStyle2}
                type='number'
                value={this.state.input}
                onChange={this.handleChange}
            />
            <br />
            {this.state.userAge === '' ? buttonOne
            : this.state.userAge >= 18 ? buttonTwo
            : buttonThree
            }
            <div class="divider"></div>
        </div>
    );
 }
}
const root3 = ReactDOM.createRoot(document.getElementById('root3'));
root3.render(<CheckUserAge />);

class Results extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <h1>{this.props.fiftyFifty ? 'You Win!' : 'You Lose!'}</h1>
        )
    }
}
class GameOfChance extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 1
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState({
            counter: this.state.counter + 1
        })
    }
   render() {
    const expression = Math.random() >= .5 ? true : false;

    return (
        <div>
            <button onClick={this.handleClick}>Play Again</button>
            <Results fiftyFifty={expression}/>
            <p>{'turn: ' + this.state.counter}</p>
            <div class='divider'></div>
        </div>
    )
   }
}
const root4 = ReactDOM.createRoot(document.getElementById('root4'));
root4.render(<GameOfChance />)

const textareaStyle = {
    width: 235,
    margin: 5
}

class MyToDoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            toDoList: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleSubmit() {
        const itemsArray = this.state.userInput.split(',');
        this.setState({
            toDoList: itemsArray
        });
    }
    handleChange(e) {
        this.setState({
            userInput: e.target.value
        })
    }
    render() {
        const items = this.state.toDoList.map(i => <li>{i}</li>);
        return(
           <div>
            <textarea
                onChange={this.handleChange}
                value={this.state.userInput}
                style={textareaStyle}
                placeholder='Separate Items With Commas'
            />
            <br/>
            <button
            onClick={this.handleSubmit}>Crear Lista</button>
            <h1>My 'To Do' list: </h1>
            <ul>{items}</ul>
            <div class="divider"></div>
           </div>
        );
    }
}
const root5 = ReactDOM.createRoot(document.getElementById('root5'));
root5.render(<MyToDoList />);

const FrontEndFrameWorks = [
    'React',
    'Angular',
    'Ember',
    'Knockout',
    'Backbone',
    'Vue'
];
function FrameWork() {
    const renderFrameWork = FrontEndFrameWorks.map((item, index) => <li key={index}>{item}</li>);
    return(
        <div>
            <h1>Popular Front End JavaScript Frameworks.map()</h1>
            <ul>{renderFrameWork}</ul>
            <div class='divider'></div>
        </div>
    )
}
const root6 = ReactDOM.createRoot(document.getElementById('root6'));
root6.render(FrameWork());

class MyComponent7 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [
                {
                    username: 'Jeff',
                    online: true
                  },
                  {
                    username: 'Alan',
                    online: false
                  },
                  {
                    username: 'Mary',
                    online: true
                  },
                  {
                    username: 'Jim',
                    online: false
                  },
                  {
                    username: 'Sara',
                    online: true
                  },
                  {
                    username: 'Laura',
                    online: true
                  }
                
            ]
        };
    }
    render () {
        const usersOnline = this.state.users.filter(user => user.online)
        const renderOnline = usersOnline.map(user => <li key={user.username}>{user.username}</li>)
        return(
            <div>
                <h1>Current Online Users:  'filter()'</h1>
                <ul>{renderOnline}</ul>
                <div class='divider'></div>
            </div>
        );
    }
}
const root7 = ReactDOM.createRoot(document.getElementById('root7'));
root7.render(<MyComponent7 />);