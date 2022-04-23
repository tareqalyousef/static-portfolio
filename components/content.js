import Link from "next/link";
import react from "react";
import { parseMarkdown } from "./utils";
import { useEffect } from "react";

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