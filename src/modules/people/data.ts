import { photos, type Photo } from "@/shared/data/images";

export type Person = {
  name: string;
  years?: string;
  role: string;
  story: string;
  facts: string[];
  portrait: Photo;
  portraitPosition: string;
  place: Photo;
  placeLabel: string;
  color: string;
  lowRes?: boolean;
  more: string[];
  lifeline: { year: string; event: string }[];
};

export const people: Person[] = [
  {
    name: "Người Chăm & nữ thần Thiên Y A Na",
    role: "Chủ nhân đầu tiên của vùng đất",
    story:
      "Người Chăm đã dựng nên quần thể Po Nagar và tôn thờ nữ thần Thiên Y A Na như vị mẹ xứ sở. Đến nay, mỗi mùa lễ hội Tháp Bà, bà con vẫn về dâng lễ, giữ cho nghi thức nghìn năm không đứt mạch.",
    facts: ["Kiến trúc gạch nung đặc sắc", "Lễ hội Tháp Bà tháng 3 âm lịch", "Di tích kiến trúc nghệ thuật quốc gia"],
    portrait: photos.ponagar,
    portraitPosition: "50% 40%",
    place: photos.ponagarTower,
    placeLabel: "Tháp Bà Ponagar",
    color: "from-sun-400 to-coral-400",
    more: [
      "Theo truyền thuyết, nữ thần Yang Po Inư Nưgar sinh ra từ mây và bọt biển. Người Việt về sau tiếp nhận tín ngưỡng này và gọi bà là Thiên Y A Na Thánh Mẫu, nên đền hôm nay là nơi cả hai cộng đồng cùng thờ phụng.",
      "Lễ hội Tháp Bà diễn ra khoảng ngày 20–23 tháng 3 âm lịch, nổi bật với nghi thức thả đèn hoa đăng trên sông Cái.",
    ],
    lifeline: [
      { year: "Thế kỷ 8–13", event: "Quần thể tháp được xây dựng và mở rộng" },
      { year: "965", event: "Cụm tháp hiện nay gắn với thời vua Jaya Indravarman I" },
      { year: "1979", event: "Xếp hạng Di tích kiến trúc nghệ thuật cấp quốc gia" },
      { year: "Hằng năm", event: "Lễ hội Tháp Bà vào tháng 3 âm lịch" },
    ],
  },
  {
    name: "Alexandre Yersin",
    years: "1863 – 1943",
    role: "Bác sĩ, nhà vi khuẩn học",
    story:
      "Sinh ra ở Thụy Sĩ, làm việc cùng Louis Pasteur, ông tìm ra trực khuẩn dịch hạch ở Hồng Kông năm 1894. Ông chọn Nha Trang làm nơi sống và làm việc đến cuối đời, lập phòng thí nghiệm — tiền thân của Viện Pasteur Nha Trang. Người dân thân mật gọi ông là “Ông Năm”.",
    facts: ["Phát hiện trực khuẩn dịch hạch (1894)", "Mất tại Nha Trang ngày 1/3/1943", "Nhà ông nay là Bảo tàng Yersin"],
    portrait: photos.yersin,
    portraitPosition: "50% 30%",
    place: photos.yersinMuseum,
    placeLabel: "Bảo tàng Yersin",
    color: "from-ocean-400 to-palm-500",
    more: [
      "Ngày nay, Viện Pasteur Nha Trang là một trong hai Viện Pasteur của Việt Nam, hoạt động dưới sự quản lý của Bộ Y tế; căn nhà nơi ông sống và làm việc đã trở thành Bảo tàng Yersin.",
      "Về vai trò trong việc tìm ra vi khuẩn dịch hạch năm 1894, giới sử học còn ghi nhận công lao song song của nhà khoa học Nhật Bản Kitasato Shibasaburo; ngày nay Yersin vẫn được nhắc tên cùng loại vi khuẩn này.",
    ],
    lifeline: [
      { year: "1863", event: "Sinh ra ở Thụy Sĩ" },
      { year: "1889", event: "Đến Việt Nam" },
      { year: "1894", event: "Phát hiện trực khuẩn dịch hạch ở Hồng Kông" },
      { year: "1895", event: "Lập phòng thí nghiệm ở Nha Trang" },
      { year: "1903", event: "Trở thành Viện Pasteur Nha Trang" },
      { year: "1943", event: "Mất tại Nha Trang ngày 1/3" },
    ],
  },
  {
    name: "Trần Quý Cáp",
    years: "1870 – 1908",
    role: "Nhà nho yêu nước",
    story:
      "Người Quảng Nam, ông cùng Phan Châu Trinh và các đồng chí khởi xướng phong trào Duy Tân, cổ vũ mở trường, bỏ lối học cũ và chấn hưng dân trí. Năm 1908, thực dân Pháp kết án ông và xử chém ở Khánh Hòa; nay có đền thờ ông tại Diên Khánh.",
    facts: ["Đồng sáng lập phong trào Duy Tân", "Bị xử chém ở Khánh Hòa năm 1908", "Có đền thờ tại Diên Khánh"],
    portrait: photos.tranQuyCap,
    portraitPosition: "50% 20%",
    place: photos.tranQuyCapTemple,
    placeLabel: "Đền thờ Trần Quý Cáp",
    color: "from-coral-400 to-sun-400",
    more: [
      "Theo một bản tấu năm Thành Thái thứ 18 (1906), triều đình bổ ông làm giáo thụ phủ Thăng Bình.",
      "Đền thờ ông ở Diên Khánh được xây tại khu Gò Chết Chém, gần cầu Sông Cạn — nay là cầu Trần Quý Cáp. Năm 1910, thân nhân và học trò đưa di hài ông về quê nhà.",
    ],
    lifeline: [
      { year: "1870", event: "Sinh ra ở Quảng Nam" },
      { year: "1906", event: "Được bổ làm giáo thụ phủ Thăng Bình" },
      { year: "1908", event: "Bị thực dân Pháp kết án và xử chém ở Khánh Hòa" },
      { year: "1910", event: "Di hài được đưa về quê" },
    ],
    lowRes: true,
  },
  {
    name: "Bảo Đại",
    years: "1913 – 1997",
    role: "Hoàng đế cuối cùng triều Nguyễn",
    story:
      "Nha Trang là nơi nghỉ mát quen thuộc của vua Bảo Đại và hoàng hậu Nam Phương, nhất là giai đoạn 1940 – 1945. Cụm biệt thự Cầu Đá trên núi Cảnh Long từ đó mang tên Lầu Bảo Đại và hiện có khu trưng bày về cuộc đời ông.",
    facts: ["Biệt thự Cầu Đá xây năm 1923", "Nghỉ dưỡng cùng hoàng hậu Nam Phương", "Di tích Lầu Bảo Đại"],
    portrait: photos.baoDai,
    portraitPosition: "50% 72%",
    place: photos.baoDaiVilla,
    placeLabel: "Lầu Bảo Đại",
    color: "from-palm-500 to-ocean-400",
    more: [
      "Trong cụm biệt thự, Nghinh Phong (Xương Rồng) và Vọng Nguyệt (Hoa Sứ) được chọn làm nơi nghỉ của nhà vua và hoàng hậu. Nay khu này có phần trưng bày nhỏ về cuộc đời Bảo Đại.",
      "Theo báo chí, năm 2023 chủ đầu tư dự án nghỉ dưỡng trên khu di tích đã trả lại 5 biệt thự cho tỉnh Khánh Hòa.",
    ],
    lifeline: [
      { year: "1913", event: "Bảo Đại sinh ra" },
      { year: "1923", event: "Cụm biệt thự Cầu Đá được xây dựng" },
      { year: "1940–1945", event: "Vua và hoàng hậu Nam Phương thường đến nghỉ dưỡng" },
      { year: "1997", event: "Bảo Đại mất" },
    ],
  },
];
