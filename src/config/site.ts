export const site = {
  name: "Nha Trang",
  tagline: "Viên ngọc xanh của biển Đông",
  description:
    "Khám phá Nha Trang: bãi biển trong xanh, vịnh đảo kỳ vĩ, tháp Chăm nghìn năm tuổi và ẩm thực hải sản tươi ngon.",
} as const;

type PageLink = { href: string; label: string; description: string };

export type NavGroup = PageLink & { id: string; links: readonly PageLink[] };

export const navGroups: readonly NavGroup[] = [
  {
    id: "van-hoa",
    href: "/van-hoa",
    label: "Văn hóa",
    description: "Lịch sử, con người, kinh tế - xã hội và khí hậu của vùng đất ven vịnh.",
    links: [
      { href: "/van-hoa/lich-su", label: "Lịch sử", description: "Từ vương quốc Kauthara đến thành phố biển hôm nay." },
      { href: "/van-hoa/con-nguoi", label: "Con người", description: "Những cái tên gắn liền với vùng đất ven vịnh." },
      { href: "/van-hoa/kinh-te-xa-hoi", label: "Kinh tế - Xã hội", description: "Kinh tế Nha Trang, Khánh Hòa và định hướng phát triển." },
      { href: "/van-hoa/thoi-tiet", label: "Khí hậu & thời tiết", description: "Nhiệt độ, lượng mưa và giờ nắng theo từng tháng." },
    ],
  },
  {
    id: "kham-pha",
    href: "/kham-pha",
    label: "Khám phá",
    description: "Danh thắng, trải nghiệm trên biển, nơi vui chơi và chỗ nghỉ.",
    links: [
      { href: "/kham-pha/diem-den", label: "Điểm đến", description: "Tháp Bà, Hòn Chồng, Hòn Mun và nhiều nơi nữa." },
      { href: "/kham-pha/trai-nghiem", label: "Trải nghiệm", description: "Lặn biển, tour đảo, tắm bùn, cáp treo vượt vịnh." },
      { href: "/kham-pha/vui-choi", label: "Vui chơi", description: "VinWonders, Nha Trang Xưa, rooftop bar và chợ đêm." },
      { href: "/kham-pha/luu-tru", label: "Khách sạn & Resort", description: "Chọn khu lưu trú và các khách sạn, resort tiêu biểu." },
    ],
  },
  {
    id: "am-thuc",
    href: "/am-thuc",
    label: "Ẩm thực",
    description: "Hải sản tươi, món đặc sản miền Trung và những món quà mang về từ phố biển.",
    links: [
      { href: "/am-thuc/mon-ngon", label: "Món ngon", description: "Hải sản tươi và những món đặc sản miền Trung." },
      { href: "/am-thuc/mua-qua", label: "Mua quà", description: "Đặc sản mang về làm quà và các cửa hàng gợi ý kèm địa chỉ." },
    ],
  },
];

export const libraryLink: PageLink = {
  href: "/thu-vien",
  label: "Thư viện",
  description: "Nha Trang qua những khung hình đẹp nhất.",
};

export const planLink: PageLink = {
  href: "/lap-ke-hoach",
  label: "Lên kế hoạch",
  description: "Thời điểm đẹp nhất và lịch trình gợi ý.",
};

export const legalLinks: readonly PageLink[] = [
  { href: "/ve-chung-toi", label: "Về chúng tôi", description: "Mục đích và cách biên soạn nội dung của trang." },
  { href: "/dieu-khoan-su-dung", label: "Điều khoản sử dụng", description: "Quy định khi sử dụng nội dung và hình ảnh trên trang." },
] as const;

export type NavLink = PageLink & { group: string };

export const navLinks: readonly NavLink[] = [
  ...navGroups.flatMap((group) => group.links.map((link) => ({ ...link, group: group.label }))),
  { ...libraryLink, group: "Hình ảnh" },
  { ...planLink, group: "Chuẩn bị" },
];

export const findGroup = (pathname: string) =>
  navGroups.find((group) => pathname === group.href || pathname.startsWith(`${group.href}/`));
