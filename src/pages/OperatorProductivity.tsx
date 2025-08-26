// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { ArrowLeft, Download, Settings, AlertCircle } from "lucide-react"



//   // Different data sets for each time period




// const OperatorProductivity = () => {
//   const [selectedPeriod, setSelectedPeriod] = useState<"24h" | "7d" | "30d">("24h")
//   const [hoveredSegment, setHoveredSegment] = useState<number | null>(null)
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
//     const timelineData = {
//     "24h": {
//       uptime: "91.667%",
//       status: "Operational",
//       icon: AlertCircle,
//       iconColor: "text-red-500",
//       segments: 48, // 48 half-hour segments
//       timeLabels: ["00:00", "06:00", "12:00", "18:00", "24:00"],
//       connected: "91.7%",
//       degraded: "4.2%",
//       down: "4.2%",
//     },
//     "7d": {
//       uptime: "93.452%",
//       status: "Operational",
//       icon: AlertCircle,
//       iconColor: "text-red-500",
//       segments: 168, // 7 days × 24 hours = 168 hourly segments
//       timeLabels: ["Aug 16", "Aug 17", "Aug 18", "Aug 19", "Aug 20", "Aug 21", "Aug 22"],
//       connected: "92.0%",
//       degraded: "5.1%",
//       down: "3.0%",
//     },
//     "30d": {
//       uptime: "91.667%",
//       status: "Operational",
//       icon: AlertCircle,
//       iconColor: "text-green-500",
//       segments: 720, // 30 days × 24 hours = 720 hourly segments for more granular data
//       timeLabels: ["Jul 24", "Aug 1", "Aug 9", "Aug 17"],
//       connected: "93.5%",
//       degraded: "5.0%",
//       down: "1.5%",
//     },
//   }

//   // Generate tooltip content based on segment and period
//   const getTooltipContent = (segment: { status: string; index: number }) => {
//     const getStatusText = (status: string) => {
//       switch (status) {
//         case "connected":
//           return "Connected"
//         case "degraded":
//           return "Degraded"
//         case "down":
//           return "Down"
//         default:
//           return "Unknown"
//       }
//     }

//     const getStatusColor = (status: string) => {
//       switch (status) {
//         case "connected":
//           return "text-green-400"
//         case "degraded":
//           return "text-yellow-400"
//         case "down":
//           return "text-red-400"
//         default:
//           return "text-gray-400"
//       }
//     }

//     // Generate date and time based on period
//     const getDateTime = () => {
//       const now = new Date()
//       const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

//       if (selectedPeriod === "24h") {
//         const hour = Math.floor(segment.index / 2)
//         const minute = segment.index % 2 === 0 ? "00" : "30"
//         return `Aug ${now.getDate().toString().padStart(2, "0")} ${hour.toString().padStart(2, "0")}:${minute}`
//       } else if (selectedPeriod === "7d") {
//         // For 7d view, we have 168 hourly segments (7 days × 24 hours)
//         const dayIndex = Math.floor(segment.index / 24)
//         const hourInDay = segment.index % 24
//         const targetDate = new Date(2024, 7, 16 + dayIndex) // Aug 16-22, 2024
//         return `${months[targetDate.getMonth()]} ${targetDate.getDate().toString().padStart(2, "0")} ${hourInDay.toString().padStart(2, "0")}:00`
//       } else {
//         // For 30d view, we have 720 hourly segments (30 days × 24 hours)
//         const dayIndex = Math.floor(segment.index / 24)
//         const hourInDay = segment.index % 24
//         const startDate = new Date(2024, 6, 24) // July 24, 2024
//         const targetDate = new Date(startDate.getTime() + dayIndex * 24 * 60 * 60 * 1000)
//         return `${months[targetDate.getMonth()]} ${targetDate.getDate().toString().padStart(2, "0")} ${hourInDay.toString().padStart(2, "0")}:00`
//       }
//     }

//     return {
//       dateTime: getDateTime(),
//       status: getStatusText(segment.status),
//       statusColor: getStatusColor(segment.status),
//     }
//   }

//   const currentData = timelineData[selectedPeriod]
//   const StatusIcon = currentData.icon

//   // Generate timeline segments based on selected period
//   const generateTimelineSegments = () => {
//     const segments = []
//     for (let i = 0; i < currentData.segments; i++) {
//       let status = "connected"
//       // Set seed for consistent results
//       const seed = i * 7 + selectedPeriod.charCodeAt(0)
//       const random = Math.abs(Math.sin(seed)) * 100

//       if (selectedPeriod === "24h") {
//         // More frequent issues distributed throughout 24h view
//         if (random > 91) status = "down"
//         else if (random > 84) status = "degraded"
//       } else if (selectedPeriod === "7d") {
//         if (random > 97) status = "down"
//         else if (random > 94.9) status = "degraded"
//       } else {
//         if (random > 98.5) status = "down"
//         else if (random > 95) status = "degraded"
//       }
//       segments.push({ status, index: i })
//     }
//     return segments
//   }

//   const timelineSegments = generateTimelineSegments()

//     const getStatusColor = (status: string) => {
//     switch (status) {
//       case "connected":
//         return "bg-green-500"
//       case "degraded":
//         return "bg-yellow-500"
//       case "down":
//         return "bg-red-500"
//       default:
//         return "bg-gray-500"
//     }
//   }

//   return (
//       <div className="min-h-screen bg-slate-900 text-white ">
//       {/* Header */}
//       <div className="border-b border-slate-700 bg-slate-800">
//         <div className="w-full px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center gap-4">
//               <Link to="/" className="flex items-center gap-2 hover:text-blue-400 transition-colors">
//                 <ArrowLeft className="w-4 h-4" />
//               </Link>
//               <div>
//                 <div className="flex items-center gap-3">
//                   <h1 className="text-3xl font-bold text-white">Operator Productivity</h1>
//                 </div>
//                 <p className="text-sm text-slate-400 mt-1">Real-time productivity and timeline analysis for all operators</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-3">
//               <Button
//                 variant="outline"
//                 size="sm"
//                 className="border-slate-600 text-slate-300 hover:bg-slate-700 bg-transparent"
//               >
//                 <Download className="w-4 h-4 mr-2" />
//                 Export Data
//               </Button>
//               <Button className="bg-green-600 hover:bg-green-700 text-white" size="sm">
//                 <Settings className="w-4 h-4 mr-2" />
//                 Configure
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="w-full px-6 py-6">
//         {/* Status Timeline */}
//         <Card className="mb-6 bg-slate-800 border-slate-700">
//           <CardHeader>
//             <div className="flex items-center justify-between h-4">
//               <div className="flex items-center gap-3">
//                 {/* <StatusIcon className={`w-5 h-5 ${currentData.iconColor}`} /> */}
//                 <div>
//                   <Badge className="bg-white text-black text-sm px-3 py-1 cursor-pointer hover:bg-gray-200 transition-colors"> Operator: Aditya</Badge>

//                   <span
//                     className={`text-sm ${
//                       selectedPeriod === "24h"
//                         ? "text-green-500"
//                         : selectedPeriod === "7d"
//                           ? "text-green-500"
//                           : "text-red-500"
//                     }`}
//                   >
//                     {currentData.status}
//                   </span>
//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center gap-2">
//                   <Button
//                     size="sm"
//                     onClick={() => setSelectedPeriod("24h")}
//                     className={`text-xs px-3 py-1 ${
//                       selectedPeriod === "24h"
//                         ? "bg-blue-600 text-white"
//                         : "bg-transparent text-slate-400 border border-slate-600 hover:bg-slate-700"
//                     }`}
//                   >
//                     24h
//                   </Button>
//                   <Button
//                     size="sm"
//                     onClick={() => setSelectedPeriod("7d")}
//                     className={`text-xs px-3 py-1 ${
//                       selectedPeriod === "7d"
//                         ? "bg-blue-600 text-white"
//                         : "bg-transparent text-slate-400 border border-slate-600 hover:bg-slate-700"
//                     }`}
//                   >
//                     7d
//                   </Button>
//                   <Button
//                     size="sm"
//                     onClick={() => setSelectedPeriod("30d")}
//                     className={`text-xs px-3 py-1 ${
//                       selectedPeriod === "30d"
//                         ? "bg-blue-600 text-white"
//                         : "bg-transparent text-slate-400 border border-slate-600 hover:bg-slate-700"
//                     }`}
//                   >
//                     30d
//                   </Button>
//                 </div>
//                 <div className="text-right">
//                   <div className="text-3xl font-bold text-white">{currentData.uptime}</div>
//                   <div className="text-sm text-slate-400">Uptime</div>
//                 </div>
//               </div>
//             </div>
//           </CardHeader>
//           <CardContent>
//             {/* Timeline Bar */}
//             <div className="flex h-7 rounded-sm mb-8 overflow-hidden border border-slate-600 relative">
//               {timelineSegments.map((segment, index) => (
//                 <>
//                   <div
//                     key={segment.index}
//                     className={`flex-1 ${getStatusColor(segment.status)} hover:opacity-80 transition-opacity cursor-pointer relative`}
//                     style={{
//                       minWidth: selectedPeriod === "30d" ? "0.5px" : "auto",
//                     }}
//                     onMouseEnter={(e) => {
//                       setHoveredSegment(segment.index)
//                       setMousePosition({ x: e.clientX, y: e.clientY })
//                     }}
//                     onMouseLeave={() => {
//                       setHoveredSegment(null)
//                     }}
//                     onMouseMove={(e) => setMousePosition({ x: e.clientX, y: e.clientY })}
//                   >
//                     {/* Invisible hover area for 30d view */}
//                     {selectedPeriod === "30d" && (
//                       <div
//                         className="absolute inset-0 z-10"
//                         style={{
//                           minWidth: "3px",
//                           left: "-1px",
//                           right: "-1px",
//                         }}
//                       />
//                     )}
//                   </div>
//                   {index < timelineSegments.length - 1 && <div className="w-px bg-slate-600 opacity-30"></div>}
//                 </>
//               ))}

//               {/* Enhanced Tooltip */}
//               {hoveredSegment !== null && (
//                 <div
//                   className="fixed z-50 pointer-events-none"
//                   style={{
//                     left: mousePosition.x + 10,
//                     top: mousePosition.y - 80,
//                     transform: mousePosition.x > window.innerWidth - 200 ? "translateX(-100%)" : "none",
//                   }}
//                 >
//                   <div className="bg-slate-800 border border-slate-600 rounded-lg shadow-xl p-3 min-w-[200px]">
//                     {(() => {
//                       const segment = timelineSegments.find((s) => s.index === hoveredSegment)
//                       if (!segment) return null
//                       const tooltip = getTooltipContent(segment)
//                       return (
//                         <div className="space-y-2">
//                           <div className="text-white font-medium text-sm border-b border-slate-600 pb-2">
//                             Status Details
//                           </div>
//                           <div className="space-y-1">
//                             <div className="flex text-sm">
//                               <span className="text-slate-400 w-12">Time:</span>
//                               <span className="text-white ml-2">{tooltip.dateTime}</span>
//                             </div>
//                             <div className="flex text-sm">
//                               <span className="text-slate-400 w-12">Status:</span>
//                               <span className={`ml-2 font-medium ${tooltip.statusColor}`}>{tooltip.status}</span>
//                             </div>
//                           </div>
//                         </div>
//                       )
//                     })()}
//                   </div>
//                 </div>
//               )}
//             </div>
//             <div className="flex justify-between text-xs text-slate-400 mb-4">
//               {currentData.timeLabels.map((label, index) => (
//                 <span key={index}>{label}</span>
//               ))}
//             </div>
//             <div className="flex items-center gap-6 text-sm">
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 bg-green-500 rounded-full"></div>
//                 <span className="text-slate-300">{currentData.connected} Connected</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
//                 <span className="text-slate-300">{currentData.degraded} Degraded</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="w-3 h-3 bg-red-500 rounded-full"></div>
//                 <span className="text-slate-300">{currentData.down} Down</span>
//               </div>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
      
//     </div>
//   );
// }

// export default OperatorProductivity;

import TimelineBar from "@/components/TimelineBar";
import { Card } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";


const operators = [
  {
    id: 1,
    name: "Aditya",
    status: "Operational",
    uptime: 94.792,
    connected: 94.8,
    degraded: 3.1,
    down: 2.1,
    timelineData: [
      { type: 'connected' as const, start: 0, duration: 45 },
      { type: 'degraded' as const, start: 45, duration: 3 },
      { type: 'connected' as const, start: 48, duration: 35 },
      { type: 'degraded' as const, start: 83, duration: 5 },
      { type: 'connected' as const, start: 88, duration: 10 },
      { type: 'down' as const, start: 98, duration: 2 }
    ]
  },
  {
    id: 2,
    name: "Neeraj",
    status: "Operational",
    uptime: 90.625,
    connected: 90.6,
    degraded: 6.3,
    down: 3.1,
    timelineData: [
      { type: 'degraded' as const, start: 0, duration: 8 },
      { type: 'connected' as const, start: 8, duration: 40 },
      { type: 'down' as const, start: 48, duration: 4 },
      { type: 'connected' as const, start: 52, duration: 30 },
      { type: 'degraded' as const, start: 82, duration: 10 },
      { type: 'connected' as const, start: 92, duration: 6 },
      { type: 'down' as const, start: 98, duration: 2 }
    ]
  },
  {
    id: 3,
    name: "Rahul",
    status: "Operational",
    uptime: 89.583,
    connected: 89.6,
    degraded: 4.2,
    down: 6.3,
    timelineData: [
      { type: 'down' as const, start: 0, duration: 6 },
      { type: 'degraded' as const, start: 6, duration: 4 },
      { type: 'connected' as const, start: 10, duration: 35 },
      { type: 'degraded' as const, start: 45, duration: 5 },
      { type: 'connected' as const, start: 50, duration: 25 },
      { type: 'degraded' as const, start: 75, duration: 8 },
      { type: 'connected' as const, start: 83, duration: 12 },
      { type: 'down' as const, start: 95, duration: 5 }
    ]
  },
  {
    id: 4,
    name: "Suraj",
    status: "Operational",
    uptime: 89.583,
    connected: 89.6,
    degraded: 6.3,
    down: 4.2,
    timelineData: [
      { type: 'connected' as const, start: 0, duration: 50 },
      { type: 'degraded' as const, start: 50, duration: 8 },
      { type: 'connected' as const, start: 58, duration: 25 },
      { type: 'degraded' as const, start: 83, duration: 5 },
      { type: 'connected' as const, start: 88, duration: 8 },
      { type: 'down' as const, start: 96, duration: 4 }
    ]
  }
];

interface TimelineSegment {
  type: 'connected' | 'degraded' | 'down';
  start: number;
  duration: number;
}

interface Operator {
  id: number;
  name: string;
  status: string;
  uptime: number;
  connected: number;
  degraded: number;
  down: number;
  timelineData: TimelineSegment[];
}

interface OperatorCardProps {
  operator: Operator;
}

export default function Index() {

  const [activePeriod, setActivePeriod] = useState("24h");

  const periods = [
    { id: "24h", label: "24h" },
    { id: "7d", label: "7d" },
    { id: "30d", label: "30d" }
  ];


  return (
    <div className="min-h-screen bg-background p-6 max-w-screen">
      <div className="max-w-10xl mx-auto space-y-6 max-w-screen">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Operator Productivity</h1>
            <p className="text-muted-foreground mt-1">
              Real-time productivity and timeline analysis for all operators
            </p>
          </div>
        </div>

        {/* Operators List */}
        <div className="space-y-4">
          {operators.map((operator) => (
            <Card className="operator-panel p-5 border-border rounded-xl w-full-scree">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="bg-white text-black text-sm px-3 py-1 cursor-pointer hover:bg-gray-200 transition-colors">
              Operator: {operator.name}
            </span>
            <span className="status-indicator operational text-green">
              <div className="w-2 h-2 rounded-full bg-status-connected text-green"></div>
               <span className="text-green-700">{operator.status}</span>
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="flex gap-2">
            <button className="px-3 py-1 bg-primary text-primary-foreground rounded text-sm font-medium">
              24h
            </button>
            <button className="px-3 py-1 bg-muted text-muted-foreground rounded text-sm hover:bg-accent transition-colors">
              7d
            </button>
            <button className="px-3 py-1 bg-muted text-muted-foreground rounded text-sm hover:bg-accent transition-colors">
              30d
            </button>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-foreground">
              {operator.uptime.toFixed(3)}%
            </div>
            <div className="text-sm text-muted-foreground">Uptime</div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {/* Timeline */}
        <div className="relative">
          <TimelineBar timelineData={operator.timelineData} />
          <div className="flex justify-between text-xs text-muted-foreground mt-2">
            <span>00:00</span>
            <span>06:00</span>
            <span>12:00</span>
            <span>18:00</span>
            <span>24:00</span>
          </div>
        </div>

        {/* Status Summary */}
        <div className="flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-status-connected"></div>
            <span className="text-muted-foreground">
              {operator.connected.toFixed(1)}% Connected
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-status-degraded"></div>
            <span className="text-muted-foreground">
              {operator.degraded.toFixed(1)}% Degraded
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-status-down"></div>
            <span className="text-muted-foreground">
              {operator.down.toFixed(1)}% Down
            </span>
          </div>
        </div>
      </div>
    </Card>
          ))}
        </div>
      </div>
    </div>
  );
}