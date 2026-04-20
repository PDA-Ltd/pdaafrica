import {
  facebook,
  youtube,
  twitter,
  linkedin,
  whiteYoutube,
  whiteFacebook,
  whiteLinkedin,
  whiteTwitter,
  givelove,
  volunteer,
  negotiation,
  call,
  email,
  location,
} from "../assets/icons";

import {
  beyond,
  british,
  callund,
  cdd,
  cocoa,
  coram,
  edtech,
  euro,
  slaves,
  gain,
  initial,
  institute,
  ipsos,
  kokoo,
  mastercard,
  opm,
  pandemics,
  root,
  sabre,
  schol,
  star,
  sustainable,
  tonys,
  tzedek,
  unicef,
  university,
  cclp,
  vsla,
  ncrp,
  customer1,
  customer3,
  customer4,
  Image1,
  Image3,
  Image2,
  Image4,
  Image5,
  launch,
  clpproject,
  vslagals,
  child,
  vslaintro,
  female,
  gcled,
  ksw,
  abiba,
  salomey,
  // crp,
  // vsp,
} from "../assets/images";

export const navLinks = [
  { href: "./", label: "Home" },
  { href: "/ethical-review-committee", label: "Ethical Review Committee" },
  { href: "/child-abuse-tracker", label: "Child Abuse Tracker" },
  { href: "/covid-19", label: "COVID 19" },
  { href: "#partners", label: "Partners" },
  { href: "#events", label: "Events" },
];

export const navigation = [
  {
    title: "Who we are",
    link: "/who-we-are",
    links: [
      { name: "Vision", link: "/who-we-are#vision" },
      { name: "Mission", link: "/who-we-are#mission" },
      { name: "Teams", link: "/teams" },
      { name: "Board", link: "/board" },
      { name: "Staff", link: "/staff" },
    ],
  },

  {
    title: "What we do",
    link: "/what-we-do",
    links: [
      { name: "Strategic Themes", link: "/what-we-do#strategic-themes" },
      { name: "Our Projects", link: "/what-we-do#our-projects" },
      { name: "Expertise", link: "/what-we-do#expertise" },
    ],
  },

  {
    title: "Resources",
    link: "#",
    links: [
      { name: "Publications", link: "/publications" },
      { name: "Podcast", link: "/podcast" },
      { name: "Vodcast", link: "/vodcast" },
      { name: "Videos", link: "/videos-pictures" },
      { name: "Photos", link: "/videos-pictures" },
    ],
  },

  {
    title: "Impact",
    link: "/our-impact",
    links: [
      { name: "Impact Stories", link: "/our-impact#impact-stories" },
      { name: "Documentaries", link: "/our-impact#documentaries" },
      { name: "Case Studies", link: "/our-impact#case-studies" },
    ],
  },
];

export const socialMedia = [
  {
    src: youtube,
    alt: "youtube logo",
    link: "https://www.youtube.com/@pdatv3656",
  },
  {
    src: facebook,
    alt: "facebook logo",
    link: "https://www.facebook.com/p/PDA-GHANA-100063665496444/",
  },
  {
    src: linkedin,
    alt: "linkedin logo",
    link: "https://www.linkedin.com/company/pdaghana/",
  },
  { src: twitter, alt: "twitter logo", link: "https://x.com/pdaghofficial" },
];

export const whiteMedia = [
  {
    src: whiteYoutube,
    alt: "youtube logo",
    link: "https://www.youtube.com/@pdatv3656",
  },
  {
    src: whiteFacebook,
    alt: "facebook logo",
    link: "https://www.facebook.com/p/PDA-GHANA-100063665496444/",
  },
  {
    src: whiteLinkedin,
    alt: "linkedin logo",
    link: "https://www.linkedin.com/company/pdaghana/",
  },
  {
    src: whiteTwitter,
    alt: "twitter logo",
    link: "https://x.com/pdaghofficial",
  },
];

export const footerLinks = [
  {
    title: "Contact Us",
    links: [
     { name: "+233 (0)508493316", link: "tel:+233508493316" },
      { name: "+233 (0)508500017", link: "tel:+233508500017" },
      { name: "Email:", link: "mailto:info@pdaafrica.org" },
      { name: "info@pdaafrica.org", link: "mailto:info@pdaafrica.org" },
    ],
  },

  {
    title: "Quick Links",
    links: [
      { name: "Home", link: "/" },
      { name: "About Us", link: "/about-us" },
      { name: "Projects", link: "/projects" },
      { name: "News & Updates", link: "/news-and-updates" },
      { name: "Get Involved", link: "/get-involved" },
    ],
  },

  {
    title: "Programmes",
    links: [
      { name: "Cocoa Communities Library", link: "/cocoa-communities-library-project" },
      { name: "Financial Inclusion & VSLA", link: "/financial-inclusion-and-vsla" },
      { name: "Child Labour Remediation", link: "/nyonkopa-child-labour-remediation" },
    ],
  },
];

export const partners = [
  { imgURL: beyond, name: "Beyond" },
  { imgURL: british, name: "British" },
  { imgURL: callund, name: "Callund" },
  { imgURL: cdd, name: "CDD" },
  { imgURL: cocoa, name: "Cocoa" },
  { imgURL: coram, name: "Coram" },
  { imgURL: edtech, name: "EdTech" },
  { imgURL: euro, name: "Euro" },
  { imgURL: slaves, name: "Slaves" },
  { imgURL: gain, name: "gAIN" },
  { imgURL: initial, name: "Initial" },
  { imgURL: institute, name: "Institute" },
  { imgURL: ipsos, name: "IPSOS" },
  { imgURL: kokoo, name: "Kokoo" },
  { imgURL: mastercard, name: "Mastercard" },
  { imgURL: opm, name: "OPM" },
  { imgURL: pandemics, name: "Pandemics" },
  { imgURL: root, name: "Root" },
  { imgURL: sabre, name: "Sabre" },
  { imgURL: schol, name: "Schol" },
  { imgURL: star, name: "Star" },
  { imgURL: sustainable, name: "Sustainable" },
  { imgURL: tonys, name: "Tonys" },
  { imgURL: tzedek, name: "Tzedek" },
  { imgURL: unicef, name: "Unicef" },
  { imgURL: university, name: "University" },
];

export const services = [
  {
    imgURL: volunteer,
    label: "Become a Volunteer",
    subtext:
      "Volunteers are the backbone of our organisation, help us make an impact on the world today.",
    button: "Join us now",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSePqWX9ONz-h6EGOAmcy-NO1_yygaO6ETLuBlQNAf0OGGUfFA/viewform?embedded=true",
    linkType: "googleForm",
  },
  {
    imgURL: givelove,
    label: "Donate to support",
    subtext:
      "Large or small, your donation helps change the lives of people in Africa, both old and young.",
    button: "Donate now",
    // link: "/pdaafrica/donate", // Route for Paystack form
    linkType: "paystack",
  },
  {
    imgURL: negotiation,
    label: "Become a Partner",
    subtext:
      "Work closely with our team to develop mutually beneficial initiatives with undeniable impact.",
    button: "Get in touch",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSckRIpUxFJ9CwLBM7YjW3zp0WGRd1yE0TyTm1Wi-xZWKN-pXA/viewform?embedded=true",
    linkType: "googleForm",
  },
];

export const projects = [
  {
    imgURL: vsla,
    label: "Financial Inclusion and VSLAs",
    subtext:
      "Mobilizing, forming and training VSLA groups in communities for financial inclusion.",
    button: "Read More",
    // link: "https://pdaghana.com/pdas-financial-inclusion-programmes-in-sub-saharan-africa/",
    link: "/financial-inclusion-and-vsla",
  },
  {
    imgURL: cclp,
    label: "Cocoa Communities' Library Project",
    subtext:
      "Promoting literacy and reading habits among children in cocoa-growing communities.",
    button: "Read More",
    // link: "https://pdaghana.com/59840-2/",
    link: "/cocoa-communities-library-project",
  },
  {
    imgURL: ncrp,
    label: "Nyonkopa Child Labour Remediation",
    subtext:
      "Remediating identified child labour cases in the supply chain of Barry Callebaut (Nyonkopa).",
    button: "Read More",
    // link: "https://pdaghana.com/nyonkopa-child-labour-remediation-vsla/",
    link: "/nyonkopa-child-labour-remediation",
  },
  {
    imgURL: cocoa,
    label: "The iMPACT Project",
    subtext:
      "Transforming cocoa-dependent communities through integrated development approaches combining agriculture, environment, education, and health.",
    button: "Read More",
    link: "/the-impact-project",
  },
  {
    imgURL: child,
    label: "\"Yen Daakye\" Programme",
    subtext:
      "Eliminating the worst forms of child labour and forced labour in cocoa production and marketing through community-driven approaches.",
    button: "Read More",
    link: "/yen-daakye-programme",
  },
  {
    imgURL: female,
    label: "Young Female Businesses for Growth (YoFeB-4G)",
    subtext:
      "Business formalization and development support to 100 young female artisans to strengthen participation in the construction sector.",
    button: "Read More",
    link: "/yofeb-4g",
  },
  {
    imgURL: gcled,
    label: "Ghana Community-Led Development Collaborative",
    subtext:
      "Strengthening community-driven approaches to education and literacy through learning, evidence, and policy influence.",
    button: "Read More",
    link: "/ghana-cld-collaborative",
  },
  {
    imgURL: ksw,
    label: "Knowledge Sharing Workshops on Child Protection",
    subtext:
      "Annual convenings bridging research, policy, and practice on child protection in Ghana—from evidence tools to sector-wide dialogue.",
    button: "Read More",
    link: "/knowledge-sharing-workshops-child-protection",
  },
];
export const reviews = [
  {
    imgURL: customer3,
    customerName: "Eugene Asamoah",
    rating: "4",
    position: "Volunteer",
    feedback:
      "Volunteering with PDA Africa has been the most interesting and exciting experience ever.",
  },
  {
    imgURL: beyond,
    customerName: "Beyond Beans",
    rating: "5",
    position: "Partner",

    feedback:
      "Collaborating with PDA Africa has shown us how best we can serve the communities we find ourselves.",
  },
  {
    imgURL: customer1,
    customerName: "Emelia Anawine",
    rating: "5",
    position: "Staff",
    feedback:
      "PDA Africa is a great place to grow professionally, gain valuable experience, and enjoy the process while doing it.",
  },

  {
    imgURL: customer4,
    customerName: "Janet Delali",
    rating: "4",
    position: "Benefactor",
    feedback:
      "Their contributions and dedication to helping my community has really been life-changing",
  },
];

export const contacts = [
  {
    imgURL: location,
    label: "Head Office Address:",
    links: [
      {
        name: " GES Office, Bolga-Tamale Road, Walewale",
        link: "https://www.ghanapostgps.com/map/#GA0472784", 
      },
      {
        name: "C/O P.O.Box 13. Walewale",
        link: "https://www.ghanapostgps.com/map/#AK8493514",
      },
    ],
  },
  {
    imgURL: call,
    label: "Contact Number:",
    links: [
      { name: "+233 (0)508493316", link: "tel:+233508493316" },
      { name: "+233 (0)508500017", link: "tel:+233508500017" },
    ],
  },
  {
    imgURL: email,
    label: "Email Address:",
    links: [
      { name: "Website:", link: "https://pdaafrica.org" },
      { name: "info@pdaafrica.org", link: "mailto:info@pdaafrica.org" },
    ],
  },
];
export const imageArray = [
  {
    src: Image1,
    alt: "Image 1",
    title: "Welcome to PDA Africa",
    description: "...everyone matters",
  },
  {
    src: Image2,
    alt: "Image 2",
    title: "",
    description:
      "A not-for-profit arm of Participatory Development Associates that co-creates the design, implementation, and management of community-led projects and programs.",
  },
  {
    src: Image5,
    alt: "Image 3",
    title: "",
    description:
      "We use innovative, participatory methodologies to facilitate development processes that empower communities to take ownership of their growth.",
  },
  {
    src: Image4,
    alt: "Image 4",
    title: "",
    description:
      "We do this for communities and partners.",
  },
  {
    src: Image3,
    alt: "Image 5",
    title: "",
    description:
      "Our partnerships span development interventions with governments, the private sector, and international development partners.",
  },
];

export const africaLinks = [
  { href: "/", label: "Home" },
  {
    href: "/about-us",
    label: "About Us",
    submenu: [
      { href: "/about-us", label: "Overview" },
      { href: "/about-us/where-we-work", label: "Where We Work" },
      { href: "/about-us/staff", label: "Our Team" },
    ],
  },
  {
    label: "What We Do",
    submenu: [
      { href: "/projects", label: "Projects" },
      { href: "/gallery", label: "Gallery" },
      { href: "/news-and-updates", label: "News & Updates" },
    ],
  },
  { href: "/impact", label: "Impact" },
  { href: "/get-involved", label: "Get Involved" },
  { href: "/contact-us", label: "Contact Us" },
  // { href: "/draft-page", label: "Draft Page" },
];

export const donateButton = [
  {
    label: "Donate now",
    link: "/donate",
  },
];

export const Data = [
  {
    img: vslaintro,
    link: "https://www.youtube.com/embed/vE39_togVdE?si=HcVv6SYlF085aUew",
    title: "Introduction of the VLSA/GALS Program to Farmer 2",
    description: "",
  },
  {
    img: vslagals,
    link: "https://www.youtube.com/embed/iIA6YCYQK7s?list=PLlPBKRhN29Y_lkNipvQXeulZXczTnaBsF",
    title: "Short video on VSLA/GALS project",
    description: "",
  },
  {
    img: child,
    link: "https://www.youtube.com/embed/WP7Fqs8fNrI?si=3v7IvzEpyK9bhSRh",
    title: "Child Labour",
    description: "",
  },
  {
    img: clpproject,
    title: "An Impact Video (Cocoa Communities Library Project)",
    description: "",
  },
  {
    img: launch,
    link: "https://www.youtube.com/embed/dIA1cnLkwA0?si=CqZnLdxEAFJPfDWA",
    title: "Cocoa Communities Library Project Launch",
    description: "",
  },
  {
    img: female,
    link: "https://www.youtube.com/embed/lpoBrrvidpw?si=4mrRKsG_-UBhU1Kp",
    title: "The Experiences of Female-led Micro and Small scale enterprises",
    description: "",
  },
  {
    img: salomey,
    link: "https://www.youtube.com/embed/CIpl6mAXpts?si=WsMgNxgNfjak-heh",
    title: "The story of Salomey",
    description: "",
  },
  {
    img: abiba,
    link: "https://www.youtube.com/embed/9ZgLBUB281o?si=lSSuj59gsGFl-HuD",
    title: "The story of Abiba",
    description: "",
  },
];
