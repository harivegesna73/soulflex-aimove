
import { Layout } from "@/components/Layout";
import { Card } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";

const WeekPlan = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Weekly Plan</h1>
        
        <Card className="p-6">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Your Schedule</h2>
              <Calendar mode="single" className="rounded-md border" />
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Today's Activities</h2>
              <div className="space-y-4">
                <Card className="p-4">
                  <h3 className="font-semibold">Morning Yoga</h3>
                  <p className="text-gray-600">7:00 AM - 8:00 AM</p>
                </Card>
                <Card className="p-4">
                  <h3 className="font-semibold">Meditation</h3>
                  <p className="text-gray-600">6:00 PM - 6:30 PM</p>
                </Card>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Layout>
  );
};

export default WeekPlan;
