import ChildD from "./ChildD";

const ChildC = ({ name, city }) => {
  return (
    <>
      <h3 style={{ color: "green" }}>
        This Is ChildC Component {name}-{city}
      </h3>
      <ChildD name={name} city={city} />
    </>
  );
};

export default ChildC;
