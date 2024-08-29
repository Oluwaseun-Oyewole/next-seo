import { ImageResponse } from "next/og";

export type Props = {
  title?: string;
};
export const runtime = "edge";

export const alt = "Learn seo";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function OpenGraphImage(
  props?: Props
): Promise<ImageResponse> {
  const { title } = {
    ...{
      title: process.env.SITE_NAME,
    },
    ...props,
  };

  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {title}
      </div>
    ),
    // ImageResponse options
    {
      ...size,
    }
  );
}
