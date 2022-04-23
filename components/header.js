import Link from "next/link";
import react from "react";
import { BrowserView, MobileView } from "react-device-detect";

class Header extends react.Component {
  render() {
    return (
      <>
        <BrowserView>
          <div id="header">
            {this.props.items.map((item, i, items) => { 
              if (i + 1 != items.length) {
                return (
                  <Link href={item.href} key={item.text}><a className="header-text glow-link">/{item.text}</a></Link>
                );
              } else {
                return (
                  <span key={item.text} className="header-text-last">/{item.text}</span>
                );
              }
            })}
          </div>
        </BrowserView>
        <MobileView />
      </>
    )
  }
};

export default Header;