import { Component } from "react";

class FirstPropsCC extends Component {
  render() {
    return (
      <p style={{ color: "red" }}>
        My name is {this.props.name} an I'm From {this.props.city || "NASSAA"}
      </p>
    );
  }
}

export default FirstPropsCC;

//** Destructuring :

// class FirstPropsCC extends Component {
//   render() {
//     const { name, city } = this.props;
//     return (
//       <p style={{ color: "red" }}>
//         My name is {name} an I'm From {city || "NASSAA"}
//       </p>
//     );
//   }
// }

// export default FirstPropsCC;
