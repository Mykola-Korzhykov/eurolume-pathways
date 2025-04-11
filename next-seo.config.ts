import preview from "@public/favicons/card.png";

const getConfig = (): any => {
  const domain: any = process.env.DOMAIN;

  return {
    title: {
      default: "Home | EuroLume",
      template: `%s | EuroLume`,
    },
    description: `EuroLume - landing page about company which provides led strips.`,
    openGraph: {
      type: "website",
      images: [{ url: preview.src, alt: "Preview Image" }],
      title: `EuroLume`,
      description: `EuroLume - landing page about company which provides led strips.`,
      locale: "en",
      url: "localhost",
      siteName: "EuroLume",
    },
    manifest: "/favicons/manifest.json",
    twitter: {
      card: "summary_large_image",
    },
    metadataBase: new URL(domain),
    verification: {
      google: "google",
      yandex: "yandex",
      yahoo: "yahoo",
    },
  };
};

export default getConfig;
