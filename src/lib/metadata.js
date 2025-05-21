// src/lib/metadata.js
export function generateMetadata({
  title,
  description,
  keywords = [],
  url,
  image,
}) {
  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url,
      siteName: "YouthBee",
      images: [
        {
          url: image,
          width: 800,
          height: 600,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: url,
    },
  };
}
