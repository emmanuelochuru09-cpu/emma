export interface ShowcaseProject {
  id: string;
  title: string;
  industry: 'hospitality' | 'services' | 'ecommerce' | 'personal';
  clientName: string;
  image: string;
  outcome: string;
  metric: string;
  timeframe: string;
  tags: string[];
  description: string;
  features: string[];
}

export const SHOWCASE_PROJECTS: ShowcaseProject[] = [
  {
    id: 'elements-dining',
    title: 'Elements Bistro & Rooftop Lounge',
    industry: 'hospitality',
    clientName: 'Elements Hospitality (Victoria Island, Lagos)',
    image: '/src/assets/images/showcase_restaurant_site_1793124791811.jpg',
    outcome: 'Eliminated manual phone reservations and constant WhatsApp table queries with automated real-time booking.',
    metric: '+₦4.2M Extra Monthly Bookings',
    timeframe: 'Delivered in 7 days',
    tags: ['Table Booking Engine', 'Seasonal Menu CMS', 'Mobile-First UI'],
    description: 'Transformed an outdated Instagram-only bio link into a culinary brand experience with an instant reservation system, local Google Maps ranking, and Paystack deposit integration.',
    features: [
      'Interactive mobile menu with instant dish preview & pricing',
      'Automated table reservation engine linked directly to manager WhatsApp',
      'Under 0.7s mobile load time on MTN & Airtel 4G networks',
      'Optimized for "best dining in Victoria Island" and Google local search'
    ]
  },
  {
    id: 'lexington-corporate',
    title: 'Lexington Legal & Financial Advisory',
    industry: 'services',
    clientName: 'Lexington Partners (Ikoyi & Abuja)',
    image: '/src/assets/images/showcase_b2b_service_1793124791754.jpg',
    outcome: 'Positioned the firm as an elite tier-1 consultancy, attracting corporate retainers and international clients.',
    metric: '+160% High-Value Retainer Calls',
    timeframe: 'Delivered in 10 days',
    tags: ['Client Intake Flow', 'B2B Authority Design', 'Automated Calendly'],
    description: 'Designed a high-trust institutional portal with a pre-qualification questionnaire, case studies, and automated consultation scheduling.',
    features: [
      'Automated client qualification form saving 12+ hours of back-and-forth weekly',
      'Verified corporate case studies library and partner credentials',
      'Enterprise-grade SSL security and encrypted client document portal',
      '100/100 Google Lighthouse speed and mobile performance score'
    ]
  },
  {
    id: 'aura-home',
    title: 'Aura Lifestyle & Home Decor',
    industry: 'ecommerce',
    clientName: 'Aura Living Co. (Lekki Phase 1)',
    image: '/src/assets/images/showcase_ecommerce_store_1793124792991.jpg',
    outcome: 'Stopped losing customers to slow "DM for price" responses by automating orders with 24/7 Paystack & card checkout.',
    metric: '₦8.6M Online Sales in Month 1',
    timeframe: 'Delivered in 9 days',
    tags: ['Custom E-Commerce', 'Paystack & Flutterwave', 'Direct WhatsApp Alert'],
    description: 'Built a sleek, minimalist shopping experience that elevated average order value by 55% and automatically notifies the warehouse via WhatsApp upon every paid order.',
    features: [
      'Seamless checkout supporting Nigerian debit cards, bank transfers & Apple Pay',
      'Instant WhatsApp order notification sent to business and customer',
      'Automated delivery fee calculator for Lagos, Abuja & interstate shipping',
      'Inventory sync with Instagram Shop and TikTok product catalog'
    ]
  }
];

export const COMPARISONS: { title: string; withoutSite: string; withOurSite: string; impact: string }[] = [
  {
    title: 'Customer Trust & "Is This Legit?"',
    withoutSite: 'Relying only on Instagram or WhatsApp makes clients hesitate, suspect scams, or demand pay-on-delivery.',
    withOurSite: 'A bespoke, fast .com / .ng website with verified business details, customer reviews, and clear terms builds instant credibility.',
    impact: 'Commands premium rates without bargaining'
  },
  {
    title: 'Ending the "DM for Price" Trap',
    withoutSite: 'Wasting 4–6 hours every day answering repetitive WhatsApp messages: "How much?", "Is this available?", "Send account number".',
    withOurSite: 'Customers view your full catalog, see exact prices, book appointments, or pay with card/transfer automatically 24/7.',
    impact: 'Saves 25+ hours of manual admin monthly'
  },
  {
    title: 'Google Search Visibility in Nigeria',
    withoutSite: 'Completely invisible when customers in Lagos, Abuja, Port Harcourt, or abroad search Google for your service.',
    withOurSite: 'Built-in local SEO and Google Business setup so customers searching for what you do find YOU instead of your competition.',
    impact: 'Generates free organic leads every single week'
  },
  {
    title: 'Protection from Account Bans',
    withoutSite: 'If Instagram or Facebook randomly disables your page or algorithm changes, your business instantly grinds to a halt.',
    withOurSite: 'A digital asset you own 100%, with your domain, direct customer phone/email database, and zero platform dependency.',
    impact: 'Permanent business security and high valuation'
  }
];
