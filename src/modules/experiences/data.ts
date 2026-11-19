import { photos } from "@/shared/data/images";

export type ExperienceGuide = {
  id: string;
  title: string;
  emoji: string;
  src: string;
  alt: string;
  paragraphs: string[];
  facts: { label: string; value: string }[];
  tips: string[];
  link?: { href: string; label: string };
};

export const experienceGuides: ExperienceGuide[] = [
  {
    id: "lan-bien",
    title: "Lặn ngắm san hô",
    emoji: "🤿",
    src: "/images/ai-diving.jpg",
    alt: "Minh họa rạn san hô nhiều màu sắc dưới biển",
    paragraphs: [
      "Hòn Mun là điểm lặn nổi tiếng của vịnh Nha Trang, nằm trong khu bảo tồn biển đầu tiên của Việt Nam. Bạn có thể chọn lặn ống thở (snorkeling) ở vùng nước nông hoặc lặn bình khí cùng hướng dẫn viên để xuống sâu hơn.",
      "Vì đây là khu bảo tồn, các quy định về điểm lặn có thể thay đổi; hãy hỏi đơn vị tổ chức về khu vực được phép lặn hiện tại.",
    ],
    facts: [
      { label: "Thời điểm tốt", value: "Khoảng tháng 3–8 (tùy nguồn)" },
      { label: "Tránh", value: "Tháng 10–11, mùa mưa bão" },
      { label: "Hình thức", value: "Snorkeling hoặc lặn bình khí có hướng dẫn" },
    ],
    tips: ["Chọn đơn vị có giấy phép và hướng dẫn viên.", "Không chạm vào san hô, không xả rác xuống biển."],
    link: { href: "/kham-pha/diem-den/hon-mun", label: "Xem thuyết minh Hòn Mun" },
  },
  {
    id: "tour-dao",
    title: "Tour đảo",
    emoji: "🏝️",
    src: photos.monkey.src,
    alt: photos.monkey.alt,
    paragraphs: [
      "Không có một danh sách cố định cho “tour 4 đảo”: mỗi đơn vị chọn các điểm dừng khác nhau. Những cái tên thường gặp là Hòn Mun (lặn ngắm san hô), Hòn Tằm (rạn san hô Đầm Tằm), Hòn Miễu và Hòn Một, đôi khi kèm bãi biển nhỏ để nghỉ ngơi.",
      "Phần lớn tour đi bằng tàu hoặc canô, có bữa trưa trên thuyền và thời gian bơi lội, tắm biển ở từng điểm dừng.",
    ],
    facts: [
      { label: "Thời lượng", value: "Tour nửa ngày khoảng 6 giờ, cả ngày khoảng 7 giờ" },
      { label: "Điểm dừng", value: "Tùy đơn vị — hãy xem lịch trình trước khi đặt" },
      { label: "Phù hợp", value: "Mọi lứa tuổi, nhóm bạn và gia đình" },
    ],
    tips: ["So sánh lịch trình và điểm dừng giữa các đơn vị.", "Mang kem chống nắng, mũ và đồ bơi."],
  },
  {
    id: "tam-bun",
    title: "Tắm bùn khoáng",
    emoji: "♨️",
    src: "/images/ai-mud.jpg",
    alt: "Minh họa spa tắm bùn khoáng giữa vườn nhiệt đới",
    paragraphs: [
      "Tắm bùn và ngâm suối khoáng là hoạt động thư giãn được nhiều du khách chọn sau những ngày đi biển. Các khu tắm bùn thường có gói dịch vụ gồm ngâm bùn, tắm nước khoáng và khu nghỉ ngơi.",
      "Mỗi cơ sở có quy trình, giá và giờ hoạt động riêng, nên hãy tìm hiểu kỹ trước khi đến.",
    ],
    facts: [
      { label: "Thời lượng", value: "Tùy gói dịch vụ của từng cơ sở" },
      { label: "Phù hợp", value: "Thư giãn sau khi đi tour, gia đình và cặp đôi" },
    ],
    tips: ["Hỏi rõ gói dịch vụ và giá trước khi sử dụng.", "Người có bệnh nền hoặc đang mang thai nên hỏi ý kiến bác sĩ."],
  },
  {
    id: "du-thuyen",
    title: "Du thuyền ngắm vịnh",
    emoji: "🌅",
    src: "/images/ai-sunset.jpg",
    alt: "Minh họa thuyền gỗ giữa vịnh biển lúc hoàng hôn",
    paragraphs: [
      "Vịnh Nha Trang có nhiều tuyến thuyền và du thuyền đi ngắm cảnh. Chuyến đi buổi chiều giúp bạn tránh nắng gắt, ngắm đường bờ biển và những hòn đảo từ mặt nước.",
    ],
    facts: [
      { label: "Thời điểm", value: "Chiều muộn đến tối, tùy tuyến" },
      { label: "Phù hợp", value: "Cặp đôi, nhóm bạn, người thích thư giãn" },
    ],
    tips: ["Kiểm tra dự báo thời tiết và điều kiện biển trước khi đặt.", "Mang thêm áo mỏng vì trên biển có gió."],
  },
  {
    id: "cap-treo",
    title: "Cáp treo vượt biển",
    emoji: "🚡",
    src: photos.cableCar.src,
    alt: photos.cableCar.alt,
    paragraphs: [
      "Tuyến cáp treo nối đất liền với đảo Hòn Tre, được ghi nhận là cáp treo vượt biển dài nhất thế giới. Chuyến đi kéo dài khoảng 12 phút ở độ cao khoảng 54 m so với mặt nước biển.",
    ],
    facts: [
      { label: "Thời gian chuyến cáp", value: "Khoảng 12 phút" },
      { label: "Điểm đến", value: "Đảo Hòn Tre — khu vui chơi, công viên nước, thủy cung" },
    ],
    tips: ["Đến sớm để tránh xếp hàng.", "Kiểm tra giá vé và giờ hoạt động trên kênh chính thức."],
    link: { href: "/kham-pha/diem-den/vinwonders", label: "Xem thuyết minh Hòn Tre & Cáp treo" },
  },
];

export const audiences = [
  { title: "Gia đình", emoji: "👨‍👩‍👧", picks: ["Cáp treo & Hòn Tre", "Bãi Dốc Lết", "Tour đảo nửa ngày"] },
  { title: "Cặp đôi", emoji: "💞", picks: ["Bình minh ở Hòn Chồng", "Du thuyền ngắm vịnh", "Tắm bùn khoáng"] },
  { title: "Thích khám phá", emoji: "🧭", picks: ["Lặn Hòn Mun", "Tháp Bà Ponagar", "Chùa Long Sơn"] },
];
