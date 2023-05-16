import { Box, Button, FormControl, FormControlLabel, FormGroup, Grid, Paper, Switch, TextField, Typography } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import { useAppSelector } from '../../app/hooks';
import { Category, selectCategoryById } from './categorySlice';
import React, { useState } from 'react';
import { CategoryForm } from './components/CategoryForm';

export const EditCategory = () => {
  const id = useParams().id || '';
  const category = useAppSelector(state => selectCategoryById(state, id));
  const [categoryState, setCategoryState] = useState<Category>(category);
  const [isDisabled, setIsDisabled] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCategoryState({ ...categoryState, [name]: value });
  };
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setCategoryState({ ...categoryState, [name]: checked });
  };

  return (
    <Box>
      <Paper>
        <Box p={2}>
          <Box mb={2}>
            <Typography variant='h4'>
              Edit Category
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
}