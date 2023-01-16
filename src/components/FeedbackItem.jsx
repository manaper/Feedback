import React from "react";
import Card from "./shared/Card";
import { FaEdit, FaTimes } from "react-icons/fa"
import FeedbackContext from '../context/FeedbackContext'
import { useContext } from 'react'

function FeedbackItem({item}) {
    const {deleteFeedback,editFeedback} = useContext(FeedbackContext)
  return (
    <Card>
      <div className="num-display">{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)}
      className="close">
        <FaTimes color="purple" />
      </button>
      <button onClick={() => editFeedback(item)}
      className="edit">
        <FaEdit color='purple' />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

export default FeedbackItem;
