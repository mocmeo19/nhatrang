import { photos } from "@/shared/data/images";
import type { Destination } from "./types";

export const cityDestinations: Destination[] = [
  {
    id: "nha-tho-nui",
    category: "Danh thắng & di sản",
    name: "Nhà thờ Núi (Nhà thờ Đá)",
    tag: "Kiến trúc Gothic",
    summary:
      "Nhà thờ chính tòa Kitô Vua theo phong cách Gothic phục hưng trên một ngọn đồi gần ga Nha Trang, được gọi quen là Nhà thờ Núi hay Nhà thờ Đá.",
    highlights: ["Kiến trúc Gothic", "Tháp chuông cao khoảng 38 m", "Kính màu về các vị thánh"],
    photo: photos.nhaThoNui,
    intro:
      "Từ rất xa đã nhìn thấy tháp chuông của nhà thờ nằm trên đồi cao, ngay cạnh khu ga Nha Trang. Đây là nhà thờ chính tòa của Giáo phận Nha Trang.",
    sections: [
      {
        heading: "Lịch sử xây dựng",
        body: [
          "Giáo xứ do các giáo sĩ người Pháp lập từ năm 1886. Nhà thờ hiện nay được xây từ năm 1928 và làm lễ khánh thành ngày 14/5/1933 với tước hiệu Kitô Vua; chuông được làm phép năm 1934 và tháp chuông hoàn thành tháng 12/1935. Năm 1960, khi Giáo phận Nha Trang được thành lập, nhà thờ trở thành nhà thờ chính tòa.",
        ],
      },
      {
        heading: "Kiến trúc",
        body: [
          "Công trình theo phong cách Gothic phục hưng, nổi bật với nhiều ô kính màu mô tả các vị thánh và các cảnh trong cuộc đời Chúa Giêsu. Tổng chiều cao ghi trong một tài liệu là khoảng 38 m.",
        ],
      },
    ],
    info: [
      { label: "Địa chỉ", value: "31 Thái Nguyên (một số nguồn ghi số 1), phường Phước Tân cũ" },
      { label: "Giờ lễ phổ biến", value: "Ngày thường khoảng 4:45 và 17:00; Chủ nhật có nhiều lễ hơn" },
      { label: "Giờ tham quan", value: "Các nguồn ghi khác nhau, thường khoảng 5:30 – 17:00" },
      { label: "Chi phí", value: "Không bán vé; có thể có thùng quyên góp" },
    ],
    tips: [
      "Ăn mặc kín đáo, giữ yên lặng, tránh vào khi đang có thánh lễ nếu chỉ để chụp ảnh.",
      "Hỏi giờ lễ tại chỗ vì các nguồn ghi không giống nhau.",
      "Từ nhà thờ có thể kết hợp đi bộ hoặc đi xe ngắn ra Chợ Đầm.",
    ],
  },
  {
    id: "vien-hai-duong-hoc",
    category: "Danh thắng & di sản",
    name: "Viện Hải dương học",
    tag: "Khoa học biển",
    summary:
      "Viện nghiên cứu hải dương học lâu đời tại số 1 Cầu Đá, có bảo tàng trưng bày hàng nghìn mẫu vật sinh vật biển.",
    highlights: ["Thành lập năm 1922", "Bảo tàng hải dương học", "Gần Lầu Bảo Đại và cảng Cầu Đá"],
    photo: photos.vienHaiDuongHoc,
    intro:
      "Viện Hải dương học Nha Trang nằm ở số 1 Cầu Đá, cuối đường Trần Phú. Theo một trang du lịch, viện được người Pháp thành lập ngày 14/9/1922 và là một trong những viện hải dương học đầu tiên của Việt Nam.",
    sections: [
      {
        heading: "Bảo tàng và hồ cá",
        body: [
          "Du khách tham quan khu bảo tàng giới thiệu các nhóm sinh vật biển, các bể trưng bày sinh vật sống và mô hình về biển Việt Nam. Đây là nơi phù hợp để cả gia đình tìm hiểu về san hô, cá và hệ sinh thái trong vịnh trước khi ra đảo.",
        ],
      },
      {
        heading: "Liên hệ với Lầu Bảo Đại",
        body: [
          "Cụm biệt thự Cầu Đá, về sau gọi là Lầu Bảo Đại, được xây trên núi Cảnh Long gần viện để làm nơi ăn ở cho các nhà hải dương học. Vì vậy hai điểm thường được ghé liền nhau.",
        ],
      },
    ],
    info: [
      { label: "Địa chỉ", value: "Số 1 Cầu Đá, Nha Trang" },
      { label: "Vé tham khảo", value: "Khoảng 40.000 đồng người lớn (học sinh, sinh viên thấp hơn)" },
      { label: "Giờ mở cửa", value: "Thường khoảng 6:00 – 18:00; một số nguồn ghi 8:00 – 18:00" },
      { label: "Thời gian tham quan", value: "Khoảng 1 – 1,5 giờ" },
    ],
    tips: [
      "Có thể thuê thuyết minh với phí riêng.",
      "Đi buổi sáng cho mát và ít đông.",
      "Kết hợp thăm Lầu Bảo Đại và cảng Cầu Đá cùng buổi.",
    ],
  },
  {
    id: "lau-bao-dai",
    category: "Danh thắng & di sản",
    name: "Lầu Bảo Đại",
    tag: "Di tích",
    summary:
      "Cụm biệt thự trên đồi nhìn ra vịnh, nơi vua Bảo Đại nghỉ dưỡng, vừa mở cửa trở lại đón khách tháng 4/2026 sau hơn một thập kỷ đóng cửa.",
    highlights: ["Biệt thự Pháp xây năm 1923", "Mở lại tháng 4/2026", "Nghinh Phong, Vọng Nguyệt"],
    photo: photos.baoDaiVilla,
    intro:
      "Lầu Bảo Đại còn gọi là biệt thự Cầu Đá hay dinh Bảo Đại, nằm trên một ngọn đồi nhỏ hướng ra biển, gần cảng Cầu Đá và Viện Hải dương học.",
    sections: [
      {
        heading: "Nguồn gốc cụm biệt thự",
        body: [
          "Theo báo chí, cụm năm biệt thự được người Pháp xây năm 1923 trên núi Cảnh Long để làm nơi ăn ở cho các nhà hải dương học. Về sau, khi vua Bảo Đại nghỉ dưỡng ở Nha Trang, nơi này mang tên Lầu Bảo Đại. Xem thêm tại trang Con người.",
        ],
      },
      {
        heading: "Mở cửa trở lại",
        body: [
          "Tuổi Trẻ đưa tin di tích mở cửa đón khách từ cuối tháng 4/2026 sau thời gian dài đóng cửa do dự án khu nghỉ dưỡng trong khuôn viên bị đình trệ. Hiện mới có hai trong năm biệt thự, Nghinh Phong và Vọng Nguyệt, mở cho khách tham quan.",
        ],
      },
    ],
    info: [
      { label: "Địa chỉ", value: "Nhiều nguồn ghi 90 Trần Phú, Nha Trang" },
      { label: "Giờ mở cửa", value: "Một báo ghi thứ Hai đến thứ Sáu; các trang du lịch cũ ghi 8:00 – 18:00" },
      { label: "Vé", value: "Một báo cho biết không thu phí trong giờ hành chính; trang cũ ghi khoảng 15.000 – 21.000 đồng" },
      { label: "Khu mở cửa", value: "Hai biệt thự Nghinh Phong và Vọng Nguyệt" },
    ],
    tips: [
      "Gọi Trung tâm Bảo tồn di tích Khánh Hòa hoặc Sở Văn hóa, Thể thao và Du lịch để xác nhận giờ và vé mới nhất.",
      "Kết hợp với Viện Hải dương học ở gần đó.",
      "Giữ trật tự và không chạm vào hiện vật.",
    ],
  },
  {
    id: "cho-dam",
    category: "Chợ & quảng trường",
    name: "Chợ Đầm",
    tag: "Chợ truyền thống",
    summary:
      "Ngôi chợ hình bông sen ở trung tâm, nơi bán từ hải sản khô, đặc sản đến quần áo và đồ lưu niệm.",
    highlights: ["Mái hình bông sen", "Chợ lâu đời", "Mua đặc sản làm quà"],
    photo: photos.choDam,
    intro:
      "Chợ Đầm nằm ở đường Phan Bội Châu, khu vực trước đây là một đầm nước thông ra cửa sông Cái. Nhiều người Nha Trang vẫn gọi đây là chợ trung tâm của thành phố.",
    sections: [
      {
        heading: "Từ đầm nước đến ngôi chợ tròn",
        body: [
          "Nhiều nguồn cho biết chợ có từ đầu thế kỷ 20 (thường nhắc năm 1908) rồi được quy hoạch lại sau hỏa hoạn năm 1968. Sau khi lấp đầm, chợ mới hình tròn do kiến trúc sư Ngô Viết Thụ thiết kế được xây từ khoảng năm 1969 – 1972; năm hoàn thành và khai trương ghi khác nhau giữa các nguồn. Theo Tuổi Trẻ, chợ có đường kính 66,5 m, mái chữ V gợi hình bông sen nở trên mặt đầm.",
        ],
      },
      {
        heading: "Mua gì ở chợ",
        body: [
          "Các nguồn nhắc đến bánh xoài, đậu phộng rang, rong biển, mực rim me, mực một nắng, cá khô và nhiều đặc sản khác. Nên hỏi giá kỹ và so sánh vài quầy; xem thêm trang Mua quà để biết các cửa hàng gợi ý.",
        ],
      },
    ],
    info: [
      { label: "Địa chỉ", value: "Đường Phan Bội Châu, Nha Trang" },
      { label: "Giờ mở cửa", value: "Khoảng 5:00 – 18:30 hằng ngày" },
      { label: "Quy mô", value: "Hai tầng, khoảng 5.270 m² theo một nguồn" },
      { label: "Phù hợp", value: "Mua đặc sản, trải nghiệm đời sống địa phương" },
    ],
    tips: [
      "Hỏi giá trước khi mua và trả giá nhẹ nhàng.",
      "Đến buổi sáng để chợ đông và đủ hàng.",
      "Giữ ví và điện thoại cẩn thận nơi đông người.",
    ],
  },
  {
    id: "cho-dem",
    category: "Chợ & quảng trường",
    name: "Chợ đêm Nha Trang",
    tag: "Phố đêm",
    summary:
      "Khu chợ đêm gần đường Trần Phú và phố Hùng Vương, hoạt động từ chiều tối với quầy ăn vặt, hải sản, quần áo và quà lưu niệm.",
    highlights: ["Hải sản và ăn vặt", "Quà lưu niệm", "Gần Quảng trường 2/4"],
    photo: photos.choDem,
    intro:
      "Khi trời mát, chợ đêm trở thành nơi tụ tập của du khách: những dãy đèn, quầy hải sản nướng và các sạp quà lưu niệm kéo dài cả con phố.",
    sections: [
      {
        heading: "Ăn gì, mua gì",
        body: [
          "Các bài du lịch nhắc đến ốc, tôm chiên xù, mực chiên giòn, gỏi cá mai, bánh xèo mực, lẩu hải sản và hải sản khô làm quà. Một bài báo ghi giá niêm yết như khoảng 35.000 đồng một đĩa ốc, 89.000 đồng một nồi lẩu hải sản; một nguồn năm 2026 cho biết chợ có gần 100 gian hàng.",
        ],
      },
      {
        heading: "Giờ giấc",
        body: [
          "Các nguồn ghi giờ khác nhau: từ khoảng 17:00 hoặc 18:00 đến 23:00, có bài ghi đến 0:00. Chợ đông nhất khoảng 19:00 – 21:30; sau 22:00 một số quầy ăn bắt đầu dọn. Mùa mưa nhiều quầy có thể đóng hoặc thu hẹp.",
        ],
      },
    ],
    info: [
      { label: "Vị trí", value: "Khu vực đường Trần Phú gần phố Hùng Vương" },
      { label: "Giờ hoạt động", value: "Khoảng 17:00 – 23:00 (các nguồn ghi khác nhau)" },
      { label: "Giờ đông nhất", value: "Khoảng 19:00 – 21:30" },
      { label: "Gần đó", value: "Quảng trường 2/4, bãi biển Trần Phú" },
    ],
    tips: [
      "Hỏi giá và cân hải sản trước khi gọi món.",
      "Mang theo ít tiền mặt và để ý đồ cá nhân.",
      "Có phố đi bộ và các quán bar ở khu Hùng Vương, xem thêm trang Vui chơi.",
    ],
  },
  {
    id: "quang-truong-2-4",
    category: "Chợ & quảng trường",
    name: "Quảng trường 2/4",
    tag: "Quảng trường biển",
    summary:
      "Quảng trường ngay mặt tiền đường Trần Phú nhìn ra vịnh, nơi người dân và du khách dạo mát, ngắm hoàng hôn và xem các sự kiện lớn.",
    highlights: ["Đối diện vịnh Nha Trang", "Tháp Trầm Hương lên đèn", "Sự kiện và lễ hội"],
    photo: photos.quangTruong,
    intro:
      "Quảng trường được đặt tên theo ngày 2/4/1975, ngày giải phóng tỉnh Khánh Hòa. Đây là không gian công cộng rộng rãi giữa thành phố và biển.",
    sections: [
      {
        heading: "Không gian dạo chơi",
        body: [
          "Theo một trang du lịch, điểm nhấn là Tháp Trầm Hương 6 tầng xây năm 2006, lên đèn vào buổi tối. Khi chiều mát, quảng trường là nơi người dân đi dạo, trượt patin, nhảy hiện đại và ngắm hoàng hôn; các nguồn không ghi giờ đài phun nước cụ thể.",
        ],
      },
      {
        heading: "Sự kiện lớn",
        body: [
          "Quảng trường thường là địa điểm tổ chức Festival Biển Nha Trang, chương trình chào năm mới và các lễ hội văn hóa. Lịch sự kiện thay đổi theo đợt nên cần xem thông báo của thành phố.",
        ],
      },
    ],
    info: [
      { label: "Vị trí", value: "Mặt tiền đường Trần Phú, đối diện vịnh Nha Trang" },
      { label: "Giờ mở cửa", value: "Không gian công cộng, tự do ra vào" },
      { label: "Thời điểm đẹp", value: "Từ khoảng 17:00, khi nắng dịu và tháp lên đèn" },
      { label: "Gần đó", value: "Chợ đêm, bãi biển Trần Phú" },
    ],
    tips: [
      "Đến chiều muộn để ngắm hoàng hôn và xem tháp lên đèn.",
      "Kiểm tra lịch sự kiện của thành phố nếu muốn xem lễ hội.",
      "Kết hợp ăn tối ở khu chợ đêm gần đó.",
    ],
  },
];
