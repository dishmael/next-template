/**
 * Custom layout wrapper so we can add contexts and themes without modifying the
 * default layout code.
 * 
 * @param param0 
 * @returns 
 */
const DefaultLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default DefaultLayout;