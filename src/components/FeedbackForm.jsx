import React, { useState } from 'react'
import Button from './shared/Button';
import Card from './shared/Card'

function FeedbackForm() {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState('');

    const handleTextChange = (e) => {
        if(text === ''){
            setBtnDisabled(true);
            setMessage(null);
        }
        else if(text !== '' && text.trim().length <= 10){
            setBtnDisabled(true)
            setMessage('character must be greater than 10')
        }else{
            setBtnDisabled(false)
            setMessage(null)
            
        }
        setText(e.target.value)
    }

  return (
    <Card>
      <form>
        <h2>How do you rate your service with us</h2>
        <div className="input-group">
          <input
            value={text}
            onChange={handleTextChange}
            type="text"
            placeholder="write a review"
          />
          <Button isDisabled={btnDisabled} type="submit">Send</Button >
        </div>
         {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
}

export default FeedbackForm
