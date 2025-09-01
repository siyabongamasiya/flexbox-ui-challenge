export const Rectangle = ({ orientation, color ,height,width}) => {
  return (
    <>
      {orientation === "horizontal" ? (
        <div
          style={{
            backgroundColor: color,
            width: "60%",
            height: "70%",
            margin: "5px",
          }}
        ></div>
      ) : (
        <div
          style={{
            backgroundColor: color,
            width: width,
            height: height,
            margin: "5px",
          }}
        ></div>
      )}
    </>
  );
};

export const Square = ({ color ,width,height}) => {
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        width: width,
        height: height,
        margin: "5px",
      }}
    ></div>
  );
};

export const Circle = ({color,width,height}) => {
  return (
    <div
      style={{
        backgroundColor: `${color}`,
        borderRadius:"50%",
        width: width,
        height: height,
        display:"flex",
        margin: "5px",
      }}
    ></div>
  );
};
