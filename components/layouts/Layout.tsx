import Head from 'next/head';
import { Box } from '@mui/material';
import { Navbar, SideDrawer } from '../ui';

interface LayoutProps {
  title?: string;
  children: JSX.Element | JSX.Element[];
}

export const Layout = ({ children, title = 'Dynamic Tasks' }: LayoutProps) => {
  return (
    <Box sx={{ flexFlow: 1 }}>
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <SideDrawer />
      <Box sx={{ padding: '10px 20px' }}>{children}</Box>
    </Box>
  );
};
