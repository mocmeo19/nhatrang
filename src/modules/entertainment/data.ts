export const themePark = {
  name: "VinWonders Nha Trang",
  intro:
    "Nằm trên đảo Hòn Tre, VinWonders là khu vui chơi giải trí lớn nhất vịnh Nha Trang. Công viên được chia thành 6 phân khu với hàng trăm trò chơi và hoạt động, từ công viên nước, thủy cung đến vườn thú và các show diễn buổi tối.",
  features: [
    { emoji: "🌊", title: "Công viên nước", text: "Khoảng 39 đường trượt, từ nhẹ nhàng cho trẻ nhỏ đến cảm giác mạnh." },
    { emoji: "🐠", title: "Thủy cung Sea World", text: "Trưng bày hàng chục nghìn sinh vật biển; ngoài ra có khu Vương Quốc Hải Thần." },
    { emoji: "🦁", title: "King’s Garden", text: "Khu vườn thú để gia đình tham quan và chụp ảnh cùng các loài vật." },
    { emoji: "🌸", title: "The World Garden", text: "Khu vườn hoa với những góc cảnh quan lấy cảm hứng từ nhiều nơi." },
    { emoji: "🎆", title: "Show Tata", text: "Màn trình diễn buổi tối ở Quảng trường Thần Thoại; giờ diễn khác nhau giữa các nguồn nên cần kiểm tra." },
    { emoji: "🎡", title: "Trò chơi & mini show", text: "Nhiều trò chơi và chương trình nhỏ rải rác trong công viên, đã bao gồm trong vé." },
  ],
  access: [
    { emoji: "🚡", title: "Cáp treo", detail: "Tuyến dài 3.320 m, mất khoảng 10–12 phút; được nhiều nguồn khuyên chọn vì ngắm cảnh đẹp." },
    { emoji: "🚤", title: "Tàu cao tốc", detail: "Mất khoảng 7–10 phút, xuất phát từ cảng Cầu Đá." },
    { emoji: "⛵", title: "Ca nô riêng", detail: "Lựa chọn linh hoạt cho nhóm hoặc gia đình muốn đi riêng." },
  ],
  facts: [
    { label: "Địa chỉ", value: "Đảo Hòn Tre, Nha Trang, Khánh Hòa" },
    { label: "Giá vé tham khảo", value: "Khoảng 1.050.000 đồng/người lớn; khoảng 800.000 đồng/trẻ em và người cao tuổi; trẻ dưới 1 m thường được miễn phí" },
    { label: "Giờ cáp treo", value: "Các nguồn ghi khác nhau (từ khoảng 6:00–8:00 đến 21:00–22:00)" },
    { label: "Nên dành", value: "Cả ngày để chơi thoải mái" },
  ],
} as const;

export type VenueKind = "Rooftop bar" | "Beach club" | "Brewhouse" | "Chợ đêm";

export type Venue = {
  id: string;
  name: string;
  kind: VenueKind;
  description: string;
  highlights: string[];
  info: { label: string; value: string }[];
};

export const venues: Venue[] = [
  {
    id: "skylight",
    name: "Skylight (Premier Havana)",
    kind: "Rooftop bar",
    description:
      "Quán bar ngoài trời trên tầng thượng khách sạn Havana ở số 38 Trần Phú, nổi tiếng với tầm nhìn 360° ra thành phố và vịnh về đêm.",
    highlights: ["Tầm nhìn toàn cảnh", "Nhiều quầy bar, có DJ", "Cùng tòa với Havana Club"],
    info: [
      { label: "Địa chỉ", value: "38 Trần Phú" },
      { label: "Giờ tham khảo", value: "Khoảng 17:30 – 01:00" },
      { label: "Lưu ý", value: "Số tầng (43 hay 45) và phí vào cửa giữa các nguồn khác nhau; Havana Club hiện được ghi là HK Club" },
    ],
  },
  {
    id: "sailing-club",
    name: "Sailing Club",
    kind: "Beach club",
    description:
      "Beach club bên bãi biển trung tâm với ghế lười trên cát, nhạc DJ hoặc nhạc sống hầu hết các đêm và màn trình diễn lửa vào khoảng 22:00.",
    highlights: ["Ngồi trên cát bên biển", "Fire show buổi tối", "Tối thứ Bảy đông nhất"],
    info: [
      { label: "Vé tham khảo", value: "Khoảng 200.000 đồng gồm một đồ uống (thông tin cũ)" },
      { label: "Phụ thu", value: "Có thể cộng thêm VAT và phí phục vụ khoảng 15%" },
      { label: "Lưu ý", value: "Hỏi lại giá và lịch chương trình trước khi đi" },
    ],
  },
  {
    id: "louisiane",
    name: "Louisiane Brewhouse",
    kind: "Brewhouse",
    description:
      "Nhà máy bia thủ công tự nấu bia tại chỗ, có khay thử nhiều loại bia, chỗ ngồi ngoài trời và hồ bơi; phù hợp từ chiều đến tối.",
    highlights: ["Bia nấu tại chỗ", "Khay thử bia", "Nhạc sống cuối tuần"],
    info: [
      { label: "Happy hour", value: "Một đánh giá ghi khoảng 12:00 – 14:00" },
      { label: "Phù hợp", value: "Buổi chiều thư giãn, nhóm bạn" },
      { label: "Lưu ý", value: "Ưu đãi và giờ hoạt động có thể thay đổi" },
    ],
  },
  {
    id: "altitude",
    name: "Altitude Skybar",
    kind: "Rooftop bar",
    description:
      "Skybar trên tầng cao một khách sạn ven biển (các nguồn ghi là Sheraton, nay được nhắc là voco Scenia Bay), có view biển và DJ.",
    highlights: ["View biển từ trên cao", "Có DJ"],
    info: [
      { label: "Giờ tham khảo", value: "Khoảng 15:00 – 24:00 (có thể đã cũ)" },
      { label: "Giá đồ uống", value: "Khoảng 200.000 – 600.000 đồng (có thể đã cũ)" },
      { label: "Lưu ý", value: "Tên khách sạn có thể đã đổi; hãy xác nhận trước khi đến" },
    ],
  },
  {
    id: "lunar",
    name: "Lunar Rooftop Bar & Grill",
    kind: "Rooftop bar",
    description: "Quán bar kết hợp đồ nướng ở tầng 4 Nha Trang Center, một đánh giá cho biết quán hướng ra biển.",
    highlights: ["Gần khu trung tâm", "Có món nướng"],
    info: [
      { label: "Địa chỉ", value: "Tầng 4, Nha Trang Center, 20 Trần Phú" },
      { label: "Lưu ý", value: "Thông tin chỉ từ một nguồn đánh giá, nên kiểm tra lại" },
    ],
  },
  {
    id: "cho-dem",
    name: "Chợ đêm & phố Tây Hùng Vương",
    kind: "Chợ đêm",
    description:
      "Chợ đêm Nha Trang nằm cạnh phố đi bộ Hùng Vương sôi động; bạn có thể dạo mua quà, ăn vặt rồi ghé các quán trên phố. Gần Nha Trang Center còn có chợ đêm Yasaka.",
    highlights: ["Mua quà lưu niệm", "Ăn vặt", "Cạnh phố đi bộ"],
    info: [
      { label: "Địa chỉ", value: "46 Trần Phú, cạnh phố Hùng Vương; chợ Yasaka ở 18 Trần Phú" },
      { label: "Giờ tham khảo", value: "Khoảng 17:00 – 23:30, đông nhất 19:00 – 21:00" },
      { label: "Mẹo", value: "Hỏi giá trước khi mua và có thể mặc cả" },
    ],
  },
];

export const nightTips = [
  "Đã uống rượu bia thì không lái xe: Việt Nam cấm điều khiển phương tiện khi trong cơ thể có nồng độ cồn. Hãy đi taxi hoặc gọi xe qua ứng dụng.",
  "Rượu bia chỉ dành cho người từ 18 tuổi trở lên; mang theo giấy tờ tùy thân nếu cần.",
  "Hỏi rõ phí vào cửa, phụ thu (VAT, phí phục vụ) và giá đồ uống trước khi gọi.",
  "Giữ cẩn thận điện thoại, ví; không nhận đồ uống từ người lạ và luôn để mắt tới ly của mình.",
  "Quán bar thay đổi tên, giờ mở cửa và chương trình khá nhanh — hãy kiểm tra lại trước khi đi.",
];

export const oldVillage = {
  name: "Làng nghề Nha Trang Xưa",
  intro:
    "Khu làng nghề rộng khoảng 3 ha ở thôn Thái Thông, phường Nam Nha Trang, tái hiện các nghề thủ công truyền thống của Khánh Hòa. Làng nghề khai trương vào tối 17/8/2025, kèm show diễn thực cảnh “Ánh sáng huyền thoại”.",
  crafts: [
    "Làm gốm (gốm Lư Cấm, gốm Chăm)",
    "Dệt chiếu, đan lát",
    "Nặn tò he",
    "Thư pháp",
    "Làm nhang",
    "Tranh sơn mài",
    "Đúc đồng",
    "Làm đèn lồng",
    "Làm nón lá",
    "Tranh vỏ sò",
  ],
  activities: [
    "Trải nghiệm tự tay làm một số nghề thủ công, như làm nón lá",
    "Xem trưng bày áo dài qua các thời kỳ",
    "Lớp học nấu ăn, có món bánh xèo",
    "Thưởng thức bánh căn, bánh xèo, bún cá và các loại bánh truyền thống Khánh Hòa",
  ],
  scenes: ["Dệt ước mơ", "Tình yêu gốm và biển", "Bão tố", "Ánh sáng huyền thoại", "Hạnh phúc giao thoa"],
  facts: [
    { label: "Địa điểm", value: "Thôn Thái Thông, phường Nam Nha Trang, Khánh Hòa" },
    { label: "Diện tích", value: "Khoảng 3 ha" },
    { label: "Khai trương", value: "Tối 17/8/2025" },
    { label: "Show thực cảnh", value: "Diễn 6 đêm mỗi tuần; một bài báo cho biết người xem không mất phí" },
    { label: "Giờ và giá vé", value: "Các nguồn tham khảo không nêu — hãy hỏi trực tiếp trước khi đi" },
  ],
} as const;
