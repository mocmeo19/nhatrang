import { aiImages, photos, type AiImage, type Photo } from "@/shared/data/images";
import { dishDetails } from "./dish-details";

export type DishImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  credit: string;
};

const fromCommons = (photo: Photo): DishImage => ({
  src: photo.src,
  alt: photo.alt,
  width: photo.width,
  height: photo.height,
  credit: `Ảnh: Wikimedia Commons (${photo.license})`,
});

const fromAi = (image: AiImage): DishImage => ({ ...image, credit: "Ảnh minh họa tạo bằng AI" });

export type DishGuide = {
  id: string;
  name: string;
  description: string;
  howToEat: string;
  image: DishImage;
  imageNote?: string;
  details?: { heading: string; body: string }[];
  facts?: { label: string; value: string }[];
  sources?: { label: string; href: string }[];
};

export const dishGuides: DishGuide[] = [
  {
    id: "nem-nuong",
    name: "Nem nướng Ninh Hòa",
    description: "Thịt heo xay nhuyễn, ướp kỹ rồi nướng trên than hồng, dậy mùi thơm đặc trưng.",
    howToEat: "Cuốn cùng bánh tráng, rau sống và đồ chua, chấm nước lèo sền sệt.",
    image: fromCommons(photos.nemNuong),
    ...dishDetails["nem-nuong"],
  },
  {
    id: "banh-can",
    name: "Bánh căn",
    description:
      "Bánh làm từ bột gạo, đổ vào khuôn đất nung nhỏ rồi nướng, là món ăn sáng và ăn vặt quen thuộc của Nha Trang và các tỉnh Nam Trung Bộ.",
    howToEat: "Ăn nóng ngay khi vừa nướng, chấm mắm nêm hoặc nước mắm chua ngọt, kèm xoài bào sợi và rau sống.",
    image: fromCommons(photos.banhCan),
    imageNote: "Bánh căn chụp ở Phan Rang (Ninh Thuận), vùng lân cận có món tương tự.",
    details: [
      {
        heading: "Làm bánh thế nào?",
        body: "Bột gạo được đổ vào khuôn đất nung tròn nhỏ đặt trên bếp than hồng. Khuôn chỉ phết một lớp dầu rất mỏng nên bánh có vỏ thơm, mềm vừa phải và không ngấy. Hình dạng bánh gần giống bánh khọt.",
      },
      {
        heading: "Nhân bánh",
        body: "Tùy quán và khẩu vị: tôm, mực, thịt bò hoặc trứng (gà, cút) để bánh béo ngậy hơn.",
      },
      {
        heading: "Nước chấm và ăn kèm",
        body: "Thường có hai loại nước chấm: mắm nêm đậm đà và nước mắm chua ngọt; phần đầy đủ còn có nước cá hoặc nước chấm thịt, xíu mại. Bánh ăn cùng xoài bào sợi, rau sống, mỡ hành; nhiều quán phục vụ thêm xíu mại hoặc cá kho.",
      },
      {
        heading: "Nguồn gốc",
        body: "Các tài liệu tham khảo không ghi năm ra đời hay người khởi xướng; chỉ cho biết đây là món phổ biến ở các tỉnh Nam Trung Bộ.",
      },
    ],
    facts: [
      { label: "Nên ăn", value: "Nóng, ngay khi bánh vừa ra khuôn" },
      { label: "Thử ở đâu", value: "Nhiều quán ở Nha Trang; Làng nghề Nha Trang Xưa cũng phục vụ bánh căn" },
      { label: "Gợi ý", value: "Hỏi quán về nhân bánh và số bánh mỗi phần trước khi gọi" },
    ],
  },
  {
    id: "bun-cha-ca",
    name: "Bún chả cá",
    description: "Bún ăn cùng chả cá biển hấp hoặc chiên, có thể thêm cá dầm, chan nước dùng ngọt thanh.",
    howToEat: "Ăn nóng, thêm rau sống và vắt chanh theo khẩu vị.",
    image: fromCommons(photos.bunChaCa),
    ...dishDetails["bun-cha-ca"],
  },
  {
    id: "bun-sua",
    name: "Bún sứa",
    description:
      "Bún với sứa giòn, chả cá và nước dùng thường nấu từ cá biển, tạo vị ngọt thanh đặc trưng.",
    howToEat: "Ăn khi tô còn nóng, thêm rau và chanh, ớt theo khẩu vị.",
    image: fromAi(aiImages.bunSua),
    ...dishDetails["bun-sua"],
  },
  {
    id: "banh-canh",
    name: "Bánh canh chả cá",
    description: "Món ăn sáng quen thuộc của người Nha Trang, sợi bánh canh ăn cùng chả cá biển.",
    howToEat: "Thưởng thức nóng, thêm tiêu hoặc nước mắm ớt theo khẩu vị.",
    image: fromAi(aiImages.banhCanh),
    ...dishDetails["banh-canh"],
  },
  {
    id: "banh-xeo",
    name: "Bánh xèo",
    description: "Bánh giòn vàng đổ trên chảo nóng; ở Nha Trang thường gặp nhân mực. Bánh xèo cũng nằm trong lớp học nấu ăn tại Làng nghề Nha Trang Xưa.",
    howToEat: "Ăn nóng, cuốn cùng rau sống và chấm nước mắm pha.",
    image: fromCommons(photos.banhXeo),
    ...dishDetails["banh-xeo"],
  },
  {
    id: "bo-nuong",
    name: "Bò nướng",
    description: "Bò ướp gia vị nướng trên than, nổi tiếng ở Nha Trang với kiểu bò Lạc Cảnh phục vụ tại bàn.",
    howToEat: "Đi theo nhóm để gọi nhiều món và thử nhiều hương vị.",
    image: fromCommons(photos.boNuong),
    imageNote: "Ảnh minh họa món bò nướng trên đá, không phải của một quán cụ thể.",
    ...dishDetails["bo-nuong"],
  },
];

export const giftIdeas = ["Nem chua", "Chả cá", "Mực rim me", "Hải sản khô", "Yến sào Khánh Hòa"];

export const seafoodTips = [
  "Hỏi giá và cách tính tiền (theo cân hay theo phần) trước khi gọi món.",
  "Chọn quán có niêm yết giá, thấy rõ hải sản còn sống hoặc tươi.",
  "Nên cân hải sản trước mặt bạn và xác nhận trọng lượng trước khi chế biến.",
  "Kiểm tra hóa đơn trước khi thanh toán.",
];
