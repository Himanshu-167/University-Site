import { cn } from '@/lib/utils';
import { DollarSign, CalendarCheck, MessageSquare, Bell } from 'lucide-react';

interface Activity {
  id: string;
  type: 'payment' | 'attendance' | 'message' | 'announcement';
  title: string;
  description: string;
  time: string;
}

const activities: Activity[] = [
  {
    id: '1',
    type: 'payment',
    title: 'Fee Payment Received',
    description: 'Tuition fee for Spring 2024 semester',
    time: '2 hours ago',
  },
  {
    id: '2',
    type: 'attendance',
    title: 'Attendance Marked',
    description: 'Computer Science 101 - Present',
    time: '4 hours ago',
  },
  {
    id: '3',
    type: 'announcement',
    title: 'New Announcement',
    description: 'Mid-term exams schedule released',
    time: '1 day ago',
  },
  {
    id: '4',
    type: 'message',
    title: 'New Message',
    description: 'Prof. Johnson sent you a message',
    time: '2 days ago',
  },
];

const iconMap = {
  payment: DollarSign,
  attendance: CalendarCheck,
  message: MessageSquare,
  announcement: Bell,
};

const colorMap = {
  payment: 'bg-success/10 text-success',
  attendance: 'bg-primary/10 text-primary',
  message: 'bg-accent/10 text-accent',
  announcement: 'bg-warning/10 text-warning',
};

export const RecentActivity = () => {
  return (
    <div className="rounded-xl bg-card p-6 shadow-card animate-slide-up">
      <h3 className="text-lg font-semibold text-foreground">Recent Activity</h3>
      <div className="mt-4 space-y-4">
        {activities.map((activity, index) => {
          const Icon = iconMap[activity.type];
          return (
            <div
              key={activity.id}
              className="flex items-start gap-4 rounded-lg p-3 transition-colors hover:bg-secondary/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={cn(
                "flex h-10 w-10 shrink-0 items-center justify-center rounded-lg",
                colorMap[activity.type]
              )}>
                <Icon className="h-5 w-5" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-foreground">{activity.title}</p>
                <p className="text-sm text-muted-foreground truncate">{activity.description}</p>
              </div>
              <span className="text-xs text-muted-foreground whitespace-nowrap">{activity.time}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
