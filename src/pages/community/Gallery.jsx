import "./Gallery.css";

// 더미 사진 데이터
const dummyImages = [
  { id: 1, src: "/assets/photo1.jpg", title: "봄 캠프" },
  { id: 2, src: "/assets/photo2.jpg", title: "워크숍" },
  { id: 3, src: "/assets/photo3.jpg", title: "문화체험" },
  { id: 4, src: "/assets/photo4.jpg", title: "청소년 교육" },
  { id: 5, src: "/assets/photo5.jpg", title: "봉사활동" },
  { id: 6, src: "/assets/photo6.jpg", title: "가을 야외활동" },
];

function Gallery() {
  return (
    <div className="gallery-page">
      {/* 제목 */}
      <h1 className="gallery-title">활동 사진첩</h1>

      {/* 구분선 */}
      <div className="gallery-divider"></div>

      {/* 앨범 그리드 */}
      <div className="gallery-grid">
        {dummyImages.map((item) => (
          <div key={item.id} className="gallery-item">
            <img src={item.src} alt={item.title} />
            <div className="gallery-caption">{item.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
