import {
  SlideEn1,
  SlideEn2,
  SlideEn3,
} from "@/components/ImplementationPhone/collectionSliders/collectionSlidersEn"

export default {
  hero: {
    title: "We create all kinds of bots",
    subtitle: "FOR YOUR BUSINESS",
  },
  header: {
    navList: [
      "Bot Development",
      "Implementation Areas",
      "CRM and ERP Integration",
      "Contacts",
    ],
    navSubList: [
      "Medical Organizations",
      "Telecommunications Companies",
      "HR Bot for Your Company",
      "Chatbot for Ticket Sales in Cultural and Recreational Venues",
    ],
    extra: {
      label: "More",
      id: "#contact",
      button: "Discuss",
    },
  },
  banner: {
    id: "banner",
    span: "16 YEARS OF WORK — 16 YEARS OF EXPERIENCE",
    titleHeaderOne: "We create all kinds of",
    titleHeaderSecond: "bots for your business",
    cards: [
      {
        name: "Telegram",
        desc: "Suitable for everything — from notifications to full-fledged client accounts",
        label: "Integration time from 10 days",
        price: "from $100",
      },
      {
        name: "WhatsApp",
        desc: "Ideal for notification services, booking, and consultations",
        label: "Integration time from 14 days",
        price: "from $90",
      },
      {
        name: "Instagram",
        desc: "Great for services, booking, consultations, and e-commerce",
        label: "Integration time from 20 days",
        price: "from $120",
      },
    ],
  },
  implementation: {
    titleHidden: "Bot Implementation",
    title: "Implementation Areas",
    items: [
      {
        card: {
          title: "Medical Organizations",
          desc: "Chatbots are becoming an integral part of business processes in medical organizations. They represent a modern service for interaction between the enterprise’s information infrastructure (CRM, databases, server) and patients through familiar messaging platforms. Such services do not completely replace the organization's website but rather provide quick and easy access to the services and information of the medical organization.",
          our: "Our Work",
        },
        // phone: ["1", "2", "3", "4", "5", "6", "1", "2", "3"],
        slides: [
          SlideEn1,
          SlideEn2,
          SlideEn3,
          SlideEn1,
          SlideEn2,
          SlideEn3,
          SlideEn1,
          SlideEn2,
          SlideEn3,
        ],
      },
      {
        card: {
          title: "Telecommunications Companies",
          desc: "Chatbots in telecommunications companies — which provide communication services, internet access, and television — are essential for organizing technical support and granting customers access to their personal data.With such chatbots, clients can not only contact tech support, but also check their balance and pay for services.",
          our: "Our Work",
        },
        // phone: ["7", "8", "9", "7", "8", "9", "7", "8", "9"],
        slides: [
          SlideEn1,
          SlideEn2,
          SlideEn3,
          SlideEn1,
          SlideEn2,
          SlideEn3,
          SlideEn1,
          SlideEn2,
          SlideEn3,
        ],
      },
      {
        card: {
          title: "HR Bot for Your Company",
          desc: "HR chatbots in large companies provide quick access to current job openings and streamline communication between the HR department and job seekers.They allow candidates to easily find information about open positions, fill out applications directly within the messenger, and get answers to their questions in real time.These tools not only speed up the hiring process, but also make it more convenient and accessible for everyone involved.",
          our: "Our Work",
        },
        // phone: ["10", "11", "12", "10", "11", "12", "10", "11", "12"],
        slides: [
          SlideEn1,
          SlideEn2,
          SlideEn3,
          SlideEn1,
          SlideEn2,
          SlideEn3,
          SlideEn1,
          SlideEn2,
          SlideEn3,
        ],
      },
      {
        card: {
          title: "Chatbot for Ticket Sales in Cultural and Recreational Venues",
          desc: "With our chatbot, you can significantly simplify the ticket purchasing process for museums, amusement parks, attractions, and other cultural or leisure venues.Place a QR code at the entrance, and your visitors will be able to buy tickets quickly in just a few clicks.This convenient solution eliminates the need to wait in line at the ticket office or go to a website to complete the payment.",
          our: "Our Work",
        },
        // phone: ["10", "11", "12", "10", "11", "12", "10", "11", "12"],
        slides: [
          SlideEn1,
          SlideEn2,
          SlideEn3,
          SlideEn1,
          SlideEn2,
          SlideEn3,
          SlideEn1,
          SlideEn2,
          SlideEn3,
        ],
      },
    ],
  },
  CMR: {
    title: "CRM and ERP Integration",
    desc: "We seamlessly integrate all chatbots with your company’s CRM and ERP systems via API services, without disrupting your existing IT infrastructure.",
  },
  contact: {
    title: "Submit a request for Bot development",
    desc: "Leave your email and get a 5% discount for the first 3 months of using our services",
    inputLabelName: "Name",
    inputName: "Maria",
    inputLabelPhone: "Phone",
    inputPhone: "+44",
    selectLabel: "Bot implementation area",
    select: [
      "Bot development",
      "Telecommunication companies",
      "HR bot for your company",
      "Chat for selling tickets to cultural and entertainment events",
    ],
    politic: `By submitting a request, you accept the <a href="/offer-agreement" target="_blank">terms of the offer agreement</a> and consent to the processing of your personal data in accordance with the <a href="/privacy-policy" target="_blank">privacy policy</a>`,
    send: "Send",
  },
  ourJobs: {
    title: "We also create websites!",
    link: "Go to si-web.com and see our work",
  },
  information: {
    title: "Contact Information",
    link: "SI-WEB.com",
    phone: "+38 (067) 123-45-67",
    telegram: "tg: sw_robot",
    email: "info@si-web.com",
    owner: {
      name: "Private Entrepreneur Serhii Sereda",
      desc: "EDRPOU 324547600120391, TIN 544590071833",
    },
    address: {
      label: "Legal and actual address:",
      addressFact: "Zhmykhiv, Prospekt St., 24, office 207",
    },
    extra: "16 YEARS OF WORK — 16 YEARS OF EXPERIENCE",
    copyright: {
      link: "Personal Data Processing Policy",
      label: "Copyright © 2025 SI-Web IT Company",
    },
  },
}
