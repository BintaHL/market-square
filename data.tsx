import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

export const footerSocialLinks = [
    {icon: FaGithub, href: "https://gitHub.com", label: "GitHub"},
    {icon: FaLinkedin, href: "https://linkedin", label: "LinkedIn"},
    {icon: FaTwitter, href: "https://twitter.com", label: "Twitter"},
    {icon: Mail, href: "https://mail.com", label: "Mail"},
];
export const BeforeFooterData = [
    {
        id:1,
        title:"FREE AND FAST DELIVERY",
        description: "Free delivery for all orders over $140",
        image:'/images/icon-delivery.svg',
    },
    {
        id:2,
        title:"24/7 CUSTOMER SERVICE",
        description: "Friendly 24/7 customer support",
        image:'/images/Icon-Customer service.svg',
    },
    {
        id:3,
        title:"MONEY BACK QUARANTEE",
        description: "We return money within 30 days",
        image:'/images/Icon-secure.svg',
    }
];