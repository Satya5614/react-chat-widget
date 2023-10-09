import React from "react";

const close = require("../../../../../../../assets/close-icon.svg") as string;

import "./style.scss";

type Props = {
  title: string;
  subtitle: string;
  toggleChat: () => void;
  showCloseButton: boolean;
  titleAvatar?: string;
  onClickClose: () => void;
  renderTitleAvatar?: (props: any) => JSX.Element;
};

function Header({
  title,
  subtitle,
  toggleChat,
  showCloseButton,
  titleAvatar,
  onClickClose,
  renderTitleAvatar,
}: Props) {
  return (
    <div className="rcw-header">
      {showCloseButton && (
        <button
          className="rcw-close-button"
          onClick={() => {
            onClickClose();
            toggleChat();
          }}
        >
          <img src={close} className="rcw-close" alt="close" />
        </button>
      )}
      <h4 className="rcw-title">
        {renderTitleAvatar && renderTitleAvatar({})}
        {/* {titleAvatar && (
          <img src={titleAvatar} className="avatar" alt="profile" />
        )} */}
        {title}
      </h4>
      <span>{subtitle}</span>
    </div>
  );
}

export default Header;
