import { cn } from '@/lib/utils';
import { UserRole } from '@/types/user';
import { Shield, BookOpen, GraduationCap, Users } from 'lucide-react';

interface RoleCardProps {
  role: UserRole;
  label: string;
  description: string;
  onClick: () => void;
}

const roleIcons = {
  admin: Shield,
  faculty: BookOpen,
  student: GraduationCap,
  parent: Users,
};

const roleColors = {
  admin: 'hover:border-primary hover:bg-primary/5 group-hover:bg-primary group-hover:text-primary-foreground',
  faculty: 'hover:border-accent hover:bg-accent/5 group-hover:bg-accent group-hover:text-accent-foreground',
  student: 'hover:border-success hover:bg-success/5 group-hover:bg-success group-hover:text-success-foreground',
  parent: 'hover:border-warning hover:bg-warning/5 group-hover:bg-warning group-hover:text-warning-foreground',
};

const iconBgColors = {
  admin: 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground',
  faculty: 'bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground',
  student: 'bg-success/10 text-success group-hover:bg-success group-hover:text-success-foreground',
  parent: 'bg-warning/10 text-warning group-hover:bg-warning group-hover:text-warning-foreground',
};

export const RoleCard = ({ role, label, description, onClick }: RoleCardProps) => {
  const Icon = roleIcons[role];

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative w-full rounded-2xl border-2 border-border bg-card p-8 text-left shadow-card transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1",
        roleColors[role]
      )}
    >
      <div className={cn(
        "mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300",
        iconBgColors[role]
      )}>
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-bold text-foreground">{label}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      <div className="mt-4 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
        Continue →
      </div>
    </button>
  );
};
