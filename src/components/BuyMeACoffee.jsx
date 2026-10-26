import bmcLogo from "../assets/bmc-logo.svg";
import { DATA } from "../constants";

export default function BuyMeACoffee({ variant = "button", className = "" }) {
  const linkProps = {
    href: DATA.buyMeACoffeeUrl,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": "Buy me a coffee - support my work",
  };

  // Icon-only link for the footer, made to stand out like a small brand badge.
  if (variant === "icon") {
    return (
      <a
        {...linkProps}
        title="Buy me a coffee"
        className={`inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#FFDD00] shadow-[var(--shadow)] ring-1 ring-black/10 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFE74C] hover:shadow-[var(--shadow-md)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D0C22] ${className}`}
      >
        <img
          src={bmcLogo}
          alt=""
          aria-hidden="true"
          className="h-7 w-auto shrink-0"
        />
      </a>
    );
  }

  return (
    <a
      {...linkProps}
      className={`group inline-flex items-center justify-center gap-2 rounded-lg border border-black/10 bg-[#FFDD00] px-5 py-2.5 text-sm font-semibold tracking-tight text-[#0D0C22] shadow-[0_1px_2px_rgba(26,23,21,0.12)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#FFE74C] hover:shadow-[var(--shadow-md)] active:translate-y-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0D0C22] ${className}`}
    >
      <img
        src={bmcLogo}
        alt=""
        aria-hidden="true"
        className="h-5 w-auto shrink-0"
      />
      Buy me a coffee
    </a>
  );
}
