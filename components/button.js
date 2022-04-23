import Link from "next/link";
import react from "react";

class Button extends react.Component {
  render() {
    return (
      <Link href={this.props.href}>
        <a className="btn-gradient">
          <span>
            {this.props.text}
          </span>
        </a>
      </Link>
    );
  }
};

export default Button;