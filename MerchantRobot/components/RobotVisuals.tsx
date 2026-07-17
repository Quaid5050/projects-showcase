"use client";

// SVG-based robot visual components for use in cards and hero sections

export function RobotDogVisual() {
  return (
    <svg viewBox="0 0 220 180" className="w-48 h-40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <rect x="70" y="70" width="80" height="50" rx="12" fill="#2A2A2A" stroke="#CC0000" strokeWidth="1.5"/>
      {/* Head */}
      <rect x="130" y="45" width="50" height="40" rx="10" fill="#333333" stroke="#CC0000" strokeWidth="1.5"/>
      {/* Eye */}
      <circle cx="155" cy="60" r="6" fill="#0D0D0D"/>
      <circle cx="155" cy="60" r="3" fill="#CC0000"/>
      <circle cx="157" cy="58" r="1" fill="#FAFAFA"/>
      {/* Ear */}
      <rect x="172" y="48" width="12" height="18" rx="4" fill="#CC0000"/>
      {/* Tail */}
      <path d="M70 80 Q40 60 50 40" stroke="#CC0000" strokeWidth="4" strokeLinecap="round"/>
      {/* Legs */}
      <rect x="80" y="118" width="14" height="30" rx="6" fill="#333333" stroke="#555" strokeWidth="1"/>
      <rect x="100" y="118" width="14" height="30" rx="6" fill="#333333" stroke="#555" strokeWidth="1"/>
      <rect x="120" y="118" width="14" height="30" rx="6" fill="#333333" stroke="#555" strokeWidth="1"/>
      <rect x="140" y="118" width="14" height="30" rx="6" fill="#333333" stroke="#555" strokeWidth="1"/>
      {/* Feet */}
      <ellipse cx="87" cy="150" rx="10" ry="5" fill="#CC0000"/>
      <ellipse cx="107" cy="150" rx="10" ry="5" fill="#CC0000"/>
      <ellipse cx="127" cy="150" rx="10" ry="5" fill="#CC0000"/>
      <ellipse cx="147" cy="150" rx="10" ry="5" fill="#CC0000"/>
      {/* Tech markings */}
      <line x1="80" y1="88" x2="140" y2="88" stroke="#CC0000" strokeWidth="0.5" strokeDasharray="4 4"/>
      <circle cx="90" cy="88" r="2" fill="#CC0000"/>
      <circle cx="110" cy="88" r="2" fill="#CC0000"/>
      <circle cx="130" cy="88" r="2" fill="#CC0000"/>
    </svg>
  );
}

export function HumanoidVisual() {
  return (
    <svg viewBox="0 0 180 220" className="w-36 h-44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Head */}
      <rect x="55" y="15" width="70" height="65" rx="20" fill="#2A2A2A" stroke="#CC0000" strokeWidth="1.5"/>
      {/* Face screen */}
      <rect x="65" y="25" width="50" height="40" rx="10" fill="#0D0D0D"/>
      {/* Eyes */}
      <ellipse cx="80" cy="42" rx="6" ry="5" fill="#CC0000" opacity="0.9"/>
      <ellipse cx="100" cy="42" rx="6" ry="5" fill="#CC0000" opacity="0.9"/>
      {/* Mouth line */}
      <path d="M76 58 Q90 65 104 58" stroke="#CC0000" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Antenna */}
      <line x1="90" y1="15" x2="90" y2="5" stroke="#CC0000" strokeWidth="2"/>
      <circle cx="90" cy="4" r="3" fill="#CC0000"/>
      {/* Neck */}
      <rect x="78" y="80" width="24" height="15" rx="4" fill="#333333"/>
      {/* Torso */}
      <rect x="45" y="93" width="90" height="70" rx="15" fill="#2A2A2A" stroke="#CC0000" strokeWidth="1.5"/>
      {/* Chest panel */}
      <rect x="60" y="103" width="60" height="45" rx="8" fill="#111111"/>
      <circle cx="90" cy="125" r="12" fill="#0D0D0D" stroke="#CC0000" strokeWidth="1"/>
      <circle cx="90" cy="125" r="7" fill="#CC0000" opacity="0.6"/>
      <circle cx="90" cy="125" r="3" fill="#FF6666"/>
      {/* Arms */}
      <rect x="15" y="93" width="28" height="70" rx="12" fill="#333333" stroke="#555" strokeWidth="1"/>
      <rect x="137" y="93" width="28" height="70" rx="12" fill="#333333" stroke="#555" strokeWidth="1"/>
      {/* Hands */}
      <ellipse cx="29" cy="168" rx="12" ry="8" fill="#CC0000"/>
      <ellipse cx="151" cy="168" rx="12" ry="8" fill="#CC0000"/>
      {/* Legs */}
      <rect x="55" y="162" width="28" height="50" rx="12" fill="#333333" stroke="#555" strokeWidth="1"/>
      <rect x="97" y="162" width="28" height="50" rx="12" fill="#333333" stroke="#555" strokeWidth="1"/>
      {/* Feet */}
      <ellipse cx="69" cy="215" rx="18" ry="7" fill="#2A2A2A" stroke="#CC0000" strokeWidth="1"/>
      <ellipse cx="111" cy="215" rx="18" ry="7" fill="#2A2A2A" stroke="#CC0000" strokeWidth="1"/>
    </svg>
  );
}

export function CookingRobotVisual() {
  return (
    <svg viewBox="0 0 200 200" className="w-44 h-44" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Chef hat */}
      <ellipse cx="100" cy="38" rx="35" ry="10" fill="#FAFAFA"/>
      <rect x="72" y="20" width="56" height="22" rx="8" fill="#FAFAFA"/>
      <ellipse cx="100" cy="20" rx="30" ry="12" fill="#FAFAFA"/>
      {/* Head */}
      <rect x="68" y="40" width="64" height="52" rx="16" fill="#FF6666"/>
      <rect x="68" y="40" width="64" height="52" rx="16" stroke="#CC0000" strokeWidth="1.5"/>
      {/* Eyes - screen like */}
      <rect x="76" y="54" width="18" height="12" rx="5" fill="#0D0D0D"/>
      <rect x="106" y="54" width="18" height="12" rx="5" fill="#0D0D0D"/>
      <rect x="78" y="56" width="14" height="8" rx="3" fill="#CC0000" opacity="0.8"/>
      <rect x="108" y="56" width="14" height="8" rx="3" fill="#CC0000" opacity="0.8"/>
      {/* Smile */}
      <path d="M82 76 Q100 86 118 76" stroke="#CC0000" strokeWidth="2" strokeLinecap="round"/>
      {/* Neck */}
      <rect x="88" y="92" width="24" height="14" rx="4" fill="#2A2A2A"/>
      {/* Body / apron */}
      <rect x="48" y="104" width="104" height="72" rx="18" fill="#FAFAFA"/>
      <rect x="48" y="104" width="104" height="72" rx="18" stroke="#CC0000" strokeWidth="1.5"/>
      {/* Apron bib */}
      <rect x="72" y="110" width="56" height="60" rx="10" fill="#CC0000" opacity="0.15"/>
      <rect x="72" y="110" width="56" height="60" rx="10" stroke="#CC0000" strokeWidth="1" strokeDasharray="3 3"/>
      {/* Buttons */}
      <circle cx="100" cy="125" r="4" fill="#CC0000"/>
      <circle cx="100" cy="140" r="4" fill="#CC0000"/>
      {/* Left arm holding pan */}
      <rect x="18" y="104" width="28" height="55" rx="12" fill="#FAFAFA" stroke="#E5E5E5" strokeWidth="1"/>
      <ellipse cx="32" cy="162" rx="12" ry="7" fill="#FF6666"/>
      {/* Frying pan */}
      <ellipse cx="14" cy="165" rx="20" ry="7" fill="#2A2A2A"/>
      <rect x="32" y="163" width="16" height="4" rx="2" fill="#555"/>
      {/* Steam from pan */}
      <path d="M5 155 Q8 148 5 141" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      <path d="M14 153 Q17 146 14 139" stroke="#FAFAFA" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
      {/* Right arm */}
      <rect x="154" y="104" width="28" height="55" rx="12" fill="#FAFAFA" stroke="#E5E5E5" strokeWidth="1"/>
      <ellipse cx="168" cy="162" rx="12" ry="7" fill="#FF6666"/>
      {/* Spatula */}
      <rect x="175" y="140" width="5" height="35" rx="2" fill="#555"/>
      <rect x="170" y="140" width="15" height="10" rx="3" fill="#888"/>
    </svg>
  );
}

export function HeroRobotVisual() {
  return (
    <svg viewBox="0 0 320 420" className="w-full h-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Glow effect */}
      <ellipse cx="160" cy="380" rx="100" ry="20" fill="#CC0000" opacity="0.15"/>
      {/* Head */}
      <rect x="80" y="40" width="160" height="130" rx="35" fill="#1a1a1a" stroke="#CC0000" strokeWidth="2"/>
      {/* Visor / face screen */}
      <rect x="95" y="60" width="130" height="90" rx="22" fill="#0A0A0A"/>
      <rect x="95" y="60" width="130" height="90" rx="22" stroke="#CC0000" strokeWidth="1" opacity="0.5"/>
      {/* Eyes */}
      <ellipse cx="135" cy="98" rx="20" ry="16" fill="#CC0000" opacity="0.15"/>
      <ellipse cx="185" cy="98" rx="20" ry="16" fill="#CC0000" opacity="0.15"/>
      <ellipse cx="135" cy="98" rx="12" ry="10" fill="#CC0000"/>
      <ellipse cx="185" cy="98" rx="12" ry="10" fill="#CC0000"/>
      <ellipse cx="138" cy="95" rx="4" ry="3" fill="#FAFAFA" opacity="0.9"/>
      <ellipse cx="188" cy="95" rx="4" ry="3" fill="#FAFAFA" opacity="0.9"/>
      {/* Mouth display */}
      <rect x="120" y="125" width="80" height="14" rx="6" fill="#111111"/>
      <rect x="122" y="127" width="50" height="10" rx="4" fill="#CC0000" opacity="0.6"/>
      {/* Antenna */}
      <line x1="160" y1="40" x2="160" y2="18" stroke="#CC0000" strokeWidth="2.5"/>
      <circle cx="160" cy="14" r="6" fill="#CC0000"/>
      <circle cx="160" cy="14" r="3" fill="#FF6666"/>
      {/* Neck */}
      <rect x="130" y="170" width="60" height="25" rx="8" fill="#2A2A2A" stroke="#CC0000" strokeWidth="1"/>
      {/* Torso */}
      <rect x="55" y="193" width="210" height="140" rx="30" fill="#1a1a1a" stroke="#CC0000" strokeWidth="2"/>
      {/* Chest panel */}
      <rect x="85" y="215" width="150" height="95" rx="15" fill="#0D0D0D"/>
      {/* Center orb */}
      <circle cx="160" cy="260" r="28" fill="#1a0e06" stroke="#CC0000" strokeWidth="1.5"/>
      <circle cx="160" cy="260" r="18" fill="#CC0000" opacity="0.2"/>
      <circle cx="160" cy="260" r="10" fill="#CC0000" opacity="0.6"/>
      <circle cx="160" cy="260" r="5" fill="#FF6666"/>
      {/* Side indicators */}
      <circle cx="105" cy="235" r="5" fill="#CC0000" opacity="0.8"/>
      <circle cx="215" cy="235" r="5" fill="#CC0000" opacity="0.8"/>
      <circle cx="105" cy="295" r="5" fill="#CC0000" opacity="0.4"/>
      <circle cx="215" cy="295" r="5" fill="#CC0000" opacity="0.4"/>
      {/* Tech lines */}
      <line x1="95" y1="253" x2="130" y2="253" stroke="#CC0000" strokeWidth="0.8" opacity="0.5"/>
      <line x1="190" y1="253" x2="225" y2="253" stroke="#CC0000" strokeWidth="0.8" opacity="0.5"/>
      {/* Arms */}
      <rect x="15" y="193" width="38" height="110" rx="18" fill="#1a1a1a" stroke="#CC0000" strokeWidth="1.5"/>
      <rect x="267" y="193" width="38" height="110" rx="18" fill="#1a1a1a" stroke="#CC0000" strokeWidth="1.5"/>
      {/* Hand left */}
      <ellipse cx="34" cy="310" rx="18" ry="12" fill="#2A2A2A" stroke="#CC0000" strokeWidth="1"/>
      {/* Hand right */}
      <ellipse cx="286" cy="310" rx="18" ry="12" fill="#2A2A2A" stroke="#CC0000" strokeWidth="1"/>
      {/* Waist */}
      <rect x="85" y="333" width="150" height="20" rx="8" fill="#2A2A2A" stroke="#CC0000" strokeWidth="1"/>
      {/* Legs */}
      <rect x="85" y="350" width="60" height="60" rx="18" fill="#1a1a1a" stroke="#CC0000" strokeWidth="1.5"/>
      <rect x="175" y="350" width="60" height="60" rx="18" fill="#1a1a1a" stroke="#CC0000" strokeWidth="1.5"/>
      {/* Feet */}
      <ellipse cx="115" cy="415" rx="38" ry="10" fill="#2A2A2A" stroke="#CC0000" strokeWidth="1"/>
      <ellipse cx="205" cy="415" rx="38" ry="10" fill="#2A2A2A" stroke="#CC0000" strokeWidth="1"/>
      {/* Peach face accent */}
      <ellipse cx="160" cy="88" rx="22" ry="18" fill="#FF6666" opacity="0.08"/>
    </svg>
  );
}
