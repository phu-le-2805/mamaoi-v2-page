import type { vi } from "./vi";

/**
 * Nới literal type của `vi` (được khai báo `as const`) thành kiểu chung.
 * Nhờ vậy `en` phải có ĐÚNG bộ khoá của `vi` — thiếu một dòng là TypeScript
 * báo lỗi ngay lúc build, không cần viết test riêng cho việc này.
 */
type Widen<T> = T extends string
  ? string
  : T extends number
    ? number
    : T extends readonly (infer U)[]
      ? readonly Widen<U>[]
      : { readonly [K in keyof T]: Widen<T[K]> };

export type Dictionary = Widen<typeof vi>;
