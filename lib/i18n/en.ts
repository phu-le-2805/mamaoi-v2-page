import { site } from "@/lib/site";
import type { Dictionary } from "./types";

export const en: Dictionary = {
  htmlLang: "en",

  meta: {
    title: `${site.appName} — A gentle diary for your journey as a mum`,
    description:
      "Capture the small moments, daily activities and milestones of your journey together with your child.",
  },

  nav: {
    features: "Features",
    privacy: "Privacy",
    support: "Support",
    otherLocaleLabel: "VI",
    otherLocaleTitle: "Chuyển sang tiếng Việt",
  },

  hero: {
    badge: "Coming soon to the App Store & Google Play",
    title: site.appName,
    subtitle: "A gentle diary for your journey as a mum",
    description:
      "Capture the small moments, daily activities and milestones of your journey together with your child.",
    primaryCta: "Contact support",
    secondaryCta: "See features",
  },

  mockup: {
    time: "9:41",
    greeting: "Good morning ☀",
    momName: "Van",
    babyName: "Gao",
    babyAge: "10 months 20 days",
    diaryTitle: "Today's diary",
    detail: "Details",
    timeline: [
      { time: "08:30", title: "Bottle", note: "Formula · 150ml", icon: "🍼" },
      { time: "09:15", title: "Sleep", note: "1h30m", icon: "😴" },
    ],
    cards: [
      { title: "Feeding", note: "43m ago · 150ml", icon: "🍼" },
      { title: "Pumping", note: "2h ago · 500ml", icon: "🥛" },
      { title: "Sleep", note: "1h15m ago · 2h35m", icon: "😴" },
      { title: "Diaper", note: "3h ago · Wet", icon: "🧺" },
      { title: "Health", note: "4h ago · 9.2kg/73cm", icon: "💗" },
      { title: "Activity", note: "2h ago · A walk", icon: "🧸" },
    ],
    tabs: ["Today", "Tracking", "Growth", "Support", "Account"],
  },

  features: {
    title: "Everything about your child, in one place",
    lead:
      "Log it in seconds, look back on the whole journey. No long forms, nothing for you to memorise.",
    items: [
      {
        icon: "🍼",
        title: "Feeding & bottles",
        desc: "Times, amounts, breast milk or formula — recorded with a single tap.",
      },
      {
        icon: "🥛",
        title: "Pumping",
        desc: "Track when you pumped and how much, so you can plan your own day too.",
      },
      {
        icon: "😴",
        title: "Sleep",
        desc: "Start, end and total sleep across the day — your child's rhythm at a glance.",
      },
      {
        icon: "🧺",
        title: "Diapers",
        desc: "Log each change and what you noticed, so unusual patterns show up early.",
      },
      {
        icon: "💗",
        title: "Health",
        desc: "Weight, height and other measurements over time, drawn as charts that are easy to read.",
      },
      {
        icon: "🧸",
        title: "Activities",
        desc: "Walks, sunshine, playtime — the small things that make up your child's day.",
      },
    ],
    wide: [
      {
        icon: "📖",
        title: "A daily diary",
        desc:
          "Write a few lines, attach a photo. Every day becomes a page, so one day you'll have a whole book about your child.",
      },
      {
        icon: "🌱",
        title: "Growth tracking",
        desc:
          "Leaps, first milestones and the changes of each stage, surfaced right when your child needs them.",
      },
    ],
  },

  about: {
    title: "A quiet space of your own",
    paragraphs: [
      `${site.appName} is a private space to record your journey with your child in the simplest, most natural way.`,
      "From everyday moments to the very first milestones, you can keep what matters, follow your child's journey and look back on every day you have grown together.",
    ],
    quote:
      "Every day with your child is a story. Write down the small things today, and one day they become the most beautiful memories.",
  },

  privacy: {
    title: "Your child's diary stays with your family",
    lead:
      "We built this app on a simple principle: what you write down belongs to you.",
    points: [
      {
        title: "No advertising",
        desc: "The app shows no ads, and your diary content is never used for advertising purposes.",
      },
      {
        title: "No data selling",
        desc: "We do not sell or trade your or your child's personal information with third parties.",
      },
      {
        title: "You stay in control",
        desc: "Anything you record can be edited or deleted at any time, right inside the app.",
      },
    ],
    cta: "Read the Privacy Policy",
  },

  support: {
    title: "Need a hand? Write to us",
    lead:
      "A question, a bug you ran into, or an idea that would make the app better — we read every message.",
    mailSubject: `${site.appName} support`,
    mailButton: "Email support",
    emailLabel: "Support email",
    phoneLabel: "Phone",
    addressLabel: "Address",
    publisherLabel: "Published by",
    hoursLabel: "Response time",
    hours: "Within 1–2 business days",
  },

  faq: {
    title: "Frequently asked questions",
    items: [
      {
        q: "Is the app free?",
        a: `${site.appName} is free to use. There are no ads and no in-app purchases.`,
      },
      {
        q: "What is my data used for?",
        a: "The diary entries, photos and milestones you record are used only to run the features you are using: to store, organise, display and — when you choose to — share them. The full details are in the Privacy Policy.",
      },
      {
        q: "How do I share the diary with family?",
        a: "You invite family members or caregivers yourself. Only the content you choose to share is visible to them.",
      },
      {
        q: "How do I delete my data or my account?",
        a: `Everything can be edited or deleted inside the app. If you want your whole account removed, email ${site.supportEmail} and we will take care of it within 1–2 business days.`,
      },
    ],
  },

  footer: {
    tagline: "A gentle diary for your journey as a mum",
    privacy: "Privacy Policy",
    support: "Support",
    rights: `© ${site.copyrightYear} ${site.publisher}. All rights reserved.`,
  },
};
