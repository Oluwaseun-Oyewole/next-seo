import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About page",
  robots: {
    index: false,
    follow: true,
  },
};

const AboutPage = () => {
  return <div>AboutPage</div>;
};

export default AboutPage;
