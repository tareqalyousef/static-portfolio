import react from "react";
import { BrowserView, isMobile } from "react-device-detect";
import Divider from "./divider";
import Header from "./header";
import Title from "./title";
import NoSSR from "react-no-ssr";

class AppLayout extends react.Component {
  render() {
    let slim;
    let filler;

    if (this.props.slim)
      slim = "container-slim";
    if (!this.props.headerItems && !isMobile)
      filler = <div id="container-no-header-filler" />;

    return (
      <>
        <title>
          {this.props.webTitle}
        </title>
        {this.props.headerItems &&
          <Header items={this.props.headerItems} />
        }
        <Divider size="medium" />
        <NoSSR>
          <BrowserView>
            {filler}
          </BrowserView>
        </NoSSR>
        <div id="page-container" className={slim}>
          <Title text={this.props.title} />
          <Divider size="medium" />
            {this.props.children}
          <Divider size="medium" />
        </div>
      </>
    );
  }
};

export default AppLayout;