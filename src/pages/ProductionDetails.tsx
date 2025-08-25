import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Activity, Gauge, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MetricChart } from "@/components/MetricChart";
import gasCuttingImage from "@/assets/gas-cutting.jpg";
import shotBlastingImage from "@/assets/shot-blasting.jpg";
import fitUpWeldingImage from "@/assets/fit-up-welding.jpg";
import fitUpWeldingBottomImage from "@/assets/fit-up-welding-bottom.jpg";
import flangeStraighteningImage from "@/assets/flange-straightening.jpg";

const productionDetails = {
  "gp-31": {
    title: "Gas cutting: GP-31",
    status: "optimal",
    operator: "Aditya",
    image: gasCuttingImage,
    description: "High-precision gas cutting operation for steel plates using automated torch systems.",
    specifications: {
      "Max Speed": "250 MPM",
      "Cut Thickness": "5-50mm",
      "Gas Type": "Oxygen/Acetylene",
      "Accuracy": "±0.1mm"
    }
  },
  "shot-blasting": {
    title: "Shot-blasting",
    status: "optimal", 
    operator: "Neeraj",
    image: shotBlastingImage,
    description: "Surface preparation through high-velocity steel shot impact for optimal coating adhesion.",
    specifications: {
      "Shot Size": "0.5-2.0mm",
      "Pressure": "6-8 bar",
      "Coverage": "100% SA 2.5",
      "Throughput": "50 strips/hour"
    }
  },
  "fit-up-welding-top": {
    title: "Fit-up & welding TOP",
    status: "optimal",
    operator: "Neeraj", 
    image: fitUpWeldingImage,
    description: "Precision fit-up and automated welding for top seam assembly operations.",
    specifications: {
      "Weld Type": "GMAW",
      "Wire Diameter": "1.2mm",
      "Shield Gas": "CO2/Ar Mix",
      "Travel Speed": "200-300 mm/min"
    }
  },
  "fit-up-welding-bottom": {
    title: "Fit-up & welding BOTTOM",
    status: "optimal",
    operator: "Rahul",
    image: fitUpWeldingBottomImage,
    description: "Bottom seam welding operations with automated positioning and welding systems.",
    specifications: {
      "Weld Type": "GMAW",
      "Wire Diameter": "1.2mm", 
      "Shield Gas": "CO2/Ar Mix",
      "Travel Speed": "200-300 mm/min"
    }
  },
  "flange-straightening": {
    title: "Flange Straightening",
    status: "maintenance",
    operator: "Suraj",
    image: flangeStraighteningImage,
    description: "Hydraulic straightening operations for flange geometry correction and quality control.",
    specifications: {
      "Max Force": "500 tons",
      "Accuracy": "±0.5mm",
      "Diameter Range": "600-3000mm",
      "Cycle Time": "3-5 min/piece"
    }
  }
};

export default function ProductionDetails() {
  const { id } = useParams();
  const details = productionDetails[id as keyof typeof productionDetails];

  if (!details) {
    return <div>Production line not found</div>;
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="p-6">
        <div className="flex items-center gap-4 mb-6">
          <Button variant="ghost" size="icon" asChild>
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
            </Link>
          </Button>
          <div>
            <h1 className="text-2xl font-bold">{details.title}</h1>
            <p className="text-muted-foreground">Detailed production line information</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Image and Basic Info */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-0">
                <img 
                  src={details.image} 
                  alt={details.title}
                  className="w-full h-64 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-success text-black">
                      {details.status.charAt(0).toUpperCase() + details.status.slice(1)}
                    </Badge>
                    <span className="text-sm text-muted-foreground">
                      Operator: {details.operator}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {details.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Specifications and Metrics */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Gauge className="w-4 h-4" />
                  Technical Specifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {Object.entries(details.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between p-3 bg-muted/50 rounded">
                      <span className="text-sm font-medium">{key}:</span>
                      <span className="text-sm text-muted-foreground">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Activity className="w-4 h-4 text-success" />
                    Current Status
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Line Speed</span>
                      <span className="font-medium">185 MPM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Efficiency</span>
                      <span className="font-medium text-success">92.5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Uptime</span>
                      <span className="font-medium">23.5 hrs</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-sm flex items-center gap-2">
                    <Zap className="w-4 h-4 text-voltage" />
                    Power Metrics
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">Voltage</span>
                      <span className="font-medium text-voltage">240V</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Current</span>
                      <span className="font-medium text-power">18.5A</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm">Power</span>
                      <span className="font-medium">3.7kW</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}