import React, { useRef, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { GlobalState } from "src/store/types";

const send = require("../../../../../../../assets/send-message.svg") as string;
const attachment = require("../../../../../../../assets/Attachment.svg") as string;

import "./style.scss";

type Props = {
  placeholder: string;
  disabledInput: boolean;
  autofocus: boolean;
  sendMessage: (event: any) => void;
  buttonAlt: string;
  onTextInputChange?: (event: any) => void;
  onClickAttachment: () => void;
};

function Sender({
  sendMessage,
  placeholder,
  disabledInput,
  autofocus,
  onTextInputChange,
  buttonAlt,
  onClickAttachment,
}: Props) {
  const showChat = useSelector((state: GlobalState) => state.behavior.showChat);
  const inputRef = useRef<HTMLInputElement | null>(null);
  // @ts-ignore
  useEffect(() => {
    if (showChat) inputRef.current?.focus();
  }, [showChat]);

  return (
    <form className="rcw-sender" onSubmit={sendMessage}>
      <button
        type="button"
        className="rcw-attachment-btn"
        onClick={onClickAttachment}
      >
        <img
          src={attachment}
          style={{ height: 25, width: 25 }}
          className="rcw-attachment-icon"
          alt="send"
        />
      </button>
      <input
        type="text"
        className="rcw-new-message"
        name="message"
        ref={inputRef}
        placeholder={placeholder}
        disabled={disabledInput}
        autoFocus={autofocus}
        autoComplete="off"
        onChange={onTextInputChange}
      />
      <button type="submit" className="rcw-send">
        <img src={send} className="rcw-send-icon" alt={buttonAlt} />
      </button>
    </form>
  );
}

export default Sender;
