/**
 * Hằng số của sản phẩm — lấy nguyên từ file
 * "MamaOi v2 - Store Publishing Requirement.xlsx" và Privacy Policy trên Notion.
 * Sửa ở đây là đủ, không cần đụng vào component.
 */
export const site = {
  appName: "Nhật ký của mẹ",
  bundleId: "com.mama.tracker",
  publisher: "MESHLABS",
  copyrightYear: 2026,

  supportEmail: "devops.allcode@gmail.com",
  supportPhone: "+84328814589",
  supportPhoneDisplay: "+84 328 814 589",

  addressVi: "94 Hồ Nghinh, Tầng 5, Phường An Hải, Đà Nẵng, Việt Nam",
  addressEn: "94 Ho Nghinh, Floor 5, An Hai Ward, Da Nang, Viet Nam",

  privacyPolicyUrl:
    "https://spiral-team-900.notion.site/Nh-t-k-C-a-M-Privacy-Policy-3d55c650425f804fabb9dd5588930043",

} as const;

export const locales = ["vi", "en"] as const;
export type Locale = (typeof locales)[number];

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

/** mailto có sẵn subject để hộp thư hỗ trợ dễ lọc. */
export function supportMailto(subject: string): string {
  return `mailto:${site.supportEmail}?subject=${encodeURIComponent(subject)}`;
}
