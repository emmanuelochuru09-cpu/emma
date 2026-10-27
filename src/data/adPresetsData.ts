export interface AdCreativePreset {
  id: string;
  channel: 'instagram_feed' | 'instagram_story' | 'whatsapp_pitch' | 'google_search' | 'linkedin_b2b';
  channelLabel: string;
  title: string;
  headline: string;
  subheadline: string;
  body: string;
  ctaText: string;
  hashtags?: string[];
  targetAudience: string;
  tips: string;
}

export const DEFAULT_AD_PRESETS: AdCreativePreset[] = [
  {
    id: 'ig-growth-focused',
    channel: 'instagram_feed',
    channelLabel: 'Instagram / Facebook Feed Ad',
    title: 'The High-Converting Business Presence',
    headline: 'Stop Losing Customers Because You Don\'t Have a Professional Website.',
    subheadline: 'I design custom, lightning-fast websites for businesses ready to scale in Nigeria & globally.',
    body: `Are you tired of telling customers "DM for price" or having people doubt if your business is legit?\n\nHere is the reality: 84% of high-paying customers trust a business with a real website far more than an Instagram-only page.\n\nWhen serious clients want to spend ₦50,000, ₦200,000, or ₦1,000,000+ on your services, they want to see a professional website with clear pricing, testimonials, and seamless booking.\n\n🔥 What I will build for your business:\n• Modern, clean design tailored to your brand (No cheap generic templates)\n• 100% mobile-optimized (Loads in under 1 second on MTN/Airtel/Glo 4G)\n• Automated WhatsApp booking, client inquiry forms, or Paystack/card payment\n• Google SEO setup so customers in your city find YOU first\n• Full launch in 5 to 10 days\n\nReady to look like the market leader you truly are?\n\n📲 Tap the button below or send a WhatsApp message to 08032568417 to get a free strategy call & custom quote!`,
    ctaText: 'Chat on WhatsApp: 08032568417',
    hashtags: ['#WebDesignNigeria', '#LagosBusiness', '#NigerianEntrepreneurs', '#AbujaBusinesses', '#SmallBusinessNigeria', '#GrowthHackingNigeria'],
    targetAudience: 'Business owners, founders, boutique owners, legal/consulting firms, service providers across Nigeria',
    tips: 'Set your Meta Ads CTA button to "Send WhatsApp Message" targeting phone number +2348032568417 for immediate hot leads!'
  },
  {
    id: 'ig-story-card',
    channel: 'instagram_story',
    channelLabel: 'Instagram Story / WhatsApp Status Hook',
    title: '60-Second Story Ad & Status Broadcast',
    headline: 'Still running your business solely in DMs?',
    subheadline: 'Upgrade to a 24/7 automated website in 7 days.',
    body: `Imagine waking up to paid orders & confirmed bookings without sending 50 voice notes back and forth.\n\nI build high-converting websites for businesses across Nigeria that want to look professional, rank on Google, and make sales on autopilot.\n\n💬 Send "WEBSITE" on WhatsApp to 08032568417 right now to get a FREE website audit & quote!`,
    ctaText: 'Chat on WhatsApp: 08032568417',
    hashtags: ['#WebDeveloperLagos', '#NigerianSME', '#OnlineBusinessNG'],
    targetAudience: 'Instagram store owners, salon/spa owners, consultants, freelancers, real estate agents',
    tips: 'Post this on your WhatsApp Status every Tuesday and Thursday with a direct link to wa.me/2348032568417!'
  },
  {
    id: 'whatsapp-cold-outreach',
    channel: 'whatsapp_pitch',
    channelLabel: 'WhatsApp / DM Direct Outreach Pitch',
    title: 'High-Converting Direct Pitch to Business Owners',
    headline: 'Value-First Cold Pitch to Local Businesses with No Website',
    subheadline: 'Send this to businesses you find on Instagram, Google Maps, or Nairaland',
    body: `Hello [Owner Name / Management],\n\nGood day! I came across [Business Name] on Instagram and was really impressed by the quality of your [products / services / client reviews].\n\nI noticed you don't currently have an official website (or your link directs only to a generic linktree), which means people searching Google for [Industry/Service] in [City] are likely ending up with your competitors.\n\nI am Emmanuel Ochuru, a web designer and developer. I build custom, lightning-fast websites for businesses that want to:\n1. Stop wasting time replying to repetitive "How much?" messages\n2. Accept direct card/transfer payments or automated bookings\n3. Build instant trust so customers never doubt if you are legit\n\nI already drafted a quick 2-minute visual layout showing how a website could double [Business Name]'s direct customer inquiries.\n\nCould I send you the preview link on WhatsApp (08032568417)? No pressure at all—just wanted to share some ideas!\n\nWarm regards,\nEmmanuel Ochuru\nWeb Architect & Founder, Ochuru Digital\nWhatsApp: 08032568417`,
    ctaText: 'Copy WhatsApp Pitch Script',
    targetAudience: 'Local businesses in Lagos, Abuja, Port Harcourt, Ibadan, or international clients',
    tips: 'Mention a specific product or post from their page in line 2 so they know you took the time to study their business.'
  },
  {
    id: 'google-search-ad',
    channel: 'google_search',
    channelLabel: 'Google Search Sponsored Ad',
    title: 'High-Intent Search Campaign in Nigeria',
    headline: 'Professional Web Design in Nigeria | Custom Fast Websites from ₦180,000',
    subheadline: 'www.ochurudigital.com/web-design-nigeria',
    body: `Need a website that brings real paying customers? Custom-built, mobile-responsive websites with WhatsApp booking, Paystack payments & Google SEO. Launched in 7 days. Chat on WhatsApp: 08032568417.`,
    ctaText: 'WhatsApp 08032568417 for Free Quote',
    targetAudience: 'People in Nigeria searching: "web designer in Lagos", "website developer Abuja", "how much is website design in Nigeria"',
    tips: 'Set location targeting to Lagos, Abuja, Rivers, Oyo, and Kano.'
  },
  {
    id: 'linkedin-b2b-post',
    channel: 'linkedin_b2b',
    channelLabel: 'LinkedIn B2B Authority Post',
    title: 'B2B Founder Thought Leadership on Digital Ownership',
    headline: 'Why relying 100% on Instagram or WhatsApp is a dangerous gamble for Nigerian businesses',
    subheadline: 'A message for founders, MDs, and business owners in 2026.',
    body: `Over the past year, I've had conversations with dozens of business owners in Nigeria. One recurring story broke my heart:\n\n"Emmanuel, my Instagram page with 45,000 followers was suspended without explanation. I lost 80% of my revenue overnight."\n\nWhen you build your entire business on social media, you are building a castle on rented land.\n\nWhen serious corporate clients, high-net-worth individuals, or foreign investors evaluate your business, they don't look for your latest reel. They search for your official website.\n\nA custom website gives you:\n1. Complete ownership of your brand and customer data\n2. Google search authority—so customers find you even when social apps crash\n3. Seamless Paystack, Flutterwave, or bank transfer payments with automated invoices\n4. Premium brand positioning that justifies 2x–3x higher pricing\n\nI build custom, fast, and high-converting websites for businesses ready to dominate their space.\n\nIf your business is ready for an online presence that works as hard as you do, let's talk.\n\nDirect WhatsApp: 08032568417\nEmail: emmanuelochuru02@gmail.com\n\nLet's build something exceptional for your brand.`,
    ctaText: 'Chat Directly on WhatsApp: 08032568417',
    hashtags: ['#NigerianBusiness', '#WebDevelopment', '#EntrepreneurshipNigeria', '#LagosSME', '#TechInAfrica'],
    targetAudience: 'Founders, managing directors, corporate consultants, business coaches in Nigeria & Diaspora',
    tips: 'Post on LinkedIn on Tuesday or Thursday between 8:00 AM and 10:00 AM West Africa Time (WAT).'
  }
];
