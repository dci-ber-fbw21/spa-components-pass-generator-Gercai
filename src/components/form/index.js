import React from 'react';
import './index.scss';

class Form extends React.Component {

    constructor(props){
        
        super(props);

        this.state = {
            password: "please Enter",
            passwordLength: 12,
            big: false,
            special: false
        }

        this.characters = "abcdefghijklmnopqrstuvwxyz0123456789";
        this.bigCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.special = "!§$%&?";


    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    }

    // FormMethods
    handleSubmit(event){
        event.preventDefault();
        this.generatePassword(this.state.passwordLength);

        // Do stuff
    }

    handleChange(event){

        const {name,value} = event.target;
        this.setState({
             [name]: value
        })

    }

    handleCheck(event){

         const{name,checked} = event.target;
        
          this.setState({
             [name]: checked
          })
        
    }

    // HandlePassword

    generatePassword(length){

        let passwordString= "";

        let generatorString = this.characters;

        if(this.state.big == true)
        generatorString += this.bigCase;
        if(this.state.special ==true)
        generatorString += this.special;


        while(length > 0){
            length--;
            passwordString += generatorString.charAt(Math.floor(Math.random() * generatorString.length));            
        }

        this.setState({
            password: passwordString
        })
        
    }


    render(){
return(

<article>
    <h1>Generate Password</h1>
    
    
    <form onSubmit={this.handleSubmit} className="flex">
 
    <fieldset>
        <label>Result: </label>
        <input name="password" value={this.state.password} readOnly/>
        <button>Generate Password</button>
    </fieldset>
    <fieldset>
    <label><span>Setting</span></label>
            
            <label>
                Passwordlength
                <input name="passwordLength" value={this.state.passwordLength} onChange={this.handleChange}/>
            </label>
            
            <label>
            <input type="checkbox" name="big" onChange={this.handleCheck} />
                useMixedCase
            </label>
            
            <label>
                <input type="checkbox" name="special" onChange={this.handleCheck}/>
                specialCase
            </label>
    </fieldset>

    </form>
</article>
)
    }




}


export default Form;
