const initialState = {
    topics: [
        {
          id: "1",
          topic_title: "First Topic",
          topic_desc:"This is first Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:2,
          last_updated:'26/10/2019'
        },
        {
          id: "2",
          topic_title: "Second topic",
          topic_desc:"This is second Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:4,
          last_updated:'26/10/2019'
        },
        {
          id: "3",
          topic_title: "Third topic",
          topic_desc:"This is third Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:21,
          last_updated:'26/10/2019'
        },
        {
          id: "4",
          topic_title: "Fourth topic",
          topic_desc:"This is Fourth Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:25,
          last_updated:'26/10/2019'
        },
        {
          id: "5",
          topic_title: "Fifth topic",
          topic_desc:"This is Fifth Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:24,
          last_updated:'26/10/2019'
        },
        {
          id: "6",
          topic_title: "Sixth topic",
          topic_desc:"This is Fifth Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:35,
          last_updated:'26/10/2019'
        },
        {
          id: "7",
          topic_title: "Seventh topic",
          topic_desc:"This is Fifth Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:33,
          last_updated:'26/10/2019'
        },
        {
          id: "8",
          topic_title: "Eighth topic",
          topic_desc:"This is Fifth Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:31,
          last_updated:'26/10/2019'
        },
        {
          id: "9",
          topic_title: "Ninth topic",
          topic_desc:"This is Fifth Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:24,
          last_updated:'26/10/2019'
        },
        {
          id: "10",
          topic_title: "Tenth topic",
          topic_desc:"This is Fifth Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:20,
          last_updated:'26/10/2019'
        },
        {
          id: "11",
          topic_title: "Eleventh topic",
          topic_desc:"This is Fifth Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:20,
          last_updated:'26/10/2019'
        },
        {
          id: "12",
          topic_title: "Twelveth topic",
          topic_desc:"This is Fifth Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:21,
          last_updated:'26/10/2019'
        },
        {
          id: "13",
          topic_title: "Thirteenth topic",
          topic_desc:"This is Fifth Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:22,
          last_updated:'26/10/2019'
        },
        {
          id: "14",
          topic_title: "Fourteen topic",
          topic_desc:"This is Fifth Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:23,
          last_updated:'26/10/2019'
        },
        {
          id: "15",
          topic_title: "Fifteen topic",
          topic_desc:"This is Fifth Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:25,
          last_updated:'26/10/2019'
        },
        {
          id: "16",
          topic_title: "Sixteen topic",
          topic_desc:"This is Fifth Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:16,
          last_updated:'26/10/2019'
        },
        {
          id: "17",
          topic_title: "Seventeen topic",
          topic_desc:"This is Fifth Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:14,
          last_updated:'26/10/2019'
        },
        {
          id: "18",
          topic_title: "Eighteen topic",
          topic_desc:"This is Fifth Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:10,
          last_updated:'26/10/2019'
        },
        {
          id: "19",
          topic_title: "Nineteen topic",
          topic_desc:"This is Fifth Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:11,
          last_updated:'26/10/2019'
        },
        {
          id: "20",
          topic_title: "Twenty topic",
          topic_desc:"This is Fifth Topic",
          user: "Mr.Chong",
          date_of_post: "26/10/2019",
          votes:12,
          last_updated:'26/10/2019'
        }
      ]
}
 
const testReducer = (state=initialState,action)=>{
  switch (action.type) {
    case 'GET_TOPICS':
    return {
      ...state,
      }
    case 'UP_VOTE':{
      console.log(action.payload)
      return({
        ...state,
        topics: state.topics.map(topic => (topic.id === action.payload ? { ...topic, votes: topic.votes + 1 } : topic))
    })
    }  
    case 'DOWN_VOTE':{
      console.log(action.payload)
      return({
        ...state,
        topics: state.topics.map(topic => (topic.id === action.payload ? { ...topic, votes: topic.votes - 1 } : topic))
    })
    }  
    case "DELETE_TOPIC":
      return ({
        ...state,
        topics:state.topics.filter(topic => topic.id !== action.payload)
      })
    case "EDIT_TOPIC":
    return({
      ...state,
      topics: state.topics.map(topic => (topic.id === action.payload.id ? { ...topic, topic_title: action.payload.changedTitle } : topic))
      })  
    case 'ADD_TITLE':
      console.log(action.payload)  
    return({
      ...state,
      topics: [...state.topics, action.payload]
    })
      default:
      return state;
  }
}

export default testReducer;