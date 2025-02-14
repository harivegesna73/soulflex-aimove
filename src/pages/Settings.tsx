
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

const Settings = () => {
  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Settings</h1>
        
        <div className="space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Notifications</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label htmlFor="practice-reminders">Practice Reminders</Label>
                <Switch id="practice-reminders" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="meditation-reminders">Meditation Reminders</Label>
                <Switch id="meditation-reminders" />
              </div>
            </div>
          </Card>

          <Button className="w-full">Save Changes</Button>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
