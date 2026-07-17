import React from "react";

interface IconProps {
  className?: string;
  color?: string;
  size?: number;
}

export function ShieldIcon({ className = "", color = "#F26522", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2L3 6V12C3 16.5 7 20.7 12 22C17 20.7 21 16.5 21 12V6L12 2Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path d="M9 12L11 14L15 10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function WrenchIcon({ className = "", color = "#F26522", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function ToolsIcon({ className = "", color = "#F26522", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 9L3 6M9 6L6 3M3 9L6 12" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function CheckCircleIcon({ className = "", color = "#F26522", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
      <path d="M9 12L11 14L15 10" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MapleLeafIcon({ className = "", color = "#F26522", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2C12 2 9 6 6 6C6 6 9 8 8 11C8 11 5 10 4 12C4 12 7 12 8 14C8 14 6 15 7 17C7 17 10 15 12 16V22M12 2C12 2 15 6 18 6C18 6 15 8 16 11C16 11 19 10 20 12C20 12 17 12 16 14C16 14 18 15 17 17C17 17 14 15 12 16"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function HomeIcon({ className = "", color = "#F26522", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 12L12 3L21 12V20C21 20.55 20.55 21 20 21H15V16H9V21H4C3.45 21 3 20.55 3 20V12Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="9" y="14" width="6" height="7" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export function BuildingIcon({ className = "", color = "#F26522", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="3" width="20" height="18" rx="1" stroke={color} strokeWidth="2" />
      <path d="M2 9H22M2 15H22" stroke={color} strokeWidth="2" />
      <path d="M8 3V21M16 3V21" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export function TractorIcon({ className = "", color = "#F26522", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="7" cy="17" r="3" stroke={color} strokeWidth="2" />
      <circle cx="17" cy="18" r="2" stroke={color} strokeWidth="2" />
      <path d="M10 17H15M15 18V13L12 9H7V14" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M15 11H19L21 14" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function PhoneIcon({ className = "", color = "#F26522", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
}

export function MailIcon({ className = "", color = "#F26522", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="4" width="20" height="16" rx="2" stroke={color} strokeWidth="2" />
      <path d="M2 7L12 13L22 7" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function GlobeIcon({ className = "", color = "#F26522", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="2" />
      <path d="M2 12H22M12 3C10 7 10 17 12 21M12 3C14 7 14 17 12 21" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export function MapPinIcon({ className = "", color = "#F26522", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="12" cy="9" r="2.5" stroke={color} strokeWidth="2" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "", color = "#FFFFFF", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 12H19M13 6L19 12L13 18" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ChevronDownIcon({ className = "", color = "#FFFFFF", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 9L12 15L18 9" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className = "", color = "#FFFFFF", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 6H21M3 12H21M3 18H21" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function XIcon({ className = "", color = "#FFFFFF", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M6 18L18 6M6 6L18 18" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function FacebookIcon({ className = "", color = "#FFFFFF", size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
      <path d="M18 2H15C13.67 2 12.4 2.53 11.46 3.46C10.53 4.4 10 5.67 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73 14.11 6.48 14.29 6.29C14.48 6.11 14.73 6 15 6H18V2Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "", color = "#FFFFFF", size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" stroke={color} strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1" fill={color} />
    </svg>
  );
}

export function GoogleIcon({ className = "", color = "#FFFFFF", size = 20 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M22 12.24C22 11.56 21.94 10.88 21.82 10.22H12V14.05H17.6C17.37 15.3 16.67 16.35 15.61 17.05V19.55H18.94C20.89 17.75 22 15.2 22 12.24Z" fill={color} />
      <path d="M12 22C14.81 22 17.17 21.09 18.94 19.55L15.61 17.05C14.7 17.65 13.47 18 12 18C9.3 18 7.01 16.18 6.19 13.73H2.75V16.3C4.51 19.79 8.01 22 12 22Z" fill={color} />
      <path d="M6.19 13.73C5.98 13.13 5.86 12.49 5.86 11.82C5.86 11.15 5.98 10.51 6.19 9.91V7.34H2.75C2.05 8.72 1.67 10.28 1.67 11.82C1.67 13.36 2.05 14.92 2.75 16.3L6.19 13.73Z" fill={color} />
      <path d="M12 5.64C13.61 5.64 15.06 6.2 16.2 7.28L19.02 4.46C17.17 2.74 14.81 1.67 12 1.67C8.01 1.67 4.51 3.88 2.75 7.37L6.19 9.94C7.01 7.47 9.3 5.64 12 5.64Z" fill={color} />
    </svg>
  );
}

export function MessageIcon({ className = "", color = "#F26522", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M21 15C21 15.55 20.78 16.08 20.39 16.46C20 16.84 19.47 17.07 18.92 17.07H6.92L3 21V5C3 4.45 3.22 3.92 3.61 3.54C4 3.16 4.53 2.93 5.08 2.93H18.92C19.47 2.93 20 3.16 20.39 3.54C20.78 3.92 21 4.45 21 5V15Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LockIcon({ className = "", color = "#7C7C7C", size = 16 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="11" width="18" height="11" rx="2" stroke={color} strokeWidth="2" />
      <path d="M7 11V7C7 4.24 9.24 2 12 2C14.76 2 17 4.24 17 7V11" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function QuietIcon({ className = "", color = "#F26522", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M11 5L6 9H2V15H6L11 19V5Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 9L17 15M17 9L23 15" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function HandshakeIcon({ className = "", color = "#F26522", size = 24 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M20.42 4.58C19.92 4.08 19.29 3.76 18.61 3.67C17.93 3.58 17.24 3.74 16.67 4.13L13 7H7L3 11L5.5 13.5L8 11H9L11.83 13.83L12.67 14.67C13.46 15.46 14.54 15.46 15.33 14.67L20.42 9.58C20.92 9.08 21.2 8.41 21.2 7.71C21.2 7.01 20.92 6.34 20.42 5.84" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 11L7 15L5 17L3 15" stroke={color} strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Consistent orange-tint badge wrapper used across feature bars and solution cards
export function IconBadge({
  children,
  size = 46,
  radius = 10,
  tone = "tint",
}: {
  children: React.ReactNode;
  size?: number;
  radius?: number;
  tone?: "tint" | "overlay";
}) {
  return (
    <span
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        backgroundColor: tone === "overlay" ? "rgba(8,8,8,0.78)" : "rgba(242,101,34,0.10)",
        border: "1px solid rgba(242,101,34,0.45)",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </span>
  );
}

// Icon resolver
export function Icon({ name, ...props }: IconProps & { name: string }) {
  const icons: Record<string, React.FC<IconProps>> = {
    shield: ShieldIcon,
    wrench: WrenchIcon,
    tools: ToolsIcon,
    "check-circle": CheckCircleIcon,
    maple: MapleLeafIcon,
    home: HomeIcon,
    building: BuildingIcon,
    tractor: TractorIcon,
    phone: PhoneIcon,
    mail: MailIcon,
    globe: GlobeIcon,
    "map-pin": MapPinIcon,
    "arrow-right": ArrowRightIcon,
    "chevron-down": ChevronDownIcon,
    menu: MenuIcon,
    x: XIcon,
    message: MessageIcon,
    lock: LockIcon,
    quiet: QuietIcon,
    handshake: HandshakeIcon,
  };
  const Component = icons[name] || ShieldIcon;
  return <Component {...props} />;
}
