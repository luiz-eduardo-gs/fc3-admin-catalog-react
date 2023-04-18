import { Box, ThemeProvider, Typography } from '@mui/material';
import { Header } from './components/Header';
import { Layout } from './components/Layout';
import { appTheme } from './config/theme';
import { Route, Routes } from 'react-router-dom';
import { ListCategory } from './features/category/ListCategory';
import { CreateCategory } from './features/category/CreateCategory';
import { EditCategory } from './features/category/EditCategory';

export default function MyApp() {
  return (
    <ThemeProvider theme={appTheme}>
      <Box
        component='main'
        sx={{
          height: '100vh',
          backgroundColor: (theme) => theme.palette.grey[900],
        }}
      >
        <Header />
        <Layout>
          <Routes>
            <Route path='/' element={<ListCategory />} />
            <Route path='/categories' element={<ListCategory />} />
            <Route path='/categories/create' element={<CreateCategory />} />
            <Route path='/categories/:id/edit' element={<EditCategory />} />

            <Route path='*' element={
              <Box sx={{ color: 'white' }}>
                <Typography variant='h1'>404</Typography>
                <Typography variant='h2'>Page not found</Typography>
              </Box>
            } />

          </Routes>
        </Layout>
      </Box>
    </ThemeProvider>
  );
}