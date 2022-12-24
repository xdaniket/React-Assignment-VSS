const Child = (props) => {
  console.log(props);
  const handleVal = () => {
    props.nxtName({ name: "Annu", city: "Bhopal", age: 22 });
  };
  return (
    <>
      <p>Child</p>
      <button onClick={handleVal}>Heello</button>
    </>
  );
};
export default Child;
