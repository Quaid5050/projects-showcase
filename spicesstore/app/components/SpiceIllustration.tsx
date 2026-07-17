import React from "react";
// Full decorative SVG illustrations for each spice - not just icons, real visual scenes
export default function SpiceIllustration({ id, color, bgColor }: { id: string; color: string; bgColor: string }) {
  const illustrations: Record<string, React.ReactElement> = {
    "turmeric-powder": (
      <svg width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="200" height="180" fill={bgColor}/>
        {/* Bowl */}
        <ellipse cx="100" cy="130" rx="62" ry="18" fill={color} opacity="0.18"/>
        <path d="M42 110 Q42 145 100 148 Q158 145 158 110 L145 108 Q145 138 100 140 Q55 138 55 108Z" fill={color} opacity="0.35"/>
        <ellipse cx="100" cy="110" rx="45" ry="12" fill={color} opacity="0.55"/>
        {/* Powder pile */}
        <ellipse cx="100" cy="108" rx="38" ry="9" fill={color} opacity="0.9"/>
        <path d="M68 108 Q100 90 132 108" stroke={color} strokeWidth="1.5" fill="none" opacity="0.5"/>
        {/* Root shape - turmeric root */}
        <path d="M78 72 Q72 55 80 42 Q88 30 90 45 Q92 55 88 68Z" fill={color} opacity="0.7" rx="5"/>
        <path d="M88 68 Q94 52 104 40 Q112 30 112 48 Q110 60 104 70Z" fill={color} opacity="0.75"/>
        <path d="M104 70 Q112 58 120 48 Q128 38 126 55 Q122 65 115 72Z" fill={color} opacity="0.65"/>
        <path d="M78 72 Q100 78 115 72 Q100 82 78 72Z" fill={color} opacity="0.4"/>
        {/* Knobs on root */}
        <circle cx="80" cy="44" r="5" fill={color} opacity="0.6"/>
        <circle cx="104" cy="41" r="4" fill={color} opacity="0.6"/>
        <circle cx="125" cy="56" r="4" fill={color} opacity="0.55"/>
        {/* Scattered powder */}
        <circle cx="55" cy="100" r="3" fill={color} opacity="0.45"/>
        <circle cx="140" cy="98" r="2.5" fill={color} opacity="0.4"/>
        <circle cx="62" cy="118" r="2" fill={color} opacity="0.3"/>
        <circle cx="148" cy="115" r="2" fill={color} opacity="0.3"/>
        {/* Leaf */}
        <path d="M58 72 Q50 60 55 48 Q70 52 68 68Z" fill="#8AAF5C" opacity="0.55"/>
        <path d="M55 48 L62 62" stroke="#6B8A42" strokeWidth="1.2" opacity="0.5"/>
      </svg>
    ),

    "cumin-seeds": (
      <svg width="200" height="180" viewBox="0 0 200 180" fill="none">
        <rect width="200" height="180" fill={bgColor}/>
        {/* Wooden spoon */}
        <path d="M60 155 L75 90 Q80 75 90 68 Q108 62 118 72 Q128 84 120 100 Q110 115 95 118 L80 155Z" fill="#D4A574" opacity="0.6"/>
        <ellipse cx="104" cy="85" rx="18" ry="22" fill="#C4915A" opacity="0.5"/>
        {/* Seeds in spoon bowl */}
        {[[96,80],[102,76],[110,79],[98,87],[106,85],[114,82],[100,92],[108,90]].map(([x,y],i)=>(
          <ellipse key={i} cx={x} cy={y} rx="4" ry="1.8" fill={color} opacity="0.85" transform={`rotate(${-20+i*15} ${x} ${y})`}/>
        ))}
        {/* Seeds scattered */}
        {[[45,60],[50,75],[155,65],[160,80],[148,55],[38,90],[162,95],[55,140],[145,138]].map(([x,y],i)=>(
          <ellipse key={i} cx={x} cy={y} rx="4.5" ry="2" fill={color} opacity={0.55+i*0.03} transform={`rotate(${i*30} ${x} ${y})`}/>
        ))}
        {/* Small pile bottom */}
        <ellipse cx="100" cy="155" rx="30" ry="8" fill={color} opacity="0.2"/>
        {[...Array(12)].map((_,i)=>(
          <ellipse key={i} cx={78+i*4} cy={152+Math.sin(i)*4} rx="4" ry="1.8" fill={color} opacity="0.7" transform={`rotate(${i*25} ${78+i*4} ${152+Math.sin(i)*4})`}/>
        ))}
        {/* Stripe lines on seeds */}
        <line x1="45" y1="59" x2="49" y2="61" stroke={color} strokeWidth="0.7" opacity="0.4"/>
      </svg>
    ),

    "cardamom-green": (
      <svg width="200" height="180" viewBox="0 0 200 180" fill="none">
        <rect width="200" height="180" fill={bgColor}/>
        {/* Branch */}
        <path d="M30 170 Q60 140 90 110 Q105 95 120 80" stroke="#8AAF5C" strokeWidth="3.5" fill="none" strokeLinecap="round" opacity="0.6"/>
        {/* Pods on branch */}
        {[[88,115],[100,100],[112,87],[75,128]].map(([x,y],i)=>(
          <g key={i}>
            <path d={`M${x-5} ${y+10} Q${x-10} ${y} ${x-5} ${y-10} Q${x} ${y-15} ${x+5} ${y-10} Q${x+10} ${y} ${x+5} ${y+10} Z`}
              fill="#6B9B50" opacity={0.75-i*0.05}/>
            <line x1={x} y1={y-13} x2={x} y2={y+12} stroke="#4A7335" strokeWidth="1" opacity="0.5"/>
            <line x1={x-7} y1={y-4} x2={x+7} y2={y-4} stroke="#4A7335" strokeWidth="0.8" opacity="0.4"/>
            <line x1={x-7} y1={y+2} x2={x+7} y2={y+2} stroke="#4A7335" strokeWidth="0.8" opacity="0.4"/>
          </g>
        ))}
        {/* Open pod with seeds */}
        <path d="M140 90 Q130 80 132 65 Q135 52 145 55 Q155 58 155 72 Q153 88 140 90Z" fill="#7AAD5A" opacity="0.8"/>
        <path d="M140 90 Q148 80 150 65" stroke="#4A7335" strokeWidth="1.5" fill="none" opacity="0.5"/>
        <circle cx="140" cy="70" r="4" fill="#2C1810" opacity="0.7"/>
        <circle cx="143" cy="78" r="3.5" fill="#2C1810" opacity="0.65"/>
        <circle cx="138" cy="82" r="3" fill="#2C1810" opacity="0.6"/>
        {/* Small leaf */}
        <path d="M60 148 Q50 135 58 122 Q70 128 68 142Z" fill="#8AAF5C" opacity="0.55"/>
        {/* Scattered pods */}
        <path d="M155 130 Q148 122 149 112 Q152 105 158 108 Q164 112 162 122Z" fill="#6B9B50" opacity="0.65"/>
        <path d="M42 65 Q36 58 38 50 Q41 45 46 48 Q51 52 48 60Z" fill="#6B9B50" opacity="0.55"/>
        {/* Floating seeds */}
        <circle cx="165" cy="140" r="3.5" fill="#2C1810" opacity="0.5"/>
        <circle cx="170" cy="148" r="3" fill="#2C1810" opacity="0.45"/>
        <circle cx="38" cy="140" r="3" fill="#2C1810" opacity="0.4"/>
      </svg>
    ),

    "coriander-powder": (
      <svg width="200" height="180" viewBox="0 0 200 180" fill="none">
        <rect width="200" height="180" fill={bgColor}/>
        {/* Jar */}
        <rect x="68" y="60" width="64" height="85" rx="8" fill="white" opacity="0.7" stroke={color} strokeWidth="1.5"/>
        <rect x="72" y="55" width="56" height="18" rx="6" fill="#DDD" opacity="0.6"/>
        {/* Powder in jar */}
        <rect x="70" y="105" width="60" height="38" rx="0" fill={color} opacity="0.35"/>
        <path d="M70 105 Q100 98 130 105" fill={color} opacity="0.55"/>
        {/* Label */}
        <rect x="76" y="115" width="48" height="20" rx="4" fill="white" opacity="0.6"/>
        {/* Scattered seeds */}
        {[[40,70],[45,90],[148,75],[155,95],[42,120],[160,118],[50,145],[152,148]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="4.5" fill={color} opacity={0.55+i*0.04}/>
        ))}
        {/* Seeds with ribs */}
        {[[40,70],[148,75]].map(([x,y],i)=>(
          <g key={i}>
            <circle cx={x} cy={y} r="4.5" fill={color} opacity="0.6"/>
            {[-2,0,2].map(d=><line key={d} x1={x+d} y1={y-4} x2={x+d} y2={y+4} stroke={color} strokeWidth="0.5" opacity="0.4"/>)}
          </g>
        ))}
        {/* Sprig */}
        <path d="M28 155 Q35 135 40 115 Q45 95 55 80" stroke="#8AAF5C" strokeWidth="2" fill="none" strokeLinecap="round" opacity="0.55"/>
        <path d="M38 118 Q30 112 32 104 Q42 108 38 118Z" fill="#8AAF5C" opacity="0.55"/>
        <path d="M44 100 Q38 92 42 84 Q52 88 44 100Z" fill="#8AAF5C" opacity="0.5"/>
      </svg>
    ),

    "red-chili-powder": (
      <svg width="200" height="180" viewBox="0 0 200 180" fill="none">
        <rect width="200" height="180" fill={bgColor}/>
        {/* Whole dried chili peppers */}
        <path d="M50 45 Q48 60 52 78 Q56 95 58 110 Q60 125 55 135 Q52 142 58 145 Q64 148 68 138 Q72 125 70 108 Q68 90 70 72 Q72 55 65 42 Q58 32 50 45Z" fill={color} opacity="0.8"/>
        <path d="M50 45 Q58 48 65 42" stroke="#8B3220" strokeWidth="1.5" fill="none"/>
        {/* Chili stem */}
        <path d="M62 38 Q65 28 68 22 Q70 18 72 20 Q70 28 68 38" fill="#6B7C5C" opacity="0.7"/>
        {/* Second chili */}
        <path d="M135 50 Q140 65 138 85 Q136 105 140 122 Q144 138 140 148 Q136 156 130 152 Q124 148 126 135 Q128 120 126 100 Q124 80 128 60 Q132 42 140 38 Q148 35 145 50 Q141 58 135 50Z" fill={color} opacity="0.75"/>
        <path d="M140 38 Q135 30 128 32" stroke="#8B3220" strokeWidth="1.5" fill="none"/>
        <path d="M138 32 Q140 22 136 15 Q134 11 132 14 Q132 22 138 32" fill="#6B7C5C" opacity="0.65"/>
        {/* Powder pile */}
        <ellipse cx="100" cy="162" rx="45" ry="10" fill={color} opacity="0.2"/>
        <path d="M60 162 Q100 148 140 162" fill={color} opacity="0.45"/>
        {/* Scattered specks */}
        {[[85,145],[92,152],[108,150],[115,143],[78,158],[122,157]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r={1.5+i*0.3} fill={color} opacity="0.65"/>
        ))}
        {/* Small chili */}
        <path d="M168 80 Q170 90 168 100 Q166 110 168 118 Q170 124 167 126 Q164 128 162 122 Q160 114 162 104 Q164 94 162 84 Q160 75 165 70 Q170 66 172 74 Q170 80 168 80Z" fill={color} opacity="0.6"/>
      </svg>
    ),

    "garam-masala": (
      <svg width="200" height="180" viewBox="0 0 200 180" fill="none">
        <rect width="200" height="180" fill={bgColor}/>
        {/* Mortar */}
        <path d="M55 130 Q55 165 100 168 Q145 165 145 130 L138 128 Q138 158 100 160 Q62 158 62 128Z" fill="#C4915A" opacity="0.6"/>
        <ellipse cx="100" cy="130" rx="45" ry="14" fill="#D4A574" opacity="0.7"/>
        {/* Mixed spices in mortar */}
        <ellipse cx="100" cy="128" rx="36" ry="10" fill={color} opacity="0.55"/>
        {/* Different colored spice bits */}
        {[[85,124],[95,120],[108,122],[92,128],[105,126],[115,124],[88,130],[102,132]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="2.5" fill={i%3===0?"#E8A020":i%3===1?"#C4622D":"#2C1810"} opacity="0.7"/>
        ))}
        {/* Pestle */}
        <path d="M130 70 L118 120 Q115 128 110 128 Q105 126 108 120 L120 68 Q124 58 130 55 Q138 52 140 60 Q140 68 130 70Z" fill="#D4A574" opacity="0.75"/>
        <ellipse cx="130" cy="68" rx="8" ry="5" fill="#C4915A" opacity="0.7"/>
        {/* Scattered whole spices */}
        <ellipse cx="45" cy="80" rx="5" ry="2.5" fill="#8B6914" opacity="0.65" transform="rotate(-30 45 80)"/>
        <circle cx="55" cy="95" r="4" fill="#E8A020" opacity="0.6"/>
        <path d="M158 85 L162 72 L166 85 L158 82Z" fill="#2C1810" opacity="0.6"/>
        <circle cx="42" cy="115" r="3.5" fill="#C4622D" opacity="0.55"/>
        <ellipse cx="160" cy="112" rx="5" ry="2.5" fill="#8B6914" opacity="0.6" transform="rotate(20 160 112)"/>
        <path d="M152 60 Q155 52 158 45 Q162 38 166 45 Q168 55 162 60Z" fill="#8B6914" opacity="0.5"/>
      </svg>
    ),

    "black-pepper": (
      <svg width="200" height="180" viewBox="0 0 200 180" fill="none">
        <rect width="200" height="180" fill={bgColor}/>
        {/* Pepper vine branch */}
        <path d="M30 30 Q60 50 80 80 Q100 110 110 145" stroke="#6B7C5C" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.55"/>
        {/* Leaves */}
        <path d="M55 58 Q42 48 45 36 Q60 40 55 58Z" fill="#7A9E6B" opacity="0.6"/>
        <path d="M72 82 Q58 74 62 62 Q76 66 72 82Z" fill="#7A9E6B" opacity="0.55"/>
        {/* Pepper clusters on vine */}
        {[[68,70],[75,78],[65,80],[80,88],[70,95],[85,75]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="5.5" fill="#1A1A1A" opacity={0.7+i*0.03}/>
        ))}
        {/* Cracked pepper mill */}
        <path d="M130 50 Q128 65 130 80 Q132 90 130 100" stroke="#8B6030" strokeWidth="14" strokeLinecap="round" opacity="0.5"/>
        <ellipse cx="130" cy="50" rx="12" ry="8" fill="#A07040" opacity="0.7"/>
        <ellipse cx="130" cy="100" rx="12" ry="8" fill="#A07040" opacity="0.7"/>
        {/* Pepper falling out */}
        {[[122,108],[130,112],[138,106],[125,118],[133,120],[140,115],[118,114]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="4.5" fill="#1A1A1A" opacity={0.65+i*0.02}/>
        ))}
        {/* Scattered on table */}
        {[[45,148],[58,155],[75,150],[155,142],[162,155],[170,148],[148,158]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="4" fill="#1A1A1A" opacity="0.55"/>
        ))}
      </svg>
    ),

    "mustard-seeds": (
      <svg width="200" height="180" viewBox="0 0 200 180" fill="none">
        <rect width="200" height="180" fill={bgColor}/>
        {/* Mustard plant branch */}
        <path d="M50 170 Q65 145 75 115 Q85 88 90 65" stroke="#9AAF50" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6"/>
        {/* Yellow flowers */}
        {[[88,68],[80,85],[72,105]].map(([x,y],i)=>(
          <g key={i}>
            {[0,72,144,216,288].map(a=>(
              <ellipse key={a} cx={x+7*Math.cos(a*Math.PI/180)} cy={y+7*Math.sin(a*Math.PI/180)} rx="5" ry="3.5" fill="#E8C020" opacity="0.75" transform={`rotate(${a} ${x+7*Math.cos(a*Math.PI/180)} ${y+7*Math.sin(a*Math.PI/180)})`}/>
            ))}
            <circle cx={x} cy={y} r="4" fill="#D4A017" opacity="0.8"/>
          </g>
        ))}
        {/* Pan - tadka effect */}
        <path d="M100 148 Q100 168 145 170 Q190 168 190 148 L182 146 Q182 162 145 164 Q108 162 108 146Z" fill="#888" opacity="0.35"/>
        <ellipse cx="145" cy="148" rx="45" ry="12" fill="#999" opacity="0.4"/>
        {/* Jumping seeds in pan */}
        {[[125,138],[135,130],[145,135],[155,128],[160,138],[140,125],[150,142]].map(([x,y],i)=>(
          <circle key={i} cx={x} cy={y} r="3.8" fill="#2A2000" opacity={0.7+i*0.02}/>
        ))}
        {/* Jumping seeds above pan */}
        <circle cx="132" cy="118" r="3.5" fill="#2A2000" opacity="0.65"/>
        <circle cx="148" cy="112" r="3" fill="#2A2000" opacity="0.6"/>
        <circle cx="162" cy="120" r="3.5" fill="#2A2000" opacity="0.6"/>
        {/* Pan handle */}
        <path d="M188 148 L210 145" stroke="#777" strokeWidth="8" strokeLinecap="round" opacity="0.4"/>
      </svg>
    ),

    "default": (
      <svg width="200" height="180" viewBox="0 0 200 180" fill="none">
        <rect width="200" height="180" fill={bgColor}/>
        {/* Decorative bowl with spice */}
        <ellipse cx="100" cy="148" rx="65" ry="18" fill={color} opacity="0.15"/>
        <path d="M40 118 Q40 155 100 158 Q160 155 160 118 L150 116 Q150 148 100 150 Q50 148 50 116Z" fill={color} opacity="0.3"/>
        <ellipse cx="100" cy="118" rx="50" ry="13" fill={color} opacity="0.5"/>
        <ellipse cx="100" cy="116" rx="40" ry="9" fill={color} opacity="0.8"/>
        {/* Spice pile */}
        <path d="M65 116 Q100 100 135 116" fill={color} opacity="0.65"/>
        {/* Decorative particles */}
        {[...Array(8)].map((_,i)=>{
          const a = i * 45 * Math.PI/180;
          return <circle key={i} cx={100+55*Math.cos(a)} cy={100+45*Math.sin(a)} r="4" fill={color} opacity={0.35+i*0.04}/>
        })}
        {/* Center decoration */}
        <circle cx="100" cy="72" r="22" fill={color} opacity="0.2"/>
        <circle cx="100" cy="72" r="14" fill={color} opacity="0.35"/>
        <circle cx="100" cy="72" r="8" fill={color} opacity="0.65"/>
        {/* Lines */}
        {[0,60,120,180,240,300].map((a,i)=>(
          <line key={i} x1="100" y1="72" x2={100+20*Math.cos(a*Math.PI/180)} y2={72+20*Math.sin(a*Math.PI/180)} stroke={color} strokeWidth="1.5" opacity="0.3"/>
        ))}
      </svg>
    )
  };

  return illustrations[id] || illustrations["default"];
}
