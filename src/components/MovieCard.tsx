'use client';

import Link from 'next/link';
import { Card, CardMedia, Box, Typography, Chip } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export const MovieCard = ({ movie }: any) => (
  <Link href={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}>
    <Card 
      sx={{ 
        bgcolor: 'transparent', 
        backgroundImage: 'none', 
        boxShadow: 'none',
        maxWidth: 280,
        margin: '0 auto' 
      }}
    >
      <Box sx={{ position: 'relative', pt: '150%', width: '100%' }}>
        <CardMedia
          component="img"
          image={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${movie.poster_path}`}
          alt={movie.title}
          sx={{ 
            borderRadius: 2, 
            position: 'absolute',
            top: 0,
            left: 0,
            height: '100%',
            width: '100%',
            objectFit: 'cover',
            transition: 'transform 0.3s', 
            '&:hover': { transform: 'scale(1.05)' } 
          }}
        />
        <Chip
          icon={<StarIcon sx={{ fontSize: '12px !important', color: '#FFD700' }} />}
          label={movie.vote_average.toFixed(1)}
          size="small"
          sx={{
            position: 'absolute', 
            top: 8, 
            right: 8,
            bgcolor: 'rgba(0,0,0,0.7)', 
            color: 'white', 
            fontWeight: 'bold', 
            height: 20, 
            fontSize: '0.7rem'
          }}
        />
      </Box>

      <Box sx={{ py: 1 }}>
        <Typography 
          variant="body2" 
          noWrap 
          sx={{ fontWeight: 'bold', color: 'white', fontSize: '0.9rem' }}
        >
          {movie.title}
        </Typography>
        
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, color: 'text.secondary' }}>
          <CalendarMonthIcon sx={{ fontSize: 14 }} />
          <Typography variant="caption" sx={{ fontSize: '0.75rem' }}>
            {movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}
          </Typography>
        </Box>
      </Box>
    </Card>
  </Link>
);