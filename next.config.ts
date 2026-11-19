import type { NextConfig } from "next";

export const legacyRoutes = [
  ["/lich-su", "/van-hoa/lich-su"],
  ["/con-nguoi", "/van-hoa/con-nguoi"],
  ["/diem-den", "/kham-pha/diem-den"],
  ["/diem-den/:slug", "/kham-pha/diem-den/:slug"],
  ["/trai-nghiem", "/kham-pha/trai-nghiem"],
  ["/van-hoa/am-thuc", "/am-thuc/mon-ngon"],
  ["/van-hoa/mua-qua", "/am-thuc/mua-qua"],
  ["/vui-choi", "/kham-pha/vui-choi"],
  ["/kham-pha/thu-vien", "/thu-vien"],
] as const;

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return legacyRoutes.map(([from, to]) => ({ source: from, destination: to, permanent: true }));
  },
  images: { formats: ["image/avif", "image/webp"] },
};

export default nextConfig;
