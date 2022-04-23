import Link from "next/link";
import react from "react";

export default class Entry extends react.Component {
  render() {
    const content = this.getContent();
    
    return (
      <div className={content.entryClass.join(" ")}>
        <div className="entry-left-content">
            <div className="entry-title-container">
                <Link href={"/projects/" + this.props.project.slug}>
                  <a className={content.titleClass.join(" ")}>
                      {this.props.project.data.title}
                  </a>
                </Link>
                <div className="badge-container">
                    <span className={content.badgeClass.join(" ")}>
                      {this.props.project.data.status}
                    </span>
                </div>
            </div>
            <p className="entry-description">{this.props.project.data.description}</p>
        </div>
        {this.props.project.data.github &&
          <div className="entry-right-content">
            <Link href={this.props.project.data.github}>
              <a target="_blank" rel="noreferrer" style={{height: "24px"}}>
                <img className="glow-icon" src="/images/github-logo.png" width="24px" height="24px" alt="github icon" />
              </a>
            </Link>
          </div>
        }
      </div>
    );
  };

  getContent() {
    let result = {
      entryClass: ["entry-container"],
      titleClass: ["entry-title"],
      badgeClass: ["badge"],
    }

    if (this.props.project.data.status == "completed") {
      result.entryClass.push("entry-complete");
      result.titleClass.push("title-complete");
      result.badgeClass.push("badge-complete");
    }

    if (this.props.project.data.status == "in-progress") {
      result.entryClass.push("entry-progress");
      result.titleClass.push("title-progress");
      result.badgeClass.push("badge-progress");
    }

    if (this.props.project.data.status == "cancelled") {
      result.entryClass.push("entry-cancel");
      result.titleClass.push("title-cancel");
      result.badgeClass.push("badge-cancel");
    }

    return result;
  }
};