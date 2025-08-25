// import { Badge } from "@/components/ui/badge";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import { MoreVertical, TrendingUp, Zap } from "lucide-react";
// import { MetricChart } from "./MetricChart";
// import { Link } from "react-router-dom";

// interface ProductionLineData {
//   id: string;
//   title: string;
//   status: "optimal" | "warning" | "critical" | "maintenance";
//   operator: string;
//   image: string;
//   production: {
//     lineSpeed: number;
//     currentProduction: number;
//     targetSpeed: number;
//     targetPercentage: number;
//   };
//   progress: {
//     label: string;
//     current: number;
//     target: number;
//     unit: string;
//     remaining: number;
//     estimatedTime: number;
//   };
//   voltage: {
//     value: number;
//     timestamp: string;
//     data: number[];
//   };
//   power: {
//     current: number;
//     watts: number;
//     timestamp: string;
//     data: number[];
//   };
// }

// interface ProductionLineProps {
//   data: ProductionLineData;
// }

// export const ProductionLine = ({ data }: ProductionLineProps) => {
//   const statusColors = {
//     optimal: "bg-success text-black",
//     warning: "bg-warning text-black", 
//     critical: "bg-destructive text-destructive-foreground",
//     maintenance: "bg-warning text-black"
//   };

//   return (
//     <div className="space-y-4">
//       {/* Header */}
//       <div className="flex items-center justify-between">
//         <div className="flex items-center gap-3">
//           {data.title === "Gas cutting: GP-31" ? (
//             <Link 
//               to="/gas-cutting-gp-31" 
//               className="hover:text-primary transition-colors duration-200 cursor-pointer"
//             >
//               <h2 className="text-xl font-semibold text-foreground">{data.title}</h2>
//             </Link>
//           ) : (
//             <h2 className="text-xl font-semibold text-foreground">{data.title}</h2>
//           )}
          
//           {data.title === "Gas cutting: GP-31" ? (
//             <Link to="/gas-cutting-gp-31">
//               <Badge className={`${statusColors[data.status]} text-xs px-2 py-1 hover:opacity-80 transition-opacity duration-200 cursor-pointer`}>
//                 {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
//               </Badge>
//             </Link>
//           ) : (
//             <Badge className={`${statusColors[data.status]} text-xs px-2 py-1`}>
//               {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
//             </Badge>
//           )}
          
//           {data.title === "Gas cutting: GP-31" ? (
//             <Link to="/gas-cutting-gp-31">
//               <Badge className="bg-primary text-primary-foreground text-xs px-2 py-1 hover:opacity-80 transition-opacity duration-200 cursor-pointer">
//                 Operator: {data.operator}
//               </Badge>
//             </Link>
//           ) : (
//             <span className="text-sm text-muted-foreground">
//               Operator: {data.operator}
//             </span>
//           )}


//         </div>
//         <button className="p-2 hover:bg-muted rounded-md transition-all duration-200 hover:scale-110 hover:shadow-md">
//           <MoreVertical className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors duration-200" />
//         </button>
//       </div>

//       {/* Content Grid - 4 columns with wider spacing */}
//       <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
//         {/* Production Image */}
//         <div className="lg:col-span-1">
//           {data.title === "Gas cutting: GP-31" ? (
//             <Link to="/gas-cutting-gp-31" className="block">
//               <img 
//                 src={data.image} 
//                 alt={data.title}
//                 className="w-full h-80 object-cover rounded-lg bg-muted transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
//               />
//             </Link>
//           ) : (
//             <img 
//               src={data.image} 
//               alt={data.title}
//               className="w-full h-80 object-cover rounded-lg bg-muted transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
//             />
//           )}
//         </div>

//         {/* Production Metrics Card */}
//         {data.title === "Gas cutting: GP-31" ? (
//           <Link to="/gas-cutting-gp-31" className="lg:col-span-1">
//             <Card className="bg-card border-border transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:border-primary/50 h-full cursor-pointer">
//               <CardHeader className="pb-3">
//                 <div className="flex items-center gap-2">
//                   <TrendingUp className="w-4 h-4 text-success" />
//                   <CardTitle className="text-sm text-card-foreground">{data.title} - Production</CardTitle>
//                   <Badge variant="secondary" className="text-xs bg-success text-black ml-auto animate-pulse">
//                     Live
//                   </Badge>
//                 </div>
//               </CardHeader>
//               <CardContent className="space-y-4">
//                 <div className="flex justify-between items-start">
//                   <div>
//                     <div className="text-xs text-muted-foreground mb-2">
//                       Current Production
//                     </div>
//                     <div className="flex items-baseline gap-2 mb-1">
//                       <span className="text-2xl font-bold text-foreground">{data.production.currentProduction}</span>
//                       <span className="text-sm text-muted-foreground">MPM</span>
//                       <span className="text-xs text-muted-foreground">/ {data.production.targetSpeed} target</span>
//                     </div>
//                     <Progress 
//                       value={data.production.targetPercentage} 
//                       className="h-1 mb-10 [&>div]:bg-primary"
//                     />
//                   </div>
//                   <div className="text-right">
//                     <div className="text-xs text-muted-foreground">{data.production.lineSpeed} MPM Line Speed</div>
//                     <div className="text-xs text-muted-foreground">{data.production.targetPercentage}% of target</div>
//                   </div>
//                 </div>

//                 <div>
//                   <div className="flex justify-between items-center mb-1">
//                     <span className="text-xs text-muted-foreground">{data.progress.label}</span>
//                     <span className="text-xs text-muted-foreground">
//                       {((data.progress.current / data.progress.target) * 100).toFixed(1)}% complete
//                     </span>
//                   </div>
//                   <div className="mb-2">
//                     <span className="text-lg font-bold text-foreground">{data.progress.current.toLocaleString()}</span>
//                     <span className="text-sm text-foreground ml-1">{data.progress.unit} / {data.progress.target.toLocaleString()} {data.progress.unit} target</span>
//                   </div>
//                   <Progress 
//                     value={(data.progress.current / data.progress.target) * 100} 
//                     className="h-1 mb-2 [&>div]:bg-success"
//                   />
//                   <div className="flex justify-between text-xs text-muted-foreground">
//                     <span>{data.progress.remaining.toLocaleString()} {data.progress.unit} remaining</span>
//                     <span>Est. {data.progress.estimatedTime}min</span>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </Link>
//         ) : (
//           <Card className="lg:col-span-1 bg-card border-border transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:border-primary/50">
//             <CardHeader className="pb-3">
//               <div className="flex items-center gap-2">
//                 <TrendingUp className="w-4 h-4 text-success" />
//                 <CardTitle className="text-sm text-card-foreground">{data.title} - Production</CardTitle>
//                 <Badge variant="secondary" className="text-xs bg-success text-black ml-auto animate-pulse">
//                   Live
//                 </Badge>
//               </div>
//             </CardHeader>
//             <CardContent className="space-y-4">
//               <div className="flex justify-between items-start">
//                 <div>
//                   <div className="text-xs text-muted-foreground mb-2">
//                     Current Production
//                   </div>
//                   <div className="flex items-baseline gap-2 mb-1">
//                     <span className="text-2xl font-bold text-foreground">{data.production.currentProduction}</span>
//                     <span className="text-sm text-muted-foreground">MPM</span>
//                     <span className="text-xs text-muted-foreground">/ {data.production.targetSpeed} target</span>
//                   </div>
//                   <Progress 
//                     value={data.production.targetPercentage} 
//                     className="h-1 mb-10 [&>div]:bg-primary"
//                   />
//                 </div>
//                 <div className="text-right">
//                   <div className="text-xs text-muted-foreground">{data.production.lineSpeed} MPM Line Speed</div>
//                   <div className="text-xs text-muted-foreground">{data.production.targetPercentage}% of target</div>
//                 </div>
//               </div>

//               <div>
//                 <div className="flex justify-between items-center mb-1">
//                   <span className="text-xs text-muted-foreground">{data.progress.label}</span>
//                   <span className="text-xs text-muted-foreground">
//                     {((data.progress.current / data.progress.target) * 100).toFixed(1)}% complete
//                   </span>
//                 </div>
//                 <div className="mb-2">
//                   <span className="text-lg font-bold text-foreground">{data.progress.current.toLocaleString()}</span>
//                   <span className="text-sm text-foreground ml-1">{data.progress.unit} / {data.progress.target.toLocaleString()} {data.progress.unit} target</span>
//                 </div>
//                 <Progress 
//                   value={(data.progress.current / data.progress.target) * 100} 
//                   className="h-1 mb-2 [&>div]:bg-success"
//                 />
//                 <div className="flex justify-between text-xs text-muted-foreground">
//                   <span>{data.progress.remaining.toLocaleString()} {data.progress.unit} remaining</span>
//                   <span>Est. {data.progress.estimatedTime}min</span>
//                 </div>
//               </div>
//             </CardContent>
//           </Card>
//         )}

//         {/* Voltage Chart Card */}
//         {data.title === "Gas cutting: GP-31" ? (
//           <Link to="/gas-cutting-gp-31" className="lg:col-span-1">
//             <Card className="bg-card border-border transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:border-voltage/50 h-full cursor-pointer">
//               <CardHeader className="pb-3">
//                 <div className="flex items-center gap-2">
//                   <Zap className="w-4 h-4 text-voltage transition-all duration-200 hover:scale-110" />
//                   <CardTitle className="text-sm text-card-foreground">{data.title} - Voltage</CardTitle>
//                 </div>
//               </CardHeader>
//               <CardContent className="relative">
//                 <div className="space-y-2">
//                   <div className="flex items-baseline gap-2">
//                     <div className="text-2xl font-bold text-orange-500">
//                       {data.voltage.value}V
//                     </div>
//                     <div className="text-xs text-muted-foreground">
//                       ({data.voltage.timestamp})
//                     </div>
//                   </div>
//                 </div>
//                 <div className="mt-4 h-48 relative">
//                   <MetricChart 
//                     data={data.voltage.data} 
//                     color="voltage" 
//                     height={192}
//                     title={data.title}
//                     value={`${data.voltage.value}V`}
//                     timestamp={data.voltage.timestamp}
//                   />
//                 </div>
//               </CardContent>
//             </Card>
//           </Link>
//         ) : (
//           <Card className="lg:col-span-1 bg-card border-border transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:border-voltage/50">
//             <CardHeader className="pb-3">
//               <div className="flex items-center gap-2">
//                 <Zap className="w-4 h-4 text-voltage transition-all duration-200 hover:scale-110" />
//                 <CardTitle className="text-sm text-card-foreground">{data.title} - Voltage</CardTitle>
//               </div>
//             </CardHeader>
//             <CardContent className="relative">
//               <div className="space-y-2">
//                 <div className="flex items-baseline gap-2">
//                   <div className="text-2xl font-bold text-orange-500">
//                     {data.voltage.value}V
//                   </div>
//                   <div className="text-xs text-muted-foreground">
//                     ({data.voltage.timestamp})
//                   </div>
//                 </div>
//               </div>
//               <div className="mt-4 h-48 relative">
//                 <MetricChart 
//                   data={data.voltage.data} 
//                   color="voltage" 
//                   height={192}
//                   title={data.title}
//                   value={`${data.voltage.value}V`}
//                   timestamp={data.voltage.timestamp}
//                 />
//               </div>
//             </CardContent>
//           </Card>
//         )}

//         {/* Current & Power Chart Card */}
//         {data.title === "Gas cutting: GP-31" ? (
//           <Link to="/gas-cutting-gp-31" className="lg:col-span-1">
//             <Card className="bg-card border-border transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:border-power/50 h-full cursor-pointer">
//               <CardHeader className="pb-3">
//                 <div className="flex items-center gap-2">
//                   <Zap className="w-4 h-4 text-power transition-all duration-200 hover:scale-110" />
//                   <CardTitle className="text-sm text-card-foreground">{data.title} - Current & Power</CardTitle>
//                 </div>
//               </CardHeader>
//               <CardContent className="relative">
//                 <div className="space-y-2">
//                   <div className="flex items-baseline gap-4">
//                     <div className="text-xl font-bold text-orange-500">
//                       {data.power.current}A
//                     </div>
//                     <div className="text-xl font-bold text-purple-500">
//                       {data.power.watts}W
//                     </div>
//                   </div>
//                   <div className="text-xs text-muted-foreground">
//                     ({data.power.timestamp})
//                   </div>
//                 </div>
//                 <div className="mt-4 h-48 relative">
//                   <MetricChart 
//                     data={data.power.data} 
//                     color="power" 
//                     height={192}
//                     title={data.title}
//                     value={`${data.power.current}A / ${data.power.watts}W`}
//                     timestamp={data.power.timestamp}
//                   />
//                 </div>
//               </CardContent>
//             </Card>
//           </Link>
//         ) : (
//           <Card className="lg:col-span-1 bg-card border-border transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:border-power/50">
//             <CardHeader className="pb-3">
//               <div className="flex items-center gap-2">
//                 <Zap className="w-4 h-4 text-power transition-all duration-200 hover:scale-110" />
//                 <CardTitle className="text-sm text-card-foreground">{data.title} - Current & Power</CardTitle>
//               </div>
//             </CardHeader>
//             <CardContent className="relative">
//               <div className="space-y-2">
//                 <div className="flex items-baseline gap-4">
//                   <div className="text-xl font-bold text-orange-500">
//                     {data.power.current}A
//                   </div>
//                   <div className="text-xl font-bold text-purple-500">
//                     {data.power.watts}W
//                   </div>
//                 </div>
//                 <div className="text-xs text-muted-foreground">
//                   ({data.power.timestamp})
//                 </div>
//               </div>
//               <div className="mt-4 h-48 relative">
//                 <MetricChart 
//                   data={data.power.data} 
//                   color="power" 
//                   height={192}
//                   title={data.title}
//                   value={`${data.power.current}A / ${data.power.watts}W`}
//                   timestamp={data.power.timestamp}
//                 />
//               </div>
//             </CardContent>
//           </Card>
//         )}
//       </div>
//     </div>
//   );
// };



import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { MoreVertical, TrendingUp, Zap } from "lucide-react"
import { MetricChart } from "./MetricChart"
import { Link } from "react-router-dom"

interface ProductionLineData {
  id: string
  title: string
  status: "optimal" | "warning" | "critical" | "maintenance"
  operator: string
  image: string
  production: {
    lineSpeed: number
    currentProduction: number
    targetSpeed: number
    targetPercentage: number
  }
  progress: {
    label: string
    current: number
    target: number
    unit: string
    remaining: number
    estimatedTime: number
  }
  voltage: {
    value: number
    timestamp: string
    data: number[]
  }
  power: {
    current: number
    watts: number
    timestamp: string
    data: number[]
  }
}

interface ProductionLineProps {
  data: ProductionLineData
}

export const ProductionLine = ({ data }: ProductionLineProps) => {
  const statusColors = {
    optimal: "bg-success text-black",
    warning: "bg-warning text-black",
    critical: "bg-destructive text-destructive-foreground",
    maintenance: "bg-warning text-black",
  }

  // ✅ Centralized route mapping
  const getRoutePath = (title: string) => {
    switch (title) {
      case "Gas cutting: GP-31":
        return "/gas-cutting-gp-31"
      case "Shot-blasting":
        return "/shot-blasting"
      case "Fit-up & welding TOP":
        return "/fit-up-welding-top-details"
      case "Fit-up & welding BOTTOM":
        return "/fit-up-welding-bottom-details"
      case "Flange Straightening":
        return "/flange-straightening"
      default:
        return "/"
    }
  }

  const routePath = getRoutePath(data.title)

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link
            to={routePath}
            className="hover:text-primary transition-colors duration-200 cursor-pointer"
          >
            <h2 className="text-xl font-semibold text-foreground">{data.title}</h2>
          </Link>

          <Link to={routePath}>
            <Badge
              className={`${statusColors[data.status]} text-xs px-2 py-1 hover:opacity-80 transition-opacity duration-200 cursor-pointer`}
            >
              {data.status.charAt(0).toUpperCase() + data.status.slice(1)}
            </Badge>
          </Link>

          <Link to={routePath}>
            <Badge className="bg-primary text-primary-foreground text-xs px-2 py-1 hover:opacity-80 transition-opacity duration-200 cursor-pointer">
              Operator: {data.operator}
            </Badge>
          </Link>
        </div>
        <button className="p-2 hover:bg-muted rounded-md transition-all duration-200 hover:scale-110 hover:shadow-md">
          <MoreVertical className="w-4 h-4 text-muted-foreground hover:text-foreground transition-colors duration-200" />
        </button>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Production Image */}
        <div className="lg:col-span-1">
          <Link to={routePath} className="block">
            <img
              src={data.image || "/placeholder.svg"}
              alt={data.title}
              className="w-full h-80 object-cover rounded-lg bg-muted transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl cursor-pointer"
            />
          </Link>
        </div>

        {/* Production Metrics */}
        <Link to={routePath} className="lg:col-span-1">
          <Card className="bg-card border-border transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:border-primary/50 h-full cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-success" />
                <CardTitle className="text-sm text-card-foreground">{data.title} - Production</CardTitle>
                <Badge variant="secondary" className="text-xs bg-success text-black ml-auto animate-pulse">
                  Live
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-xs text-muted-foreground mb-2">Current Production</div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-2xl font-bold text-foreground">{data.production.currentProduction}</span>
                    <span className="text-sm text-muted-foreground">MPM</span>
                    <span className="text-xs text-muted-foreground">/ {data.production.targetSpeed} target</span>
                  </div>
                  <Progress value={data.production.targetPercentage} className="h-1 mb-10 [&>div]:bg-primary" />
                </div>
                <div className="text-right">
                  <div className="text-xs text-muted-foreground">{data.production.lineSpeed} MPM Line Speed</div>
                  <div className="text-xs text-muted-foreground">{data.production.targetPercentage}% of target</div>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-muted-foreground">{data.progress.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {((data.progress.current / data.progress.target) * 100).toFixed(1)}% complete
                  </span>
                </div>
                <div className="mb-2">
                  <span className="text-lg font-bold text-foreground">{data.progress.current.toLocaleString()}</span>
                  <span className="text-sm text-foreground ml-1">
                    {data.progress.unit} / {data.progress.target.toLocaleString()} {data.progress.unit} target
                  </span>
                </div>
                <Progress
                  value={(data.progress.current / data.progress.target) * 100}
                  className="h-1 mb-2 [&>div]:bg-success"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>{data.progress.remaining.toLocaleString()} {data.progress.unit} remaining</span>
                  <span>Est. {data.progress.estimatedTime}min</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Voltage */}
        <Link to={routePath} className="lg:col-span-1">
          <Card className="bg-card border-border transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:border-voltage/50 h-full cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-voltage" />
                <CardTitle className="text-sm text-card-foreground">{data.title} - Voltage</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="space-y-2">
                <div className="flex items-baseline gap-2">
                  <div className="text-2xl font-bold text-orange-500">{data.voltage.value}V</div>
                  <div className="text-xs text-muted-foreground">({data.voltage.timestamp})</div>
                </div>
              </div>
              <div className="mt-4 h-48 relative">
                <MetricChart
                  data={data.voltage.data}
                  color="voltage"
                  height={192}
                  title={data.title}
                  value={`${data.voltage.value}V`}
                  timestamp={data.voltage.timestamp}
                />
              </div>
            </CardContent>
          </Card>
        </Link>

        {/* Current & Power */}
        <Link to={routePath} className="lg:col-span-1">
          <Card className="bg-card border-border transition-all duration-300 hover:shadow-lg hover:scale-[1.01] hover:border-power/50 h-full cursor-pointer">
            <CardHeader className="pb-3">
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-power" />
                <CardTitle className="text-sm text-card-foreground">{data.title} - Current & Power</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="relative">
              <div className="space-y-2">
                <div className="flex items-baseline gap-4">
                  <div className="text-xl font-bold text-orange-500">{data.power.current}A</div>
                  <div className="text-xl font-bold text-purple-500">{data.power.watts}W</div>
                </div>
                <div className="text-xs text-muted-foreground">({data.power.timestamp})</div>
              </div>
              <div className="mt-4 h-48 relative">
                <MetricChart
                  data={data.power.data}
                  color="power"
                  height={192}
                  title={data.title}
                  value={`${data.power.current}A / ${data.power.watts}W`}
                  timestamp={data.power.timestamp}
                />
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </div>
  )
}
