import { siteConfig } from "@/config/site.config";
import { MetadataRoute } from "next";
import fetchPosts from "./actions/actions";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routesMap = ["/", "/about", "/privacy"].map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date().toISOString(),
  }));

  const data = await fetchPosts();
  const postEntries: MetadataRoute.Sitemap = data?.map(() => {
    return {
      url: `${siteConfig.siteUrl}`,
    };
  });
  const postDetailEntries: MetadataRoute.Sitemap = data.map((post: any) => {
    return {
      url: `${siteConfig.siteUrl}/${post.id}`,
      lastModified: new Date(),
    };
  });

  let fetchPostRoutes = [];
  try {
    fetchPostRoutes = (
      await Promise.all([postEntries, postDetailEntries])
    ).flat();
  } catch (error) {
    throw JSON.stringify(error, null, 2);
  }

  return [...routesMap, ...fetchPostRoutes];
}
