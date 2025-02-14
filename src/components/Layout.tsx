
import { SidebarProvider, Sidebar } from "@/components/ui/sidebar";
import { Camera, Home, Calendar, Heart, Pizza, Settings, LogOut } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthProvider";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "./ui/button";
import { useToast } from "./ui/use-toast";

const NavItem = ({ icon: Icon, label, to }: { icon: any; label: string; to: string }) => (
  <Link to={to} className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-all">
    <Icon className="w-5 h-5" />
    <span>{label}</span>
  </Link>
);

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      navigate("/auth");
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Error",
        description: error.message,
      });
    }
  };

  if (!user) {
    navigate("/auth");
    return null;
  }

  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full">
        <Sidebar className="w-64 bg-white border-r border-gray-200">
          <div className="flex flex-col h-full p-4">
            <div className="flex items-center gap-3 px-4 py-3">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center">
                {user.email?.charAt(0).toUpperCase()}
              </div>
              <div className="flex flex-col">
                <span className="font-semibold">SoulFlex</span>
                <span className="text-sm text-gray-500">{user.email}</span>
              </div>
            </div>
            <nav className="flex flex-col gap-2 mt-8">
              <NavItem icon={Home} label="Home" to="/" />
              <NavItem icon={Camera} label="Practice" to="/practice" />
              <NavItem icon={Calendar} label="Week Plan" to="/plan" />
              <NavItem icon={Heart} label="Meditate" to="/meditate" />
              <NavItem icon={Pizza} label="Diet Plan" to="/diet" />
              <NavItem icon={Settings} label="Settings" to="/settings" />
            </nav>
            <div className="mt-auto">
              <Button
                variant="ghost"
                className="w-full justify-start"
                onClick={handleSignOut}
              >
                <LogOut className="w-5 h-5 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </Sidebar>
        <main className="flex-1 bg-gray-50">
          <div className="container mx-auto py-6 px-4 min-h-screen animate-fade-in">
            {children}
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};
