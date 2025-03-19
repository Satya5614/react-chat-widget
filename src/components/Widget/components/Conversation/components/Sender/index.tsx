import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { GlobalState } from "src/store/types";

const send = require("../../../../../../../assets/send-message.svg") as string;
const attachment = require("../../../../../../../assets/Attachment.svg") as string;
const close = require("../../../../../../../assets/close-icon.svg") as string;
const microphone = require("../../../../../../../assets/microphone.svg") as string;

import "./style.scss";

type Props = {
  placeholder: string;
  disabledInput: boolean;
  autofocus: boolean;
  sendMessage: (event: any) => void;
  buttonAlt: string;
  onTextInputChange?: (event: any) => void;
  onClickAttachment: () => void;
  showPreview?: boolean;
  renderPreviewComponent?: (props: any) => JSX.Element;
  showMicrophone?: boolean;
  onClickMicrophone?: () => void;
  isRecording?: boolean;
  renderRecordingComponent?: () => JSX.Element;
};

function Sender({
  sendMessage,
  placeholder,
  disabledInput,
  autofocus,
  onTextInputChange,
  buttonAlt,
  onClickAttachment,
  showPreview,
  renderPreviewComponent,
  showMicrophone,
  onClickMicrophone,
  isRecording,
  renderRecordingComponent,
}: Props) {
  const showChat = useSelector((state: GlobalState) => state.behavior.showChat);
  const inputRef = useRef<HTMLInputElement | null>(null);
  // @ts-ignore
  useEffect(() => {
    if (showChat) inputRef.current?.focus();
  }, [showChat]);

  return (
    <form className="rcw-sender" onSubmit={sendMessage}>
      <div className="rcw-sender-container">
        {showPreview && renderPreviewComponent && renderPreviewComponent({})}
      </div>
      <div className="rcw-sender-controls">
        {!isRecording && (
          <>
            <button
              type="button"
              className="rcw-attachment-btn"
              onClick={onClickAttachment}
              disabled={isRecording}
            >
              <img
                src={attachment}
                style={{ height: 25, width: 25 }}
                className="rcw-attachment-icon"
                alt="attachment"
              />
            </button>
            {showMicrophone && (
              <button
                type="button"
                className="rcw-attachment-btn"
                onClick={onClickMicrophone}
              >
                <img
                  src={microphone}
                  style={{ height: 25, width: 25 }}
                  className="rcw-attachment-icon"
                  alt="microphone"
                />
              </button>
            )}
          </>
        )}
        <div
          className="rcw-recording-container"
          style={{ display: isRecording ? "block" : "none" }}
        >
          {renderRecordingComponent && renderRecordingComponent()}
        </div>
        <input
          type="text"
          className="rcw-new-message"
          name="message"
          ref={inputRef}
          placeholder={placeholder}
          disabled={disabledInput || isRecording}
          autoFocus={autofocus}
          autoComplete="off"
          onChange={onTextInputChange}
          style={{ display: isRecording ? "none" : "block" }}
        />
        {!isRecording && (
          <button type="submit" className="rcw-send" disabled={isRecording}>
            <img src={send} className="rcw-send-icon" alt={buttonAlt} />
          </button>
        )}
      </div>
    </form>
  );
}

export default Sender;
