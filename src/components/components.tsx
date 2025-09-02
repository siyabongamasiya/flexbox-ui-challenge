import type React from "react";

type RecProp ={
  orientation : string,
  color:string,
  height:string,
  width:string
}

type CircleProp ={
  color:string,
  height:string,
  width:string
}

type SquareProp ={
  color:string,
  height:string,
  width:string
}

export const Rectangle :React.FC<RecProp> = ({ orientation, color ,height,width}) => {
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

export const Square :React.FC<CircleProp> = ({ color ,width,height}) => {
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

export const Circle :React.FC<SquareProp> = ({color,width,height}) => {
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
