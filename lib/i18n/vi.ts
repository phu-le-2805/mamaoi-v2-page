import { site } from "@/lib/site";

export const vi = {
  htmlLang: "vi",

  meta: {
    title: `${site.appName} — Ghi lại hành trình làm mẹ`,
    description:
      "Lưu lại những khoảnh khắc, hoạt động và dấu mốc đáng nhớ trong hành trình cùng con.",
  },

  nav: {
    features: "Tính năng",
    privacy: "Riêng tư",
    support: "Hỗ trợ",
    otherLocaleLabel: "EN",
    otherLocaleTitle: "Switch to English",
  },

  hero: {
    badge: "Sắp có mặt trên App Store & Google Play",
    title: site.appName,
    subtitle: "Ghi lại hành trình làm mẹ",
    description:
      "Lưu lại những khoảnh khắc, hoạt động và dấu mốc đáng nhớ trong hành trình cùng con.",
    primaryCta: "Liên hệ hỗ trợ",
    secondaryCta: "Xem tính năng",
  },

  mockup: {
    time: "9:41",
    greeting: "Chào buổi sáng ☀",
    momName: "Mẹ Vân",
    babyName: "Bé Gạo",
    babyAge: "10 tháng 20 ngày",
    diaryTitle: "Nhật ký hôm nay",
    detail: "Chi tiết",
    timeline: [
      { time: "08:30", title: "Bú bình", note: "Sữa công thức · 150ml", icon: "🍼" },
      { time: "09:15", title: "Ngủ", note: "1h30p", icon: "😴" },
    ],
    cards: [
      { title: "Ăn", note: "43ph trước · 150ml", icon: "🍼" },
      { title: "Hút sữa", note: "2h trước · 500ml", icon: "🥛" },
      { title: "Ngủ", note: "1h15p trước · 2h35m", icon: "😴" },
      { title: "Bỉm", note: "3h trước · Ướt", icon: "🧺" },
      { title: "Sức khỏe", note: "4h trước · 9,2kg/73cm", icon: "💗" },
      { title: "Hoạt động", note: "2h trước · Đi dạo", icon: "🧸" },
    ],
    tabs: ["Hôm nay", "Theo dõi", "Phát triển", "Hỗ trợ", "Tài khoản"],
  },

  features: {
    title: "Mọi điều về con, gọn trong một nơi",
    lead:
      "Ghi nhanh trong vài giây, xem lại cả hành trình. Không biểu mẫu rườm rà, không bắt mẹ nhớ nhiều.",
    items: [
      {
        icon: "🍼",
        title: "Ăn & bú bình",
        desc: "Cữ bú, lượng sữa, sữa mẹ hay sữa công thức — ghi lại chỉ với một chạm.",
      },
      {
        icon: "🥛",
        title: "Hút sữa",
        desc: "Theo dõi thời điểm và lượng sữa mỗi lần hút để chủ động lịch của mẹ.",
      },
      {
        icon: "😴",
        title: "Giấc ngủ",
        desc: "Bắt đầu, kết thúc, tổng thời gian ngủ trong ngày — thấy ngay nhịp sinh hoạt của con.",
      },
      {
        icon: "🧺",
        title: "Bỉm",
        desc: "Ghi lần thay bỉm cùng tình trạng, để nhận ra sớm những thay đổi bất thường.",
      },
      {
        icon: "💗",
        title: "Sức khỏe",
        desc: "Cân nặng, chiều cao, các chỉ số theo thời gian, hiện lên thành biểu đồ dễ nhìn.",
      },
      {
        icon: "🧸",
        title: "Hoạt động",
        desc: "Đi dạo, tắm nắng, chơi cùng con — những điều nhỏ làm nên một ngày của bé.",
      },
    ],
    wide: [
      {
        icon: "📖",
        title: "Nhật ký hằng ngày",
        desc:
          "Viết vài dòng, đính kèm tấm ảnh. Mỗi ngày là một trang, để sau này mẹ có cả một cuốn sách về con.",
      },
      {
        icon: "🌱",
        title: "Theo dõi phát triển",
        desc:
          "Các tuần khủng hoảng, dấu mốc đầu tiên và những thay đổi theo từng giai đoạn, gợi ý đúng lúc con cần.",
      },
    ],
  },

  about: {
    title: "Một không gian riêng của mẹ",
    paragraphs: [
      "Nhật ký của mẹ là không gian riêng để mẹ ghi lại hành trình cùng con theo cách đơn giản và tự nhiên nhất.",
      "Từ những khoảnh khắc thường ngày đến những dấu mốc đầu tiên, mẹ có thể lưu lại những điều quan trọng, theo dõi hành trình của con và nhìn lại từng ngày đã cùng nhau lớn lên.",
    ],
    quote:
      "Mỗi ngày cùng con là một câu chuyện. Ghi lại những điều nhỏ bé hôm nay để mai này trở thành những kỷ niệm thật đẹp.",
  },

  privacy: {
    title: "Nhật ký của con là chuyện riêng của gia đình",
    lead:
      "Chúng tôi xây dựng ứng dụng này với nguyên tắc đơn giản: những gì mẹ ghi lại là của mẹ.",
    points: [
      {
        title: "Không quảng cáo",
        desc: "Ứng dụng không hiển thị quảng cáo và không dùng nội dung nhật ký cho mục đích quảng cáo.",
      },
      {
        title: "Không bán dữ liệu",
        desc: "Chúng tôi không mua bán, không trao đổi thông tin cá nhân của mẹ và bé với bên thứ ba.",
      },
      {
        title: "Mẹ toàn quyền",
        desc: "Mọi nội dung mẹ ghi đều có thể sửa hoặc xoá bất cứ lúc nào, ngay trong ứng dụng.",
      },
    ],
    cta: "Đọc Chính sách bảo mật",
  },

  support: {
    title: "Cần hỗ trợ? Nhắn cho chúng tôi",
    lead:
      "Một câu hỏi, một lỗi gặp phải, hay một góp ý để ứng dụng tốt hơn — chúng tôi đều đọc hết.",
    mailSubject: `Hỗ trợ ${site.appName}`,
    mailButton: "Gửi email hỗ trợ",
    emailLabel: "Email hỗ trợ",
    phoneLabel: "Điện thoại",
    addressLabel: "Địa chỉ",
    publisherLabel: "Đơn vị phát hành",
    hoursLabel: "Thời gian phản hồi",
    hours: "Trong vòng 1–2 ngày làm việc",
  },

  faq: {
    title: "Câu hỏi thường gặp",
    items: [
      {
        q: "Ứng dụng có tính phí không?",
        a: `${site.appName} là ứng dụng miễn phí. Không có quảng cáo và không có khoản mua nào bên trong ứng dụng.`,
      },
      {
        q: "Dữ liệu của tôi được dùng vào việc gì?",
        a: "Nhật ký, ảnh và các mốc phát triển mẹ ghi lại chỉ được dùng để vận hành đúng những tính năng mẹ đang sử dụng: lưu trữ, sắp xếp, hiển thị và chia sẻ khi mẹ chọn. Chi tiết đầy đủ nằm trong Chính sách bảo mật.",
      },
      {
        q: "Tôi chia sẻ nhật ký với người thân thế nào?",
        a: "Mẹ chủ động mời người thân hoặc người chăm sóc vào xem. Chỉ những nội dung mẹ chọn chia sẻ mới hiển thị với họ.",
      },
      {
        q: "Làm sao xoá dữ liệu hoặc tài khoản?",
        a: `Mọi nội dung đều sửa và xoá được ngay trong ứng dụng. Nếu muốn xoá toàn bộ tài khoản, mẹ gửi email tới ${site.supportEmail}, chúng tôi xử lý trong 1–2 ngày làm việc.`,
      },
    ],
  },

  footer: {
    tagline: "Ghi lại hành trình làm mẹ",
    privacy: "Chính sách bảo mật",
    support: "Hỗ trợ",
    rights: `© ${site.copyrightYear} ${site.publisher}. Bảo lưu mọi quyền.`,
  },
} as const;
