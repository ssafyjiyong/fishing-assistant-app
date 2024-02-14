import React from "react";
import { useNavigate } from "react-router-dom";
import { WhiteBox, MyText } from "./styles";
import "../../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// 물고기 images
const fishImages = [
  { name: '참돔', image: '/imgs/fish/chamdom.png', nickname: '바다의 여왕으로 알려진'}, // 1. 참돔
  { name: '농어', image: '/imgs/fish/nonguh.png', nickname: '몸매가 좋은 8등신 생선'}, // 2. 농어
  { name: '전갱이', image: '/imgs/fish/jeongang.png', nickname: '나 한번 잡아보시지,'}, // 3. 전갱이
  { name: '숭어', image: '/imgs/fish/sunguh.png', nickname: '나는야 별명 부자'}, // 4. 숭어
  { name: '고등어', image: '/imgs/fish/godeunguh.png', nickname: '고단백 고영양 고갈비'}, // 5. 고등어
  { name: '광어', image: '/imgs/fish/kwanguh.png', nickname: '곁눈질 하는거 아닙니다'}, // 6. 광어
  { name: '우럭', image: '/imgs/fish/wuroek.png', nickname: '우럭 못잡으면 광광 우럭'}, // 7. 우럭
  { name: '감성돔', image: '/imgs/fish/gamsungdom.png', nickname: '감성보단 갬성 갬성돔'}, // 8. 감성돔
  { name: '돌돔', image: '/imgs/fish/doldom.png', nickname: '생긴 것부터 바다의 폭군'}, // 9. 돌돔
  { name: '쥐노래미', image: '/imgs/fish/gnoraemi.png', nickname: '잡으면 깜짝 놀래미,'}, // 10. 쥐노래미
];

const Fish3 = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/fish/3`);
  };

  return (
    <WhiteBox
      style={{
        position: "relative",
      }}
      onClick={handleClick}
    >
      <MyText>
        {fishImages[2].nickname}
        <br />
        {fishImages[2].name}
      </MyText>
      <div style={{display:"flex", justifyContent:"center", alignContent:"center"}}>
        <img
          src={fishImages[2].image}
          alt={fishImages[2].name}
          style={{ maxHeight: "150px", maxWidth: "80%" }}
        />
      </div>
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
  );
};

export default Fish3;
