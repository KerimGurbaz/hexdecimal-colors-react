const Hexadecimal = ({ divNum }) => {
  const myFunction = () => {
    let str = "0123456789abcdef";
    let color = "";
    for (let i = 0; i < 6; i++) {
      let index = Math.floor(Math.random() * str.length);
      color += str[index];
    }
    return "#" + color;
  };

  return (
    <div className="container">
      {divNum.map((item, index) => (
        <div
          className="small_div"
          key={index}
          style={{ backgroundColor: `${myFunction()}` }}
        >
          {myFunction()}
        </div>
      ))}
    </div>
  );
};

export default Hexadecimal;
