import { Limelight, Zen_Kaku_Gothic_New, Inconsolata } from "next/font/google";

// export const zenKakuGothicNew = Zen_Kaku_Gothic_New({
//   variable: "--font-zen-kaku-gothic",
//   subsets: ["latin"],
//   weight: "400",
// });

export const zenKakuGothicNew = Zen_Kaku_Gothic_New({
  variable: "--font-zen-kaku-gothic-bold",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const limelight = Limelight({
  variable: "--font-limelight",
  weight: "400",
});

export const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  weight: "400",
});
