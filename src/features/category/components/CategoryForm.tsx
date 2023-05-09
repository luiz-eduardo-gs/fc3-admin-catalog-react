import { Box, Button, FormControl, FormControlLabel, FormGroup, Grid, Paper, Switch, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../categorySlice';

type Props = {
  category: Category;
  isDisabled?: boolean;
  isLoading?: boolean;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CategoryForm = ({
  category,
  isDisabled = false,
  isLoading = false,
  onSubmit,
  handleChange,
  handleToggle
}: Props) => {

  return (
    <Box p={2}>
      <form>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                required
                name='name'
                label='Name'
                value={category.name}
                disabled={isDisabled}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormControl fullWidth>
              <TextField
                required
                name='description'
                label='Description'
                value={category.description}
                disabled={isDisabled}
                onChange={handleChange}
              />
            </FormControl>
          </Grid>

          <Grid item xs={12}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Switch
                    name='is_active'
                    color='secondary'
                    checked={category.is_active}
                    onChange={handleToggle}
                    inputProps={{ 'aria-label': 'controlled' }}
                  />
                }
                label="Active"
              />
            </FormGroup>
          </Grid>

          <Grid item xs={12}>
            <Box display='flex' gap={2}>
              <Button
                variant='contained'
                color='primary'
                component={Link}
                to='/categories'
              >
                Back
              </Button>

              <Button
                variant='contained'
                color='secondary'
                type='submit'
                disabled={isDisabled}
              >
                Save
              </Button>
            </Box>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}