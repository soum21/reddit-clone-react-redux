export const testAction = () => {
    return (dispatch, getState) => {
        dispatch({ type: 'GET_TOPICS' })
    }
}

export const upVote = (id) => {
    console.log(id)
    return (dispatch, getState) => {
        dispatch({
            type: 'UP_VOTE',
            payload: id
        })
    }
}

export const downVote = (id) => {
    console.log(id)
    return (dispatch, getState) => {
        dispatch({
            type: 'DOWN_VOTE',
            payload: id
        })
    }
}
export const deleteTopic = (id) => {
    console.log(id)
    return (dispatch, getState) => {
        dispatch({
            type: 'DELETE_TOPIC',
            payload: id
        })
    }
}

export const editTitle = (id, changedTitle) => {

    console.log(id, changedTitle)
    return (dispatch, getState) => {
        dispatch({
            type: 'EDIT_TOPIC',
            payload: { id, changedTitle }
        })
    }
}

export const addTitile = (id, title) => {
    var dateTime = new Date();
    console.log(id)
    console.log(title)
    return (dispatch, getState) => {
        dispatch({
            type: 'ADD_TITLE',
            payload: {
                id: id,
                topic_title: title,
                topic_desc: "None",
                user: "Unkonw",
                date_of_post: dateTime,
                votes: 0,
                last_updated: dateTime
            }
        })
    }
}