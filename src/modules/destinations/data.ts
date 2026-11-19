import { photos } from "@/shared/data/images";
import { cityDestinations } from "./destinations-city";
import { natureDestinations } from "./destinations-nature";
import { seaDestinations } from "./destinations-sea";
import type { Destination } from "./types";

export { destinationCategories, infoDisclaimer } from "./types";
export type { Destination, DestinationCategory, DestinationSection } from "./types";

const coreDestinations: Destination[] = [
  {
    id: "ponagar",
    category: "Danh thắng & di sản",
    name: "Tháp Bà Ponagar",
    tag: "Văn hóa Chăm Pa",
    summary:
      "Quần thể đền tháp Chăm trên đồi Cù Lao, thờ nữ thần Yang Po Inư Nưgar — vị mẹ xứ sở của người Chăm, được người Việt gọi là Thiên Y A Na Thánh Mẫu.",
    highlights: ["Kiến trúc gạch nung nghìn năm", "Lễ hội Tháp Bà tháng 3 âm lịch", "Thả đèn trên sông Cái"],
    photo: photos.ponagar,
    heroPhoto: photos.ponagarTower,
    gallery: [photos.ponagar],
    intro:
      "Đứng trên đồi Cù Lao nhìn xuống cửa sông Cái, những ngọn tháp gạch đỏ sẫm của Ponagar đã chứng kiến người Chăm cầu nguyện suốt hơn một thiên niên kỷ. Đây vừa là di tích kiến trúc, vừa là nơi tín ngưỡng còn sống động giữa lòng thành phố.",
    sections: [
      {
        heading: "Ngôi đền của người mẹ xứ sở",
        body: [
          "Tháp chính thờ Yang Po Inư Nưgar, vị nữ thần được người Chăm tôn là mẹ của xứ sở; truyền thuyết kể rằng bà sinh ra từ mây và bọt biển. Về sau, người Việt tiếp nhận tín ngưỡng này và gọi bà là Thiên Y A Na Thánh Mẫu, nên ngày nay đền vẫn được cả người Chăm lẫn người Việt thờ phụng.",
        ],
      },
      {
        heading: "Dấu ấn nhiều thế kỷ",
        body: [
          "Các nguồn ghi chép đặt thời gian xây dựng quần thể trong khoảng từ thế kỷ 8 đến thế kỷ 13. Theo một số tài liệu, ngôi đền ban đầu làm bằng gỗ, sau đó được các vua Chăm xây lại bằng gạch; cụm tháp hiện nay gắn với năm 965 dưới thời vua Jaya Indravarman I, và một tấm bia khắc năm 781 đã nhắc đến đền thờ.",
          "Năm 1979, Tháp Bà Ponagar được xếp hạng Di tích kiến trúc nghệ thuật cấp quốc gia. Quần thể gồm nhiều tháp gạch theo phong cách Chăm Pa; điểm nhấn là các lớp mái tháp chồng bậc và những tượng, phù điêu thờ thần linh.",
        ],
      },
      {
        heading: "Lễ hội Tháp Bà",
        body: [
          "Hằng năm vào khoảng ngày 20–23 tháng 3 âm lịch, lễ hội Tháp Bà thu hút đông đảo người dân và du khách; ngày giờ cụ thể giữa các nguồn có khác nhau nhẹ. Điểm nhấn là nghi thức thả đèn hoa đăng trên sông Cái, tạo nên khung cảnh lung linh về đêm.",
        ],
      },
    ],
    info: [
      { label: "Vị trí", value: "Đồi Cù Lao, đường 2 Tháng 4, cách trung tâm khoảng 2 km về phía bắc" },
      { label: "Giá vé tham khảo", value: "Khoảng 30.000 đồng/người" },
      { label: "Giờ mở cửa", value: "Các nguồn ghi khác nhau (từ khoảng 6:00–8:00 đến 17:30–18:00)" },
      { label: "Thời gian tham quan", value: "Khoảng 1–1,5 giờ" },
    ],
    tips: [
      "Ăn mặc kín đáo, giữ trật tự khi vào khu vực đang thờ cúng.",
      "Đến sáng sớm hoặc chiều muộn để tránh nắng và đông khách.",
      "Kết hợp ghé các điểm lân cận như Hòn Chồng để tiết kiệm thời gian di chuyển.",
    ],
  },
  {
    id: "hon-chong",
    category: "Danh thắng & di sản",
    name: "Hòn Chồng",
    tag: "Ngắm cảnh",
    summary:
      "Những khối đá granite khổng lồ xếp chồng nhau ngay bên bờ biển, gắn với truyền thuyết dấu bàn tay người khổng lồ và câu chuyện nghĩa vợ chồng.",
    highlights: ["Bình minh trên biển", "Dấu tay khổng lồ trên đá", "Cạnh Hòn Vợ"],
    photo: photos.honChong,
    intro:
      "Không cần đi xa khỏi trung tâm, bạn đã có thể đứng trước một thắng cảnh kỳ vĩ: một chồng đá lớn nhỏ nằm sát mép nước, sóng vỗ rì rào bên dưới. Hòn Chồng đẹp nhất vào sáng sớm, khi mặt trời nhô lên từ phía biển.",
    sections: [
      {
        heading: "Dấu tay trên đá",
        body: [
          "Trên khối đá lớn nhất có một vết lõm to như dấu bàn tay. Một truyền thuyết kể về người khổng lồ từng đến vùng này để đắp núi, tạo nên vịnh Nha Trang, rồi chống tay lên đá khi bị cá lớn kéo đi. Một câu chuyện khác kể về đôi vợ chồng trẻ gặp nạn trên biển: người chồng bám vào tảng đá, còn tay kia đưa ra cứu vợ.",
        ],
      },
      {
        heading: "Hòn Chồng và Hòn Vợ",
        body: [
          "Cách đó không xa là Hòn Vợ, khối đá được hình dung như người phụ nữ ngồi quay mặt ra biển ngóng chồng. Cả hai tên gọi cùng gợi nhắc về tình nghĩa vợ chồng, khiến nơi này trở thành điểm hẹn quen thuộc của các cặp đôi.",
        ],
      },
      {
        heading: "Thời điểm ngắm đẹp nhất",
        body: [
          "Vì bờ biển Nha Trang quay về hướng đông, bình minh là lúc khung cảnh đẹp nhất: ánh nắng đầu ngày nhuộm vàng các khối đá và mặt nước. Buổi sáng cũng mát mẻ và ít đông khách hơn.",
        ],
      },
    ],
    info: [
      { label: "Vị trí", value: "Ven biển phía đông bắc thành phố, khoảng 2–3 km từ trung tâm" },
      { label: "Giá vé tham khảo", value: "Các nguồn ghi khác nhau (từ miễn phí đến khoảng 30.000 đồng)" },
      { label: "Giờ mở cửa", value: "Thường khoảng 7:00–19:00; một số nguồn cho biết tham quan tự do" },
      { label: "Thời gian tham quan", value: "Khoảng 45–60 phút" },
    ],
    tips: [
      "Đi sáng sớm để ngắm bình minh và chụp ảnh đẹp.",
      "Mang giày đế bám khi leo trên đá, nhất là lúc đá còn ướt.",
      "Ghé Hòn Vợ gần đó để trọn vẹn câu chuyện.",
    ],
  },
  {
    id: "long-son",
    category: "Danh thắng & di sản",
    name: "Chùa Long Sơn",
    tag: "Tâm linh",
    summary:
      "Ngôi chùa dưới chân núi Trại Thủy với tượng Kim Thân Phật Tổ màu trắng trên đỉnh núi, nhìn xuống toàn cảnh thành phố.",
    highlights: ["193 bậc đá lên đỉnh", "Tượng Phật trắng cao 24 m", "Phật nằm dài 17 m"],
    photo: photos.longSon,
    intro:
      "Chùa Long Sơn là nơi yên tĩnh giữa lòng phố biển. Từ cổng chùa, con đường bậc đá dẫn lên đỉnh núi, nơi pho tượng Phật trắng như dõi theo thành phố bên dưới, nên người dân thường gọi đây là chùa Phật Trắng.",
    sections: [
      {
        heading: "Hành trình lên đỉnh núi",
        body: [
          "Chùa nằm trên đường 23 Tháng 10, ngay chân núi Trại Thủy. Để lên tới tượng Phật, du khách đi qua khoảng 193 bậc đá; dọc đường có tượng Phật nhập niết bàn dài khoảng 17 m và quả đại hồng chung nặng khoảng 1.500 kg.",
        ],
      },
      {
        heading: "Tượng Kim Thân Phật Tổ",
        body: [
          "Pho tượng Phật Thích Ca ngồi thiền được làm bằng bê tông, phủ màu trắng. Nhiều nguồn ghi tượng cao 24 m tính từ mặt đất lên đỉnh; riêng thân tượng khoảng 14 m. Từ đài tượng, bạn có thể nhìn bao quát thành phố, biển và những mái nhà ven đồi.",
        ],
      },
      {
        heading: "Một ngôi chùa lâu năm",
        body: [
          "Theo một số tài liệu, chùa được dựng từ khoảng cuối thế kỷ 19 (mốc thường được nhắc là khoảng năm 1886) và đã nhiều lần được trùng tu. Mốc thời gian chính xác cần đối chiếu thêm với nguồn chính thức.",
        ],
      },
    ],
    info: [
      { label: "Vị trí", value: "Đường 23 Tháng 10, chân núi Trại Thủy" },
      { label: "Quãng leo", value: "Khoảng 193 bậc đá lên tượng Phật" },
      { label: "Vé vào cửa", value: "Thông tin chưa được xác minh — nên hỏi tại chùa" },
      { label: "Thời gian tham quan", value: "Khoảng 45–60 phút" },
    ],
    tips: [
      "Mặc trang phục kín đáo, lịch sự khi vào chùa.",
      "Lên vào sáng sớm hoặc chiều mát để tránh nắng gắt trên bậc đá.",
      "Mang theo nước và đi giày thoải mái.",
    ],
  },
  {
    id: "hon-mun",
    category: "Biển & đảo",
    name: "Hòn Mun",
    tag: "Lặn biển",
    summary:
      "Khu bảo tồn biển đầu tiên của Việt Nam với hệ san hô và cá rạn phong phú — điểm lặn ngắm san hô nổi tiếng của vịnh Nha Trang.",
    highlights: ["Khu bảo tồn biển đầu tiên", "Hơn 340 loài san hô", "Lặn bình khí & snorkeling"],
    photo: photos.honMun,
    gallery: [photos.monkey],
    intro:
      "Cách bờ khoảng 8 km, Hòn Mun là nơi nước biển trong đến mức nhìn thấy san hô từ trên thuyền. Dưới mặt nước là một thế giới khác: những rạn san hô nhiều hình dáng và đàn cá rạn đủ màu sắc.",
    sections: [
      {
        heading: "Khu bảo tồn biển đầu tiên",
        body: [
          "Hòn Mun được biết đến là khu bảo tồn sinh vật biển đầu tiên của Việt Nam. Các nguồn cho biết khu vực này bảo vệ hơn 340–350 loài san hô cùng hơn 200 loài cá rạn, tạo nên một trong những hệ sinh thái biển đa dạng nhất cả nước.",
        ],
      },
      {
        heading: "Lặn ngắm san hô",
        body: [
          "Du khách có thể lặn bình khí cùng hướng dẫn viên hoặc lặn ống thở (snorkeling) ngắm san hô ở vùng nước nông. Mỗi lựa chọn đều cần đi cùng đơn vị tổ chức uy tín và tuân thủ quy định bảo vệ rạn san hô.",
          "Lưu ý: theo báo chí, hoạt động lặn ở phân khu bảo vệ nghiêm ngặt từng được tạm dừng để phục hồi san hô, nên cần hỏi đơn vị tour về điểm lặn được phép hiện tại.",
        ],
      },
      {
        heading: "Thời điểm phù hợp",
        body: [
          "Biển thường lặng, tầm nhìn dưới nước tốt vào khoảng tháng 3–4 đến tháng 8, tùy nguồn. Các tháng 10–11 là mùa mưa bão, nên tránh lên lịch lặn biển.",
        ],
      },
    ],
    info: [
      { label: "Vị trí", value: "Trong vịnh Nha Trang, cách bờ khoảng 8 km" },
      { label: "Cách đến", value: "Đi tàu/canô theo tour từ cảng Cầu Đá" },
      { label: "Thời điểm tốt", value: "Khoảng tháng 3–8; tránh tháng 10–11" },
      { label: "Hoạt động", value: "Lặn bình khí, snorkeling, ngắm san hô" },
    ],
    tips: [
      "Chọn đơn vị tour có giấy phép và hướng dẫn viên lặn.",
      "Không chạm hoặc bẻ san hô; dùng kem chống nắng thân thiện với biển.",
      "Kiểm tra thời tiết và tình trạng cho phép lặn trước chuyến đi.",
    ],
  },
  {
    id: "doc-let",
    category: "Biển & đảo",
    name: "Bãi Dốc Lết",
    tag: "Nghỉ dưỡng",
    summary:
      "Bãi biển cát trắng mịn dài khoảng 8 km, nước nông và sóng êm, cách Nha Trang khoảng 50 km về phía bắc.",
    highlights: ["Cát trắng mịn", "Nước nông, sóng êm", "Chợ cá làng chài sáng sớm"],
    photo: photos.docLet,
    intro:
      "Nếu muốn một ngày yên tĩnh hơn bãi biển trung tâm, Dốc Lết là lựa chọn đáng cân nhắc. Bãi cát trải dài, nước nông và êm, rất hợp với gia đình có trẻ nhỏ.",
    sections: [
      {
        heading: "Cái tên từ những cồn cát",
        body: [
          "Tên gọi Dốc Lết được giải thích bắt nguồn từ địa hình: những cồn cát trắng trải dài khiến người ta phải “lết” trên cát để xuống biển. Bờ biển dài khoảng 8 km, độ dốc thoải nhẹ và nước trong xanh.",
        ],
      },
      {
        heading: "Một ngày ở Dốc Lết",
        body: [
          "Đi từ Nha Trang mất khoảng 1,5 giờ tùy giao thông. Bạn có thể tắm biển, nghỉ ngơi dưới bóng dừa và thưởng thức hải sản địa phương. Gần đó có phiên chợ cá làng chài Ninh Thủy họp từ sáng sớm, phù hợp nếu bạn muốn xem cuộc sống ngư dân.",
          "Theo một số nguồn, năm 2019 Dốc Lết nằm trong danh sách các bãi biển đẹp của Việt Nam do Forbes bình chọn; thông tin này cần được kiểm chứng thêm.",
        ],
      },
    ],
    info: [
      { label: "Vị trí", value: "Phường Đông Ninh Hòa, khoảng 49–50 km phía bắc Nha Trang" },
      { label: "Thời gian di chuyển", value: "Khoảng 1,5 giờ đi xe từ trung tâm" },
      { label: "Đặc điểm", value: "Bờ biển dài khoảng 8 km, cát trắng, nước nông, sóng êm" },
      { label: "Phù hợp", value: "Gia đình, nghỉ dưỡng một ngày hoặc ở lại qua đêm" },
    ],
    tips: [
      "Đi sớm để ghé chợ cá làng chài trước khi tắm biển.",
      "Mang theo đồ chống nắng; bãi có ít bóng râm ở một số đoạn.",
      "Đặt xe hoặc thuê xe máy trước vì quãng đường khá xa.",
    ],
  },
  {
    id: "vinwonders",
    category: "Vui chơi",
    name: "Hòn Tre & Cáp treo",
    tag: "Vui chơi",
    summary:
      "Tuyến cáp treo vượt biển nối đất liền với đảo Hòn Tre, nơi có khu vui chơi giải trí, công viên nước và thủy cung.",
    highlights: ["Cáp treo vượt biển", "Công viên nước", "Thủy cung"],
    photo: photos.cableCar,
    gallery: [photos.bay],
    intro:
      "Chuyến cáp treo vượt vịnh là khởi đầu cho một ngày ở Hòn Tre. Nhìn xuống từ cabin, mặt biển xanh và những hòn đảo nhỏ trải ra như tấm bản đồ sống động.",
    sections: [
      {
        heading: "Cáp treo vượt biển",
        body: [
          "Tuyến cáp treo nối khu vực Vĩnh Trường trên đất liền với đảo Hòn Tre, được ghi nhận là cáp treo vượt biển dài nhất thế giới. Một chuyến đi kéo dài khoảng 12 phút ở độ cao khoảng 54 m so với mặt nước biển. Chiều dài tuyến được nêu khác nhau giữa các nguồn; Vinpearl ghi hơn 3 km.",
        ],
      },
      {
        heading: "Một ngày trên đảo",
        body: [
          "Trên Hòn Tre là khu vui chơi giải trí với công viên nước, thủy cung và bãi biển riêng, phù hợp với gia đình và nhóm bạn. Ngoài cáp treo, bạn cũng có thể đi bằng phương tiện đường thủy từ cảng Cầu Đá.",
        ],
      },
    ],
    info: [
      { label: "Điểm lên cáp", value: "Khu vực Vĩnh Trường, Nha Trang" },
      { label: "Thời gian chuyến cáp", value: "Khoảng 12 phút" },
      { label: "Phương tiện khác", value: "Tàu, canô từ cảng Cầu Đá" },
      { label: "Phù hợp", value: "Gia đình, nhóm bạn, nghỉ dưỡng và vui chơi" },
    ],
    tips: [
      "Đến sớm để tránh xếp hàng và nắng gắt buổi trưa.",
      "Mang đồ bơi và đồ thay nếu định chơi công viên nước.",
      "Kiểm tra giá vé và giờ hoạt động trên kênh chính thức của khu vui chơi.",
    ],
  },
];

export const destinations: Destination[] = [
  ...coreDestinations,
  ...seaDestinations,
  ...natureDestinations,
  ...cityDestinations,
];

export function getDestination(id: string) {
  return destinations.find((item) => item.id === id);
}
