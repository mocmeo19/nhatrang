import { aiImages, photos } from "@/shared/data/images";
import type { Destination } from "./types";

export const seaDestinations: Destination[] = [
  {
    id: "hon-tam",
    category: "Biển & đảo",
    name: "Hòn Tằm",
    tag: "Đảo nghỉ dưỡng",
    summary:
      "Hòn đảo cách trung tâm khoảng 7 km về phía đông nam, nổi tiếng với bãi cát trắng yên tĩnh, nước trong và các hoạt động thể thao biển.",
    highlights: ["Ca nô khoảng 7 phút", "Bãi cát trắng", "Tắm bùn và thể thao biển"],
    photo: photos.honTam,
    intro:
      "Hòn Tằm còn có tên Thủy Kim Sơn. Từ bến gần cảng Cầu Đá, ca nô chỉ mất chừng 7 phút để đưa du khách sang một bãi biển yên ả hơn nhiều so với đất liền.",
    sections: [
      {
        heading: "Bãi biển và hoạt động",
        body: [
          "Bãi tắm có cát trắng, nước trong và khá vắng. Trên đảo có các hoạt động như đi bộ dưới biển (seawalk), dù kéo, flyboard, mô tô nước, chèo kayak và một sân gôn nhỏ rộng khoảng 1,2 ha. Giá từng dịch vụ khác nhau giữa các nguồn, ví dụ seawalk khoảng 800.000 đồng và dù kéo khoảng 500.000–600.000 đồng mỗi lượt.",
          "Trên đảo còn có ngôi nhà cổ Hoàng Hoa Thôn, theo một nguồn đã hơn 100 năm tuổi và rộng khoảng 400 m².",
        ],
      },
      {
        heading: "Vé và cách đi",
        body: [
          "Du khách có thể mua tour có sẵn ca nô hoặc tự mua vé ca nô đi lẻ; mỗi ca nô chở tối đa khoảng 25 người, chạy theo giờ cố định. Giá gói tham quan thường từ khoảng 360.000 đồng, còn gói cả ngày có tắm bùn khoáng nóng có thể trên 800.000 đồng tùy đơn vị bán.",
        ],
      },
    ],
    info: [
      { label: "Vị trí", value: "Khoảng 7 km phía đông nam trung tâm, lên ca nô gần cảng Cầu Đá" },
      { label: "Thời gian ca nô", value: "Khoảng 7 phút mỗi chiều" },
      { label: "Giá tham khảo", value: "Từ khoảng 360.000 đồng (gói tham quan) đến hơn 800.000 đồng (gói cả ngày)" },
      { label: "Mùa đẹp", value: "Khoảng tháng 3 – 9" },
    ],
    tips: [
      "Kiểm tra giờ chuyến cuối và bến lên tàu vì có nguồn cho biết bến từng thay đổi.",
      "Mang kem chống nắng, mũ rộng vành, đồ bơi và khăn tắm.",
      "Hỏi rõ gói giá đã gồm bữa ăn và hoạt động nào trước khi mua.",
    ],
  },
  {
    id: "dao-khi",
    category: "Biển & đảo",
    name: "Đảo Khỉ",
    tag: "Vịnh Nha Phu",
    summary:
      "Hòn đảo trong vịnh Nha Phu cách trung tâm khoảng 15 – 18 km về phía bắc, nơi sinh sống của hàng nghìn con khỉ và có chương trình xiếc thú.",
    highlights: ["Đàn khỉ hàng nghìn con", "Xiếc khỉ", "Đi từ bến Long Phú"],
    photo: photos.daoKhi,
    intro:
      "Đảo Khỉ (còn gọi là Hòn Lao) nằm ở vịnh Nha Phu, phía bắc Nha Trang. Từ bến tàu Long Phú, tàu đưa du khách ra đảo trong khoảng 15 phút.",
    sections: [
      {
        heading: "Gặp đàn khỉ trên đảo",
        body: [
          "Các nguồn cho biết đảo có khoảng 1.200 – 1.500 con khỉ sống bán hoang dã. Vé tham quan thường gồm tiết mục xiếc khỉ, trong đó có khỉ bơi và khỉ đua xe; trẻ em thường rất thích nơi này.",
        ],
      },
      {
        heading: "Cách đi và giá vé",
        body: [
          "Du khách đi xe đến bến Long Phú, mua vé rồi đi tàu ra đảo. Giá vé người lớn các nguồn ghi từ khoảng 120.000 đến 220.000 đồng (mức khoảng 180.000 đồng thường đã gồm vé tàu khứ hồi); trẻ em khoảng 100.000 đồng, trẻ dưới 1 m thường miễn phí. Vì nhiều nguồn là trang bán tour nên giá cần kiểm tra lại.",
          "Đảo Khỉ thường được ghép chung với Suối Hoa Lan trong một ngày tham quan.",
        ],
      },
    ],
    info: [
      { label: "Vị trí", value: "Vịnh Nha Phu, khoảng 15 – 18 km phía bắc trung tâm" },
      { label: "Đi tàu", value: "Khoảng 15 phút từ bến Long Phú" },
      { label: "Giá vé người lớn", value: "Các nguồn ghi từ khoảng 120.000 đến 220.000 đồng" },
      { label: "Thời gian tham quan", value: "Nửa ngày; có thể ghép với Suối Hoa Lan" },
    ],
    tips: [
      "Giữ chặt túi xách, điện thoại, kính và đồ ăn vì khỉ có thể giật đồ.",
      "Không trêu chọc hay đút thức ăn cho khỉ.",
      "Đi buổi sáng để xem trọn chương trình biểu diễn và tránh nắng gắt.",
    ],
  },
  {
    id: "bai-tranh",
    category: "Biển & đảo",
    name: "Bãi Tranh",
    tag: "Bãi tắm đảo",
    summary:
      "Bãi biển dài khoảng 500 m nằm giữa núi và biển trong vịnh Nha Trang, thường là điểm dừng của tour đảo với nhiều trò chơi dưới nước.",
    highlights: ["Bãi dài khoảng 500 m", "Nước nông, dốc thoải", "Dù kéo, đi bộ dưới biển"],
    photo: aiImages.baiTranh,
    illustrated: true,
    intro:
      "Bãi Tranh là điểm dừng quen thuộc trong tour 3 đảo và 4 đảo. Một bên bãi là cát trắng, bên kia là sỏi, núi rừng ôm lấy vùng nước êm.",
    sections: [
      {
        heading: "Bãi tắm và trò chơi",
        body: [
          "Bãi dốc thoải xuống nước nên được cho là an toàn cho cả người lớn và trẻ em. Ngoài tắm biển, du khách có thể chơi dù kéo, đi bộ dưới biển, lặn bình hơi, phao chuối và mô tô nước; các trò chơi tính phí riêng.",
        ],
      },
      {
        heading: "Vị trí cần kiểm tra",
        body: [
          "Các nguồn mô tả chưa thống nhất về hòn đảo đặt Bãi Tranh: một số ghi trên đảo Trí Nguyên, số khác ghi trên Hòn Miễu. Vì vậy hãy hỏi rõ đơn vị tour. Các tour thường xuất phát từ khu cảng Vĩnh Trường, gần Cầu Đá.",
        ],
      },
    ],
    info: [
      { label: "Vị trí", value: "Trong vịnh Nha Trang (hòn đảo cụ thể ghi khác nhau giữa các nguồn)" },
      { label: "Phí vào", value: "Khoảng 70.000 đồng người lớn, 50.000 đồng trẻ em (số liệu 2021 – 2024)" },
      { label: "Ca nô lẻ", value: "Khoảng 150.000 – 200.000 đồng mỗi người" },
      { label: "Mùa đẹp", value: "Khoảng tháng 2 – 9; tránh tháng 9 – 12 mùa mưa" },
    ],
    tips: [
      "Sỏi nóng vào buổi trưa, hãy mang dép khi đi trên bãi.",
      "Mang đồ bơi, kem chống nắng, mũ rộng vành.",
      "Ảnh trên trang là minh họa do AI tạo, không phải ảnh chụp bãi thật.",
    ],
  },
  {
    id: "dao-yen",
    category: "Biển & đảo",
    name: "Đảo Yến – Hòn Nội",
    tag: "Yến sào",
    summary:
      "Cụm đảo ngoài khơi vịnh, cách cảng Cầu Đá khoảng 25 km, nơi khai thác yến sào lớn nhất cả nước và có bãi tắm đôi nổi tiếng.",
    highlights: ["Khai thác yến sào", "Bãi Tắm Đôi", "Đỉnh Du Hạ khoảng 90 m"],
    photo: photos.honNoi,
    intro:
      "Tên chính xác của đảo là Hòn Nội, nhưng du khách quen gọi là Đảo Yến vì nơi đây có rất nhiều chim yến làm tổ. Đảo xa hơn các đảo quen thuộc nên thường chỉ đi tour trọn buổi.",
    sections: [
      {
        heading: "Vì sao gọi là Đảo Yến",
        body: [
          "Theo một trang du lịch địa phương, Hòn Nội là nơi chim yến tụ tập nhiều nhất và có sản lượng yến sào lớn nhất Việt Nam. Quyền bảo vệ, phát triển và khai thác được Nhà nước giao cho một doanh nghiệp, nên du khách có thể xem khu vực yến làm tổ nhưng không được vào các hang lớn ngoài đảo.",
        ],
      },
      {
        heading: "Bãi Tắm Đôi và đỉnh Du Hạ",
        body: [
          "Bãi Tắm Đôi gồm hai bãi hai bên một dải cát hẹp; nhìn từ trên cao được ví như hình ảnh các bãi biển nhiệt đới. Du khách có thể leo khoảng 220 bậc đá lên đỉnh Du Hạ (cao khoảng 90 m), đi qua các cầu dọc vách đá, lặn ngắm san hô hoặc chèo kayak.",
        ],
      },
      {
        heading: "Cách đi",
        body: [
          "Không thể tự thuê tàu ra đảo mà phải đi tour của đơn vị quản lý, bán qua đại lý. Theo nguồn này, tour chạy khoảng từ tháng 3 đến tháng 9, cần tối thiểu 25 khách mới khởi hành, giá từ khoảng 460.000 đồng. Tàu cao tốc đi khoảng 25 – 30 phút, tàu thường khoảng 1 giờ 20 phút.",
        ],
      },
    ],
    info: [
      { label: "Vị trí", value: "Khoảng 25 km (13 hải lý) từ cảng Cầu Đá" },
      { label: "Hình thức", value: "Chỉ đi theo tour của đơn vị quản lý đảo" },
      { label: "Giá tham khảo", value: "Từ khoảng 460.000 đồng mỗi khách" },
      { label: "Mùa tour", value: "Khoảng tháng 3 – 9" },
    ],
    tips: [
      "Chặng biển hở có thể sóng lớn; ai dễ say sóng nên uống thuốc trước.",
      "Đặt tour sớm vì tour có thể bị hủy nếu không đủ khách.",
      "Mang giày đế bám để leo bậc đá lên đỉnh Du Hạ.",
    ],
  },
  {
    id: "thuy-cung-tri-nguyen",
    category: "Biển & đảo",
    name: "Thủy cung Trí Nguyên",
    tag: "Hòn Miễu",
    summary:
      "Khu thủy cung trên đảo Hòn Miễu, ra từ cảng Cầu Đá bằng ca nô trong khoảng 10 – 20 phút, thường nằm trong tour đảo.",
    highlights: ["Ca nô 10 – 20 phút", "Bể cá và rùa biển", "Điểm dừng tour 4 đảo"],
    photo: photos.thuyCung,
    intro:
      "Thủy cung Trí Nguyên nằm trên đảo Hòn Miễu giữa vịnh. Du khách đi taxi đến cảng, thuê ca nô hoặc tàu gỗ ra đảo, rồi mua vé vào cửa riêng.",
    sections: [
      {
        heading: "Tham quan thủy cung",
        body: [
          "Khu thủy cung giới thiệu nhiều loài sinh vật biển và có hồ cá nước mặn. Vì nằm trên đảo nên chuyến đi thường kết hợp với tắm biển hoặc các điểm dừng khác trong tour đảo.",
        ],
      },
      {
        heading: "Giá vé và giờ mở cửa",
        body: [
          "Mức giá gần đây nhất các trang ghi khoảng 150.000 đồng người lớn, 100.000 đồng trẻ em từ 1 đến 1,4 m, trẻ dưới 1 m miễn phí; các nguồn khác ghi từ 120.000 đến 170.000 đồng. Tiền ca nô thường tính riêng, khoảng 150.000 đồng một người nếu đi lẻ. Giờ mở cửa phổ biến khoảng 8:00 – 17:00 nhưng một số nguồn ghi khác.",
        ],
      },
    ],
    info: [
      { label: "Vị trí", value: "Đảo Hòn Miễu, cách cảng Cầu Đá vài km" },
      { label: "Ca nô", value: "Khoảng 10 – 20 phút, phí tính riêng" },
      { label: "Vé tham khảo", value: "Khoảng 150.000 đồng người lớn (các nguồn ghi 120.000 – 170.000)" },
      { label: "Giờ mở cửa", value: "Thường khoảng 8:00 – 17:00 (một số nguồn ghi khác)" },
    ],
    tips: [
      "Nếu đi tour 4 đảo, hỏi xem vé vào thủy cung đã gồm trong giá chưa.",
      "Cuối tuần và lễ tết có thể mở muộn hơn, nên kiểm tra trước.",
      "Mang áo khoác mỏng chống nắng và chai nước.",
    ],
  },
  {
    id: "vinh-ninh-van",
    category: "Biển & đảo",
    name: "Vịnh Ninh Vân",
    tag: "Biển riêng tư",
    summary:
      "Vịnh nhỏ yên tĩnh trên bán đảo Hòn Hèo, thuộc Ninh Hòa, cách trung tâm Nha Trang khoảng 50 – 60 km và nổi tiếng với resort chỉ đi bằng tàu cao tốc.",
    highlights: ["Cách khoảng 50 – 60 km", "Đi tàu cao tốc khoảng 20 phút", "Không gian riêng tư"],
    photo: photos.ninhVan,
    intro:
      "Ninh Vân là vịnh biển được bao quanh bởi núi và rừng, xa hẳn nhịp sống đô thị. Khu nghỉ dưỡng nổi tiếng trong vịnh chỉ đến được bằng đường biển.",
    sections: [
      {
        heading: "Vị trí và đường đi",
        body: [
          "Vịnh nằm ở xã Ninh Vân, Ninh Hòa, trên bán đảo Hòn Hèo. Từ bến tàu Nha Trang, tàu cao tốc mất khoảng 20 phút; từ sân bay Cam Ranh, khách của resort thường đi xe khoảng 1 giờ rồi chuyển sang tàu. Đường bộ qua Quốc lộ 1A đến Ninh Hòa rồi ra cảng khá xa.",
        ],
      },
      {
        heading: "Du khách có vào được không?",
        body: [
          "Các nguồn không cho biết rõ khách không lưu trú tại resort có được vào vịnh hay không. Nếu bạn muốn ghé, hãy liên hệ trực tiếp đơn vị vận hành hoặc công ty tour trước khi đi.",
        ],
      },
    ],
    info: [
      { label: "Vị trí", value: "Ninh Vân, Ninh Hòa; khoảng 50 – 60 km từ trung tâm Nha Trang" },
      { label: "Tàu cao tốc", value: "Khoảng 15 – 25 phút (khác nhau giữa các nguồn)" },
      { label: "Phù hợp", value: "Nghỉ dưỡng riêng tư, cặp đôi" },
      { label: "Lưu ý", value: "Cần xác nhận khả năng vào tham quan trước khi đi" },
    ],
    tips: [
      "Liên hệ đặt chỗ trước vì tàu và lịch vào vịnh phụ thuộc đơn vị vận hành.",
      "Dành cả ngày hoặc ở lại qua đêm vì quãng đường khá xa.",
      "Mang áo chống nắng và thuốc say sóng nếu đi tàu.",
    ],
  },
  {
    id: "bai-bien-tran-phu",
    category: "Biển & đảo",
    name: "Bãi biển Trần Phú",
    tag: "Biển thành phố",
    summary:
      "Dải bãi biển ngay trung tâm chạy dọc đường Trần Phú, nơi người dân và du khách tắm biển, dạo bộ và ngắm bình minh.",
    highlights: ["Bãi biển trung tâm", "Dạo bộ ven biển", "Bình minh trên vịnh"],
    photo: photos.tranPhu,
    intro:
      "Bãi biển Trần Phú là khuôn mặt quen thuộc nhất của Nha Trang: cát vàng, hàng dừa và con đường ven biển luôn rộn ràng từ sáng sớm đến tối.",
    sections: [
      {
        heading: "Dải biển dài trung tâm",
        body: [
          "Các nguồn mô tả chiều dài khác nhau, phổ biến là khoảng 6 – 7 km; một số bài ghi trên 10 km tùy cách tính đoạn đầu và cuối. Bãi chạy dọc đường Trần Phú, nhìn ra vịnh và các đảo phía xa.",
        ],
      },
      {
        heading: "Thay đổi gần đây",
        body: [
          "Theo báo chí, thành phố đã tháo dỡ nhiều công trình chắn biển để trả lại tầm nhìn và lối ra biển cho người dân; Thanh Niên cũng đưa tin về kế hoạch chỉnh trang dải bờ biển Trần Phú – Phạm Văn Đồng dài khoảng 16,4 km thành chuỗi công viên (quy mô khoảng 253 ha). Đây là kế hoạch, chưa phải hiện trạng đã hoàn thành.",
        ],
      },
    ],
    info: [
      { label: "Vị trí", value: "Dọc đường Trần Phú, trung tâm Nha Trang" },
      { label: "Chi phí", value: "Miễn phí vào bãi; thuê ghế, dù và đồ ăn tính riêng" },
      { label: "Giờ đẹp", value: "Sáng sớm để ngắm bình minh, chiều muộn để đi dạo" },
      { label: "Gần đó", value: "Quảng trường 2/4, chợ đêm, các nhà hàng hải sản" },
    ],
    tips: [
      "Tắm biển buổi sáng sớm hoặc chiều muộn để tránh nắng gắt.",
      "Giữ đồ cá nhân cẩn thận khi xuống nước.",
      "Chú ý cờ báo và khu vực an toàn khi biển động.",
    ],
  },
];
