# Landing page "Nhật ký của mẹ" — Design

Ngày: 2026-09-08 · Trạng thái: đã triển khai

## Mục đích

Một trang giới thiệu ứng dụng, dùng làm **Support URL** và **Marketing / Website URL**
khi nộp lên App Store và Google Play. Hai ô này trong
`MamaOi v2 - Store Publishing Requirement.xlsx` đang ở trạng thái *Waiting confirm*.

## Nguồn dữ liệu

| Nguồn | Dùng cho |
|---|---|
| `MamaOi v2 - Store Publishing Requirement.xlsx` | Tên app, subtitle, mô tả ngắn/đầy đủ, promotional text, publisher, email, hotline, khai báo compliance |
| [Privacy Policy trên Notion](https://spiral-team-900.notion.site/Nh-t-k-C-a-M-Privacy-Policy-3d55c650425f804fabb9dd5588930043) | Địa chỉ MESHLABS, nội dung mục Riêng tư và FAQ |
| `OPTION 3.pdf` | Bảng màu, bo góc, bố cục màn "Hôm nay" dựng lại trong `PhoneMockup` |

## Quyết định

| Vấn đề | Chọn | Lý do |
|---|---|---|
| Contact | mailto + thông tin liên hệ | Không backend, không secret, không điểm hỏng. Apple chỉ yêu cầu trang hỗ trợ có cách liên hệ. |
| Ngôn ngữ | Song ngữ VI/EN | Store bán ở 176 quốc gia; reviewer đọc được bản EN. |
| i18n | 2 route tĩnh `/vi` và `/en` | Nội dung nằm thật trong HTML cả hai thứ tiếng → SEO tốt, không phụ thuộc JS, gửi thẳng link `/en` cho reviewer. |
| Ảnh app | Dựng lại bằng HTML/CSS | Chưa có screenshot thật. Sắc nét mọi mật độ điểm ảnh, đổi ngôn ngữ theo toggle. |
| Deploy | Vercel | Có domain `.vercel.app` dùng ngay làm Support URL. |
| Link store | Không đưa vào | App chưa xuất bản nên chưa có URL; badge trỏ vào chỗ trống chỉ gây khó chịu. |
| Dark mode | Không | Design gốc là pastel sáng; `color-scheme: light` chặn trình duyệt tự đảo màu. |

## Kiến trúc

```
/            → redirect 307 → /vi     (next.config.ts)
/vi, /en     → prerender tĩnh          (generateStaticParams)

app/[lang]/layout.tsx   root layout: <html lang>, font, generateMetadata + hreflang
app/[lang]/page.tsx     ghép các section
components/             Header · Hero · PhoneMockup · StoreBadges · Features
                        About · Privacy · Support · Faq · Footer · BrandMark
lib/site.ts             hằng số lấy từ Excel
lib/i18n/{vi,en,types,index}.ts
```

**Ràng buộc parity giữa hai bản dịch bằng type.** `lib/i18n/types.ts` nới literal
type của `vi` thành `Dictionary`; `en` khai báo `const en: Dictionary`. Thiếu một
khoá nào là `tsc` báo lỗi lúc build — không cần test riêng cho việc này.

## Điểm cần biết khi bảo trì

- **Không có link store**: app chưa lên store nên trang không hiển thị badge
  App Store / Google Play, chỉ có dòng "Sắp có mặt trên App Store & Google Play"
  ở hero. Muốn thêm link sau thì dựng lại badge trong `components/Hero.tsx`.
- **Logo**: `public/logo.png` và `app/icon.png` là bản sao của
  `mamaoi-v2/assets/icons/launcher/logo_radius.png`. File đã bo góc sẵn nên
  `BrandMark` không thêm `border-radius`. Đổi logo thì thay cả hai file.
- **Screenshot thật**: thay `components/PhoneMockup.tsx`, không đụng chỗ khác.
- **Domain**: `SITE_URL` trong `app/[lang]/layout.tsx` cần đổi khi gắn domain riêng
  (đang dùng cho canonical, hreflang và Open Graph).
- **Support URL khai báo với store**: dùng `https://<domain>/vi` (hoặc `/vi#ho-tro`
  để nhảy thẳng xuống phần hỗ trợ).

## Kiểm chứng đã chạy

- `tsc --noEmit` sạch
- `next build`: `/vi` và `/en` đều là `● (SSG) prerendered as static HTML`
- Chụp thật qua Chrome DevTools Protocol ở 1440px và 390px, cả hai ngôn ngữ:
  `scrollWidth === clientWidth` ở mọi trường hợp → không tràn ngang
