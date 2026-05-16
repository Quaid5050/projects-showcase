"use client";

export default function Ticker() {
  const items = [
    "First Aid Coverage",
    "Event Safety",
    "Worksite Safety",
    "Industrial Sites",
    "Construction Sites",
    "Metro Vancouver",
    "Fair Prices",
    "Free AED",
  ];

  return (
    <>
      <style jsx>{`
        .ticker-wrap {
          width: 100%;
          overflow: hidden;
          background: #7C3AED;
          height: 42px;
          display: flex;
          align-items: center;
        }

        .ticker {
          display: flex;
          width: max-content;
          animation: moveTicker 20s linear infinite;
        }

        .ticker-item {
          white-space: nowrap;
          padding: 0 32px;
          color: #1A0A2E;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        @keyframes moveTicker {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>

      <div className="ticker-wrap">
        <div className="ticker">
          {[...items, ...items].map((item, i) => (
            <div className="ticker-item" key={i}>
              {item} ◆
            </div>
          ))}
        </div>
      </div>
    </>
  );
}