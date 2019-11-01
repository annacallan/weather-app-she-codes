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
      message: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeHandler =this.changeHandler.bind(this);
  }
  
  changeHandler = event => {
    // const value = event.target.value;
    this.setState({
      name: this.state.name,
      email: this.state.email,
    });
    console.log(this.state.name)
  };
  
  // handleSubmit(event) {
  //   event.preventDefault();
  //   fetch(`${POST_URL}`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8'
  //     },
  //     body: queryString.stringify({
  //       name,
  //       email,
  //       messageText
  //     })
  //     });  
  //   }

    handleSubmit(event) {
        event.preventDefault()
        fetch(`${POST_URL}`, {
          method: 'POST',
          body: JSON.stringify({}),
        }).then(() => alert(`Thank you for submitting feedback to Weather Kitty ${this.name}`)
        )}


  
  render() {
    return (
      <div className='formClass'>
        <form onSubmit={this.handleSubmit} >
        <FormField type="text" name="name" label="Name" value={this.name} onChange={this.changeHandler} />
        <br></br>
        <br></br>
        <FormField type="text" name="email" label="Email Address" value={this.email} onChange={this.changeHandler} />
        <br></br>
        <br></br>
        <FormField type="textarea" name="messageText" label="Message" value={this.messageText} onChange={this.changeHandler} />
        <br></br>
        <Button type='submit'>Submit</Button>
      </form>
    </div>
    )
  }
}

export default ComplaintForm;

// const ComplaintForm = ({name, email, message, handleSubmit, changeHandler,...props}) => {
//   return (
//     <div className='formClass'>
//       <form onSubmit={handleSubmit} >
//         <FormField type="text" name="name" label="Name" value={name} onChange={changeHandler} />
//         <br></br>
//         <br></br>
//         <FormField type="text" name="email" label="Email Address" value={email} onChange={changeHandler} />
//         <br></br>
//         <br></br>
//         <FormField type="textarea" name="message" label="Message" value={message} onChange={changeHandler} />
//         <br></br>
//         <Button type='submit'>Submit</Button>
//       </form>
//     </div>
//   );
// };

// export default ComplaintForm


