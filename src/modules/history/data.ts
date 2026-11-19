export type Milestone = {
  period: string;
  title: string;
  description: string;
  accent: string;
  details: string[];
  link?: { href: string; label: string };
};

export const milestones: Milestone[] = [
  {
    period: "Thế kỷ 3",
    title: "Vùng đất Kauthara",
    description:
      "Nha Trang thuộc Kauthara, một vương quốc Chăm Pa độc lập ở miền Trung, nơi người Chăm sinh sống bằng nghề biển và buôn bán dọc bờ biển.",
    accent: "bg-ocean-400",
    details: ["Theo Britannica, lịch sử Nha Trang có thể lần ngược đến thế kỷ 3, khi vùng này thuộc Kauthara — một vương quốc Chăm Pa từng thừa nhận quyền tôn chủ của Phù Nam.", "Trong thời Champa, vùng đất ven vịnh là nơi người Chăm sinh sống và gìn giữ tín ngưỡng thờ nữ thần mẹ xứ sở."],
  },
  {
    period: "Từ thế kỷ 8",
    title: "Đền tháp Po Nagar",
    description:
      "Trên đồi Cù Lao, người Chăm xây dựng và nhiều lần trùng tu quần thể đền tháp thờ nữ thần Thiên Y A Na, dấu ấn còn nguyên vẹn đến hôm nay.",
    accent: "bg-sun-400",
    details: ["Các nguồn ghi chép đặt quần thể Po Nagar trong khoảng từ thế kỷ 8 đến thế kỷ 13. Theo một số tài liệu, đền ban đầu làm bằng gỗ rồi được xây lại bằng gạch; cụm tháp hiện nay gắn với năm 965 dưới thời vua Jaya Indravarman I.", "Một tấm bia khắc năm 781 đã nhắc đến đền thờ, cho thấy nơi đây đã là thánh địa từ rất sớm."],
    link: { href: "/kham-pha/diem-den/ponagar", label: "Xem thuyết minh Tháp Bà Ponagar" },
  },
  {
    period: "1471",
    title: "Đại Việt tiến về phương Nam",
    description:
      "Sau chiến thắng của vua Lê Thánh Tông trước kinh đô Vijaya, Champa suy yếu; vùng đất phía nam còn lại dần chịu ảnh hưởng của người Việt.",
    accent: "bg-coral-400",
    details: ["Năm 1471, quân Đại Việt của vua Lê Thánh Tông chiếm kinh đô Vijaya, khiến Champa suy yếu nghiêm trọng.", "Vùng Kauthara ở phía nam vẫn còn người Chăm sinh sống; quá trình sáp nhập vào lãnh thổ Việt diễn ra chậm hơn, kéo dài đến thế kỷ 17."],
  },
  {
    period: "1653",
    title: "Thuộc chúa Nguyễn",
    description:
      "Vùng đất Kauthara được sáp nhập vào lãnh thổ của các chúa Nguyễn, mở đầu quá trình người Việt khai khẩn, lập làng và phát triển nghề biển.",
    accent: "bg-palm-500",
    details: ["Theo Britannica, năm 1653 vùng đất này được sáp nhập vào lãnh thổ của các chúa Nguyễn ở phía nam.", "Từ đây, người Việt đến khai khẩn, lập làng; văn hóa Việt và Chăm cùng tồn tại, thể hiện rõ ở việc người Việt tiếp nhận tục thờ Mẹ xứ sở thành Thiên Y A Na Thánh Mẫu."],
  },
  {
    period: "1895",
    title: "Viện Pasteur ra đời",
    description:
      "Bác sĩ Alexandre Yersin lập phòng thí nghiệm ở Nha Trang; năm 1903 nơi đây trở thành Viện Pasteur Nha Trang, một trong hai Viện Pasteur của Việt Nam.",
    accent: "bg-sun-400",
    details: ["Alexandre Yersin đến Việt Nam năm 1889. Theo Britannica, một năm sau chuyến đi Hồng Kông (1894), ông lập phòng thí nghiệm ở Nha Trang.", "Phòng thí nghiệm này được đặt tên là Viện Pasteur Nha Trang vào năm 1903. Ngày nay đây là một trong hai Viện Pasteur của Việt Nam; nhà của Yersin là Bảo tàng Yersin."],
    link: { href: "/van-hoa/con-nguoi", label: "Câu chuyện về Alexandre Yersin" },
  },
  {
    period: "1923",
    title: "Hải dương học & Lầu Bảo Đại",
    description:
      "Người Pháp xây cụm biệt thự Cầu Đá trên núi Cảnh Long gắn với Viện Hải dương học Đông Dương; về sau được gọi là Lầu Bảo Đại.",
    accent: "bg-coral-400",
    details: ["Theo báo chí, cụm năm biệt thự Cầu Đá được xây năm 1923 trên núi Cảnh Long để làm nơi ăn ở cho các nhà hải dương học của Viện Hải dương học Đông Dương (nay là Viện Hải dương học Nha Trang).", "Sau khi Bảo Đại lên ngôi, hai biệt thự được dành cho nhà vua; giai đoạn 1940–1945 vua và hoàng hậu Nam Phương thường đến nghỉ, nên khu di tích có tên Lầu Bảo Đại."],
    link: { href: "/van-hoa/con-nguoi", label: "Xem về Bảo Đại và Lầu Bảo Đại" },
  },
  {
    period: "Ngày nay",
    title: "Thành phố biển của cả nước",
    description:
      "Từ làng chài ven vịnh, Nha Trang trở thành điểm đến du lịch biển nổi tiếng, nơi di sản Chăm, dấu ấn khoa học và nhịp sống ven biển hòa quyện.",
    accent: "bg-palm-500",
    details: ["Từ làng chài ven vịnh, Nha Trang phát triển thành thành phố du lịch biển với bãi tắm trung tâm, các hòn đảo trong vịnh và hệ thống dịch vụ nghỉ dưỡng.", "Di sản Chăm, dấu ấn khoa học và nhịp sống ven biển vẫn song hành, tạo nên nét riêng của thành phố."],
    link: { href: "/kham-pha/diem-den", label: "Khám phá các điểm đến" },
  },
];
