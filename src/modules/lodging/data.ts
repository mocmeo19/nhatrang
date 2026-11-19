export type Stay = {
  id: string;
  name: string;
  kind: "Khách sạn" | "Resort";
  address: string;
  note: string;
  singleSource?: boolean;
};

export type Area = {
  id: string;
  name: string;
  distance: string;
  summary: string;
  pros: string[];
  cons: string[];
  suits: string;
  stays: Stay[];
};

export const areas: Area[] = [
  {
    id: "tran-phu",
    name: "Trung tâm, đường Trần Phú",
    distance: "Ngay trung tâm",
    summary: "Dải khách sạn mặt biển, đi bộ ra bãi tắm, chợ đêm và quán ăn.",
    pros: ["Đi bộ ra biển, quán ăn và chợ đêm", "Không cần thuê xe", "Buổi tối có chợ đêm và các quán bar"],
    cons: ["Bãi đông hơn, nhất là tháng 6 – 8"],
    suits: "Lần đầu đến, đi ngắn ngày, thích tiện đi lại",
    stays: [
      { id: "intercontinental", name: "InterContinental Nha Trang", kind: "Khách sạn", address: "32 – 34 Trần Phú", note: "Khách sạn 5 sao mặt biển, khoảng 279 phòng có ban công nhìn ra biển." },
      { id: "sheraton", name: "Sheraton Nha Trang Hotel & Spa", kind: "Khách sạn", address: "26 – 28 Trần Phú", note: "Khách sạn 5 sao cùng tuyến biển Trần Phú." },
      { id: "premier-havana", name: "Premier Havana Nha Trang", kind: "Khách sạn", address: "38 Trần Phú", note: "Khách sạn cao tầng, có quầy bar tầng thượng Skylight; xem thêm trang Vui chơi.", singleSource: true },
    ],
  },
  {
    id: "pham-van-dong",
    name: "Dải biển Phạm Văn Đồng",
    distance: "Phía bắc trung tâm, ven biển",
    summary: "Con đường ven biển phía bắc, có các resort có bãi riêng, yên hơn khu trung tâm.",
    pros: ["Resort có bãi biển riêng", "Yên tĩnh hơn trung tâm"],
    cons: ["Cần đi xe vào trung tâm buổi tối"],
    suits: "Cặp đôi và gia đình muốn nghỉ dưỡng nhưng vẫn gần thành phố",
    stays: [
      { id: "amiana", name: "Amiana Resort Nha Trang", kind: "Resort", address: "Đường Phạm Văn Đồng", note: "Resort 5 sao có bãi biển riêng, khoảng 153 phòng và biệt thự." },
    ],
  },
  {
    id: "hon-tre",
    name: "Đảo Hòn Tre",
    distance: "Ngoài vịnh, đi tàu hoặc cáp treo",
    summary: "Khu nghỉ dưỡng trên đảo lớn nhất vịnh, kết hợp công viên giải trí và bãi riêng.",
    pros: ["Có tàu cao tốc miễn phí đưa khách từ đất liền (với khách resort)", "Kết hợp khu vui chơi ngay trên đảo"],
    cons: ["Ra thành phố phải đi tàu hoặc cáp treo, nên ít đi dạo phố buổi tối"],
    suits: "Gia đình có trẻ nhỏ, người ưu tiên vui chơi tại chỗ",
    stays: [
      { id: "vinpearl-hon-tre", name: "Vinpearl Resort & Spa Nha Trang", kind: "Resort", address: "Đảo Hòn Tre", note: "Resort trên đảo Hòn Tre, có tàu cao tốc miễn phí từ đất liền." },
    ],
  },
  {
    id: "bai-dai",
    name: "Bãi Dài và Cam Ranh",
    distance: "Khoảng 20 – 40 km phía nam, gần sân bay",
    summary: "Bãi dài khoảng 15 km, cát trắng, cách trung tâm khoảng 25 km và cách sân bay Cam Ranh khoảng 10 km.",
    pros: ["Yên tĩnh, bãi rộng thoáng", "Gần sân bay Cam Ranh", "Resort lớn, có biệt thự và khu giải trí"],
    cons: ["Ít dịch vụ bên ngoài resort", "Đi lại chủ yếu bằng xe riêng hoặc taxi"],
    suits: "Gia đình, nhóm đông, người muốn nghỉ dưỡng trong resort",
    stays: [
      { id: "movenpick", name: "Mövenpick Resort Cam Ranh", kind: "Resort", address: "Lô D12 Đại lộ Nguyễn Tất Thành, Cam Hải Đông, Cam Lâm", note: "Khu phức hợp 5 sao gồm biệt thự, phòng khách sạn và căn hộ residence." },
      { id: "alma", name: "Alma Resort Cam Ranh", kind: "Resort", address: "Đại lộ Nguyễn Tất Thành, Bãi Đông, Cam Hải Đông, Cam Lâm", note: "Resort ven biển trên tuyến đại lộ Nguyễn Tất Thành." },
    ],
  },
  {
    id: "ninh-van",
    name: "Vịnh Ninh Vân",
    distance: "Khoảng 50 – 60 km, đi tàu cao tốc",
    summary: "Vịnh riêng tư bên bán đảo Hòn Hèo, nơi có khu nghỉ dưỡng chỉ đến được bằng đường biển.",
    pros: ["Rất riêng tư, thiên nhiên hoang sơ"],
    cons: ["Xa, phải đi tàu và đặt trước", "Giá thuộc nhóm cao nhất"],
    suits: "Cặp đôi, kỳ nghỉ riêng tư",
    stays: [
      { id: "six-senses", name: "Six Senses Ninh Vân Bay", kind: "Resort", address: "Ninh Vân, Ninh Hòa", note: "Resort chỉ đi bằng tàu cao tốc; khách thường đi xe khoảng 1 giờ từ sân bay Cam Ranh rồi chuyển sang tàu khoảng 20 phút." },
    ],
  },
];

export const priceNotes = [
  "Các bài hướng dẫn ghi giá resort 5 sao ở Bãi Dài (ví dụ Duyên Hà, Fusion, Mia) từ khoảng 3 đến 6,3 triệu đồng một đêm; một resort ở Cam Ranh được ghi từ khoảng 2,2 triệu đồng. Đây là số liệu cũ, giá thật thay đổi theo mùa và hạng phòng.",
  "Mùa cao điểm là khoảng tháng 6 – 8 và các dịp lễ; mùa mưa tháng 9 – 12 giá lưu trú thường mềm hơn nhưng biển có thể động.",
];

export const chooseTips = [
  "Xác định ưu tiên: đi bộ phố biển (Trần Phú) hay nghỉ dưỡng yên tĩnh (Bãi Dài, Phạm Văn Đồng).",
  "Kiểm tra khoảng cách đến sân bay Cam Ranh (khoảng 35 km tới trung tâm) nếu bay sớm hoặc khuya.",
  "Hỏi rõ phòng có nhìn biển không, bữa sáng và xe đưa đón có gồm trong giá không.",
  "Đặt sớm vào mùa cao điểm và lễ; so sánh giá trên nhiều nền tảng trước khi chốt.",
  "Nếu đi tour đảo hoặc ra cảng Cầu Đá sớm, chọn khách sạn gần trung tâm để đỡ mất thời gian di chuyển.",
];

export const lodgingNote =
  "Các nguồn tìm được chủ yếu liệt kê khách sạn và resort 5 sao, nên trang chỉ nêu tên các cơ sở này. Với khách sạn hạng 2 – 4 sao hoặc nhà nghỉ, hãy dùng các nền tảng đặt phòng và lọc theo khu vực đã gợi ý ở trên. Địa chỉ và số phòng lấy từ các trang du lịch, có thể đã thay đổi.";
