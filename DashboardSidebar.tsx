
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Image, Upload, Download } from 'lucide-react';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  href: string;
  active?: boolean;
}

const SidebarItem = ({ icon, label, href, active }: SidebarItemProps) => {
  return (
    <Link 
      to={href} 
      className={cn(
        "flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-colors",
        active ? 
          "bg-purple-100 text-purple-700" : 
          "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
      )}
    >
      {icon}
      {label}
    </Link>
  );
};

export const DashboardSidebar = () => {
  const location = useLocation();
  
  const navItems = [
    {
      icon: <Image size={18} />,
      label: "Create Images",
      href: "/dashboard",
    },
    {
      icon: <Upload size={18} />,
      label: "My Uploads",
      href: "/dashboard/uploads",
    },
    {
      icon: <Download size={18} />,
      label: "My Creations",
      href: "/dashboard/creations",
    },
  ];

  return (
    <aside className="w-64 border-r bg-gray-50 p-6 hidden md:block">
      <nav className="space-y-1">
        {navItems.map((item) => (
          <SidebarItem
            key={item.href}
            icon={item.icon}
            label={item.label}
            href={item.href}
            active={location.pathname === item.href}
          />
        ))}
      </nav>
      
      <div className="mt-8 pt-8 border-t">
        <div className="rounded-lg bg-gradient-to-r from-purple-600/10 to-blue-500/10 p-4">
          <h3 className="font-medium text-sm mb-2">Free Plan</h3>
          <p className="text-xs text-gray-600 mb-3">
            You have <span className="font-semibold">10 credits</span> remaining this month.
          </p>
          <Link to="/dashboard/upgrade">
            <button className="text-xs font-medium text-blue-600 hover:text-blue-700">
              Upgrade Plan →
            </button>
          </Link>
        </div>
      </div>
    </aside>
  );
};
