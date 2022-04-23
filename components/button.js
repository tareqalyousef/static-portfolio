import Link from "next/link";
import react from "react";
import { BrowserView, MobileView } from "react-device-detect";
import NoSSR from "react-no-ssr";

class Button extends react.Component {
  render() {
    return (
      <NoSSR>
        <BrowserView>
          <Link href={this.props.href}>
            <a className="btn-gradient">
              <span>
                {this.props.text}
              </span>
            </a>
          </Link>
        </BrowserView>
        <MobileView>
          <div className="btn-container-mobile">
            <Link href={this.props.href}>
              <a className="btn-gradient">
                <span>
                  {this.props.text}
                </span>
              </a>
            </Link>
          </div>
        </MobileView>
      </NoSSR>
    );
  }
};

export default Button;