import React, { useEffect, useState, useRef } from 'react';
import io from 'socket.io-client';
import moment from 'moment';

const App = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState([]);

  const socket = useRef();

  const onSubmit = e => {
    e.preventDefault();

    const message = text.trim();
    if (!message) {
      return;
    }

    socket.current.emit('messages', message);
    setText('');
    document.querySelector('form').scrollIntoView(false);
  }

  useEffect(() => {
    socket.current = io(window.location.host, { transports: ['websocket'] });

    socket.current.on('messages', messages => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
      });
      
      setMessages(prevMessage => prevMessage.concat(messages));
      document.querySelector('form').scrollIntoView(false);
    })
  }, []);

  useEffect(() => {
    const listener = () => {
      const messageId = messages.length ? messages[messages.length - 1].id : null;

      socket.current.emit('getMessages', messageId);
    }

    socket.current.on('connect', listener);

    return () => socket.current.removeListener('connect', listener);
  }, [messages]);

  return (
    <form onSubmit={onSubmit}>
      {messages.map(({ id, text, createdAt }) => (
        <div className="message" key={id}>
          <div>
            {text}
            <span className="timestamp">{moment(createdAt).format('hh:mm')}</span>
          </div>
        </div>
      ))}
      <input value={text} placeholder="Введите сообщение и Enter"  onChange={e => setText(e.target.value)} />
    </form>
  )
}

export default App;
