import { Box, Button, FormControl, FormControlLabel, FormGroup, Grid, Paper, Switch, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Category } from './categorySlice';
import { CategoryForm } from './components/CategoryForm';

export const CreateCategory = () => {
  const [isDisabled, setIsDisabled] = useState(false);
  const [category, setCategory] = useState<Category>({
    id: '',
    name: '',
    description: '',
    is_active: false,
    created_at: '',
    updated_at: '',
    deleted_at: '',
  });

  const handleChange = (e: any) => { };
  const handleToggle = (e: any) => { };

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant='h4'>
              Create Category
            </Typography>
          </Box>
        </Box>

        <CategoryForm 
          category={category}
          isDisabled={isDisabled}
          handleChange={handleChange}
          handleToggle={handleToggle}
          onSubmit={() => {return null}}
        />
      </Paper>
    </Box>
  );
};