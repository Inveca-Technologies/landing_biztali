const siteUrl = "https://www.biztali.com";

export const siteJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "Biztali",
      url: siteUrl,
      logo: `${siteUrl}/logo/Biztali_logo.png`,
      description:
        "Biztali is a business management platform for small and growing businesses, bringing sales, inventory, expenses, payments and branch operations together.",
      email: "info@biztali.com",
      sameAs: [
        "https://www.facebook.com/biztali",
        "https://www.instagram.com/biztali",
        "https://www.linkedin.com/company/biztali",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Biztali",
      publisher: { "@id": `${siteUrl}/#organization` },
      inLanguage: "en",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${siteUrl}/#software`,
      name: "Biztali",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web, Android",
      url: siteUrl,
      description:
        "Manage sales, stock, expenses, customers and business branches in one place. Biztali supports business workflows including invoicing, payment tracking and KRA eTIMS.",
      featureList: [
        "Sales and order management",
        "Inventory and stock tracking",
        "Business expenses and cashflow",
        "Invoicing and receipts",
        "Customer and supplier records",
        "Branch operations and reporting",
        "Payment tracking",
        "KRA eTIMS workflows",
      ],
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "KES",
        description: "Get started with Biztali for free.",
        url: `${siteUrl}/signin`,
      },
      provider: { "@id": `${siteUrl}/#organization` },
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What is Biztali?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Biztali is a business management platform that helps you manage sales, inventory, expenses, customers and business operations from one place.",
          },
        },
        {
          "@type": "Question",
          name: "Who can use Biztali?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Biztali is designed for small and growing businesses, including retailers and service businesses that want a clearer view of day-to-day operations.",
          },
        },
        {
          "@type": "Question",
          name: "Can I manage more than one branch?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Biztali supports multi-branch operations, helping teams work with location-specific activity and business-wide views.",
          },
        },
        {
          "@type": "Question",
          name: "How do I get started?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Create a Biztali account to set up your workspace and explore the tools available for your business.",
          },
        },
      ],
    },
  ],
};

export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
