import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { upVote, downVote, deleteTopic, editTitle } from '../store/actions/testAction';
import './list.css';
const List = (props) => {
    const { topic } = props;
    const [viewInput, setInput] = useState(false)
    const [changedTitle, setTitle] = useState('')
    function handleEdit(){
        setInput(true)
    }

    function handleSubmit(id){
        console.log(id)
        console.log(changedTitle)
        if(changedTitle === ''){
            setInput(false)
        }
        else{
            props.editTitle(id,changedTitle)
            setInput(false)
        }
        
    }
    let titleChange = (e) =>{
        // console.log(e.target.value)
        setTitle(e.target.value)
    }
    return (
        <div className="wrapper">
            <div className="vote">
                <Button variant="outline-dark" className="up" onClick={() => props.upVote(topic.id)}>
                    <i className="fas fa-chevron-up"></i>
                </Button>
                <Button variant="outline-dark" className="down" onClick={() => props.downVote(topic.id)}>
                    <i className="fas fa-chevron-down"></i>
                </Button>
            </div>
            <div className="content">
                <div className="votes">
                    {topic.votes}
                </div>
                <div className="viewarea">
                    {
                        !viewInput ? (
                            <Link to={`/topic/${topic.id}`} className="link">
                            <div className="title">
                                {topic.topic_title}
                            </div>
                            </Link>
                        ) : (
                                <form className="title" >
                                    <input type="text" maxLength="255" placeholder={topic.topic_title} value={changedTitle} onChange={titleChange} style={{width:"100%"}}/>
                                </form>
                            )
                    }
                    <div className="options">
                        <div className="edit">
                            <Button variant="light" size="lg" className="option_button" onClick={()=>handleEdit()}>Edit</Button>
                        </div>
                        <div className="save">
                            <Button variant="light" size="lg" className="option_button" type="submit" onClick={()=>handleSubmit(topic.id)}>Save</Button>
                        </div>
                        <div className="delete">
                            <Button variant="light" size="lg" className="option_button" onClick={() => props.deleteTopic(topic.id)}>Delete</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    votes: state.test.topics.votes,
    topic_title: state.test.topics.topic_title
})
const mapDispatchToProps = dispatch => {
    return {
        upVote: (id) => {
            dispatch(upVote(id))
        },
        downVote: (id) => {
            dispatch(downVote(id))
        },
        deleteTopic: (id) => {
            dispatch(deleteTopic(id))
        },
        editTitle: (id,changedTitle) =>{
            dispatch(editTitle(id,changedTitle))
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(List);
