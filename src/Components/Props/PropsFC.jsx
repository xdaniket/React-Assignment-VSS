const PropFC = (meraPropFC) => {
  return (
    <p style={{ color: "purple" }}>
      My name is {meraPropFC.name} and I'm From {meraPropFC.city || "NA"}
    </p>
  );
};

export default PropFC;

//**  Destructuring :

// const PropFC = ({ name, city = "NASA" }) => {
//   return (
//     <p style={{ color: "purple" }}>
//       My name is {name} and I'm From {city}
//     </p>
//   );
// };

// export default PropFC;
