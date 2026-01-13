import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { StatCard } from '@/components/dashboard/StatCard';
import { RecentActivity } from '@/components/dashboard/RecentActivity';
import { QuickActions } from '@/components/dashboard/QuickActions';
import { useUser } from '@/contexts/UserContext';
import { Users, DollarSign, CalendarCheck, BookOpen, GraduationCap, TrendingUp } from 'lucide-react';

const adminStats = [
  { title: 'Total Students', value: '2,456', icon: GraduationCap, variant: 'primary' as const, trend: { value: 12, isPositive: true } },
  { title: 'Total Faculty', value: '148', icon: Users, variant: 'accent' as const },
  { title: 'Revenue This Month', value: '$124,500', icon: DollarSign, variant: 'success' as const, trend: { value: 8, isPositive: true } },
  { title: 'Attendance Rate', value: '94.2%', icon: TrendingUp, variant: 'warning' as const },
];

const studentStats = [
  { title: 'Attendance', value: '92%', icon: CalendarCheck, variant: 'primary' as const },
  { title: 'Enrolled Courses', value: '6', icon: BookOpen, variant: 'accent' as const },
  { title: 'Pending Fees', value: '$2,500', icon: DollarSign, variant: 'warning' as const },
  { title: 'GPA', value: '3.8', icon: TrendingUp, variant: 'success' as const },
];

const facultyStats = [
  { title: 'Active Courses', value: '4', icon: BookOpen, variant: 'primary' as const },
  { title: 'Total Students', value: '186', icon: GraduationCap, variant: 'accent' as const },
  { title: 'Classes Today', value: '3', icon: CalendarCheck, variant: 'success' as const },
  { title: 'Avg Attendance', value: '89%', icon: TrendingUp, variant: 'warning' as const },
];

const parentStats = [
  { title: "Child's Attendance", value: '92%', icon: CalendarCheck, variant: 'primary' as const },
  { title: 'Enrolled Courses', value: '6', icon: BookOpen, variant: 'accent' as const },
  { title: 'Pending Fees', value: '$2,500', icon: DollarSign, variant: 'warning' as const },
  { title: 'Current GPA', value: '3.8', icon: TrendingUp, variant: 'success' as const },
];

const Dashboard = () => {
  const { user } = useUser();

  const getStats = () => {
    switch (user?.role) {
      case 'admin':
        return adminStats;
      case 'faculty':
        return facultyStats;
      case 'parent':
        return parentStats;
      default:
        return studentStats;
    }
  };

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
  };

  return (
    <DashboardLayout>
      <div className="space-y-8">
        {/* Header */}
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground">
            {getGreeting()}, {user?.name.split(' ')[0]}!
          </h1>
          <p className="mt-1 text-muted-foreground">
            Here's what's happening in your {user?.role === 'admin' ? 'college' : 'account'} today.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {getStats().map((stat, index) => (
            <div key={stat.title} style={{ animationDelay: `${index * 100}ms` }}>
              <StatCard {...stat} />
            </div>
          ))}
        </div>

        {/* Activity & Quick Actions */}
        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <RecentActivity />
          </div>
          <div>
            <QuickActions />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
