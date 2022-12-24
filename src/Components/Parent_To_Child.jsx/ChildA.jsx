import ChildB from "./ChildB";

const ChildA = (props) => {
  return (
    <>
      <h3 style={{ color: "purple" }}>
        This Is ChildA Component {props.name} {props.city}
      </h3>
      <ChildB name={props.name} city={props.city} />
    </>
  );
};

export default ChildA;
