import react from "react";
import { BrowserView, MobileView } from "react-device-detect";
import NoSSR from "react-no-ssr";

class LandingTitle extends react.Component {
  render() {
    return (
      <NoSSR>
        <BrowserView>
          <p id="landing-text">tareq alyousef</p>
        </BrowserView>
        <MobileView>
          <p id="landing-text-mobile">tareq alyousef</p>
        </MobileView>
      </NoSSR>
    );
  }
};

export default LandingTitle;