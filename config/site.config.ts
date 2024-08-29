const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : "http://localhost:3002";

export const siteConfig = {
  keywords: ["Posts"],
  siteUrl: baseUrl,
  creator: { name: "Seun Code", url: "https://github.com/Oluwaseun-Oyewole" },
  links: { github: "https://github.com/Oluwaseun-Oyewole" },
};
