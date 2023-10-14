import React from 'react';
import FeedbackItem from './FeedbackItem';

function FeedbackList({data}) {
  return (
    <>
        <h1>List</h1>
        {/* <ul>
          {data.map((item,index)=>(
           <li key={index}> {item.id}. <p>{item.text}</p></li>))}
        </ul> */}
{data.map((item,index)=>(<FeedbackItem rating={item.rating} text={item.text}/>))}

  
    </>
  );
}

export default FeedbackList;
