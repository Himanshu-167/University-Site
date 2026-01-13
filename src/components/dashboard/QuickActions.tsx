import { Button } from '@/components/ui/button';
import { useUser } from '@/contexts/UserContext';
import { DollarSign, CalendarCheck, MessageSquare, Users, Bell, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface QuickAction {
  icon: React.ElementType;
  label: string;
  href: string;
  roles: string[];
  variant: 'default' | 'accent' | 'success';
}

const quickActions: QuickAction[] = [
  { icon: CalendarCheck, label: 'Mark Attendance', href: '/attendance', roles: ['faculty'], variant: 'default' },
  { icon: DollarSign, label: 'Pay Fees', href: '/fees', roles: ['student', 'parent'], variant: 'success' },
  { icon: MessageSquare, label: 'Send Message', href: '/communication', roles: ['admin', 'faculty', 'student', 'parent'], variant: 'accent' },
  { icon: Users, label: 'Manage Users', href: '/users', roles: ['admin'], variant: 'default' },
  { icon: Bell, label: 'Post Announcement', href: '/announcements', roles: ['admin', 'faculty'], variant: 'accent' },
  { icon: BookOpen, label: 'View Courses', href: '/courses', roles: ['student'], variant: 'default' },
];

export const QuickActions = () => {
  const { user } = useUser();

  const filteredActions = quickActions.filter(action => 
    user && action.roles.includes(user.role)
  ).slice(0, 4);

  return (
    <div className="rounded-xl bg-card p-6 shadow-card animate-slide-up">
      <h3 className="text-lg font-semibold text-foreground">Quick Actions</h3>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {filteredActions.map((action) => (
          <Link key={action.href + action.label} to={action.href}>
            <Button
              variant={action.variant}
              className="w-full h-auto flex-col gap-2 py-4"
            >
              <action.icon className="h-6 w-6" />
              <span className="text-xs">{action.label}</span>
            </Button>
          </Link>
        ))}
      </div>
    </div>
  );
};
