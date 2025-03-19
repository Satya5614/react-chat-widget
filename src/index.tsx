import React from "react";
import { Provider } from "react-redux";

import Widget from "./components/Widget";

import store from "./store";

import { AnyFunction } from "./utils/types";

type Props = {
  handleNewUserMessage: AnyFunction;
  handleQuickButtonClicked?: AnyFunction;
  title?: string;
  titleAvatar?: string;
  subtitle?: string;
  senderPlaceHolder?: string;
  showCloseButton?: boolean;
  fullScreenMode?: boolean;
  autofocus?: boolean;
  profileAvatar?: string;
  launcher?: AnyFunction;
  handleTextInputChange?: (event: any) => void;
  chatId?: string;
  launcherOpenLabel?: string;
  launcherCloseLabel?: string;
  sendButtonAlt?: string;
  showTimeStamp?: boolean;
  onClickClose: () => void;
  onClickAttachment: () => void;
  showPreview?: boolean;
  renderPreviewComponent?: (props: any) => JSX.Element;
  renderTitleAvatar?: (props: any) => JSX.Element;
  showMicrophone?: boolean;
  onClickMicrophone?: () => void;
  isRecording?: boolean;
} & typeof defaultProps;

function ConnectedWidget({
  title,
  titleAvatar,
  subtitle,
  senderPlaceHolder,
  showCloseButton,
  fullScreenMode,
  autofocus,
  profileAvatar,
  launcher,
  handleNewUserMessage,
  handleQuickButtonClicked,
  handleTextInputChange,
  chatId,
  launcherOpenLabel,
  launcherCloseLabel,
  sendButtonAlt,
  showTimeStamp,
  onClickClose,
  onClickAttachment,
  showPreview,
  renderPreviewComponent,
  renderTitleAvatar,
  showMicrophone,
  onClickMicrophone,
  isRecording,
}: Props) {
  return (
    <Provider store={store}>
      <Widget
        title={title}
        titleAvatar={titleAvatar}
        subtitle={subtitle}
        handleNewUserMessage={handleNewUserMessage}
        handleQuickButtonClicked={handleQuickButtonClicked}
        senderPlaceHolder={senderPlaceHolder}
        profileAvatar={profileAvatar}
        showCloseButton={showCloseButton}
        fullScreenMode={fullScreenMode}
        autofocus={autofocus}
        customLauncher={launcher}
        handleTextInputChange={handleTextInputChange}
        chatId={chatId}
        launcherOpenLabel={launcherOpenLabel}
        launcherCloseLabel={launcherCloseLabel}
        sendButtonAlt={sendButtonAlt}
        showTimeStamp={showTimeStamp}
        onClickClose={onClickClose}
        onClickAttachment={onClickAttachment}
        showPreview={showPreview}
        renderPreviewComponent={renderPreviewComponent}
        renderTitleAvatar={renderTitleAvatar}
        showMicrophone={showMicrophone}
        onClickMicrophone={onClickMicrophone}
        isRecording={isRecording}
      />
    </Provider>
  );
}

const defaultProps = {
  title: "Welcome",
  subtitle: "This is your chat subtitle",
  senderPlaceHolder: "Type a message...",
  showCloseButton: true,
  fullScreenMode: false,
  autofocus: true,
  chatId: "rcw-chat-container",
  launcherOpenLabel: "Open chat",
  launcherCloseLabel: "Close chat",
  sendButtonAlt: "Send",
  showTimeStamp: true,
};
ConnectedWidget.defaultProps = defaultProps;

export default ConnectedWidget;
