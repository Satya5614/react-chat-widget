import React from 'react';
import PropTypes from 'prop-types';

import send from 'assets/send_button.svg';
import attachment from 'assets/attachment.svg';
import './style.scss';

const Sender = ({ sendMessage, placeholder, disabledInput, onClickAttachment }) => (
  <form className="sender" onSubmit={sendMessage}>
    <button type="button" className="send" onClick={onClickAttachment}>
      <img src={attachment} style={{ height: 25, width: 25 }} className="send-icon" alt="send" />
    </button>
    <input
      type="text"
      className="new-message"
      name="message"
      placeholder={placeholder}
      disabled={disabledInput}
      autoFocus
      autoComplete="off"
    />
    <button type="submit" className="send">
      <img src={send} className="send-icon" alt="send" />
    </button>
  </form>
);

Sender.propTypes = {
  sendMessage: PropTypes.func,
  placeholder: PropTypes.string,
  disabledInput: PropTypes.bool,
  onClickAttachment: PropTypes.func
};

export default Sender;
