import { useUser } from '@/contexts/UserContext';
import { cn } from '@/lib/utils';
import { 
  LayoutDashboard, 
  DollarSign, 
  CalendarCheck, 
  MessageSquare, 
  Users, 
  Settings, 
  LogOut,
  GraduationCap,
  BookOpen,
  Bell
} from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  icon: React.ElementType;
  label: string;
  href: string;
  roles: string[];
}

const navItems: NavItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', roles: ['admin', 'faculty', 'student', 'parent'] },
  { icon: CalendarCheck, label: 'Attendance', href: '/attendance', roles: ['admin', 'faculty', 'student', 'parent'] },
  { icon: DollarSign, label: 'Fees', href: '/fees', roles: ['admin', 'student', 'parent'] },
  { icon: MessageSquare, label: 'Communication', href: '/communication', roles: ['admin', 'faculty', 'student', 'parent'] },
  { icon: Users, label: 'Users', href: '/users', roles: ['admin'] },
  { icon: BookOpen, label: 'Courses', href: '/courses', roles: ['admin', 'faculty', 'student'] },
  { icon: Bell, label: 'Announcements', href: '/announcements', roles: ['admin', 'faculty'] },
  { icon: Settings, label: 'Settings', href: '/settings', roles: ['admin', 'faculty', 'student', 'parent'] },
];

export const Sidebar = () => {
  const { user, logout } = useUser();
  const location = useLocation();

  const filteredNavItems = navItems.filter(item => 
    user && item.roles.includes(user.role)
  );

  return (
    <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-sidebar text-sidebar-foreground">
      <div className="flex h-full flex-col">
        {/* Logo */}
        <div className="flex h-16 items-center gap-3 border-b border-sidebar-border px-6">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sidebar-primary">
            <GraduationCap className="h-6 w-6 text-sidebar-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-bold">EduConnect</h1>
            <p className="text-xs text-sidebar-foreground/60">College Portal</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3 py-4">
          {filteredNavItems.map((item) => {
            const isActive = location.pathname === item.href;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={cn(
                  "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all duration-200",
                  isActive 
                    ? "bg-sidebar-primary text-sidebar-primary-foreground" 
                    : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
                )}
              >
                <item.icon className="h-5 w-5" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* User Section */}
        <div className="border-t border-sidebar-border p-4">
          <div className="mb-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sidebar-accent text-sm font-semibold">
              {user?.name.charAt(0)}
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="truncate text-sm font-medium">{user?.name}</p>
              <p className="truncate text-xs capitalize text-sidebar-foreground/60">{user?.role}</p>
            </div>
          </div>
          <button
            onClick={logout}
            className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-sidebar-foreground/70 transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
          >
            <LogOut className="h-5 w-5" />
            Sign Out
          </button>
        </div>
      </div>
    </aside>
  );
};
