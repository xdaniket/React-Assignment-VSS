import Child from "./Child";

const Parent = () => {
  const onChangess = (data) => {
    console.log(data);
  };
  return (
    <>
      <p>Parent</p>
      <Child name="Annuu Bhai" nxtName={onChangess} />
    </>
  );
};
export default Parent;
