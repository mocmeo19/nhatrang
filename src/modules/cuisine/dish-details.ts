import type { DishGuide } from "./guide-data";

type DishDetails = Required<Pick<DishGuide, "details" | "facts" | "sources">>;

export const dishDetails = {
  "nem-nuong": {
    details: [
      {
        heading: "Nguyên liệu và cách nướng",
        body: "Thịt heo được quết dẻo, nêm gia vị rồi tạo hình để nướng trên than. Nem ngon có mặt ngoài thơm, bên trong còn mềm.",
      },
      {
        heading: "Cuốn cùng những gì?",
        body: "Bánh tráng cuốn nem với xoài xanh, dưa leo, hẹ và rau sống. Có thể cuốn từng miếng nhỏ để dễ ăn và điều chỉnh lượng rau.",
      },
      {
        heading: "Chén nước chấm riêng",
        body: "Nước chấm có độ sánh và vị béo, có thể nấu từ gạo, nếp, gan heo cùng gia vị. Công thức thay đổi theo quán.",
      },
      {
        heading: "Dấu ấn Ninh Hòa",
        body: "Món nem gắn với Ninh Hòa, Khánh Hòa. Sự kết hợp giữa thịt nướng, rau tươi và nước chấm tạo nên nét riêng của món cuốn này.",
      },
    ],
    facts: [
      { label: "Nên ăn", value: "Nem còn nóng, cuốn đến đâu ăn đến đó" },
      { label: "Hợp với", value: "Bữa ăn cùng bạn bè, gia đình" },
      { label: "Gợi ý", value: "Hỏi số nem và phần rau, bánh tráng đi kèm" },
    ],
    sources: [{ label: "Du lịch số Khánh Hòa – Khánh Hòa trong từng hương vị", href: "https://dulichso.khanhhoa.gov.vn/article/khanh-hoa-trong-tung-huong-vi-a8e" }],
  },
  "bun-cha-ca": {
    details: [
      {
        heading: "Chả cá hấp và chiên",
        body: "Cá biển được nạo thịt, quết cùng gia vị thành chả. Chả hấp mềm, vị thanh; chả chiên có lớp ngoài vàng thơm. Loại cá thay đổi theo mùa.",
      },
      {
        heading: "Nồi nước dùng",
        body: "Đầu và xương cá được tận dụng để nấu nước dùng trong. Tùy quán, tô bún có thêm cà chua, thơm và hành tây.",
      },
      {
        heading: "Phân biệt chả cá và cá dầm",
        body: "Chả cá là thịt cá đã quết và tạo hình; cá dầm là phần thịt cá chín tách miếng. Một tô có thể gồm cả hai, tùy cách gọi.",
      },
      {
        heading: "Rau và gia vị",
        body: "Ăn cùng rau xắt ghém, chanh và nước mắm ớt. Nên nếm nước dùng trước rồi thêm gia vị từng chút để giữ vị cá.",
      },
    ],
    facts: [
      { label: "Nên ăn", value: "Khi nước dùng còn nóng" },
      { label: "Chọn phần", value: "Chả hấp, chả chiên hoặc thêm cá dầm" },
      { label: "Gợi ý", value: "Hỏi rõ thành phần của tô thập cẩm" },
    ],
    sources: [{ label: "Cục Du lịch Quốc gia Việt Nam – Về ăn bún cá Ninh Hòa", href: "https://www.dulichvn.org.vn/index.php/item/ve-an-bun-ca-ninh-hoa-khanh-hoa-52857" }],
  },
  "bun-sua": {
    details: [
      {
        heading: "Điểm nhấn là sứa",
        body: "Sứa đã sơ chế được cắt miếng vừa ăn, có màu trắng trong và độ giòn đặc trưng. Đây là điểm khác biệt dễ nhận ra so với bún chả cá.",
      },
      {
        heading: "Vị thanh của nước dùng",
        body: "Nước dùng thường nấu từ xương cá biển, có thể thêm cà chua cho vị chua nhẹ. Cách nêm nếm và thành phần thay đổi theo quán.",
      },
      {
        heading: "Một tô có những gì?",
        body: "Ngoài bún và sứa, nhiều quán phục vụ thêm chả cá hấp, chả chiên hoặc thịt cá dầm. Nên hỏi trước nếu chỉ muốn ăn riêng sứa.",
      },
      {
        heading: "Ăn kèm cho tròn vị",
        body: "Rau xà lách, bắp chuối bào và giá tạo độ tươi giòn. Chanh, ớt và nước mắm được thêm theo khẩu vị từng người.",
      },
    ],
    facts: [
      { label: "Nên ăn", value: "Bữa sáng hoặc bữa nhẹ buổi chiều" },
      { label: "Đặc trưng", value: "Sứa giòn, chả cá dai, nước dùng thanh" },
      { label: "Gợi ý", value: "Hỏi phần sứa riêng hay tô kèm chả cá" },
    ],
    sources: [{ label: "Du lịch số Khánh Hòa – Bún sứa Nha Trang", href: "https://dulichso.khanhhoa.gov.vn/article/bun-sua-nha-trang-vi-ngot-thanh-khiet-mat-lanh-tu-dai-duong-605" }],
  },
  "banh-canh": {
    details: [
      {
        heading: "Sợi bánh canh",
        body: "Tùy quán có sợi bột gạo hoặc bột lọc. Khi gọi món, bạn có thể hỏi loại sợi đang phục vụ để chọn độ mềm, dai phù hợp.",
      },
      {
        heading: "Nước dùng và chả cá",
        body: "Nước dùng cá biển kết hợp với chả cá quết, hấp hoặc chiên. Hành lá, hành phi và tiêu thường được thêm khi chan tô.",
      },
      {
        heading: "Phần cá dầm",
        body: "Ngoài chả cá, nhiều nơi có cá thu, cá ngừ hoặc cá cờ dầm. Đây là thịt cá chín tách miếng, bổ sung vị ngọt và độ mềm.",
      },
      {
        heading: "Nét quen của phố biển",
        body: "Từ bữa ăn bình dân, bánh canh chả cá trở thành món gắn với Nha Trang. Các quán có thể bán sáng, chiều hoặc tối, tùy nơi.",
      },
    ],
    facts: [
      { label: "Nên ăn", value: "Ăn nóng, nêm mắm ớt theo khẩu vị" },
      { label: "Chọn phần", value: "Chả cá hoặc chả cá kèm cá dầm" },
      { label: "Gợi ý", value: "Hỏi loại sợi và các món thêm trước khi gọi" },
    ],
    sources: [{ label: "Cổng thông tin Du lịch Khánh Hòa – Bánh canh chả cá", href: "https://nhatrang-travel.com/gioi-thieu/dac-san/banh-canh-cha-ca-nha-trang-mon-ngon-mien-bien.html" }],
  },
  "banh-xeo": {
    details: [
      {
        heading: "Lớp vỏ bánh",
        body: "Bột được đổ vào chảo nóng, chiên đến khi mặt bánh chín và mép giòn. Bánh mới ra chảo ngon hơn khi còn nóng.",
      },
      {
        heading: "Nhân mang vị biển",
        body: "Ở Nha Trang thường gặp nhân tôm, mực hoặc kết hợp cả hai. Một số quán còn thêm thịt, trứng hay giá vào bánh.",
      },
      {
        heading: "Nước chấm và rau",
        body: "Nước mắm pha tỏi, ớt, chanh, đường là kiểu chấm quen thuộc. Ăn cùng xà lách, cải non hoặc dưa leo; nước chấm có thể khác nhau theo quán.",
      },
      {
        heading: "Chọn bánh theo khẩu vị",
        body: "Có quán làm bánh nhỏ, có nơi đổ bánh chảo lớn. Nên hỏi kích thước, loại nhân và số bánh mỗi phần trước khi gọi.",
      },
    ],
    facts: [
      { label: "Nên ăn", value: "Ngay khi bánh vừa ra chảo" },
      { label: "Nhân nên thử", value: "Mực, tôm hoặc nhân hải sản kết hợp" },
      { label: "Gợi ý", value: "Gọi từng lượt để bánh giữ độ giòn" },
    ],
    sources: [{ label: "Vinpearl – Bánh xèo Nha Trang", href: "https://vinpearl.com/vi/luu-ngay-15-dia-chi-banh-xeo-nha-trang-hut-khach-nhat" }],
  },
  "bo-nuong": {
    details: [
      {
        heading: "Thịt bò và phần ướp",
        body: "Bò cắt miếng vừa ăn, ướp mật ong và gia vị trước khi nướng. Công thức riêng của từng quán quyết định độ đậm, ngọt và mùi thơm.",
      },
      {
        heading: "Nướng tại bàn",
        body: "Kiểu bò Lạc Cảnh dùng vỉ đặt trên bếp than nhỏ tại bàn. Nên nướng từng lượt vừa đủ ăn để thịt không nằm lâu trên vỉ.",
      },
      {
        heading: "Nước chấm và ăn kèm",
        body: "Muối ớt chanh tạo vị chua, cay, mặn bên cạnh phần bò ướp ngọt. Rau tươi ăn kèm giúp bữa nướng cân bằng hơn.",
      },
      {
        heading: "Tên gọi Lạc Cảnh",
        body: "Lạc Cảnh là tên nhà hàng gắn với món bò nướng nổi tiếng ở Nha Trang, không phải tên một khu phố. Những nơi khác cũng phục vụ món bò theo kiểu này.",
      },
    ],
    facts: [
      { label: "Hợp với", value: "Bữa ăn cùng nhóm bạn hoặc gia đình" },
      { label: "Đặc trưng", value: "Bò ướp gia vị, nướng than tại bàn" },
      { label: "Gợi ý", value: "Hỏi khẩu phần và nhờ quán hướng dẫn nướng" },
    ],
    sources: [{ label: "Vietnam Tourism – Bò Lạc Cảnh", href: "https://vietnam.travel/things-to-do/must-eat-specialty-dishes-in-nha-trang/" }],
  },
} satisfies Record<string, DishDetails>;
