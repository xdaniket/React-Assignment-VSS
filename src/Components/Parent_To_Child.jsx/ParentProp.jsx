import ChildA from "./ChildA";

const ParentProp = () => {
  return (
    <>
      <h1 style={{ color: "red" }}>This Is Parent Component</h1>
      <ChildA name="Aniket Thakur" city="Bhopal" />
    </>
  );
};

export default ParentProp;
