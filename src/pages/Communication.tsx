import { useState } from 'react';
import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useUser } from '@/contexts/UserContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MessageSquare, Send, Bell, User } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Message {
  id: string;
  from: string;
  role: string;
  subject: string;
  preview: string;
  time: string;
  unread: boolean;
}

interface Announcement {
  id: string;
  title: string;
  content: string;
  author: string;
  date: string;
  priority: 'low' | 'medium' | 'high';
}

const mockMessages: Message[] = [
  { id: '1', from: 'Prof. Sarah Johnson', role: 'Faculty', subject: 'Regarding Assignment Submission', preview: 'Please submit your assignment by...', time: '2 hours ago', unread: true },
  { id: '2', from: 'Admin Office', role: 'Admin', subject: 'Fee Payment Reminder', preview: 'This is a reminder that your fee...', time: '1 day ago', unread: true },
  { id: '3', from: 'Dr. Michael Brown', role: 'Faculty', subject: 'Class Schedule Update', preview: 'Tomorrow\'s class has been moved to...', time: '2 days ago', unread: false },
];

const mockAnnouncements: Announcement[] = [
  { id: '1', title: 'Mid-Term Examination Schedule', content: 'The mid-term examinations will commence from February 15th. Please check the detailed schedule on the notice board.', author: 'Academic Office', date: '2024-01-15', priority: 'high' },
  { id: '2', title: 'Annual Sports Day', content: 'Annual sports day will be held on February 20th. All students are encouraged to participate.', author: 'Sports Department', date: '2024-01-14', priority: 'medium' },
  { id: '3', title: 'Library Timings Extended', content: 'Library will remain open until 10 PM during examination period.', author: 'Library', date: '2024-01-13', priority: 'low' },
];

const priorityConfig = {
  high: 'bg-destructive/10 text-destructive border-destructive/20',
  medium: 'bg-warning/10 text-warning border-warning/20',
  low: 'bg-success/10 text-success border-success/20',
};

const Communication = () => {
  const { user } = useUser();
  const [activeTab, setActiveTab] = useState<'messages' | 'announcements'>('messages');
  const canPost = user?.role === 'admin' || user?.role === 'faculty';

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-foreground">Communication</h1>
          <p className="mt-1 text-muted-foreground">
            Stay connected with messages and announcements
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 animate-fade-in">
          <Button
            variant={activeTab === 'messages' ? 'default' : 'outline'}
            onClick={() => setActiveTab('messages')}
          >
            <MessageSquare className="mr-2 h-4 w-4" />
            Messages
          </Button>
          <Button
            variant={activeTab === 'announcements' ? 'default' : 'outline'}
            onClick={() => setActiveTab('announcements')}
          >
            <Bell className="mr-2 h-4 w-4" />
            Announcements
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'messages' ? (
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle>Inbox</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockMessages.map((message) => (
                      <div
                        key={message.id}
                        className={cn(
                          "flex items-start gap-4 rounded-lg border p-4 transition-colors hover:bg-secondary/50 cursor-pointer",
                          message.unread && "bg-primary/5 border-primary/20"
                        )}
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                          <User className="h-5 w-5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <p className="font-medium text-foreground">{message.from}</p>
                            <span className="text-xs text-muted-foreground">{message.time}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{message.role}</p>
                          <p className="mt-1 font-medium text-foreground">{message.subject}</p>
                          <p className="text-sm text-muted-foreground truncate">{message.preview}</p>
                        </div>
                        {message.unread && (
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ) : (
              <Card className="animate-slide-up">
                <CardHeader>
                  <CardTitle>Recent Announcements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockAnnouncements.map((announcement) => (
                      <div
                        key={announcement.id}
                        className={cn(
                          "rounded-lg border p-4",
                          priorityConfig[announcement.priority]
                        )}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h4 className="font-semibold text-foreground">{announcement.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {announcement.author} • {announcement.date}
                            </p>
                          </div>
                          <span className="text-xs font-medium uppercase">{announcement.priority}</span>
                        </div>
                        <p className="mt-2 text-sm text-foreground">{announcement.content}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Compose */}
          <div>
            <Card className="animate-slide-up" style={{ animationDelay: '100ms' }}>
              <CardHeader>
                <CardTitle>
                  {activeTab === 'messages' ? 'New Message' : 'New Announcement'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  {activeTab === 'messages' && (
                    <div>
                      <label className="text-sm font-medium text-foreground">To</label>
                      <Input placeholder="Search recipient..." className="mt-1" />
                    </div>
                  )}
                  <div>
                    <label className="text-sm font-medium text-foreground">
                      {activeTab === 'messages' ? 'Subject' : 'Title'}
                    </label>
                    <Input placeholder="Enter subject..." className="mt-1" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground">Message</label>
                    <Textarea placeholder="Type your message..." className="mt-1 min-h-[120px]" />
                  </div>
                  <Button variant="hero" className="w-full">
                    <Send className="mr-2 h-4 w-4" />
                    {activeTab === 'messages' ? 'Send Message' : 'Post Announcement'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Communication;
