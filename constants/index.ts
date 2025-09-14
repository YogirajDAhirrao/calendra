export const DAYS_OF_WEEK_IN_ORDER = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
] as const;

export const PrivateNavLinks = [
  {
    imgUrl: "/assests/events.svg",
    route: "/events",
    label: "My Events",
  },
  { imgUrl: "assests/schedule.svg", route: "/schedule", label: "MY schedule" },
  { imgUrl: "/assests/public.svg", route: "/book", label: "Public Profile" },
] as const;
