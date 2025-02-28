export const getLang = async (params: PageProps['params']) => {
  return (await params).lang;
};
