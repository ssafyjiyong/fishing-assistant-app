import React, { useEffect, useState } from "react";
import Fish1 from "../../components/Main/Fish1";
import Fish2 from "../../components/Main/Fish2";
import Fish3 from "../../components/Main/Fish3";
import Fish4 from "../../components/Main/Fish4";
import Fish5 from "../../components/Main/Fish5";
import Fish6 from "../../components/Main/Fish6";
import Fish7 from "../../components/Main/Fish7";
import Fish8 from "../../components/Main/Fish8";
import Fish9 from "../../components/Main/Fish9";
import Fish10 from "../../components/Main/Fish10";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { fishGetApi } from "../../store/api";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { HomeIcon } from "../../styles/globalStyles";
import "../../FontAwsome";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const FishTotal = () => {
    const [fish, setFish] = useState([]);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
  
    const handleBack = () => {
      navigate(-1);
    };
  
    useEffect(() => {
      const fetchFish = async () => {
        try {
          const response = await fishGetApi(token);
          setFish(response);
          console.log(response);
        } catch (error) {
          console.error("API 호출 중 에러 발생:", error);
        }
      };
  
      fetchFish();
    }, [token]);

  return (
<div style={{ position:"relative", padding: "1rem 1rem 2rem", backgroundColor: "#E3F2FD" }}>
      <ChevronLeftIcon
        sx={{
          marginTop: 1,
          cursor: "pointer",
        }}
        onClick={handleBack}
      />
      <Link to="/">
        <HomeIcon color="#555555">
          <FontAwesomeIcon icon="home" />
        </HomeIcon>
      </Link>
      <Fish1 />
      <Fish2 />
      <Fish3 />
      <Fish4 />
      <Fish5 />
      <Fish6 />
      <Fish7 />
      <Fish8 />
      <Fish9 />
      <Fish10 />
    </div>
  )
}

export default FishTotal