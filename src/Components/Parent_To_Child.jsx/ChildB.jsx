import ChildC from "./ChildC";

const ChildB = (props) => {
  return (
    <>
      <h3 style={{ color: "blue" }}>
        This Is ChildB Component {props.name}-{props.citys || "NAA"}
      </h3>
      <ChildC {...props} props={props} />
      {/* <ChildC name={props.name} city={props.city} /> */}
    </>
  );
};

export default ChildB;
