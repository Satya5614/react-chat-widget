import React from 'react';
import PropTypes from 'prop-types';

import Header from './components/Header';
import Messages from './components/Messages';
import Sender from './components/Sender';
import './style.scss';

const Conversation = props => (
  <div className="conversation-container">
    <Header
      title={props.title}
      subtitle={props.subtitle}
      toggleChat={props.toggleChat}
      showCloseButton={props.showCloseButton}
      onClickClose={props.onClickClose}
    />
    <Messages profileAvatar={props.profileAvatar} isUploading={props.isUploading} />
    <Sender
      sendMessage={props.sendMessage}
      placeholder={props.senderPlaceHolder}
      disabledInput={props.disabledInput}
      onClickAttachment={props.onClickAttachment}
    />
  </div>
);

Conversation.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  sendMessage: PropTypes.func,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  toggleChat: PropTypes.func,
  onClickClose: PropTypes.func,
  onClickAttachment: PropTypes.func,
  showCloseButton: PropTypes.bool,
  disabledInput: PropTypes.bool,
  isUploading: PropTypes.bool
};

export default Conversation;
