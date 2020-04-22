import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {

    state= {
        userInput: ' ',
    }

  inputChangeHandler = (event) => {
   this.setState({userInput:event.target.value});
  }

  deleteCharHandler = (index) => {
      const text = this.state.userInput.split('');
      text.splice(index, 1);
      const updatedText = text.join('');
        this.setState({userInput: updatedText});
    }



  render() {
        const charList = this.state.userInput.split('').map((ch,index) =>{
            return <Char
                character={ch}
                key ={index}
            clicked={()=>this.deleteCharHandler(index)}/>;
        });

    return (
        <div className="App">
           <ol>
               <li>1.Create an input field (in App component) with a change listener which outputs the ength of the entered text below it(e.g. in a paragraph)</li>
               <li>2.Create a new component (=> ValidationComponent) hich reveives the text length as a prop</li>
               <li>3.Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length(e.g. take 5 as a minimum height)</li>
               <li>4. Create another component (=> CharComponent) and style it as an inline box (=>display : in-line block, padding:16px,text-align:center,margin:"6px,border:1px solid black):</li>
               <li>5.Render a list of CharComponents where each CharComponent receives a different letter of the entered text(in the initial input field) as a prop.</li>
               <li>6.When you click a CharComponent, it should be removed from the entered text.</li>
               <hr/>
               <li>Hint: Keep in mind that JavaScript strings are basically arrays!</li>
           </ol>
            <hr/>
          <input
              type="text"
              onChange={this.inputChangeHandler}
              value={this.state.userInput}></input>
            <p>{this.state.userInput}</p>
            <Validation inputLength={this.state.userInput.length}/>
            {charList}
        </div>
    );
  }
}

export default App;
