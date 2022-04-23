import react from "react";
import { parseMarkdown } from "./utils";

class Content extends react.Component {
  render() {
    const html = parseMarkdown(this.props.content);

    return (
      <div id="content-container">
        <div id="content" dangerouslySetInnerHTML={{__html: html }} />
      </div>
    );
  }
};

export default Content;