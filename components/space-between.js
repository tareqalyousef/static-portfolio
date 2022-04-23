import react from "react";
import Divider from "./divider";

class SpaceBetween extends react.Component {
  render() {
    return (
      this.props.children.map((child, index, array) => {
        return (
          <div key={index}>
            {child}
            {index + 1 != array.length && 
              <Divider size={this.props.size} />
            }
          </div>
        );
      })
    );
  }
};

export default SpaceBetween;