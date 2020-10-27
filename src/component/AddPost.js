import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class AddPost extends Component { 
    state = { 
        userid : "",
        title : "",
        body : "",
        show : false,
      }

      handleChange =(e)=>{
          this.setState({[e.target.name]: e.target.value})
      }

      handleSubmit = (e)=>{
          e.preventDefault();
          this.props.addPost(this.state)
          this.setState({ userid :'', title :"", body:""})
      }
      showModal =()=>{
        this.setState({show : true})
    }
    hideModal =()=>{
        this.setState({show:false})
    }

    render() { 
        return ( 
        <div className='container'>
            <Modal show = {this.state.show}>
            <form className='form-group bg-light rounded' onSubmit={this.handleSubmit}>
                <label className='m-3'>UserID</label>
                <input type='text' name='userid' className='form-control' onChange={this.handleChange} value={this.state.userid} />
                <label className='m-3'>Title</label>
                <input type='text' name='title' className='form-control' onChange={this.handleChange} value={this.state.title}/>
                <label className='m-3'>Body</label>
                <input type='text' name='body' className='form-control' onChange={this.handleChange} value={this.state.body}/>
                <button className='btn btn-success btn-sm m-2 p-2 text-center' onClick={this.hideModal}>Submit</button>
            </form>
            </Modal>
            <button onClick={this.showModal} className='btn btn-success btn-sm m-2 p-2'>Add Post</button>
        </div> 
        );
    }
}
 
export default AddPost;