import { StaticImageData } from "next/image";
import PalantirLogo from "../images/palantir-logo";
import ontologyPoster from "../../public/videos/previews/ontology/poster.png";
import aimlPoster from "../../public/videos/previews/aiml/poster.png";
import wfpPoster from "../../public/videos/previews/wfp/poster.png";
import healthlifesciencesPoster from "../../public/videos/previews/healthlifesciences/poster.png";
import usarmyPoster from "../../public/videos/previews/usarmy/poster.png";
import scuderiaferrariPoster from "../../public/videos/previews/scuderiaferrari/poster.png";
import cleanenergyPoster from "../../public/videos/previews/cleanenergy/poster.png";
import { IconName } from "../components/Icon";

const CurriculumVitaeTypes = {
  experience: "experience",
  education: "education",
  client: "client",
  spotlight: "spotlight",
  patent: "patent",
  locationWorked: "locationWorked",
} as const;

export type CurriculumVitaeType = keyof typeof CurriculumVitaeTypes;

export interface ICurriculumVitaeExperience {
  type: typeof CurriculumVitaeTypes.experience;
  companyName: string;
  image:
    | {
        svgSource: React.ReactNode;
        imageSource?: never;
        imageAlt?: never;
        icon?: never;
      }
    | {
        svgSource?: never;
        imageSource: StaticImageData;
        imageAlt: string;
        icon?: never;
      }
    | {
        svgSource?: never;
        imageSource?: never;
        imageAlt?: never;
        icon: IconName;
      };
  detail?: string;
  link?: URL;
  jobTitles: string[];
  date: { startDate: string; endDate: string } | string;
}
export interface ICurriculumVitaeEducation {
  type: typeof CurriculumVitaeTypes.education;
  diploma: string;
  institution: string;
  date: string;
}
export interface ICurriculumVitaeClients {
  type: typeof CurriculumVitaeTypes.client;
  name: string;
  showcase: boolean;
  content?: {
    link?: URL;
    embed?: JSX.Element;
  };
}
export type spotlightContentType = "project" | "impact";
export interface ICurriculumVitaeSpotlight {
  type: typeof CurriculumVitaeTypes.spotlight;
  contentType: spotlightContentType;
  title: string;
  subtitle: string;
  showcase: boolean;
  content: {
    link: URL;
    video: {
      location: string;
      poster: StaticImageData;
      startTime: number;
    };
    embed?: JSX.Element;
  };
}
export interface ICurriculumVitaePatents {
  type: typeof CurriculumVitaeTypes.patent;
  id: string;
  label: string;
  link: URL;
  date: string;
}
export interface ICurriculumVitaeLocationsWorked {
  type: typeof CurriculumVitaeTypes.locationWorked;
  locationName: string;
  detail?: string;
  geo: {
    lat: number;
    lon: number;
  };
  preferredPointOfView: {
    lat: number;
    lon: number;
  };
  current: boolean;
}

export const CurriculumVitae: {
  experience: ICurriculumVitaeExperience[];
  education: ICurriculumVitaeEducation[];
  clients: ICurriculumVitaeClients[];
  spotlights: ICurriculumVitaeSpotlight[];
  patents: ICurriculumVitaePatents[];
  locationsWorked: ICurriculumVitaeLocationsWorked[];
} = {
  /**
   * EXPERIENCE
   */
  experience: [
    {
      type: "experience",
      companyName: "something ai",
      image: { icon: "Rocket" },
      detail: "",
      link: new URL("https://www.comand.ai/"),
      jobTitles: [""],
      date: { startDate: "2024", endDate: "Now" },
    },
    
    {
      type: "experience",
      companyName: "Contracting",
      image: { icon: "GlobeNetwork" },
      jobTitles: [""],
      date: "Since 2024",
    },
  ],

  /**
   * EDUCATION
   */
  education: [
    
  ],

  /**
   * CLIENTS
   */
  clients: [
    {
      type: "client",
      name: "Airbus",
      showcase: true,
      content: {
        embed: (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/-sJhFpaylhU?autoplay=1&modestbranding=1&rel=0"
            title="Our work with Airbus"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ),
        link: new URL(
          "https://aircraft.airbus.com/en/services/enhance/skywise"
        ),
      },
    },
    {
      type: "client",
      name: "University of Nantes",
      showcase: false,
    },
    {
      type: "client",
      name: "and other organizations",
      showcase: false,
    },
  ],

  /**
   * SPOTLIGHTS
   */
  spotlights: [
    {
      type: "spotlight",
      contentType: "project",
      title: "Foundry Ontology",
      subtitle: "Palantir Technologies",
      showcase: true,
      content: {
        link: new URL("https://www.palantir.com/platforms/foundry/"),
        video: {
          location: "/videos/previews/ontology/videopreview.mp4",
          startTime: 0,
          poster: ontologyPoster,
        },
      },
    },
    {
      type: "spotlight",
      contentType: "project",
      title: "Foundry AI/ML",
      subtitle: "Palantir Technologies",
      showcase: true,
      content: {
        link: new URL("https://www.palantir.com/platforms/aip/"),
        video: {
          location: "/videos/previews/aiml/videopreview.mp4",
          startTime: 0,
          poster: aimlPoster,
        },
      },
    },
    {
      type: "spotlight",
      contentType: "impact",
      title: "World Food Program",
      subtitle: "Delivering life-saving assistance using data",
      showcase: true,
      content: {
        embed: (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/Iisb3OclVEQ?autoplay=1&modestbranding=1&rel=0"
            title="Our work with the World Food Program"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ),
        link: new URL("https://www.palantir.com/impact/world-food-programme/"),
        video: {
          location: "/videos/previews/wfp/videopreview.mp4",
          startTime: 0,
          poster: wfpPoster,
        },
      },
    },
    {
      type: "spotlight",
      contentType: "impact",
      title: "Health & Life Sciences",
      subtitle: "Powering data-driven research and treatment",
      showcase: true,
      content: {
        embed: (
          <video width="1280" height="720" autoPlay controls>
            <source src="/videos/healthlifesciences.mp4" type="video/mp4" />
          </video>
        ),
        link: new URL("https://www.palantir.com/offerings/health/"),
        video: {
          location:
            "/videos/previews/healthlifesciences/videopreview.mp4#t=1.1",
          startTime: 1.1,
          poster: healthlifesciencesPoster,
        },
      },
    },
    {
      type: "spotlight",
      contentType: "impact",
      title: "U.S. Army",
      subtitle: "AI-enabled technology to deter and defend",
      showcase: true,
      content: {
        embed: (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/touvdfsYLrk?autoplay=1&modestbranding=1&rel=0"
            title="Our work with the U.S. Army"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ),
        link: new URL("https://www.palantir.com/offerings/defense/army/"),
        video: {
          location: "/videos/previews/usarmy/videopreview.mp4",
          startTime: 0,
          poster: usarmyPoster,
        },
      },
    },
    {
      type: "spotlight",
      contentType: "impact",
      title: "Scuderia Ferrari",
      subtitle: "Partners in ultimate performance",
      showcase: true,
      content: {
        embed: (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/W7DExH8iPnE?autoplay=1&modestbranding=1&rel=0"
            title="Our work with Scuderia Ferrari"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ),
        link: new URL("https://www.palantir.com/offerings/auto-racing/"),
        video: {
          location: "/videos/previews/scuderiaferrari/videopreview.mp4",
          startTime: 0,
          poster: scuderiaferrariPoster,
        },
      },
    },
    {
      type: "spotlight",
      contentType: "impact",
      title: "Clean Energy",
      subtitle: "Helping suppliers deliver cleaner energy",
      showcase: true,
      content: {
        embed: (
          <iframe
            width="560"
            height="315"
            src="https://www.youtube-nocookie.com/embed/7u0Ec2eGZV0?autoplay=1&modestbranding=1&rel=0"
            title="Our work with Clean Energy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ),
        link: new URL("https://www.palantir.com/offerings/energy/#carbon"),
        video: {
          location: "/videos/previews/cleanenergy/videopreview.mp4",
          startTime: 0,
          poster: cleanenergyPoster,
        },
      },
    },
  ],

  /**
   * PATENTS
   */
  patents: [
    {
      type: "patent",
      id: "id of patent",
      label: "Name of the patent",
      link: new URL("https://patents.justia.com/patent/1158567"),
      date: "2024",
    },
    {
      type: "patent",
      id: "id of patent",
      label:
        "Name of the patent",
      link: new URL("https://patents.justia.com/patent/1150062"),
      date: "2024",
    },
  ],

  /**
   * LOCATIONS WORKED
   */
  locationsWorked: [
    {
      type: "locationWorked",
      locationName: "New York",
      detail: "USA",
      geo: {
        lat: 40.73,
        lon: -73.93,
      },
      preferredPointOfView: {
        lat: 14.45,
        lon: -87.48,
      },
      current: false,
    },
    {
      type: "locationWorked",
      locationName: "Hong Kong",
      detail: "Hong Kong",
      geo: {
        lat: 22.3964,
        lon: 114.1098,
      },
      preferredPointOfView: {
        lat: 5,
        lon: 114.1098,
      },
      current: false,
    },
    {
      type: "locationWorked",
      locationName: "Dubai",
      detail: "UAE",
      geo: {
        lat: 25.276987,
        lon: 55.296249,
      },
      preferredPointOfView: {
        lat: 0.00,
        lon: 55.20,
      },
      current: false,
    },
    {
      type: "locationWorked",
      locationName: "Gwangju",
      detail: "South Korea",
      geo: {
        lat: 35.1595454,
        lon: 126.8526012,
      },
      preferredPointOfView: {
        lat: 10.00,
        lon: 126.70,
      },
      current: true,
    },
    {
      type: "locationWorked",
      locationName: "Moscow",
      detail: "Russia",
      geo: {
        lat: 55.755826,
        lon: 37.6172999,
      },
      preferredPointOfView: {
        lat: 30.00,
        lon: 37.50,
      },
      current: false,
    },
    {
      type: "locationWorked",
      locationName: "Bishkek",
      detail: "Kyrgyzstan",
      geo: {
        lat: 42.8746,
        lon: 74.5698,
      },
      preferredPointOfView: {
        lat: 20.00,
        lon: 74.5698,
      },
      current: false,
    },
  ],
};
