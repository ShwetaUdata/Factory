import { useParams, Link } from "react-router-dom";
import { ArrowLeft, User, Clock, Award, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const operatorProfiles = {
  "aditya": {
    name: "Aditya",
    id: "OP001",
    department: "Gas Cutting Operations",
    shift: "Day Shift (6AM - 6PM)",
    experience: "8 years",
    certification: "Level 3 Gas Cutting Specialist",
    currentAssignment: "Gas cutting: GP-31",
    performance: {
      efficiency: 94.2,
      uptime: 98.5,
      qualityScore: 96.8,
      safetyRecord: "365 days incident-free"
    },
    recentActivity: [
      "Started GP-31 line at 06:00",
      "Completed safety checklist",
      "Processed 6,314mm of plates",
      "Maintained 92.5% efficiency target"
    ]
  },
  "neeraj": {
    name: "Neeraj", 
    id: "OP002",
    department: "Surface Treatment & Welding",
    shift: "Day Shift (6AM - 6PM)",
    experience: "12 years",
    certification: "Level 4 Welding & Surface Treatment",
    currentAssignment: "Shot-blasting & Fit-up welding TOP",
    performance: {
      efficiency: 91.8,
      uptime: 97.2,
      qualityScore: 98.1,
      safetyRecord: "540 days incident-free"
    },
    recentActivity: [
      "Completed shot-blasting setup",
      "Processed 1,314 strips",
      "Started fit-up welding operations", 
      "Maintained quality standards"
    ]
  },
  "rahul": {
    name: "Rahul",
    id: "OP003", 
    department: "Welding Operations",
    shift: "Day Shift (6AM - 6PM)",
    experience: "9 years",
    certification: "Level 3 Welding Specialist",
    currentAssignment: "Fit-up welding BOTTOM",
    performance: {
      efficiency: 91.2,
      uptime: 96.8,
      qualityScore: 97.5,
      safetyRecord: "380 days incident-free"
    },
    recentActivity: [
      "Completed welding bottom setup",
      "Processed 5,722 PGs",
      "Maintained welding quality standards",
      "Updated production tracking"
    ]
  },
  "suraj": {
    name: "Suraj",
    id: "OP004", 
    department: "Finishing Operations",
    shift: "Day Shift (6AM - 6PM)",
    experience: "10 years",
    certification: "Level 4 Flange Specialist",
    currentAssignment: "Flange Straightening",
    performance: {
      efficiency: 89.5,
      uptime: 95.8,
      qualityScore: 97.2,
      safetyRecord: "420 days incident-free"
    },
    recentActivity: [
      "Flange straightening maintenance mode",
      "Processed 5,722 PGs", 
      "Quality inspection completed",
      "Equipment calibration check"
    ]
  }
};

export default function OperatorProfile() {
  const { name } = useParams();
  const operator = operatorProfiles[name?.toLowerCase() as keyof typeof operatorProfiles];

  if (!operator) {
    return <div>Operator not found</div>;
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
            <h1 className="text-2xl font-bold">Operator Profile</h1>
            <p className="text-muted-foreground">Detailed operator information and performance</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Profile Info */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader className="text-center">
                <Avatar className="w-20 h-20 mx-auto mb-4">
                  <AvatarFallback className="text-2xl bg-primary text-primary-foreground">
                    {operator.name.substring(0, 2).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <CardTitle>{operator.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{operator.id}</p>
                <Badge className="bg-success text-black mt-2">Active</Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-medium">Department</p>
                    <p className="text-sm text-muted-foreground">{operator.department}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Shift</p>
                    <p className="text-sm text-muted-foreground">{operator.shift}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Experience</p>
                    <p className="text-sm text-muted-foreground">{operator.experience}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Certification</p>
                    <p className="text-sm text-muted-foreground">{operator.certification}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium">Current Assignment</p>
                    <p className="text-sm text-muted-foreground">{operator.currentAssignment}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Performance Metrics & Activity */}
          <div className="lg:col-span-2 space-y-6">
            {/* Performance Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <Card>
                <CardContent className="p-4 text-center">
                  <TrendingUp className="w-8 h-8 text-success mx-auto mb-2" />
                  <p className="text-2xl font-bold text-success">{operator.performance.efficiency}%</p>
                  <p className="text-xs text-muted-foreground">Efficiency</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-4 text-center">
                  <Clock className="w-8 h-8 text-voltage mx-auto mb-2" />
                  <p className="text-2xl font-bold text-voltage">{operator.performance.uptime}%</p>
                  <p className="text-xs text-muted-foreground">Uptime</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <Award className="w-8 h-8 text-power mx-auto mb-2" />
                  <p className="text-2xl font-bold text-power">{operator.performance.qualityScore}%</p>
                  <p className="text-xs text-muted-foreground">Quality Score</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-4 text-center">
                  <User className="w-8 h-8 text-success mx-auto mb-2" />
                  <p className="text-sm font-bold text-success">{operator.performance.safetyRecord}</p>
                  <p className="text-xs text-muted-foreground">Safety Record</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {operator.recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-muted/50 rounded">
                      <div className="w-2 h-2 bg-success rounded-full" />
                      <span className="text-sm">{activity}</span>
                      <span className="text-xs text-muted-foreground ml-auto">
                        {index === 0 ? "Active now" : `${index}h ago`}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}