export type MonthClimate = {
  month: number;
  max: number;
  min: number;
  mean: number;
  rain: number;
  rainyDays: number;
  humidity: number;
  sunshine: number;
};

export const climate: MonthClimate[] = [
  { month: 1, max: 27.2, min: 21.4, mean: 24.0, rain: 43.0, rainyDays: 8.6, humidity: 78.1, sunshine: 179.6 },
  { month: 2, max: 28.0, min: 21.8, mean: 24.6, rain: 16.1, rainyDays: 4.3, humidity: 78.7, sunshine: 208.7 },
  { month: 3, max: 29.4, min: 23.0, mean: 25.8, rain: 30.3, rainyDays: 4.1, humidity: 79.6, sunshine: 256.5 },
  { month: 4, max: 31.1, min: 24.6, mean: 27.4, rain: 41.8, rainyDays: 5.0, humidity: 80.4, sunshine: 258.5 },
  { month: 5, max: 32.3, min: 25.5, mean: 28.6, rain: 51.5, rainyDays: 9.2, humidity: 78.8, sunshine: 259.1 },
  { month: 6, max: 32.7, min: 25.7, mean: 28.8, rain: 49.8, rainyDays: 8.3, humidity: 77.2, sunshine: 235.2 },
  { month: 7, max: 32.5, min: 25.6, mean: 28.5, rain: 41.7, rainyDays: 8.4, humidity: 76.9, sunshine: 243.5 },
  { month: 8, max: 32.6, min: 25.5, mean: 28.5, rain: 81.7, rainyDays: 9.8, humidity: 77.2, sunshine: 236.0 },
  { month: 9, max: 31.7, min: 24.9, mean: 27.8, rain: 165.8, rainyDays: 14.4, humidity: 80.0, sunshine: 203.8 },
  { month: 10, max: 30.0, min: 24.2, mean: 26.7, rain: 312.3, rainyDays: 17.6, humidity: 82.6, sunshine: 183.1 },
  { month: 11, max: 28.6, min: 23.5, mean: 25.8, rain: 381.6, rainyDays: 18.0, humidity: 81.8, sunshine: 140.4 },
  { month: 12, max: 27.3, min: 22.3, mean: 24.7, rain: 191.4, rainyDays: 14.4, humidity: 79.7, sunshine: 136.5 },
];

export const annual = { max: 30.3, mean: 26.8, min: 24.0, rain: 1399.2, rainyDays: 122.2, humidity: 79.3, sunshine: 2538.8 };

export type Outlook = { label: string; tone: "good" | "ok" | "wet" };

export function outlook(month: MonthClimate): Outlook {
  if (month.rain < 60 && month.sunshine >= 230) return { label: "Khô ráo, nhiều nắng", tone: "good" };
  if (month.rain < 100) return { label: "Ít mưa", tone: "good" };
  if (month.rain < 200) return { label: "Bắt đầu mưa nhiều", tone: "ok" };
  return { label: "Mùa mưa cao điểm", tone: "wet" };
}

export function monthAdvice(month: MonthClimate): string[] {
  const { label } = outlook(month);
  if (label === "Mùa mưa cao điểm")
    return [
      "Mưa kéo dài và nắng ít, biển có thể động: ưu tiên bảo tàng, nhà thờ, chợ, spa, suối khoáng và ẩm thực.",
      "Tour đảo và lặn biển dễ bị hoãn; hãy linh hoạt ngày đi và hỏi chính sách hoàn, đổi tour.",
      "Mang áo mưa nhẹ, dép chống trơn và túi chống nước cho điện thoại.",
    ];
  if (label === "Bắt đầu mưa nhiều")
    return [
      "Vẫn có nhiều ngày đẹp nhưng mưa rải rác khá thường xuyên; xếp hoạt động ngoài trời vào buổi sáng.",
      "Tour đảo nên đặt linh hoạt, kèm phương án dự phòng trong thành phố.",
      "Mang theo áo mưa gấp gọn.",
    ];
  return [
    "Thời tiết thuận lợi cho tắm biển, tour đảo và lặn ngắm san hô.",
    "Nắng mạnh vào giữa trưa: dùng kem chống nắng, mũ và tránh hoạt động ngoài trời từ khoảng 11:00 đến 14:00.",
    "Mang áo mỏng cho buổi tối và khi đi tàu ngoài vịnh.",
  ];
}

export const phases = [
  { months: "Tháng 1 – 2", title: "Mát và ít mưa", text: "Nhiệt độ trung bình khoảng 24 – 25 °C, đêm mát hơn. Tháng 2 là tháng khô nhất trong năm (khoảng 16 mm)." },
  { months: "Tháng 3 – 8", title: "Nắng ráo, nóng dần", text: "Nhiều nắng nhất (từ khoảng 235 đến 259 giờ mỗi tháng) và lượng mưa mỗi tháng thường dưới 100 mm; tháng 8 bắt đầu mưa nhiều hơn." },
  { months: "Tháng 9 – 12", title: "Mùa mưa", text: "Mưa tăng mạnh, cao nhất vào tháng 10 – 11 (hơn 300 mm mỗi tháng); số ngày mưa 14 – 18 ngày mỗi tháng." },
];

export const climateSource = {
  label: "Wikipedia – Nha Trang (bảng khí hậu, nguồn Viện Khoa học Công nghệ Xây dựng)",
  href: "https://en.wikipedia.org/wiki/Nha_Trang_(city)",
};
