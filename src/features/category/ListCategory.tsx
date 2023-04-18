import { Box, Button, Typography } from '@mui/material';
import { useAppSelector } from '../../app/hooks';
import { selectCategory } from './categorySlice';
import { Link } from 'react-router-dom';
import { DataGrid, GridColDef, GridRowsProp, GridValueGetterParams } from '@mui/x-data-grid';

export const ListCategory = () => {
  const categories = useAppSelector(selectCategory);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 300 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'description', headerName: 'Description', width: 400 },
  ];

  const rows: GridRowsProp = categories.map(category => ({
    id: category.id,
    name: category.name,
    description: category.description,
  }));

  return (
    <Box maxWidth='lg' sx={{ mt: 4, mb: 4 }}>
      <Box display='flex' justifyContent='flex-end'>
        <Button
          variant='contained'
          color='secondary'
          component={Link}
          to='/categories/create'
          style={{ marginBottom: '1rem' }}
        >
          New Category
        </Button>
      </Box>
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </Box>
  );
};
