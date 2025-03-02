import { useMenu } from '@/app/hooks/useMenu';
import { NavigationMenu } from 'radix-ui';
import { clsx } from 'clsx';
import { Link } from '@/i18n/navigation';

type ItemProps = {
  children: string;
  className?: string;
  href: string;
  onClick?: () => void;
};

const Item = ({ children, href, className, onClick }: ItemProps) => {
  return (
    <NavigationMenu.Item className={clsx('list-none', className)}>
      <NavigationMenu.Link asChild>
        <Link href={href} className="w-full px-4 py-3" onClick={onClick}>
          <span className="hover:text-brand-200 text-text-primary text-custom-md-semibold">
            {children}
          </span>
        </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};

type VerticalMenuProps = {
  className?: string;
  itemClassName?: string;
  onClick?: () => void;
};

export const VerticalMenu = ({
  className,
  itemClassName,
  onClick,
}: VerticalMenuProps) => {
  const menu = useMenu();

  return (
    <NavigationMenu.Root
      className={clsx('grid grid-cols-1 py-6 gap-8', className)}
    >
      {menu.map((item) => (
        <Item
          key={item.href}
          href={`${item.href}`}
          className={itemClassName}
          onClick={onClick}
        >
          {item.label}
        </Item>
      ))}
    </NavigationMenu.Root>
  );
};
