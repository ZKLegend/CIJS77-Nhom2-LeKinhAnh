import React from "react";
import "./index.css";

const data1 = [
  {
    songsName: "Cô Đơn Trên Sofa",
    singer: "Hồ Ngọc Hà",
    timeUpload: "3 giờ trước",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/7/f/1/17f17c49523af7fd7827ce1e2981b412.jpg",
  },
  {
    songsName: "Người Có Còn Thương",
    singer: "Minh Vương M4U, Thương Võ, ACV",
    timeUpload: "5 ngày trước",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/7/f/1/17f17c49523af7fd7827ce1e2981b412.jpg",
  },
  {
    songsName: "Bye Bye",
    singer: "Marshmello, Juice Wrld",
    timeUpload: "5 ngày trước",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/7/f/1/17f17c49523af7fd7827ce1e2981b412.jpg",
  },
  {
    songsName: "906090",
    singer: "Tóc Tiên, Mew Amazing",
    timeUpload: "4 giờ trước",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/7/f/1/17f17c49523af7fd7827ce1e2981b412.jpg",
  },
  {
    songsName: "Hoa Tình Chẳng Nở",
    singer: "Dee Trần",
    timeUpload: "5 ngày trước",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/7/f/1/17f17c49523af7fd7827ce1e2981b412.jpg",
  },
  {
    songsName: "Lời Nói Dối Sau Cùng",
    singer: "Vicky Nhung",
    timeUpload: "6 ngày trước",
    imgUrl:
      "https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_webp/cover/1/7/f/1/17f17c49523af7fd7827ce1e2981b412.jpg",
  },
];

const data2 = [
  {
    imgUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/7/f/f/f/7fff80fe7a618bc1f3493939e62e1815.jpg",
    playlistName: "Nhạc Cho Thứ Sáu",
    playlistInfo: "Rap Việt ở đây, bấm PLAY cả ngày thứ Sáu"
  },
  {
    imgUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/4/2/2/1/422154afa1c25d5a4dc0309176d425df.jpg",
    playlistName: "Những Sự Kết Hợp Mới",
    playlistInfo: "Những pha hội ngộ mới mẻ nhưng không bỡ ngỡ của V-Pop"
  },
  {
    imgUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/1/6/2/0162bf5b6bea14bab28bf90055a94417.jpg",
    playlistName: "Everyday Favorites",
    playlistInfo: "Enjoy cả ngày với những bản Hít nghe không biết chán là gì",
  },
  {
    imgUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/3/8/b/2/38b2f8a0a5fd96d5529c47a126eef1fd.jpg",
    playlistName: "Nam Thần Nhạc Việt",
    playlistInfo: "Đổ đứ đừ với những nam thần của làng nhạc Việt",
  },
  {
    imgUrl: "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_webp/cover/0/7/2/c/072c50fd7dda057ed68d44ef0d16e2a3.jpg",
    playlistName: "Pop Right Now",
    playlistInfo: "Giai điệu Pop thời thượng mà bạn không thể bỏ lỡ"
  }
]

const Component1 = ({ songsName, singer, timeUpload, imgUrl }) => {
  return (
    <>
      <div class="new-release-items items-style">
        <div class="songs-thumbnail">
          <a href="" class="song-url">
            <img src={imgUrl} />
          </a>
        </div>
        <div class="songs-info">
          <h2 className="songsName">{songsName}</h2>
          <a href="" className="singer">
            {singer}
          </a>
          <p className="timeUpload">{timeUpload}</p>
        </div>
      </div>
    </>
  );
};

const Component2 = ({imgUrl, playlistName, playlistInfo}) => {
  return (
  <>
      <div class="playlist-item">
          <div class="playlist-thumbnail">
            <a href="" class="playlist-link">
              <img src={imgUrl} class="thumbnail-img"/>
            </a>
            <div class="button-container"></div>
          </div>
          <a href="" className="playlistName">{playlistName}</a>
          <p className="playlistInfo">{playlistInfo}</p>
        </div>
  </>
)
};

const App = () => {
  return (
    <>
      {/* New Realease Menu */}
      <div class="new-release">
        <h1 class="section-title">Mới Phát Hành</h1>
        <div class="new-release-menu">
          <button class="songBtn">BÀI HÁT</button>
          <button class="albumBtn">ALBUM</button>
          <a href="" class="allItems">
            TẤT CẢ <i class="icon ic-go-right"></i>
          </a>
        </div>

        {/* Generate New Song Component */}
        <div class="new-release-container">
          {data1.map((element) => (
            <Component1
              songsName={element.songsName}
              singer={element.singer}
              timeUpload={element.timeUpload}
              imgUrl={element.imgUrl}
            />
          ))}
        </div>

        {/* Daily List Component */}
          <h1 class="section-title">Thứ Sáu Đây Rồi</h1>
          <div class="playlist-container">
            {data2.map((element) => (
                <Component2
                  imgUrl={element.imgUrl}
                  playlistName={element.playlistName}
                  playlistInfo={element.playlistInfo}
                />
              ))}
          </div>
      </div>
    </>
  );
};

export default App;
