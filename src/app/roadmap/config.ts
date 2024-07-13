import { CheckIcon, ClockIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import { ArrowPathIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

interface IStatus {
  icon: typeof CheckIcon;
  color: string;
}
interface F_STAUTS {
  Done: IStatus;
  Processing: IStatus;
  Pending: IStatus;
}
const FEATURE_STATUS: F_STAUTS = {
  Done: {
    color: "bg-[#12bd94] text-white",
    icon: CheckIcon,
  },
  Processing: {
    color: "text-[#fff] bg-[#455cff] animate-spin",
    icon: ArrowPathIcon,
  },
  Pending: {
    color: "text-[#fff] bg-[#4e5f87] animate-pulse",
    icon: ClockIcon,
  },
} as const;

interface IFeatures {
  id: string;
  title: string;
  status: IStatus;
}
interface IRoadmap {
  id: string;
  title: string;
  icon: string;
  features: IFeatures[];
}

export const ROADMAP_DATA: IRoadmap[] = [
  //  Q4 2022

  {
    id: "01",
    icon: "https://assets.espento.com/images/roadmap/q1.png",
    title: "Q4, 2022",
    features: [
      {
        id: "1",
        title: "SPENT Token Creation",
        status: FEATURE_STATUS.Done,
      },
      {
        id: "2",
        title: "Whitepaper",
        status: FEATURE_STATUS.Done,
      },
      {
        id: "3",
        title: "Swap Protocol",
        status: FEATURE_STATUS.Done,
      },
      {
        id: "4",
        title: "Yield Farm Protocol",
        status: FEATURE_STATUS.Done,
      },
      {
        id: "4",
        title: "Staking Protocol",
        status: FEATURE_STATUS.Done,
      },
      {
        id: "4",
        title: "Bridge Development",
        status: FEATURE_STATUS.Done,
      },
      {
        id: "4",
        title: "BUSD Pegged-Stable Token",
        status: FEATURE_STATUS.Done,
      },
      {
        id: "4",
        title: "LP Tokens -Smart Contract",
        status: FEATURE_STATUS.Done,
      },
      {
        id: "4",
        title: "Add SPENT To Pancake Swap",
        status: FEATURE_STATUS.Done,
      },
    ],
  },

  //  Q1 2023
  {
    id: "02",
    icon: "https://assets.espento.com/images/roadmap/q2.png",
    title: "Q1 2023",
    features: [
      {
        id: "1",
        title: "Lending-Borrowing Protocol",
        status: FEATURE_STATUS.Processing,
      },
      {
        id: "2",
        title: "DAO Protocol",
        status: FEATURE_STATUS.Processing,
      },
      {
        id: "2",
        title: "Payment Gateway",
        status: FEATURE_STATUS.Processing,
      },
      {
        id: "2",
        title: "Game Development v1.0",
        status: FEATURE_STATUS.Processing,
      },
      {
        id: "2",
        title: "List Project On Coingecko",
        status: FEATURE_STATUS.Done,
      },
      {
        id: "2",
        title: "List Project On Coinmarketcap",
        status: FEATURE_STATUS.Done,
      },
    ],
  },

  //  Q2 2023
  {
    id: "03",
    icon: "https://assets.espento.com/images/roadmap/q3.png",
    title: "Q2 2023",
    features: [
      {
        id: "1",
        title: "Launchpad",
        status: FEATURE_STATUS.Pending,
      },
      {
        id: "3",
        title: "Game Development v2.0",
        status: FEATURE_STATUS.Pending,
      },
      {
        id: "4",
        title: "Dex With Layer 2 Solution",
        status: FEATURE_STATUS.Pending,
      },
      {
        id: "5",
        title: "Contract Deployment On Ethereum",
        status: FEATURE_STATUS.Pending,
      },
      {
        id: "6",
        title: "Contract Deployment On Avalanche",
        status: FEATURE_STATUS.Pending,
      },
      {
        id: "7",
        title: "Contract Deployment On Arbitrum",
        status: FEATURE_STATUS.Pending,
      },
      {
        id: "7",
        title: "Contract Deployment On Polygon",
        status: FEATURE_STATUS.Pending,
      },
      {
        id: "8",
        title: "Contract Deployment On Fantom",
        status: FEATURE_STATUS.Pending,
      },
    ],
  },

  //  Q3 2023
  {
    id: "04",
    icon: "https://assets.espento.com/images/roadmap/q4.png",
    title: "Q3 2023",
    features: [
      {
        id: "1",
        title: "Espento Name Service(ENS)",
        status: FEATURE_STATUS.Pending,
      },
      {
        id: "2",
        title: "Web3 Wallet",
        status: FEATURE_STATUS.Pending,
      },
      {
        id: "3",
        title: "Limit Order Protocol",
        status: FEATURE_STATUS.Pending,
      },
      {
        id: "4",
        title: "Aggregation Protocol ",
        status: FEATURE_STATUS.Pending,
      },
      {
        id: "5",
        title: "Game Development v3.0",
        status: FEATURE_STATUS.Pending,
      },
      {
        id: "6",
        title: "Blockchain Research",
        status: FEATURE_STATUS.Pending,
      },
      {
        id: "7",
        title: "Metaverse Research",
        status: FEATURE_STATUS.Pending,
      },
    ],
  },

  //  Q4 2023
  {
    id: "05",
    icon: "https://assets.espento.com/images/roadmap/q5.png",
    title: "Q4 2023",
    features: [
      {
        id: "1",
        title: "Game Development v4.0",
        status: FEATURE_STATUS.Pending,
      },
      {
        id: "2",
        title: "Blockchain Development",
        status: FEATURE_STATUS.Pending,
      },
      {
        id: "3",
        title: "DPN With a Router",
        status: FEATURE_STATUS.Pending,
      },
      {
        id: "4",
        title: "SPENT Integration With Payment Card Companies",
        status: FEATURE_STATUS.Pending,
      },
      {
        id: "5",
        title: "SPENT Integration With E-Commerce",
        status: FEATURE_STATUS.Pending,
      },
      {
        id: "6",
        title: "Espento Pay QR Code App",
        status: FEATURE_STATUS.Pending,
      },
      {
        id: "7",
        title: "Metaverse Development",
        status: FEATURE_STATUS.Pending,
      },
    ],
  },
];
