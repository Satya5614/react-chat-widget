import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

import { createNewMessage } from "helper";
import Message from "../index";

configure({ adapter: new Adapter() });
describe("<Message />", () => {
  /* eslint-disable no-underscore-dangle */
  const createMessageComponent = (message) =>
    shallow(<Message message={message} />);

  it("should render a <strong> element", () => {
    const message = createNewMessage("New message with **Markdown**!");
    const messageComponent = createMessageComponent(message);
    expect(
      messageComponent.find(".message-text").getElement().props
        .dangerouslySetInnerHTML.__html
    ).toMatchSnapshot();
  });

  it("should reder a <em> element", () => {
    const message = createNewMessage("New message with *Markdown*!");
    const messageComponent = createMessageComponent(message);
    expect(
      messageComponent.find(".message-text").getElement().props
        .dangerouslySetInnerHTML.__html
    ).toMatchSnapshot();
  });
  /* eslint-enable */
});
