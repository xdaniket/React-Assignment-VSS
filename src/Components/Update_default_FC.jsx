import { useState } from "react";

const RegisterUser = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
    hobies: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div>
        <p>Name: {profile.name}</p>
        <input name="name" value={profile.name} onChange={handleInputChange} />
      </div>
      <div>
        <p>Age: {profile.age}</p>
        <input name="age" value={profile.age} onChange={handleInputChange} />
      </div>
      <div>
        <p>Hobies: {profile.hobies}</p>
        <input
          name="hobies"
          value={profile.hobies}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default RegisterUser;
