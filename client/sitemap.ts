import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://pre-inspected-used-cars-git-master-collins-projects-3eca33c8.vercel.app/";
    return [
    {
        url: baseUrl, 
        lastModified: new Date(),
        changeFrequency:"weekly",
        priority: 1.0
    },
    {
        url: `${baseUrl}/About`, 
        lastModified: new Date(),
        changeFrequency:"weekly",
        priority: 0.8
    },
       {
        url: `${baseUrl}/Buy`, 
        lastModified: new Date(),
        changeFrequency:"weekly",
        priority: 0.9
    },
       {
        url: `${baseUrl}/SellCarForm`, 
        lastModified: new Date(),
        changeFrequency:"weekly",
        priority: 0.8
    },
       {
        url: `${baseUrl}/dashboard`, 
        lastModified: new Date(),
        changeFrequency:"weekly",
        priority: 0.9
    },
       {
        url: `${baseUrl}/SignUp`, 
        lastModified: new Date(),
        changeFrequency:"weekly",
        priority: 0.7
    },
]
}