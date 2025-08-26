interface TimelineSegment {
  type: 'connected' | 'degraded' | 'down';
  start: number;
  duration: number;
}

interface TimelineBarProps {
  timelineData: TimelineSegment[];
}

export default function TimelineBar({ timelineData }: TimelineBarProps) {
  const segmentColors = {
    connected: 'bg-green-400',
    degraded: 'bg-yellow-300',
    down: 'bg-red-400',
  };

  return (
    <div className="h-6 bg-gray-200 rounded-sm overflow-hidden relative w-full">
      {timelineData.map((segment, index) => (
        <div
          key={index}
          className={`absolute top-0 h-full ${segmentColors[segment.type]}`}
          style={{
            left: `${segment.start}%`,
            width: `${segment.duration}%`,
            borderRadius: index === 0 || index === timelineData.length - 1 ? '0.125rem' : 0,
          }}
        />
      ))}
    </div>
  );
}
