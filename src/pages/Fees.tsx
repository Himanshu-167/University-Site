import { DashboardLayout } from '@/components/layout/DashboardLayout';
import { useUser } from '@/contexts/UserContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { DollarSign, Download, CheckCircle, AlertCircle, Clock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeeRecord {
  id: string;
  description: string;
  amount: number;
  dueDate: string;
  status: 'paid' | 'pending' | 'overdue';
  paidDate?: string;
}

const mockFees: FeeRecord[] = [
  { id: '1', description: 'Tuition Fee - Spring 2024', amount: 5000, dueDate: '2024-02-01', status: 'pending' },
  { id: '2', description: 'Library Fee', amount: 200, dueDate: '2024-01-15', status: 'paid', paidDate: '2024-01-10' },
  { id: '3', description: 'Lab Fee - Computer Science', amount: 300, dueDate: '2024-01-20', status: 'overdue' },
  { id: '4', description: 'Tuition Fee - Fall 2023', amount: 5000, dueDate: '2023-09-01', status: 'paid', paidDate: '2023-08-28' },
  { id: '5', description: 'Sports Fee', amount: 150, dueDate: '2023-09-15', status: 'paid', paidDate: '2023-09-10' },
];

const statusConfig = {
  paid: { icon: CheckCircle, label: 'Paid', className: 'bg-success/10 text-success' },
  pending: { icon: Clock, label: 'Pending', className: 'bg-warning/10 text-warning' },
  overdue: { icon: AlertCircle, label: 'Overdue', className: 'bg-destructive/10 text-destructive' },
};

const Fees = () => {
  const { user } = useUser();
  const isAdmin = user?.role === 'admin';

  const totalPaid = mockFees.filter(f => f.status === 'paid').reduce((sum, f) => sum + f.amount, 0);
  const totalPending = mockFees.filter(f => f.status === 'pending').reduce((sum, f) => sum + f.amount, 0);
  const totalOverdue = mockFees.filter(f => f.status === 'overdue').reduce((sum, f) => sum + f.amount, 0);

  return (
    <DashboardLayout>
      <div className="space-y-8">
        <div className="flex items-center justify-between animate-fade-in">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Fees</h1>
            <p className="mt-1 text-muted-foreground">
              {isAdmin ? 'Manage fee collection and payments' : 'View and pay your fees'}
            </p>
          </div>
          {!isAdmin && totalPending + totalOverdue > 0 && (
            <Button variant="hero" size="lg">
              <DollarSign className="mr-2 h-5 w-5" />
              Pay Now (${(totalPending + totalOverdue).toLocaleString()})
            </Button>
          )}
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 sm:grid-cols-3">
          <Card className="animate-slide-up">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-success/10">
                  <CheckCircle className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Total Paid</p>
                  <p className="text-2xl font-bold text-success">${totalPaid.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="animate-slide-up" style={{ animationDelay: '100ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-warning/10">
                  <Clock className="h-6 w-6 text-warning" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Pending</p>
                  <p className="text-2xl font-bold text-warning">${totalPending.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="animate-slide-up" style={{ animationDelay: '200ms' }}>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-destructive/10">
                  <AlertCircle className="h-6 w-6 text-destructive" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Overdue</p>
                  <p className="text-2xl font-bold text-destructive">${totalOverdue.toLocaleString()}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Fee Records */}
        <Card className="animate-slide-up" style={{ animationDelay: '300ms' }}>
          <CardHeader>
            <CardTitle>Fee History</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {mockFees.map((fee) => {
                const config = statusConfig[fee.status];
                const Icon = config.icon;
                return (
                  <div
                    key={fee.id}
                    className="flex items-center justify-between rounded-lg border border-border p-4 transition-colors hover:bg-secondary/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className={cn("flex h-10 w-10 items-center justify-center rounded-lg", config.className)}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{fee.description}</p>
                        <p className="text-sm text-muted-foreground">
                          Due: {fee.dueDate}
                          {fee.paidDate && ` • Paid: ${fee.paidDate}`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-lg font-semibold">${fee.amount.toLocaleString()}</p>
                        <span className={cn("inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium", config.className)}>
                          {config.label}
                        </span>
                      </div>
                      {fee.status === 'paid' && (
                        <Button variant="outline" size="icon">
                          <Download className="h-4 w-4" />
                        </Button>
                      )}
                      {fee.status !== 'paid' && !isAdmin && (
                        <Button variant="success" size="sm">
                          Pay
                        </Button>
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

export default Fees;
