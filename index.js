var mapContainer = document.getElementById("map"),
  mapOption = {
    center: new kakao.maps.LatLng(36.30302996863156, 128.58504239838584), // 지도 중심좌표
    level: 5, // 확대 레벨
  };

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도 생성

// 마커 표시
var positions = [
  {
    title: "경북소프트웨어고등학교",
    content: "<div>GBSW</div>",
    latlng: new kakao.maps.LatLng(36.30302996863156, 128.58504239838584),
    link: "https://school.gyo6.net/gbsw/main.do?sysId=gbsw",
  },
  {
    title: "대구소프트웨어마이스터고",
    content: "<div>DGSW</div>",
    latlng: new kakao.maps.LatLng(35.66331866987564, 128.41354333229833),
  },
  {
    title: "광주소프트웨어마이스터고",
    content: "<div>GSM</div>",
    latlng: new kakao.maps.LatLng(35.14276337101746, 126.80071194339426),
  },
  {
    title: "부산소프트웨어마이스터고",
    content: "<div>BSSM</div>",
    latlng: new kakao.maps.LatLng(35.189231825826596, 128.90336451833326),
  },
  {
    title: "단국대학교부속소프트웨어고등학교",
    content: "<div>DKSH</div>",
    latlng: new kakao.maps.LatLng(37.49561043760522, 127.05764405774195),
  },
  {
    title: "광운인공지능고등학교",
    content: "<div>KWAIHS</div>",
    latlng: new kakao.maps.LatLng(37.62081364841025, 127.05629070316827),
  },
  {
    title: "서울아이티고등학교",
    content: "<div>SEOUL_IT</div>",
    latlng: new kakao.maps.LatLng(37.64235792574809, 127.0618815647404),
  },
  {
    title: "한봄고등학교",
    content: "<div>HANBOM</div>",
    latlng: new kakao.maps.LatLng(37.259518238556566, 126.9693461414784),
  },
  {
    title: "선린인터넷고등학교",
    content: "<div>SRIHS</div>",
    latlng: new kakao.maps.LatLng(37.54278069710723, 126.9671711355083),
  },
  {
    title: "세명컴퓨터고등학교",
    content: "<div>SEMYEONG</div>",
    latlng: new kakao.maps.LatLng(37.6277554949246, 126.92327066125716),
  },
  {
    title: "디지털미디어고등학교",
    content: "<div>DIMIGO</div>",
    latlng: new kakao.maps.LatLng(37.34182242604631, 126.83160231012262),
  },
  {
    title: "한세사이버보안고등학교",
    content: "<div>HANSEI</div>",
    latlng: new kakao.maps.LatLng(37.5518080477608, 126.95207341454318),
  },
  {
    title: "대덕소프트웨어마이스터고",
    content: "<div>Daedeok_SW</div>",
    latlng: new kakao.maps.LatLng(36.391569002499686, 127.3633324854844),
  },
  {
    title: "경민IT고등학교",
    content: "<div>Kyungmin_IT</div>",
    latlng: new kakao.maps.LatLng(37.746655120202384, 127.02448267221212),
  },
];
var imageSrc = "free-icon-map-marker-11301784.png";

for (var i = 0; i < positions.length; i++) {
  var imageSize = new kakao.maps.Size(20, 35);

  var markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

  var marker = new kakao.maps.Marker({
    map: map,
    position: positions[i].latlng,
    title: positions[i].title,
    image: markerImage,
  });
}
for (var i = 0; i < positions.length; i++) {
  // 마커를 생성합니다
  var marker = new kakao.maps.Marker({
    map: map, // 마커를 표시할 지도
    position: positions[i].latlng, // 마커의 위치
  });

  // 마커에 표시할 인포윈도우를 생성합니다
  var infowindow = new kakao.maps.InfoWindow({
    content: positions[i].content, // 인포윈도우에 표시할 내용
  });

  // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
  // 이벤트 리스너로는 클로저를 만들어 등록합니다
  // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
  kakao.maps.event.addListener(
    marker,
    "mouseover",
    makeOverListener(map, marker, infowindow)
  );
  kakao.maps.event.addListener(marker, "mouseout", makeOutListener(infowindow));
}

function makeOverListener(map, marker, infowindow) {
  return function () {
    infowindow.open(map, marker);
  };
}

// 인포윈도우를 닫는 클로저를 만드는 함수입니다
function makeOutListener(infowindow) {
  return function () {
    infowindow.close();
  };
}
kakao.maps.event.addListener(marker, "click", function () {
  location.href = "https://school.gyo6.net/gbsw/main.do?sysId=gbsw";
});
