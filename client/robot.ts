import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
      const baseUrl = "https://pre-inspected-used-cars-git-master-collins-projects-3eca33c8.vercel.app/";
    return {
        rules:{
            userAgent:"*",
            allow:"/",
            disallow:"/api/*"
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    }
}