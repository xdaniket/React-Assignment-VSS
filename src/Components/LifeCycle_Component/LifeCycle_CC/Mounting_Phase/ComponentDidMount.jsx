import { Component } from "react";

class ComponentDidMount extends Component {
  state = {
    counter: 0,
    products: [],
  };

  componentDidMount() {
    fetch(`https://dummyjson.com/products/search?q`)
      .then((data) => data.json())
      .then((data) => {
        console.log("data", data.products);
        this.setState({
          products: data.products,
        });
      });
  }

  render() {
    const { counter, products } = this.state;
    console.log("Rendering");
    return (
      <>
        <p>Counter: {counter}</p>
        <button
          onClick={() => {
            this.setState({ counter: counter + 1 });
          }}
        >
          Increment
        </button>

        <div>
          {products.map((item) => {
            return <div key={item.id}>{item.title}</div>;
          })}
        </div>
      </>
    );
  }
}

export default ComponentDidMount;
