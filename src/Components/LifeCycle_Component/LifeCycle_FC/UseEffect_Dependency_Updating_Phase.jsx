// import { useEffect, useState } from "react";

// const UEWD = () => {
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     console.log("Mounting");
//   }, []);

//   useEffect(() => {
//     console.log("Updating : ", search);
//   }, [search]);

//   return (
//     <>
//       <input value={search} onChange={(e) => setSearch(e.target.value)} />
//       <p>Search Key: {search}</p>
//     </>
//   );
// };

// export default UEWD;

// React DeBounce :

import { useEffect, useState } from "react";

const UEWD = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Mounting");
  }, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      console.log("Updating : ", search);
    }, 2000);
    return () => clearTimeout(timeout);
  }, [search]);

  return (
    <>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <p>Search Key: {search}</p>
    </>
  );
};

export default UEWD;
