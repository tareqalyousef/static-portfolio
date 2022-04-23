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
                  <a key={item.text} className="header-text glow-link" href={item.href}>/{item.text}</a>
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