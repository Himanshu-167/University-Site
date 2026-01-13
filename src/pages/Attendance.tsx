import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useUser } from '@/contexts/UserContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CalendarCheck, CalendarX, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AttendanceRecord {
  id: string;
  course: string;
  date: string;
  status: 'present' | 'absent' | 'late';
  time?: string;
}

const mockAttendance: AttendanceRecord[] = [
  { id: '1', course: 'Computer Science 101', date: '2024-01-15', status: 'present', time: '09:00 AM' },
  { id: '2', course: 'Mathematics 201', date: '2024-01-15', status: 'present', time: '11:00 AM' },
  { id: '3', course: 'Physics 101', date: '2024-01-14', status: 'late', time: '09:15 AM' },
  { id: '4', course: 'English Literature', date: '2024-01-14', status: 'absent' },
  { id: '5', course: 'Computer Science 101', date: '2024-01-13', status: 'present', time: '09:00 AM' },
  { id: '6', course: 'Mathematics 201', date: '2024-01-13', status: 'present', time: '11:00 AM' },
];

const statusConfig = {
  present: { icon: CalendarCheck, label: 'Present', className: 'bg-success/10 text-success' },
  absent: { icon: CalendarX, label: 'Absent', className: 'bg-destructive/10 text-destructive' },
  late: { icon: Clock, label: 'Late', className: 'bg-warning/10 text-warning' },
};

const Attendance = () => {
  const { user } = useUser();
  const isFaculty = user?.role === 'faculty';

  const stats = {
    present: mockAttendance.filter(a => a.status === 'present').length,
    absent: mockAttendance.filter(a => a.status === 'absent').length,
    late: mockAttendance.filter(a => a.status === 'late').length,
    total: mockAttendance.length,
  };

  const attendancePercentage = Math.round((stats.present / stats.total) * 100);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Attendance</h1>
            <p className="mt-1 text-muted-foreground">
              {isFaculty ? 'Manage student attendance for your courses' : 'Track your attendance records'}
            </p>
          </div>
          {isFaculty && (
            <Button variant="hero" size="lg">
              Mark Attendance
            </Button>
          )}
        </div>

        {/* Stats */}
        <div className="grid gap-6 sm:grid-cols-4">
          <Card className="animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <span className="text-2xl font-bold text-primary">{attendancePercentage}%</span>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Attendance Rate</p>
                  <p className="text-lg font-semibold">Overall</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10 text-success">
                  <CalendarCheck className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Present</p>
                  <p className="text-2xl font-bold">{stats.present}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10 text-destructive">
                  <CalendarX className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Absent</p>
                  <p className="text-2xl font-bold">{stats.absent}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="animate-slide-up" style={{ animationDelay: '300ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warning/10 text-warning">
                  <Clock className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Late</p>
                  <p className="text-2xl font-bold">{stats.late}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Records */}
        <Card className="animate-slide-up" style={{ animationDelay: '400ms' }}>
          <CardHeader>
            <CardTitle>Recent Records</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockAttendance.map((record) => {
                const config = statusConfig[record.status];
                const Icon = config.icon;
                return (
                  <div
                    key={record.id}
                    className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-secondary/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", config.className)}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{record.course}</p>
                        <p className="text-sm text-muted-foreground">{record.date}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium", config.className)}>
                        {config.label}
                      </span>
                      {record.time && (
                        <p className="mt-1 text-xs text-muted-foreground">{record.time}</p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default Attendance;
