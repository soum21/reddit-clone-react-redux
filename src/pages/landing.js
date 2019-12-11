import React, { Component } from 'react'
import { connect } from 'react-redux'
import { testAction } from '../store/actions/testAction';
import List from '../components/list';
import './landing.css'
export class Landing extends Component {
    componentDidMount() {
        this.props.testAction();
    }
    render() {
        const { topics } = this.props;

        const sortedTopics = topics.sort((a, b) => {
            return b.votes - a.votes
        });

        return (
            <div className="list_wrapper">
                {
                    sortedTopics.map((topic, key) => {
                        return (
                            <div key={key} className="list">
                            <List key={key} topic={topic} />
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        topics: state.test.topics
    };
};

const mapDispatchToProps = dispatch => {
    return {
        testAction: () => {
            dispatch(testAction())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Landing);
