import React, { Component } from 'react';
import Axios from 'axios';
import {connect} from 'react-redux'

class Posts extends Component {
    state = {
        post: null,
        comments: [],
    }
    componentDidMount() {
        let id = this.props.match.params.post_id;
        Axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
            .then(res => {
                this.setState({ post: res.data })
            })

        Axios.get('https://jsonplaceholder.typicode.com/posts/' + id + '/comments')
            .then(res => {

                this.setState({ comments: res.data })
            })

    }

    handleDelete = (commentId) => {
        if (!this.props.isLoggedIn) return alert('Un Authorized User');
        const comments = this.state.comments.filter(c => c.id !== commentId);
        console.log("filtered comments :", comments);
        this.setState({ comments });
    }
    handleDelete = ()=>{

        this.props.deletePost(this.props.post.id)
    }
    render() {
        console.log(this.props)
   
        const post = this.props.post ? (
            <div>
                <h4 className='text-center'>{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <button className='btn btn-danger d-flex justify-content-center' onClick={this.handleDelete}>Delete Post</button>

            </div>

        ) : (<div className='text-center'> Loading Posts.......</div>)

        const { comments } = this.state;
        const commentsList = comments.length ? (
            comments.map(comment => {
                return (
                    <div key={comment.id}>
                        <h4 className='text-center'>{comment.name}</h4>
                        <p className=''>{comment.email}</p>
                        <p>{comment.body}</p>
                        <button className="btn btn-danger m-2 p-2 centered rounded btn-sm" onClick={() => this.handleDelete(comment.id)}>
                            Delete Comment
                        </button>
                    </div>
                )
            })


        ) : (<div className='text-center'> Loading Comments.......</div>)
        return (
            <div className='bg-success m-2 p-2 rounded'>
                <div className='container'>
                    {post}
                    <h5 className='text-center'> Comments Of This Post</h5>
                    {commentsList}
                </div>

            </div>
        );
    }
}

const mapStateToprops = (state, ownProps)=>{
  let id = ownProps.match.params.post_id
  return {
      posts : state.posts.find(post=>post.id === id)
  }
}

const mapDispatchToProps =(dispatch)=>{
    return{
        deletePost : (id)=>{dispatch({type:"DELETE_POST", id: id})}
    }
}

export default connect(mapStateToprops, mapDispatchToProps)(Posts);