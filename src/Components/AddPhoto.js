import React, {Component} from 'react';
import { useParams } from 'react-router-dom';


class AddPhoto extends Component{

  constructor(){
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event){
    event.preventDefault();
    const link = event.target.elements.link.value;
    const desc = event.target.elements.desc.value;
    const post = {
      id : new Date ,
      desc:desc,
      link: link
    }
    if(link && desc){
      this.props.onAddPhoto(post);
    }
  }
  
    componentDidMount(){
        console.log('componentdidmount');
    }
    componentDidUpdate(prevProps, prevState){
      //  alert('rerender');
    }
    render(){
      return <div>
        <h1>Add photo</h1>
        <form onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Link" name="link" />
          <input type="text" placeholder="Desc" name="desc"/>
          <button>POST</button>
        </form>
        </div>
    }
  
  }

  
  export default AddPhoto