import { useMenu } from '@/app/hooks/useMenu';
import { NavigationMenu } from 'radix-ui';
import { clsx } from 'clsx';
import { Link } from '@/i18n/navigation';

type ItemProps = {
  children: string;
  className?: string;
  href: string;
};

const Item = ({ children, href, className }: ItemProps) => {
  return (
    <NavigationMenu.Item className={clsx('list-none', className)}>
      <NavigationMenu.Link asChild>
        <Link href={`${href}`}>
          <span className="hover:text-brand-200 text-custom-md-semibold text-base-wite">
            {children}
          </span>
        </Link>
      </NavigationMenu.Link>
    </NavigationMenu.Item>
  );
};

type HorizontalMenuProps = {
  className?: string;
  itemClassName?: string;
};

export const HorizontalMenu = ({
  className,
  itemClassName,
}: HorizontalMenuProps) => {
  const menu = useMenu();

  return (
    <NavigationMenu.Root
      className={clsx(
        'grid grid-cols-2 gap-3 lg:flex lg:gap-8 w-full lg:w-auto items-center',
        className
      )}
    >
      {menu.map((item) => (
        <Item key={item.href} href={item.href} className={itemClassName}>
          {item.label}
        </Item>
      ))}
    </NavigationMenu.Root>
  );
};
