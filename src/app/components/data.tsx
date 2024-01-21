// grid section images
import gridCard0 from "../assets/svg/gridCard0.svg";
import gridCard1 from "../assets/svg/gridCard1.svg";
import gridCard2 from "../assets/svg/gridCard2.svg";
import gridCard3 from "../assets/svg/gridCard3.svg";
import gridCard4 from "../assets/svg/gridCard4.svg";
import gridCard5 from "../assets/svg/gridCard5.svg";
import gridCard6 from "../assets/svg/gridCard6.svg";

// footer images

import FooterArrow from "../assets/svg/footerArrow.svg";
import linkedin from "../assets/svg/linkedin.svg";
import facebook from "../assets/svg/facebook.svg";
import x from "../assets/svg/x.svg";
import insta from "../assets/svg/insta.svg";

export const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "" },
  { name: "Blogs", href: "/blogs" },
  { name: "Contact Us", href: "/contact" },
];

export const gridCardsData = [
  {
    id: 0,
    logo: gridCard0,
    styles: "lg:col-span-7",
    heading: "IT Solutions Outsourcing",
    content:
      "We pride ourselves on being a premier provider of IT Solutions Outsourcing. We offer a comprehensive range of services.",
    content2:
      "We're a leading IT Solutions Outsourcing provider offering a diverse range of services and solutions.",
    link: "/vulnerability",
  },
  {
    id: 1,
    logo: gridCard1,
    styles: "lg:col-span-11",
    heading: "Vulnerability Assessment",
    content:
      "We conduct thorough assessments of your network, applications, and systems, mimicking real-world cyber threats to uncover vulnerabilities and weaknesses. Our experts assess the security of your web applications, identifying potential entry points for attackers and providing actionable.",
    content2:
      "We bolster security by pinpointing and fixing vulnerabilities in networks and web apps.",
    link: "/it-solution",
  },
  {
    id: 2,
    logo: gridCard2,
    styles: "lg:col-span-6 lg:row-span-2",
    heading: "Penetration Testing",
    content:
      "We conduct thorough assessments of your network, applications, and systems, mimicking real-world cyber threats to uncover existing vulnerabilities. Our experts assess the security of your web applications, identifying potential entry points for attackers and providing actionable recommendations to enhance your application security. Our thorough penetration testing services go beyond surface-level checks.",
    content2:
      "We find vulnerabilities, evaluate web security, offer recommendations through thorough testing.",
    link: "/it-support",
  },
  {
    id: 3,
    logo: gridCard3,
    styles: "lg:col-span-8",
    heading: "Data Center Services",
    content:
      "We specialize in delivering cybersecurity services designed to fortify your digital assets and protect your organization from ever-evolving cyber threats. Our team is committed to providing tailored solutions.",
    content2:
      "We specialize in fortifying digital assets through personalized and effective cybersecurity solutions.",
    link: "/penetration",
  },
  {
    id: 4,
    logo: gridCard4,
    styles: "lg:col-span-10",
    heading: "Cyber Security Services",
    content:
      "We specialize in delivering cybersecurity services designed to fortify your digital assets and protect your organization from ever-evolving cyber threats. Our team of certified cybersecurity professionals is committed to providing tailored solutions.",
    content2:
      "We fortify digital assets with tailored cybersecurity solutions through certified professionals.",
    link: "/data-center",
  },
  {
    id: 5,
    logo: gridCard5,
    styles: "lg:col-[span_13_/_span_13]",
    heading: "SOC Services",
    content:
      "Proactively identify and remediate vulnerabilities with our thorough assessments and simulated attacks. Our penetration testing services ensure that your defenses are robust against real-world threats. Rely on our 24/7 SOC manned by skilled analysts and equipped with advanced tools.",
    content2:
      "We find and fix vulnerabilities with assessments, tests, and a 24/7 manned SOC for robust defense.",
    link: "/cyber-sec",
  },
  {
    id: 6,
    logo: gridCard6,
    styles: "lg:col-span-11",
    heading: "IT Support Services",
    content:
      "Technical support tailored to your business needs. Our experts are available 24/7 to troubleshoot hardware issues, resolve software glitches, and address user-related concerns. Elevate your server management with our certified administrators.",
    content2:
      "24/7 support for hardware, software, users; elevate server management with certified admins.",
    link: "/soc-service",
  },
];

export const serviceLinks = [
  { name: "Vulnerability Assessment", href: "/vulnerability" },
  { name: "IT Solutions", href: "/it-solution" },
  { name: "IT Support", href: "/it-support" },
  { name: "Penetration Testing", href: "/penetration" },
  { name: "Data Center Services", href: "/data-center" },
  { name: "Cyber Security Services", href: "/cyber-sec" },
  { name: "SOC Services ", href: "/soc-service" },
];

export const FooterData = {
  socialLinks: [
    {
      url: "https://www.facebook.com/Securehops/",
      name: "Facebook",
      arrow: FooterArrow,
      logo: { facebook },
    },
    {
      url: "https://www.instagram.com/securehops/?hl=en",
      name: "Instagram",
      arrow: FooterArrow,
      logo: { insta },
    },
    {
      url: "https://www.linkedin.com/company/securehops/mycompany/",
      name: "LinkedIn",
      arrow: FooterArrow,
      logo: { linkedin },
    },
    {
      url: "https://twitter.com/Securehops",
      name: "Twitter",
      arrow: FooterArrow,
      logo: { x },
    },
  ],
  quickLinks: [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Services",
      url: "/",
    },
    {
      name: "Cybersecurity",
      url: "/",
    },
    {
      name: "Blogs",
      url: "/blog",
    },
    {
      name: "Contact Us",
      url: "/contact",
    },
  ],
  digitalServices: [
    {
      name: "IT Solutions Outsourcing",
      url: "/services/it-solution",
    },
    {
      name: "Vulnerability Assessment",
      url: "/services/vulnerability",
    },
    {
      name: "Penetration Testing",
      url: "/services/pentesting",
    },
    {
      name: "Data Center Services",
      url: "/services/datacenter",
    },
    {
      name: "System Engineering",
      url: "/services/system-engineering",
    },
  ],
  contact: [
    {
      name: "Head Office",
      value: "LDA Avenue 1, Block B, , House no. 153, Lahore, Punjab PK",
    },
    {
      name: "Branch Office",
      value:
        "McLeod Road, Lakshmi Chowk, Saleem Chamber, Second Floor, Office no. 11, Lahore, Punjab PK",
    },
    {
      name: "Cell",
      value: "+ 92 32 4444 311",
    },
  ],
};
