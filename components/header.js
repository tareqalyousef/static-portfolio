import Link from "next/link";
import react from "react";
import { BrowserView } from "react-device-detect";
import NoSSR from "react-no-ssr";

class Header extends react.Component {
  render() {
    return (
      <NoSSR>
        <BrowserView>
          <div id="header">
            {this.props.items.map((item, i, items) => { 
              if (i + 1 != items.length) {
                return (
                  <Link href={item.href} key={item.text}><a className="header-text">/{item.text}</a></Link>
                );
              } else {
                return (
                  <span key={item.text} className="header-text-last">/{item.text}</span>
                );
              }
            })}
          </div>
        </BrowserView>
      </NoSSR>
    );
  }
};

export default Header;