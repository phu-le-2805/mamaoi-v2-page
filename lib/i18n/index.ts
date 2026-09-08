import type { Locale } from "@/lib/site";
import type { Dictionary } from "./types";
import { en } from "./en";
import { vi } from "./vi";

const dictionaries = { vi, en } satisfies Record<Locale, Dictionary>;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}

export function otherLocale(locale: Locale): Locale {
  return locale === "vi" ? "en" : "vi";
}

export type { Dictionary };
