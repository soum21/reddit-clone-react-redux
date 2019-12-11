
import React from "react";
import { connect } from 'react-redux'
function TopicDetails(props) {
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card -content">
                    <span className="card-title">{props.topic.topic_title}</span>
                    <p>
                        {props.topic.topic_desc}
                    </p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Created By {props.topic.user}</div>
                    <div>Votes {props.topic.votes}</div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state, props) => ({
    topic: state.test.topics.find((item) => {
        return item.id === props.match.params.id
    })
})


export default connect(mapStateToProps)(TopicDetails);
