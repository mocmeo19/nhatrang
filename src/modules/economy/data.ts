export type Stat = { value: string; label: string; note?: string };

export const economyStats: Stat[] = [
  { value: "10,16%", label: "Tăng trưởng GRDP Khánh Hòa năm 2024", note: "Báo Khánh Hòa, Báo Chính phủ" },
  { value: "86,44 triệu", label: "GRDP bình quân đầu người năm 2023 (đồng)", note: "Vietnamnet" },
  { value: "16,4 triệu", label: "Lượt khách đến Khánh Hòa năm 2025 (ước tính)", note: "Tăng khoảng 14,4%, gồm 5,5 triệu khách quốc tế" },
  { value: "66,7 nghìn tỷ", label: "Doanh thu du lịch năm 2025 (ước tính, đồng)", note: "Tăng khoảng 16,8% so với 2024" },
];

export const economyPillars = [
  {
    title: "Du lịch và dịch vụ",
    text: "Báo Chính phủ nhận định kinh tế Nha Trang dựa chủ yếu vào du lịch và dịch vụ. Năm 2025, toàn tỉnh có 1.441 cơ sở lưu trú với hơn 70.500 phòng; 107 cơ sở từ 3 đến 5 sao chiếm hơn 40% số phòng. Mục tiêu năm 2026 là hơn 18,1 triệu lượt khách, trong đó hơn 6 triệu khách quốc tế.",
  },
  {
    title: "Kinh tế biển và cảng",
    text: "Vịnh Vân Phong được quy hoạch thành khu kinh tế biển đa ngành, lấy cảng trung chuyển container quốc tế làm chức năng chính. Giai đoạn 2026 – 2030 tỉnh dự kiến quy hoạch sáu khu bến cảng, trong đó Bắc Vân Phong là cảng trung chuyển container quốc tế.",
  },
  {
    title: "Đóng tàu và công nghiệp",
    text: "Đóng tàu là thế mạnh lâu năm; gần đây Khu kinh tế Vân Phong có nhà máy đóng tàu HD Hyundai Việt Nam với vốn đầu tư được ghi là 350 triệu USD. Công nghiệp – xây dựng là khu vực tăng nhanh nhất trong các báo cáo năm 2025.",
  },
  {
    title: "Thủy sản và yến sào",
    text: "Một bài báo địa phương năm 2025 cho biết Khánh Hòa là trung tâm sản xuất muối, tôm giống và yến sào lớn của cả nước, có nền tảng về nghề cá và chế biến thủy sản. Tôm hùm nuôi từ lâu được xem là sản phẩm tiêu biểu của vùng Nam Trung Bộ, trong đó có Khánh Hòa.",
  },
];

export const societyFacts: Stat[] = [
  { value: "8.555,86 km²", label: "Diện tích tỉnh Khánh Hòa sau hợp nhất với Ninh Thuận", note: "Báo chí tổng hợp" },
  { value: "hơn 2,2 triệu", label: "Dân số tỉnh sau hợp nhất (người)", note: "Các nguồn ghi khoảng 2,23 – 2,24 triệu" },
  { value: "65", label: "Đơn vị hành chính cấp xã: 48 xã, 16 phường, 1 đặc khu", note: "Báo Khánh Hòa, Báo Chính phủ" },
  { value: "22/4/2009", label: "Nha Trang được công nhận đô thị loại I", note: "Quyết định 518/QĐ-TTg" },
];

export const societyNotes = [
  "Năm 2025, hai tỉnh Khánh Hòa và Ninh Thuận hợp nhất thành tỉnh Khánh Hòa mới. Nha Trang trở thành một trong 16 phường của tỉnh, hình thành từ năm phường của thành phố cũ, rộng 47,13 km² với 136.118 người (2024). Một bài báo ghi thành phố Nha Trang trước khi sắp xếp có khoảng 535.000 người (2023).",
  "Thu nhập bình quân đầu người của Nha Trang tăng từ 2.508 USD (2009) lên gần 5.000 USD, theo Thanh Niên. Số liệu GRDP riêng của Nha Trang chưa được công bố trong các nguồn mà trang này tham khảo.",
  "Nha Trang đồng thời là trung tâm khoa học biển và y tế dự phòng của vùng, nhờ các cơ sở lâu đời như Viện Hải dương học và Viện Pasteur.",
];

export type Direction = { when: string; title: string; text: string };

export const directions: Direction[] = [
  {
    when: "29/3/2023",
    title: "Phê duyệt Quy hoạch tỉnh Khánh Hòa 2021 – 2030, tầm nhìn 2050",
    text: "Quyết định 318/QĐ-TTg đặt mục tiêu đưa Khánh Hòa thành thành phố trực thuộc Trung ương vào năm 2030, là trung tâm dịch vụ và du lịch biển quốc tế, một cực tăng trưởng của duyên hải Trung Bộ, Tây Nguyên và cả nước về kinh tế biển.",
  },
  {
    when: "2025",
    title: "Hợp nhất Khánh Hòa – Ninh Thuận",
    text: "Sau hợp nhất, tỉnh giữ nguyên mục tiêu trở thành thành phố trực thuộc Trung ương đến năm 2030 và xem đây là nền tảng để hướng tới tăng trưởng hai con số trong giai đoạn 2026 – 2030.",
  },
  {
    when: "Giữa năm 2026",
    title: "Điều chỉnh quy hoạch tỉnh",
    text: "Quy hoạch điều chỉnh tổ chức không gian theo mô hình ba cực tăng trưởng, bổ sung mục tiêu trung tâm dữ liệu quốc gia và khu vực. Tầm nhìn 2050 là trung tâm kinh tế biển lớn của cả nước, đô thị thông minh, thân thiện môi trường và đáng sống hàng đầu châu Á.",
  },
];

export const nhaTrangRole = [
  "Nha Trang tiếp tục là trung tâm hành chính, chính trị của tỉnh và là vùng đô thị hạt nhân theo quy hoạch.",
  "Quy hoạch điều chỉnh đến năm 2040 xác định Nha Trang là đô thị du lịch biển quốc gia và quốc tế.",
  "Cam Lâm, nơi có sân bay quốc tế Cam Ranh, được định hướng thành đô thị sân bay; Ninh Hòa và Vân Phong thuộc cực tăng trưởng phía Bắc.",
  "Đến năm 2030 toàn tỉnh dự kiến có 21 đô thị, gồm 5 đô thị loại II và 16 đô thị loại III.",
  "Dải bờ biển Trần Phú – Phạm Văn Đồng dài khoảng 16,4 km được đề xuất chỉnh trang thành chuỗi công viên biển rộng khoảng 253 ha (kế hoạch, chưa hoàn thành).",
];

export const mapFacts: Stat[] = [
  { value: "khoảng 35 km", label: "Từ sân bay quốc tế Cam Ranh đến trung tâm Nha Trang" },
  { value: "507 km²", label: "Diện tích vịnh Nha Trang, với 19 đảo lớn nhỏ", note: "Hòn Tre là đảo lớn nhất" },
  { value: "2003", label: "Vịnh Nha Trang được kết nạp vào Câu lạc bộ Những vịnh đẹp nhất thế giới" },
];

export const mapBounds = { top: 24, bottom: 8, left: 101.8, right: 110.3, width: 1200, height: 2349.176 };

export type MapCity = { name: string; lat: number; lon: number; side: "left" | "right"; highlight?: boolean };

export const mapCities: MapCity[] = [
  { name: "Hà Nội", lat: 21.03, lon: 105.85, side: "right" },
  { name: "Đà Nẵng", lat: 16.05, lon: 108.2, side: "right" },
  { name: "Nha Trang", lat: 12.24, lon: 109.19, side: "left", highlight: true },
  { name: "TP. Hồ Chí Minh", lat: 10.78, lon: 106.7, side: "right" },
];

export const mapDistances = [
  { from: "Hà Nội", road: "khoảng 1.278 km", air: "khoảng 1.040 km", fly: "bay khoảng 1,5 giờ" },
  { from: "TP. Hồ Chí Minh", road: "khoảng 448 km", air: "khoảng 316 km", fly: "bay khoảng 1 giờ" },
  { from: "Đà Nẵng", road: "chưa có số liệu", air: "khoảng 437 km", fly: "" },
];

export const mapNote =
  "Khoảng cách đường bộ lấy từ các trang du lịch (các nguồn ghi chênh lệch nhẹ). Khoảng cách đường chim bay tính từ tọa độ trung tâm các thành phố, làm tròn. Bản đồ chỉ để hình dung vị trí.";

export const mapCredit = {
  label: "Bản đồ nền: Vietnam location map.svg, Wikimedia Commons, CC BY-SA 3.0",
  href: "https://commons.wikimedia.org/wiki/File:Vietnam_location_map.svg",
};

export const dayTrips = [
  { place: "Đảo Khỉ, Suối Hoa Lan", distance: "khoảng 15 – 30 km phía bắc, qua bến Long Phú", href: "/kham-pha/diem-den/dao-khi" },
  { place: "Bãi Dốc Lết", distance: "khoảng 50 km, khoảng 1,5 giờ đi xe", href: "/kham-pha/diem-den/doc-let" },
  { place: "Thác Yang Bay", distance: "khoảng 40 – 50 km về phía tây", href: "/kham-pha/diem-den/thac-yang-bay" },
  { place: "Vịnh Ninh Vân", distance: "khoảng 50 – 60 km, tàu cao tốc khoảng 20 phút", href: "/kham-pha/diem-den/vinh-ninh-van" },
];

export const sources = [
  { label: "Báo Khánh Hòa – Du lịch Khánh Hòa năm 2025 đạt doanh thu khoảng 66,7 nghìn tỷ đồng", href: "https://baokhanhhoa.vn/du-lich/202512/du-lich-khanh-hoa-nam-2025-dat-doanh-thu-khoang-667-nghin-ty-dong-cc45997/" },
  { label: "Báo Khánh Hòa – Tra cứu nhanh các xã, phường sau sáp nhập", href: "https://baokhanhhoa.vn/tra-cuu-nhanh/202507/tra-cuu-nhanh-cac-xa-phuong-tinh-khanh-hoa-sau-sap-nhap-98b72c7/" },
  { label: "Báo Chính phủ – Thành phố Nha Trang là đô thị loại I", href: "https://baochinhphu.vn/thanh-pho-nha-trang-la-do-thi-loai-i-1027269.htm" },
  { label: "Báo Khánh Hòa – Phê duyệt điều chỉnh Quy hoạch tỉnh Khánh Hòa 2021 – 2030, tầm nhìn 2050", href: "https://baokhanhhoa.vn/kinh-te/202606/phe-duyet-dieu-chinh-quy-hoach-tinh-khanh-hoa-thoi-ky-2021-2030-tam-nhin-den-nam-2050-501186f/" },
  { label: "Thanh Niên – 16,4 km bờ biển Nha Trang sẽ thành chuỗi công viên", href: "https://thanhnien.vn/164-km-bo-bien-nha-trang-se-thanh-chuoi-cong-vien-dang-cap-quoc-te-185251025143937177.htm" },
  { label: "Báo Khánh Hòa – Khánh Hòa đặt mục tiêu tăng trưởng GRDP năm 2025", href: "https://baokhanhhoa.vn/kinh-te/202502/khanh-hoa-dat-muc-tieutang-truong-grdp-nam-2025-la-105-f313f6b/" },
];
