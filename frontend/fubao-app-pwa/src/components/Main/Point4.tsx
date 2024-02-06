import React from "react";
import { useNavigate } from "react-router-dom";
import { WhiteBox, MyText } from "./styles";
import "../../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Point4 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/point4");
  };

  return (
    <WhiteBox
      style={{
        position: "relative",
        backgroundImage: "url('/imgs/point4.jpg')",
        backgroundRepeat: "no-repeat",
      }}
      onClick={handleClick}
    >
      <MyText color="">
        선장님,
        <br />
        이 포인트 맞나요
        <br />
        선상낚시
      </MyText>
      <div style={{ position: "absolute", bottom: "0.5rem", right: "0.5rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid white",
            borderRadius: "50px",
            width: "1.3rem",
            height: "1.3rem",
            margin: "0.3rem",
          }}
        >
          <FontAwesomeIcon icon="plus" size="1x" color="white" />
        </div>
      </div>
    </WhiteBox>
  )
}

export default Point4