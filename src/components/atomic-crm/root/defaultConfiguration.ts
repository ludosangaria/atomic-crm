import { Mars, NonBinary, Venus } from "lucide-react";

export const defaultDarkModeLogo = "./logos/logo_atomic_crm_dark.svg";
export const defaultLightModeLogo = "./logos/logo_atomic_crm_light.svg";

export const defaultTitle = "Road to 100M - CRM";

export const defaultCompanySectors = [
  "Partenaire",
  "Client final",
  "Fournisseur",
  "Autres",
];

export const defaultDealStages = [
  { value: "opportunity", label: "Opportunity" },
  { value: "proposal-sent", label: "Proposal Sent" },
  { value: "in-negociation", label: "In Negotiation" },
  { value: "won", label: "Won" },
  { value: "lost", label: "Lost" },
  { value: "delayed", label: "Delayed" },
];

export const defaultDealPipelineStatuses = ["won"];

export const defaultDealCategories = [
  "HIT",
  "Reseaux",
  "Securite",
];

export const defaultNoteStatuses = [
  { value: "cold", label: "Cold", color: "#7dbde8" },
  { value: "warm", label: "Warm", color: "#e8cb7d" },
  { value: "hot", label: "Hot", color: "#e88b7d" },
  { value: "in-contract", label: "In Contract", color: "#a4e87d" },
];

export const defaultTaskTypes = [
  "None",
  "Email",
  "Demo",
  "Lunch",
  "Meeting",
  "Follow-up",
  "Thank you",
  "Ship",
  "Call",
];

export const defaultContactGender = [
  { value: "male", label: "He/Him", icon: Mars },
  { value: "female", label: "She/Her", icon: Venus },
  { value: "nonbinary", label: "They/Them", icon: NonBinary },
];
