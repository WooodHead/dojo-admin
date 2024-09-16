import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { WorkbenchQuickNavItem } from '../../typing';
import { cn } from '@/lib/utils';

interface Props {
  items: WorkbenchQuickNavItem[];
  title: string;
  className?: string;
}

export default function WorkbenchQuickNav({ items, title, className }: Props) {
  return (
    <Card className={className}>
      <CardHeader className="py-4">
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-wrap p-5 pt-0">
        {items.map((item, index) => (
          <div
            key={item.title}
            className={cn(
              { 'border-r-0': index % 3 === 2 },
              { 'pb-4': index > 2 },
              { 'border-b-0': index < 3 },
              'flex-col-center border-border group w-1/3 cursor-pointer border-b border-r border-t py-8 hover:shadow-xl'
            )}
          >
            icon
            <span className="text-md mt-2 truncate">{item.title}</span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
