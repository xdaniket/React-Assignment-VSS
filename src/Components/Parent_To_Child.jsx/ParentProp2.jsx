import { useState } from "react";
import ChildA from "./ChildA";

const ParentProp2 = () => {
  const [name, setName] = useState("Aniket Thakur");
  const [city, setCity] = useState("Bhopal");
  return (
    <>
      <h1 style={{ color: "red" }}>This Is Parent Component</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      &nbsp; &nbsp;
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <ChildA name={name} city={city} />
    </>
  );
};

export default ParentProp2;
