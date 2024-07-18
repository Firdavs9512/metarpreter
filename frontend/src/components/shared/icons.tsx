import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircuitBoardIcon,
  Command,
  CreditCard,
  File,
  FilePieChart,
  FileText,
  GalleryVerticalEnd,
  Gift,
  Globe,
  HandCoins,
  HelpCircle,
  Image,
  Laptop,
  LayoutDashboardIcon,
  Link,
  Loader2,
  LogIn,
  LogOut,
  LucideIcon,
  LucideProps,
  MessageSquareQuote,
  MessageSquareText,
  Moon,
  MoreVertical,
  Newspaper,
  PackagePlus,
  Pizza,
  Plus,
  Presentation,
  Repeat,
  Server,
  Settings,
  SunMedium,
  Ticket,
  Trash,
  TrendingUp,
  User,
  User2Icon,
  UserPlus,
  UserX2Icon,
  Wrench,
  ScanSearch,
  X,
  PackageSearch,
  Dna,
  FerrisWheel,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  dashboard: LayoutDashboardIcon,
  logo: Command,
  login: LogIn,
  close: X,
  profile: User2Icon,
  spinner: Loader2,
  kanban: CircuitBoardIcon,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  employee: UserX2Icon,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  wrench: Wrench,
  globe: Globe,
  server: Server,
  filePieChart: FilePieChart,
  handCoins: HandCoins,
  gift: Gift,
  scanSearch: ScanSearch,
  packageSearch: PackageSearch,
  dna: Dna,
  ferrisWheel: FerrisWheel,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  check: Check,
  galleryVerticalEnd: GalleryVerticalEnd,
  newspaper: Newspaper,
  userPlus: UserPlus,
  packagePlus: PackagePlus,
  trendingUp: TrendingUp,
  messageSquareText: MessageSquareText,
  repeat: Repeat,
  creditCard: CreditCard,
  presentation: Presentation,
  logOut: LogOut,
  coins: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="2"
      stroke="currentColor"
      {...props}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
      />
    </svg>
  ),
  bonus: ({ ...props }: LucideProps) => (
    <svg
      baseProfile="tiny"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth={2}
      {...props}
    >
      <g>
        <g transform="translate(3.000000, 4.000000)">
          <path
            fill-rule="evenodd"
            fill="#5C85DE"
            d="M3.8,2.8C0.9,2.8,0.6-1,3.8-1C6.1-1,7.1-0.3,9,0.5C11.1-0.3,11.9-1,14.2-1
    c3.2,0,2.9,3.8,0,3.8H3.8z"
          />
          <path
            fill-rule="evenodd"
            fill="#3367D6"
            d="M3.8,2.8h10.4C15,2.8,15.7,2.4,16,2L9,2.8L2,2C2.3,2.4,3,2.8,3.8,2.8z"
          />
          <path
            fill-rule="evenodd"
            fill="#85A4E6"
            d="M17.2,8.8H9.8V17h6c0.8,0,1.5-0.7,1.5-1.5V8.8L17.2,8.8z"
          />
          <path
            fill-rule="evenodd"
            fill="#85A4E6"
            d="M0.8,8.8h7.5V17h-6c-0.8,0-1.5-0.7-1.5-1.5V8.8L0.8,8.8z"
          />
          <path
            fill-rule="evenodd"
            fill="#85A4E6"
            d="M8.2,8V2.8H0.8c-0.8,0-1.5,0.7-1.5,1.5V8H8.2z"
          />
          <path
            fill-rule="evenodd"
            fill="#85A4E6"
            d="M18.8,8h-9V2.8h7.5c0.8,0,1.5,0.7,1.5,1.5V8L18.8,8z"
          />
          <rect
            x="0.8"
            y="8"
            fill-rule="evenodd"
            fill="#3367D6"
            width="7.5"
            height="1.5"
          />
          <rect
            x="9.8"
            y="8"
            fill-rule="evenodd"
            fill="#3367D6"
            width="7.5"
            height="1.5"
          />
          <rect
            x="10.5"
            y="2.8"
            fill-rule="evenodd"
            fill="#3367D6"
            width="0.8"
            height="14.2"
          />
          <rect
            x="7.5"
            y="2.8"
            fill-rule="evenodd"
            fill="#5C85DE"
            width="3"
            height="14.2"
          />
        </g>
      </g>
    </svg>
  ),
  messageSquareQuote: MessageSquareQuote,
  ticket: Ticket,
  link: Link,
  coin: ({ ...props }: LucideProps) => (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m493.176 274.813c0 130.983-106.168 237.184-237.201 237.184-131 0-237.15-106.2-237.15-237.184 0-130.975 106.15-237.184 237.15-237.184 131.033 0 237.201 106.209 237.201 237.184z"
        fill="#fbb040"
      ></path>
      <path
        d="m270.676 435.463c-131.001 0-196.551-72.533-233.001-111.434v43.566c10.767 25.301 25.8 48.334 44.2 68.234v-43.9c15.716 17 33.833 31.699 53.9 43.533v43.783c13.883 8.184 28.7 14.983 44.2 20.25v-43.733c17.184 5.8 35.2 9.8 53.9 11.533v43.634c7.3.666 14.65 1.066 22.1 1.066 7.467 0 14.85-.4 22.135-1.066v-43.634c18.699-1.733 36.715-5.733 53.898-11.533v43.7c15.5-5.233 30.301-12.033 44.201-20.217v-43.783c20.066-11.834 38.184-26.533 53.9-43.533v43.9c18.398-19.9 33.449-42.934 44.215-68.234v-43.566c-25.533 17.834-72.615 111.434-203.648 111.434zm-157.651-99.834c-9.684-21.633-15.2-45.566-15.2-70.808 0-95.9 77.717-173.65 173.634-173.65 59.332 0 111.666 29.8 142.982 75.191-12.933-70.108-97.298-117.041-167.966-117.041-95.9 0-177.767 86.866-177.767 182.758 0 36.567 2.834 83.2 44.317 103.55z"
        fill="#f7941e"
      ></path>
      <path
        d="m255.975.004c-131 0-237.15 106.2-237.15 237.175 0 131.018 106.15 237.185 237.15 237.185 131.033 0 237.201-106.167 237.201-237.185 0-130.975-106.168-237.175-237.201-237.175zm0 410.826c-95.9 0-173.633-77.75-173.633-173.651 0-95.892 77.733-173.649 173.633-173.649 95.918 0 173.668 77.758 173.668 173.649 0 95.901-77.75 173.651-173.668 173.651z"
        fill="#f9ed32"
      ></path>
    </svg>
  ),
  animationSpin: ({ ...props }: LucideProps) => (
    <svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg" {...props}>
      <line
        x1="128"
        y1="32"
        x2="128"
        y2="64"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></line>
      <line
        x1="195.9"
        y1="60.1"
        x2="173.3"
        y2="82.7"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></line>
      <line
        x1="224"
        y1="128"
        x2="192"
        y2="128"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></line>
      <line
        x1="195.9"
        y1="195.9"
        x2="173.3"
        y2="173.3"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></line>
      <line
        x1="128"
        y1="224"
        x2="128"
        y2="192"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></line>
      <line
        x1="60.1"
        y1="195.9"
        x2="82.7"
        y2="173.3"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></line>
      <line
        x1="32"
        y1="128"
        x2="64"
        y2="128"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></line>
      <line
        x1="60.1"
        y1="60.1"
        x2="82.7"
        y2="82.7"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="24"
      ></line>
    </svg>
  ),
  triangleAlertIcon: ({ ...props }: LucideProps) => (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" />
      <path d="M12 9v4" />
      <path d="M12 17h.01" />
    </svg>
  ),
  google: ({ ...props }: LucideProps) => (
    <svg
      width="256px"
      height="262px"
      viewBox="0 0 256 262"
      version="1.1"
      preserveAspectRatio="xMidYMid"
      {...props}
    >
      <g>
        <path
          d="M255.878,133.451 C255.878,122.717 255.007,114.884 253.122,106.761 L130.55,106.761 L130.55,155.209 L202.497,155.209 C201.047,167.249 193.214,185.381 175.807,197.565 L175.563,199.187 L214.318,229.21 L217.003,229.478 C241.662,206.704 255.878,173.196 255.878,133.451"
          fill="#4285F4"
        ></path>
        <path
          d="M130.55,261.1 C165.798,261.1 195.389,249.495 217.003,229.478 L175.807,197.565 C164.783,205.253 149.987,210.62 130.55,210.62 C96.027,210.62 66.726,187.847 56.281,156.37 L54.75,156.5 L14.452,187.687 L13.925,189.152 C35.393,231.798 79.49,261.1 130.55,261.1"
          fill="#34A853"
        ></path>
        <path
          d="M56.281,156.37 C53.525,148.247 51.93,139.543 51.93,130.55 C51.93,121.556 53.525,112.853 56.136,104.73 L56.063,103 L15.26,71.312 L13.925,71.947 C5.077,89.644 0,109.517 0,130.55 C0,151.583 5.077,171.455 13.925,189.152 L56.281,156.37"
          fill="#FBBC05"
        ></path>
        <path
          d="M130.55,50.479 C155.064,50.479 171.6,61.068 181.029,69.917 L217.873,33.943 C195.245,12.91 165.798,0 130.55,0 C79.49,0 35.393,29.301 13.925,71.947 L56.136,104.73 C66.726,73.253 96.027,50.479 130.55,50.479"
          fill="#EB4335"
        ></path>
      </g>
    </svg>
  ),
};
