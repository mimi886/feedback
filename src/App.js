import { useState } from "react";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackData from "./data/FeedbackData";
function App() {
    const [feedback, setFeedback]= useState (FeedbackData)
    // const txt="Feedback UI";
  return(
        <>
        {/* <Header text={txt}/> */}
        <Header text='Feedback UI'/>
        <div className='container'>
            <FeedbackList data={feedback}/>
        </div>
        </>
    )
}
export default App
