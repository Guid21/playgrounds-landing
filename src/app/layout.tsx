import './globals.css';

type RootLayoutProps = {
  readonly children: React.ReactNode;
} & PageProps;

export default async function RootLayout({
  children,
  params,
}: RootLayoutProps) {
  return <>{children}</>;
}
