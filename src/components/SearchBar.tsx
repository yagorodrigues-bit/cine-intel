'use client';

import { TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  onSearch: (value: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <TextField
      size="small"
      variant="outlined"
      placeholder="Pesquisar filmes..."
      onChange={(e) => onSearch(e.target.value)}
      sx={{ 
        bgcolor: 'rgba(255,255,255,0.1)', 
        borderRadius: 1,
        input: { color: 'white' },
        '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon sx={{ color: 'white' }} />
          </InputAdornment>
        ),
      }}
    />
  );
}