import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import Widget from './components/Widget';
import store from '../src/store/store';

const ConnectedWidget = props => (
  <Provider store={store}>
    <Widget
      title={props.title}
      subtitle={props.subtitle}
      handleNewUserMessage={props.handleNewUserMessage}
      senderPlaceHolder={props.senderPlaceHolder}
      profileAvatar={props.profileAvatar}
      showCloseButton={props.showCloseButton}
      onClickClose={props.onClickClose}
      fullScreenMode={props.fullScreenMode}
      badge={props.badge}
      onClickAttachment={props.onClickAttachment}
      isUploading={props.isUploading}
    />
  </Provider>
);

ConnectedWidget.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  handleNewUserMessage: PropTypes.func.isRequired,
  senderPlaceHolder: PropTypes.string,
  profileAvatar: PropTypes.string,
  showCloseButton: PropTypes.bool,
  onClickClose: PropTypes.func,
  onClickAttachment: PropTypes.func,
  fullScreenMode: PropTypes.bool,
  badge: PropTypes.number,
  isUploading: PropTypes.bool
};

ConnectedWidget.defaultProps = {
  title: 'Welcome',
  subtitle: 'This is your chat subtitle',
  senderPlaceHolder: 'Type a message...',
  showCloseButton: true,
  onClickClose: () => {},
  fullScreenMode: false,
  onClickAttachment: () => {},
  badge: 0
};

export default ConnectedWidget;
