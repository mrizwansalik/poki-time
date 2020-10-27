import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';

class Update extends Component {
    state = { show: true }
    handleChang = (e) => {
        e.persist();
        this.setState({ ...this.state.posts, [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.handleEdit(this.state)

    }

    showModal = () => {
        this.setState({ show: true })
    }
    hideModal = () => {
        this.setState({ show: false })
    }
    // componentDidMount() {
    //     // console.log('Ran----', this.props.parentState);
    // }
    render() {
        return (<div>
            <Modal show={this.props.isModalOpen} >
                <div>
                    <form className='form-group'>
                        {/* <input type='text' name='userid' userid={this.state.posts.id} onChange={this.handleChang} className='form-control' /> */}
                        <input type='text' name='title' id="title" value={this.props.parentState.singlePost.title} onChange={e => this.props.onChangePost(e)} className='form-control' />
                        <input type='text' name='body' id="body" value={this.props.parentState.singlePost.body} onChange={e => this.props.onChangePost(e)} className='form-control' />
                        <button type="button" onClick={() => this.props.handleToggleModal()}>close</button>
                        <button type="button" onClick={() => this.props.handleUpdate()}>Update</button>
                    </form>
                </div>
            </Modal>
        </div>);
    }
}

export default Update;