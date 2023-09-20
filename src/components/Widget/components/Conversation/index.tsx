import React from "react";
import cn from "classnames";

import Header from "./components/Header";
import Messages from "./components/Messages";
import Sender from "./components/Sender";
import QuickButtons from "./components/QuickButtons";

import { AnyFunction } from "../../../../utils/types";

import "./style.scss";

type Props = {
  title: string;
  subtitle: string;
  senderPlaceHolder: string;
  showCloseButton: boolean;
  disabledInput: boolean;
  autofocus: boolean;
  className: string;
  sendMessage: AnyFunction;
  toggleChat: AnyFunction;
  profileAvatar?: string;
  titleAvatar?: string;
  onQuickButtonClicked?: AnyFunction;
  onTextInputChange?: (event: any) => void;
  sendButtonAlt: string;
  showTimeStamp: boolean;
  onClickClose: () => void;
  onCLickAttachment: () => void;
  showPreview?: boolean;
  previewImage?: string;
  onPreviewClose?: () => void;
  renderPreviewComponent?: (props: any) => JSX.Element;
};

function Conversation({
  title,
  subtitle,
  senderPlaceHolder,
  showCloseButton,
  disabledInput,
  autofocus,
  className,
  sendMessage,
  toggleChat,
  profileAvatar,
  titleAvatar,
  onQuickButtonClicked,
  onTextInputChange,
  sendButtonAlt,
  showTimeStamp,
  onClickClose,
  onCLickAttachment,
  showPreview,
  previewImage,
  onPreviewClose,
  renderPreviewComponent,
}: Props) {
  return (
    <div
      className={cn("rcw-conversation-container", className)}
      aria-live="polite"
    >
      <Header
        title={title}
        subtitle={subtitle}
        toggleChat={toggleChat}
        showCloseButton={showCloseButton}
        titleAvatar={titleAvatar}
        onClickClose={onClickClose}
      />
      <Messages profileAvatar={profileAvatar} showTimeStamp={showTimeStamp} />
      <QuickButtons onQuickButtonClicked={onQuickButtonClicked} />
      <Sender
        sendMessage={sendMessage}
        placeholder={senderPlaceHolder}
        disabledInput={disabledInput}
        autofocus={autofocus}
        onTextInputChange={onTextInputChange}
        buttonAlt={sendButtonAlt}
        onClickAttachment={onCLickAttachment}
        showPreview={showPreview}
        previewImage={previewImage}
        onPreviewClose={onPreviewClose}
        renderPreviewComponent={renderPreviewComponent}
      />
    </div>
  );
}

export default Conversation;
