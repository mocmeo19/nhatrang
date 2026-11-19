import type { Interest } from "./activities";

export type Companion = "cap-doi" | "gia-dinh" | "ban-be" | "nguoi-lon-tuoi" | "mot-minh";
export type Pace = "thong-tha" | "vua" | "day-dac";

export const dayOptions = [2, 3, 4, 5] as const;

export const companions: { id: Companion; label: string; hint: string }[] = [
  { id: "cap-doi", label: "Cặp đôi", hint: "Hoàng hôn, spa, bữa tối lãng mạn" },
  { id: "gia-dinh", label: "Gia đình có trẻ nhỏ", hint: "Điểm an toàn, không quá xa" },
  { id: "ban-be", label: "Nhóm bạn", hint: "Tour, đêm và ăn uống" },
  { id: "nguoi-lon-tuoi", label: "Cùng ông bà, cha mẹ", hint: "Ít leo trèo, nhịp nhẹ" },
  { id: "mot-minh", label: "Đi một mình", hint: "Linh hoạt, dễ ghép tour" },
];

export const interests: { id: Interest; label: string }[] = [
  { id: "bien-dao", label: "Biển và đảo" },
  { id: "van-hoa", label: "Văn hóa, lịch sử" },
  { id: "am-thuc", label: "Ăn uống" },
  { id: "nghi-duong", label: "Nghỉ dưỡng, tắm bùn" },
  { id: "vui-choi", label: "Công viên, vui chơi" },
  { id: "ve-dem", label: "Phố đêm" },
];

export const paces: { id: Pace; label: string; hint: string }[] = [
  { id: "thong-tha", label: "Thong thả", hint: "Sáng và tối có việc, buổi chiều để nghỉ" },
  { id: "vua", label: "Vừa phải", hint: "Mỗi buổi một điểm chính" },
  { id: "day-dac", label: "Dày đặc", hint: "Ghép thêm điểm ngắn gần nhau" },
];

export const monthLabels = ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"];
