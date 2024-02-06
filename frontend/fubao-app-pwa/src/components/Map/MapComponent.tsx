import React, { useEffect, useState } from "react";
import {
  Map,
  MapMarker,
  MapTypeControl,
  ZoomControl,
  MarkerClusterer,
} from "react-kakao-maps-sdk";
import useKakaoLoader from "./useKakaoLoader";
import { mapInfoApi } from "../../store/api";
import { useQuery } from "@tanstack/react-query";

interface MapState {
  center: {
    lat: number;
    lng: number;
  };
  errMsg: string | null;
  isLoading: boolean;
}

const MapComponent = () => {
  useKakaoLoader();

  const { data, error, isPending } = useQuery({
    queryKey: ["mapInfo"],
    queryFn: mapInfoApi,
    refetchOnWindowFocus: false,
    retry: 0, // 실패시 재호출 몇번 할지
  });

  const [state, setState] = useState<MapState>({
    // 기준 좌표 서울역 설정
    center: {
      lat: 37.554530651,
      lng: 126.970713923,
    },
    errMsg: null,
    isLoading: true,
  });

  const clusterPositionsData = [data];

  const [positions, setPositions] = useState<{ lat: number; lng: number }[]>(
    []
  );

  useEffect(() => {
    setPositions(clusterPositionsData);

    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        }
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev) => ({
        ...prev,
        errMsg: "geolocation을 사용할수 없어요..",
        isLoading: false,
      }));
    }
  }, []);

  return (
    <>
      <Map // 지도를 표시할 Container
        center={state.center}
        style={{
          // 지도의 크기
          width: "100%",
          height: "50vh",
        }}
        level={14} // 지도의 확대 레벨
        draggable
      >
        <MarkerClusterer
          averageCenter={true} // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
          minLevel={10} // 클러스터 할 최소 지도 레벨
        >
          {positions.map((pos) => (
            <MapMarker
              key={`${pos.lat}-${pos.lng}`}
              position={{
                lat: pos.lat,
                lng: pos.lng,
              }}
            />
          ))}
        </MarkerClusterer>

        {!state.isLoading && (
          <MapMarker
            position={state.center}
            image={{
              src: "/imgs/my_location.png", // 마커이미지의 주소입니다
              size: {
                width: 60,
                height: 60,
              }, // 마커이미지의 크기입니다
              options: {
                offset: {
                  x: 27,
                  y: 69,
                }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
              },
            }}
          >
            {/* <div style={{ padding: "5px", color: "#000" }}>
              {state.errMsg ? state.errMsg : "현재 위치"}
            </div> */}
          </MapMarker>
        )}
        <MapTypeControl position={"TOPRIGHT"} />
        <ZoomControl position={"RIGHT"} />
      </Map>

      <div>
        {/* 데이터가 성공적으로 로드되었을 때 UI 렌더링 */}
        {data && <div>{JSON.stringify(data)}</div>}
        {error && <div>{JSON.stringify(error)}</div>}
        {isPending && <div>{JSON.stringify(isPending)}</div>}
      </div>
    </>
  );
};

export default MapComponent;
