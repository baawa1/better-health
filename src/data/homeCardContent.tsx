export interface HomeCardContentItem {
  icon: string;
  iconAlt: string;
  title: string;
  description: string;
}

export const homeCardContent: HomeCardContentItem[] = [
  {
    icon: "assets/search-icon.svg",
    iconAlt: "search icon",
    title: "Easy to use online visit",
    description:
      "Our platform is designed to be user-friendly, making it easy for you to access healthcare services from the comfort of your home.",
  },
  {
    icon: "assets/empathize-line.svg",
    iconAlt: "empathize line icon",
    title: "Certified Medical Professionals",
    description:
      "Our team consists of certified medical professionals who are dedicated to providing you with the best possible care and support.",
  },
  {
    icon: "assets/hearts-line.svg",
    iconAlt: "hearts line icon",
    title: "Control Your Well Being",
    description:
      "Our platform empowers you to take charge of your health and well-being, providing you with the tools and resources you need to make informed decisions.",
  },
  {
    icon: "assets/capsule-fill.svg",
    iconAlt: "capsule fill icon",
    title: "Personalized Treatments",
    description:
      "We offer personalized treatment plans tailored to your unique health needs, ensuring that you receive the best possible care.",
  },
  {
    icon: "assets/award-line.svg",
    iconAlt: "Award line icon",
    title: "Secure and Confidential HIPAA Compliant",
    description:
      "We prioritize your privacy and security, ensuring that all interactions on our platform are HIPAA compliant and confidential.",
  },
  {
    icon: "assets/24-hours-line.svg",
    iconAlt: "24 hours icon",
    title: "24/7 Access",
    description:
      "Our telemedicine platform is available 24/7, allowing you to access healthcare services whenever you need them, without any delays.",
  },
];
