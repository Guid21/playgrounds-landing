import { getDictionary } from '@/app/lib/dictionaries';
import { Provider } from './LangProvider';
import { getLang } from '@/app/lib/getLang';

export { useDict } from './LangProvider';

export async function LangProvider({
  children,
  params,
}: {
  children: React.ReactNode;
  params: PageProps['params'];
}) {
  const locale = await getLang(params);
  const dict = await getDictionary(locale);
  return (
    <Provider dict={dict} locale={locale}>
      {children}
    </Provider>
  );
}
