import Hexadecimal from "./Hexdecimal";

const Main = () => {
  const divNum = [];
  for (let i = 0; i < 32; i++) {
    divNum.push(i);
  }
  return (
    <div>
      <Hexadecimal divNum={divNum} />
    </div>
  );
};

export default Main;
