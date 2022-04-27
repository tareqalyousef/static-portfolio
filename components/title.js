import react from "react";
import { BrowserView, MobileView } from "react-device-detect";
import NoSSR from "react-no-ssr";

class Title extends react.Component {
  render() {
    return (
      <NoSSR>
        <BrowserView>
          <p id="title">{this.props.text}</p>
        </BrowserView>
        <MobileView>
          <p id="title-mobile">{this.props.text}</p>
        </MobileView>
      </NoSSR>
    );
  }
};

export default Title;