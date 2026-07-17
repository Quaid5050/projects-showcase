import React from 'react';
interface IconProps { className?: string; size?: number; style?: React.CSSProperties; }

export const DiamondIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M12 2L2 9L12 22L22 9L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M2 9H22" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 2L8 9L12 22L16 9L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);
export const GraduationIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M12 3L1 9L12 15L23 9L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M5 12V18L12 21.5L19 18V12" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M23 9V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
export const ToolsIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);
export const ZoomIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <rect x="2" y="4" width="15" height="13" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M17 9.5L22 7V14L17 11.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <circle cx="9.5" cy="10.5" r="2" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);
export const CertificateIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <rect x="3" y="2" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M7 7H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M7 11H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="17" cy="17" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M15.5 17L16.5 18L18.5 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export const PhoneIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M22 16.92V19.92C22 20.48 21.56 20.93 21 20.97C20.66 21 20.33 21.01 20 21.01C10.61 21.01 3 13.4 3 3.99C3 3.67 3.01 3.34 3.03 3.01C3.07 2.45 3.52 2.01 4.08 2.01H7.08C7.58 2.01 8 2.38 8.06 2.88C8.12 3.34 8.22 3.79 8.36 4.22C8.5 4.64 8.39 5.11 8.07 5.43L6.62 6.88C8.06 9.51 10.49 11.94 13.12 13.38L14.57 11.93C14.89 11.61 15.36 11.5 15.78 11.64C16.21 11.78 16.66 11.88 17.12 11.94C17.62 12 17.99 12.42 17.99 12.92V16.92H22Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);
export const EmailIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 7L12 13L22 7" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);
export const LocationIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M12 2C8.13 2 5 5.13 5 9C5 14.25 12 22 12 22C12 22 19 14.25 19 9C19 5.13 15.87 2 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
    <circle cx="12" cy="9" r="3" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);
export const WhatsAppIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
    <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);
export const ClockIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
export const StarIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
  </svg>
);
export const CheckIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export const ArrowRightIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export const MenuIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
export const CloseIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
export const GlobeIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22C9.5 19.5 8 16 8 12C8 8 9.5 4.5 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);
export const ShieldIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M12 2L3 7V12C3 17.55 6.84 22.74 12 24C17.16 22.74 21 17.55 21 12V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export const UsersIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M2 21V18C2 15.79 3.79 14 6 14H12C14.21 14 16 15.79 16 18V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="19" cy="8" r="3" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M22 21V19C22 17.34 20.66 16 19 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
export const MicroscopeIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M6 21H18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 21V18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 21V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <circle cx="12" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M12 12V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M10 5L14 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    <path d="M14 5L10 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);
export const SparkleIcon: React.FC<IconProps> = ({ className = '', size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} style={style}>
    <path d="M12 2L14.09 8.26L20 9.27L15.55 13.97L16.91 20.02L12 17.27L7.09 20.02L8.45 13.97L4 9.27L9.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
  </svg>
);