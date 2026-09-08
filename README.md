# Nhật ký của mẹ — Landing page

Trang giới thiệu ứng dụng **Nhật ký của mẹ** (MESHLABS), dùng làm
**Support URL** và **Marketing / Website URL** khi nộp App Store / Google Play.

## Chạy

```bash
npm install
npm run dev        # http://localhost:3000 → tự chuyển sang /vi
npm run build      # /vi và /en prerender tĩnh
npm run typecheck
```

## Đường dẫn

| URL | Nội dung |
|---|---|
| `/` | redirect sang `/vi` |
| `/vi` | bản tiếng Việt |
| `/en` | bản tiếng Anh — gửi link này cho reviewer nước ngoài |

Phần hỗ trợ nằm ở anchor `#ho-tro` trên cả hai bản.

## Sửa nội dung ở đâu

| Cần đổi | File |
|---|---|
| Email, hotline, địa chỉ, link Privacy Policy | `lib/site.ts` |
| Chữ tiếng Việt | `lib/i18n/vi.ts` |
| Chữ tiếng Anh | `lib/i18n/en.ts` |
| Màu, bo góc | `app/globals.css` (khối `@theme`) |
| Logo | thay `public/logo.png` và `app/icon.png` |
| Ảnh giao diện app | `components/PhoneMockup.tsx` |

Bản `en.ts` bị TypeScript ràng buộc phải có đúng bộ khoá của `vi.ts` — thêm dòng
mới vào `vi.ts` mà quên bản EN thì build sẽ báo lỗi ngay.

## Logo

`public/logo.png` và `app/icon.png` cùng là bản sao của
`mamaoi-v2/assets/icons/launcher/logo_radius.png`. File thứ hai được Next.js
dùng làm favicon tự động; file thứ nhất dùng cho header, footer và ảnh
Open Graph. Đổi logo thì thay cả hai.

## Deploy

Đang chạy tại **https://mamatracker.vercel.app** (Vercel, project `mamatracker`).

`SITE_URL` trong `app/[lang]/layout.tsx` phải khớp đúng domain production,
nếu không canonical và hreflang sẽ trỏ vào URL 404.

```bash
vercel --prod      # deploy production từ máy local
```

Khi gắn domain riêng, đổi `SITE_URL` trong `app/[lang]/layout.tsx` — biến này
dùng cho canonical, hreflang và Open Graph.

## Điền vào form store

| Ô | Giá trị |
|---|---|
| Support URL | `https://mamatracker.vercel.app/vi#ho-tro` |
| Marketing / Website URL | `https://mamatracker.vercel.app/vi` |

Chi tiết thiết kế: [`docs/superpowers/specs/2026-09-08-mamaoi-landing-design.md`](docs/superpowers/specs/2026-09-08-mamaoi-landing-design.md)
