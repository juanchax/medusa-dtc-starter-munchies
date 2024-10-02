const vercelProdUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;

const config = {
  baseUrl: vercelProdUrl ? `https://${vercelProdUrl}` : "",
  sanity: {
    apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2023-06-21",
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "",
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "",
    revalidateSecret: process.env.SANITY_REVALIDATE_SECRET || "",
    studioUrl: "/cms",
    // Not exposed to the front-end, used solely by the server
    token: process.env.SANITY_API_TOKEN || "",
  },
  siteName: "Base",
};

export default config;