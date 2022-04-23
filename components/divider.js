import react from "react";

class Divider extends react.Component {
  render() {
    if (this.props.size == "small") {
      return (
        <div className="divider" style={{height: "10px"}} />
      );
    }

    if (this.props.size == "medium") {
      return (
        <div className="divider" style={{height: "20px"}} />
      );
    }

    if (this.props.size == "large") {
      return (
        <div className="divider" style={{height: "40px"}} />
      );
    }
  }
};

export default Divider;