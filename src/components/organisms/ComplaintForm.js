import React, { Component } from 'react';
import Button from '../atoms/Button';
import FormField from '../molecules/FormField';

const POST_URL ='https://jsonplaceholder.typicode.com/posts';

class ComplaintForm extends Component {
  constructor(props) {
    super(props);
    this.state ={
      name: '',
      email: '',
      messageText: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler =this.changeHandler.bind(this);
  }
  
  changeHandler(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }


  handleSubmit(event) {
    event.preventDefault()
      fetch(`${POST_URL}`, {
        method: 'POST',
        body: JSON.stringify({
          name: this.state.name,
          email: this.state.email,
          messageText: this.state.messageText
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8'
        }
      })
      .then(response => response.json())
      .then(json => {
        console.log(json);
        alert(`Thank you for submitting feedback to Weather Kitty, ${this.state.name}`)
        this.setState({ name: '', email: '', messageText: '', });
      })
    .catch(err => {
      console.log(err);
    });
}

  render() {
    return (
      <div className='formClass'>
        <form onSubmit={this.handleSubmit} >
        <FormField type="text" name="name" label="Name" value={this.state.name} onChange={this.changeHandler} />
        <br></br>
        <br></br>
        <FormField type="text" name="email" label="Email Address" value={this.state.email} onChange={this.changeHandler} />
        <br></br>
        <br></br>
        <FormField type="textarea" name="messageText" label="Message" value={this.state.messageText} onChange={this.changeHandler} />
        <br></br>
        <Button className='textLinkClass' type='submit' value='submit'>Submit</Button>
      </form>
    </div>
    )
  }
}

export default ComplaintForm;



