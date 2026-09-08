import Image from "next/image";
import logo from "@/public/logo.png";
import { site } from "@/lib/site";

/**
 * Icon chính thức của ứng dụng, lấy từ
 * mamaoi-v2/assets/icons/launcher/logo_radius.png.
 * File đã bo góc sẵn nên không thêm border-radius bằng CSS.
 */
export function BrandMark({
  size = 36,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <Image
      src={logo}
      alt={site.appName}
      width={size}
      height={size}
      priority
      className={`shrink-0 ${className}`}
    />
  );
}
