import { useState } from 'react';

interface MetricChartProps {
  data: number[];
  color: "voltage" | "power";
  height?: number;
  title?: string;
  value?: string;
  timestamp?: string;
}

export const MetricChart = ({ data, color, height = 100, title, value, timestamp }: MetricChartProps) => {
  const [tooltip, setTooltip] = useState<{ x: number; y: number; value: string; show: boolean }>({
    x: 0, y: 0, value: '', show: false
  });

  const handleMouseMove = (e: React.MouseEvent<SVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    
    // Calculate approximate value based on cursor position for demo
    let displayValue = '';
    if (color === "voltage") {
      const voltage = Math.round(235 + Math.sin(x * 0.1) * 10);
      displayValue = `${voltage}V (${timestamp || '5 mins'})`;
    } else {
      const current = (18 + Math.sin(x * 0.15) * 2).toFixed(1);
      const power = Math.round(3650 + Math.sin(x * 0.12) * 200);
      displayValue = `${current}A / ${power}W (${timestamp || '5 mins'})`;
    }
    
    setTooltip({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      value: displayValue,
      show: true
    });
  };

  const handleMouseLeave = () => {
    setTooltip(prev => ({ ...prev, show: false }));
  };
  if (color === "voltage") {
    // Single voltage chart
    return (
      <div className="absolute inset-0 rounded overflow-hidden">
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 100 100" 
          preserveAspectRatio="none"
          className="absolute inset-0 cursor-pointer"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <defs>
            <linearGradient id="voltage-fill" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ff9f40" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#4a3531" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#4a3531" stopOpacity="1"/>
            </linearGradient>
            <filter id="glow-voltage">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge> 
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Voltage filled area */}
          <path 
            d="M 0 100 L 0 25 Q 20 22 40 25 Q 60 27 80 23 Q 90 21 100 24 L 100 100 Z" 
            fill="url(#voltage-fill)" 
          />
          
          {/* Voltage line */}
          <path 
            d="M 0 25 Q 20 22 40 25 Q 60 27 80 23 Q 90 21 100 24" 
            fill="none" 
            stroke="#ff9f40" 
            strokeWidth="2" 
            vectorEffect="non-scaling-stroke" 
            filter="url(#glow-voltage)"
          />
        </svg>
        
        {/* Tooltip */}
        {tooltip.show && (
          <div 
            className="absolute pointer-events-none z-10 bg-gray-900/95 text-white px-2 py-1 rounded text-xs border border-orange-500/50"
            style={{ 
              left: tooltip.x - 30, 
              top: tooltip.y - 35,
              transform: 'translateX(-50%)'
            }}
          >
            {tooltip.value}
          </div>
        )}
      </div>
    );
  }

  // Current & Power dual chart
  return (
    <div className="absolute inset-0 rounded overflow-hidden">
      <svg 
        width="100%" 
        height="100%" 
        viewBox="0 0 100 100" 
        preserveAspectRatio="none"
        className="absolute inset-0 cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <defs>
          {/* Orange-Brown gradient for Current (bottom layer) */}
          <linearGradient id="current-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#ff8c42" stopOpacity="0.7"/>
            <stop offset="60%" stopColor="#8b4513" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#4a3531" stopOpacity="0.9"/>
          </linearGradient>
          
          {/* Purple gradient for Power (top layer) */}
          <linearGradient id="power-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" stopOpacity="0.8"/>
            <stop offset="60%" stopColor="#7c3aed" stopOpacity="0.8"/>
            <stop offset="100%" stopColor="#2d2254" stopOpacity="0.9"/>
          </linearGradient>
          
          <filter id="glow-power">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Current area (bottom - orange/brown) */}
        <path 
          d="M 0 100 L 0 68 Q 20 66 40 68 Q 60 70 80 67 Q 90 66 100 68 L 100 100 Z" 
          fill="url(#current-gradient)" 
        />
        
        {/* Current boundary line */}
        <path 
          d="M 0 68 Q 20 66 40 68 Q 60 70 80 67 Q 90 66 100 68" 
          fill="none" 
          stroke="#ff8c42" 
          strokeWidth="2" 
          vectorEffect="non-scaling-stroke" 
        />
        
        {/* Power area (top - purple) */}
        <path 
          d="M 0 68 Q 20 66 40 68 Q 60 70 80 67 Q 90 66 100 68 L 100 22 Q 85 20 70 22 Q 50 24 30 21 Q 15 20 0 22 Z" 
          fill="url(#power-gradient)" 
        />
        
        {/* Power boundary line */}
        <path 
          d="M 0 22 Q 15 20 30 21 Q 50 24 70 22 Q 85 20 100 22" 
          fill="none" 
          stroke="#a855f7" 
          strokeWidth="2" 
          vectorEffect="non-scaling-stroke" 
          filter="url(#glow-power)"
        />
      </svg>
      
      {/* Tooltip */}
      {tooltip.show && (
        <div 
          className="absolute pointer-events-none z-10 bg-gray-900/95 text-white px-2 py-1 rounded text-xs border border-purple-500/50"
          style={{ 
            left: tooltip.x - 40, 
            top: tooltip.y - 35,
            transform: 'translateX(-50%)'
          }}
        >
          {tooltip.value}
        </div>
      )}
    </div>
  );
};