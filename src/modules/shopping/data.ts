export type Specialty = { id: string; name: string; description: string; tip: string };

export const specialties: Specialty[] = [
  {
    id: "muc-rim-me",
    name: "Mực rim me và mực khô",
    description: "Mực khô một nắng hoặc mực rim me ăn liền, là món quà biển được nhắc đến nhiều nhất trong các cẩm nang mua sắm.",
    tip: "Mực khô nên nướng hoặc xé nhỏ ăn kèm tương ớt; hỏi cửa hàng cho nếm thử trước khi mua.",
  },
  {
    id: "hai-san-kho",
    name: "Cá khô và hải sản khô",
    description: "Cá chỉ vàng, cá cơm, cá mai, cá hố, cá đuối, tôm khô… bán theo cân hoặc đóng gói hút chân không.",
    tip: "Chọn gói hút chân không, có ghi ngày sản xuất để mang về xa.",
  },
  {
    id: "cha-ca",
    name: "Chả cá",
    description: "Chả cá làm từ cá thu, cá mối, cá thởn, cá chuồn, cá cờ; có nơi đóng hút chân không để mang đi xa.",
    tip: "Chả cá tươi chóng hỏng; hỏi hạn dùng và cách bảo quản lạnh khi mua.",
  },
  {
    id: "nem-ninh-hoa",
    name: "Nem Ninh Hòa",
    description: "Đặc sản của thị xã Ninh Hòa, phía bắc Nha Trang, bán sẵn từng phần hoặc đóng hộp làm quà.",
    tip: "Ăn kèm rau sống, bánh tráng và nước chấm; nên giữ lạnh trong lúc di chuyển.",
  },
  {
    id: "yen-sao",
    name: "Yến sào Khánh Hòa",
    description: "Tổ yến là sản vật nổi tiếng của Khánh Hòa, bán dạng tổ thô, tổ tinh chế hoặc yến chưng sẵn.",
    tip: "Giá khác nhau rất nhiều theo loại và nguồn (các nguồn ghi từ khoảng 2 đến 14 triệu đồng mỗi 100 g); nên mua ở nơi xuất hóa đơn và có cam kết nguồn gốc.",
  },
  {
    id: "nuoc-mam",
    name: "Nước mắm nhĩ",
    description: "Nước mắm làm từ cá cơm địa phương, nhiều cửa hàng đóng chai có bọc bảo vệ để mang đi xa.",
    tip: "Chất lỏng thường phải ký gửi khi bay; nên kiểm tra quy định của hãng bay.",
  },
  {
    id: "banh-xoai",
    name: "Bánh xoài, bánh dừa non",
    description: "Các loại bánh, kẹo trái cây ngọt nhẹ, dễ mua nhiều và chia cho đồng nghiệp, hàng xóm.",
    tip: "Dễ bảo quản, thích hợp làm quà số lượng lớn.",
  },
  {
    id: "rong-bien",
    name: "Rong biển và thạch rau câu",
    description: "Rong biển sấy, thạch rau câu khô dùng nấu chè hoặc làm món giải nhiệt.",
    tip: "Nhẹ, không cần bảo quản lạnh nên tiện cho hành lý.",
  },
  {
    id: "tram-huong",
    name: "Trầm hương",
    description: "Trầm nụ, vòng trầm và nhang trầm là món quà biếu mang hương thơm Khánh Hòa.",
    tip: "Giá phụ thuộc chất lượng; nên chọn nơi có hóa đơn và hỏi rõ loại trầm.",
  },
];

export type ShopKind = "hai-san" | "cha-nem" | "yen-tram" | "nuoc-mam" | "cho" | "tong-hop";

export const shopKinds: { id: ShopKind; label: string }[] = [
  { id: "hai-san", label: "Hải sản khô" },
  { id: "cha-nem", label: "Chả cá & nem" },
  { id: "yen-tram", label: "Yến sào & trầm" },
  { id: "nuoc-mam", label: "Nước mắm" },
  { id: "tong-hop", label: "Tổng hợp" },
  { id: "cho", label: "Chợ" },
];

export type Shop = {
  id: string;
  name: string;
  kind: ShopKind;
  address: string;
  hours?: string;
  sells: string;
  note?: string;
  singleSource?: boolean;
};

export const shops: Shop[] = [
  {
    id: "ngoc-linh",
    name: "Đặc sản Nha Trang Ngọc Linh",
    kind: "tong-hop",
    address: "Chung cư G16 hoặc G17, Chợ Đầm",
    hours: "Khoảng 7:00 – 22:00",
    sells: "Mực khô, mực rim me, cá ngựa khô, rong biển, bánh xoài, chả cá, nem nướng. Có cho nếm thử.",
    note: "Các nguồn ghi G16, G17 và giờ mở cửa khác nhau; hỏi lại ở khu chung cư Chợ Đầm.",
  },
  {
    id: "seavy",
    name: "SEAVY",
    kind: "tong-hop",
    address: "104 Nguyễn Thị Minh Khai",
    hours: "7:00 hoặc 8:00 – 22:00",
    sells: "Hải sản khô, mực rim me, bánh xoài, bánh dừa non, rong biển, có sẵn hộp quà.",
  },
  {
    id: "hai-san-kho-31",
    name: "Hải sản khô 31",
    kind: "hai-san",
    address: "31 Ngô Gia Tự",
    hours: "7:00 – 21:30",
    sells: "Mực khô, cá chỉ vàng, cá cơm, cá mai, cá hố, cá đuối và nhiều loại cá khô khác.",
  },
  {
    id: "gia-bao",
    name: "Đặc sản Nha Trang Gia Bảo",
    kind: "hai-san",
    address: "39 Nguyễn Thị Minh Khai",
    hours: "6:00 – 22:00",
    sells: "Hải sản khô, nhiều loại mực khô.",
    singleSource: true,
  },
  {
    id: "quang-tam",
    name: "Đặc sản Nha Trang Quảng Tâm",
    kind: "tong-hop",
    address: "8 Hai Bà Trưng",
    hours: "6:00 – 22:00",
    sells: "Mực khô, tôm khô, mực rim me, xoài sấy, nước mắm, yến sào, rong biển.",
    singleSource: true,
  },
  {
    id: "yumsea",
    name: "Yumsea",
    kind: "tong-hop",
    address: "1B Tôn Đản và 3G Tố Hữu",
    hours: "8:00 – 22:30",
    sells: "Snack hải sản, mực sốt, trà, trái cây sấy, hạt, bánh truyền thống.",
    singleSource: true,
  },
  {
    id: "ngoc-phuoc",
    name: "Siêu thị Ngọc Phước",
    kind: "tong-hop",
    address: "30 Nguyễn Thiện Thuật",
    hours: "8:00 – 22:00",
    sells: "Hải sản khô đóng gói, bánh kẹo, nước mắm, sản phẩm từ các làng nghề của tỉnh.",
    singleSource: true,
  },
  {
    id: "trong-tin",
    name: "Chả cá Trọng Tín",
    kind: "cha-nem",
    address: "3 Mai Xuân Thưởng",
    hours: "7:00 – 12:00, 13:00 – 18:00",
    sells: "Chả cá từ cá thu, cá mối, cá thởn, cá chuồn, cá cờ; đóng hút chân không.",
  },
  {
    id: "nem-dang-van-quyen",
    name: "Nem Ninh Hòa Đặng Văn Quyên",
    kind: "cha-nem",
    address: "16A Lãn Ông",
    hours: "7:30 – 20:30",
    sells: "Nem Ninh Hòa làm sẵn hoặc chuẩn bị theo yêu cầu, có đóng gói quà.",
  },
  {
    id: "hanh-quyen",
    name: "Nước mắm Hạnh Quyến",
    kind: "nuoc-mam",
    address: "1 Võ Thị Sáu",
    hours: "7:00 – 19:00",
    sells: "Nước mắm nhĩ từ cá cơm, từ loại thường đến cao cấp, đóng gói cẩn thận khi vận chuyển.",
  },
  {
    id: "yen-sao-khanh-hoa",
    name: "Công ty Yến sào Khánh Hòa",
    kind: "yen-tram",
    address: "248 Thống Nhất",
    sells: "Yến sào các loại.",
    singleSource: true,
  },
  {
    id: "sanest",
    name: "Sanest Khánh Hòa",
    kind: "yen-tram",
    address: "15A Hoàng Hoa Thám",
    hours: "7:00 – 21:30",
    sells: "Yến sào; theo một nguồn có xuất hóa đơn VAT.",
    singleSource: true,
  },
  {
    id: "tram-huong-khanh-hoa",
    name: "Trầm Hương Khánh Hòa",
    kind: "yen-tram",
    address: "51C Lý Tự Trọng",
    hours: "7:30 – 22:00",
    sells: "Trầm nụ, trầm không tăm; theo một nguồn có xuất hóa đơn VAT.",
    singleSource: true,
  },
  {
    id: "cho-dam",
    name: "Chợ Đầm",
    kind: "cho",
    address: "Đường Phan Bội Châu",
    hours: "5:00 – 18:30",
    sells: "Bánh xoài, đậu phộng rang, cơm cháy, rong biển, mực rim me, mực khô một nắng, cá khô.",
    note: "Nên hỏi giá kỹ và so sánh vài quầy trước khi mua.",
  },
  {
    id: "cho-xom-moi",
    name: "Chợ Xóm Mới",
    kind: "cho",
    address: "49 Ngô Gia Tự (một nguồn ghi 7 Trần Nguyên Hãn)",
    hours: "6:00 – 17:00",
    sells: "Hải sản khô, nước mắm, bánh kẹo đặc sản, trái cây, yến sào.",
  },
];

export const shoppingTips = [
  "Chọn nơi niêm yết giá; hỏi giá theo cân hay theo gói trước khi lấy hàng.",
  "Nếm thử mực, chả cá, nem trước khi mua nhiều; các cửa hàng lớn thường cho nếm.",
  "So sánh giá giữa vài nơi: một nguồn ước tính các cửa hàng mặt tiền khu Trần Phú đắt hơn khoảng 30 – 50% so với giá gốc.",
  "Ưu tiên gói hút chân không có ghi ngày sản xuất, hạn dùng và nguồn gốc; yêu cầu hóa đơn với hàng giá trị cao như yến sào, trầm hương.",
  "Hàng tươi như chả cá, nem cần giữ lạnh; nếu đi máy bay, kiểm tra quy định hành lý với nước mắm và đồ lỏng.",
  "Thông tin cửa hàng lấy từ các bài hướng dẫn du lịch có thể đã cũ; hãy kiểm tra giờ và địa chỉ trước khi đến.",
];
