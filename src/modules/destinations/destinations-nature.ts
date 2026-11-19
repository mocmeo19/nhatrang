import { aiImages } from "@/shared/data/images";
import type { Destination } from "./types";

export const natureDestinations: Destination[] = [
  {
    id: "suoi-hoa-lan",
    category: "Suối khoáng & thiên nhiên",
    name: "Suối Hoa Lan",
    tag: "Đảo sinh thái",
    summary:
      "Khu du lịch sinh thái trên Hòn Hèo trong vịnh Nha Phu, có con suối ven bờ, vườn lan, vườn bướm và các chương trình biểu diễn thú.",
    highlights: ["Suối và vườn hoa lan", "Vườn bướm", "Biểu diễn thú"],
    photo: aiImages.hoaLan,
    illustrated: true,
    intro:
      "Suối Hoa Lan nằm trên Hòn Hèo, cạnh Đảo Khỉ, trong vịnh Nha Phu. Con suối nhỏ chảy từ núi ra biển, hai bên bờ được trồng nhiều loài lan.",
    sections: [
      {
        heading: "Những gì có trên đảo",
        body: [
          "Một trang du lịch cho biết khu có hơn 100 loại lan, vườn bướm với hơn 20 loài, con đường nón lá, hồ Nghinh Xuân với cầu khỉ và bãi biển An Bình dài khoảng 2 km. Ngoài ra còn các màn biểu diễn với voi, chim, gấu và đà điểu, và một số hoạt động tính phí như đi cano, chèo kayak qua rừng ngập mặn.",
        ],
      },
      {
        heading: "Cách đi và giá vé",
        body: [
          "Du khách đi xe khoảng 15 km theo đường biển đến bến Long Phú rồi đi tàu ra đảo. Vé người lớn các nguồn ghi từ 200.000 đến 240.000 đồng, trẻ em 1 – 1,29 m khoảng 120.000 – 150.000 đồng, trẻ dưới 1 m miễn phí; giá thường gồm ca nô hai chiều, ghế lều, tắm nước ngọt và xem biểu diễn.",
        ],
      },
    ],
    info: [
      { label: "Vị trí", value: "Hòn Hèo, vịnh Nha Phu; khoảng 15 – 30 km phía bắc (các nguồn ghi khác nhau)" },
      { label: "Giá vé tham khảo", value: "200.000 – 240.000 đồng người lớn (gồm ca nô hai chiều)" },
      { label: "Giờ nên đi", value: "Đến khoảng 8:00 – 9:00 sáng, ở lại đến khoảng 15:00 – 16:00" },
      { label: "Thời gian tham quan", value: "Khoảng nửa ngày đến cả ngày" },
    ],
    tips: [
      "Có thể ghép với Đảo Khỉ trong một ngày, hoặc đi riêng để chủ động giờ giấc.",
      "Mang theo đồ bơi, áo chống nắng và máy ảnh cho lối đi hoa lan.",
      "Ảnh trên trang là minh họa do AI tạo, không phải ảnh chụp nơi thật.",
    ],
  },
  {
    id: "thac-yang-bay",
    category: "Suối khoáng & thiên nhiên",
    name: "Thác Yang Bay",
    tag: "Thác rừng",
    summary:
      "Khu sinh thái trong thung lũng rộng khoảng 570 ha ở Khánh Vĩnh, cách trung tâm khoảng 45 km về phía tây, nổi tiếng với dòng thác cao khoảng 80 m.",
    highlights: ["Thác cao khoảng 80 m", "Thung lũng rừng 570 ha", "Suối khoáng và bùn"],
    photo: aiImages.yangBay,
    illustrated: true,
    intro:
      "Thác Yang Bay nằm ở thôn Ngã Hai, xã Khánh Phú, huyện Khánh Vĩnh. Từ trung tâm Nha Trang, đường đi khoảng 40 – 50 km, mất chừng một giờ.",
    sections: [
      {
        heading: "Thung lũng và dòng thác",
        body: [
          "Theo các trang du lịch, khu sinh thái nằm trong thung lũng rộng khoảng 570 ha với dòng thác cao khoảng 80 m, cùng các hồ tắm khoáng nóng, tắm bùn, nhà bungalow và khu cắm trại.",
        ],
      },
      {
        heading: "Vé và cách đi",
        body: [
          "Vé người lớn gần đây các nguồn ghi khoảng 200.000 đồng, trẻ em từ 1 đến 1,4 m khoảng 140.000 đồng, trẻ dưới 0,9 – 1 m miễn phí; một số nguồn cũ ghi 100.000 – 150.000 đồng. Khu mở khoảng 7:30 – 17:00. Có thể thuê xe máy, đi xe buýt hoặc đi tour; các dịch vụ khoáng nóng và tắm bùn tính phí riêng.",
        ],
      },
    ],
    info: [
      { label: "Vị trí", value: "Thôn Ngã Hai, xã Khánh Phú, huyện Khánh Vĩnh; khoảng 40 – 50 km phía tây" },
      { label: "Giá vé tham khảo", value: "Khoảng 200.000 đồng người lớn (nguồn cũ ghi thấp hơn)" },
      { label: "Giờ mở cửa", value: "Khoảng 7:30 – 17:00 hằng ngày" },
      { label: "Thời gian tham quan", value: "Cả ngày; có thể nghỉ lại bungalow" },
    ],
    tips: [
      "Xuất phát sớm để kịp tắm thác và quay về trước tối.",
      "Mang giày chống trơn và áo khoác mưa nhẹ vì khu vực rừng núi.",
      "Ảnh trên trang là minh họa do AI tạo, không phải ảnh chụp thác thật.",
    ],
  },
  {
    id: "suoi-khoang-thap-ba",
    category: "Suối khoáng & thiên nhiên",
    name: "Suối khoáng nóng Tháp Bà",
    tag: "Tắm bùn",
    summary:
      "Khu tắm khoáng và tắm bùn cách trung tâm khoảng 4 km, gần Tháp Bà Ponagar, dùng nước khoáng nóng 37 – 39 °C.",
    highlights: ["Nước khoáng 37 – 39 °C", "Tắm bùn riêng", "Gần Tháp Bà Ponagar"],
    photo: aiImages.thapBaSpring,
    illustrated: true,
    intro:
      "Nằm ở số 438 Ngô Đến, cách trung tâm khoảng 4 km, khu này tiện kết hợp với Tháp Bà Ponagar, Hòn Chồng và chùa Long Sơn trong cùng một buổi.",
    sections: [
      {
        heading: "Dịch vụ tắm khoáng và tắm bùn",
        body: [
          "Theo một trang du lịch, khu dùng nước khoáng nóng và bùn khoáng thiên nhiên, giữ ở mức 37 – 39 °C. Dịch vụ gồm tắm bùn hồ riêng khoảng 20 phút, ngâm khoáng thảo dược, jacuzzi, mát-xa, xông hơi và hồ khoáng chung; có hồ nông riêng cho trẻ em (sâu 0,8 m).",
        ],
      },
      {
        heading: "Giá và giờ",
        body: [
          "Tắm bùn thảo dược khoảng 375.000 – 425.000 đồng mỗi khách (giá giảm khi đi nhóm đông), các nguồn ghi mức khác nhau. Khu mở khoảng 7:30 – 17:30; riêng dịch vụ bùn và khoáng nhận khách đến khoảng 18:00. Có xe đưa đón từ trung tâm với phí riêng.",
        ],
      },
    ],
    info: [
      { label: "Địa chỉ", value: "438 Ngô Đến, Nha Trang" },
      { label: "Nhiệt độ nước", value: "Khoảng 37 – 39 °C" },
      { label: "Giá tắm bùn tham khảo", value: "Khoảng 350.000 – 425.000 đồng mỗi khách (tùy số khách trong hồ)" },
      { label: "Giờ mở cửa", value: "Khoảng 7:30 – 17:30 hằng ngày" },
    ],
    tips: [
      "Nên tắm bùn buổi chiều, tránh nắng gắt ngay sau khi tắm.",
      "Không tắm bùn nếu bạn đang có vết thương hở.",
      "Ảnh trên trang là minh họa do AI tạo, không phải ảnh chụp nơi thật.",
    ],
  },
  {
    id: "i-resort",
    category: "Suối khoáng & thiên nhiên",
    name: "I-Resort",
    tag: "Tắm bùn & spa",
    summary:
      "Khu nghỉ dưỡng tắm bùn khoáng nóng ở thôn Xuân Ngọc, phía tây Nha Trang, có hồ khoáng, suối nước nóng và công viên nước nhỏ.",
    highlights: ["Tắm bùn khoáng nóng", "Hồ khoáng và suối", "Gói spa riêng"],
    photo: { src: "/images/ai-mud.jpg", alt: "Minh họa du khách thư giãn trong bồn tắm bùn khoáng", width: 1200, height: 896 },
    illustrated: true,
    intro:
      "I-Resort nằm ở tổ 19, thôn Xuân Ngọc, khu Vĩnh Ngọc (một nguồn ghi nay thuộc phường Tây Nha Trang). Đây là một trong những địa chỉ tắm bùn khoáng được nhắc nhiều nhất của thành phố.",
    sections: [
      {
        heading: "Trải nghiệm tại khu",
        body: [
          "Các nguồn mô tả khu có hồ tắm khoáng nóng, bồn bùn khoáng theo nhóm, bồn riêng kiểu Mud House và dịch vụ spa. Giá bồn bùn tập thể được ghi khoảng 400.000 đồng mỗi khách nếu đi 1 – 3 người và 350.000 đồng nếu đi 4 – 10 người, trẻ em khoảng 200.000 đồng.",
        ],
      },
      {
        heading: "Giờ và vé",
        body: [
          "Hầu hết nguồn ghi khu mở khoảng 8:00 – 17:30, ngừng bán vé lúc 16:30. Vé vào suối khoáng và công viên nước được ghi khoảng 170.000 – 200.000 đồng người lớn và 80.000 đồng trẻ em, chưa được xác nhận. Cuối tuần và lễ nên đặt trước.",
        ],
      },
    ],
    info: [
      { label: "Địa chỉ", value: "Tổ 19, thôn Xuân Ngọc, Vĩnh Ngọc, Nha Trang" },
      { label: "Giờ mở cửa", value: "Khoảng 8:00 – 17:30; ngừng bán vé khoảng 16:30" },
      { label: "Bồn bùn tập thể", value: "Khoảng 350.000 – 400.000 đồng mỗi khách (tùy nhóm)" },
      { label: "Lưu ý", value: "Giá và giờ cần gọi xác nhận trực tiếp" },
    ],
    tips: [
      "Đặt chỗ trước vào cuối tuần, lễ tết để tránh quá tải.",
      "Giá trên các trang bán vé có thể khác giá tại quầy.",
      "Ảnh trên trang là minh họa do AI tạo, không phải ảnh chụp khu thật.",
    ],
  },
];
