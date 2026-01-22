'use client';

import { useEffect, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { 
  Grid, 
  Container, 
  CircularProgress, 
  Typography, 
  Box, 
  Pagination 
} from '@mui/material';
import { getPopularMovies, searchMovies } from '@/services/tmdb';
import { MovieCard } from '@/components/MovieCard';

export default function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const query = searchParams.get('q');
  const currentPage = parseInt(searchParams.get('page') || '1');
  
  const [movies, setMovies] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const data = query 
          ? await searchMovies(query, currentPage) 
          : await getPopularMovies(currentPage);
        
        setMovies(data.results);
        
        // Limite técnico do TMDB para paginação pública
        setTotalPages(data.total_pages > 500 ? 500 : data.total_pages);
      } catch (error) {
        console.error("Erro ao buscar filmes:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query, currentPage]);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set('page', value.toString());
    router.push(`/?${params.toString()}`);
  };

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="50vh">
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Box mb={4}>
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
          {query ? `Resultados para: ${query}` : 'Filmes Populares'}
        </Typography>
        
        {!query && (
          <Typography variant="body1" sx={{ color: 'text.secondary', mt: 1 }}>
            Descubra os filmes mais populares do momento
          </Typography>
        )}
      </Box>

      <Grid container spacing={3}>
        {movies.map((movie: any) => (
          <Grid key={movie.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
            <MovieCard movie={movie} />
          </Grid>
        ))}
      </Grid>

      <Box display="flex" justifyContent="center" mt={6}>
        <Pagination 
          count={totalPages} 
          page={currentPage} 
          onChange={handlePageChange}
          color="primary"
          shape="rounded"
          size="large"
          showFirstButton 
          showLastButton
          sx={{
            '& .MuiPaginationItem-root': { color: 'white' },
            '& .Mui-selected': { bgcolor: 'primary.main', fontWeight: 'bold' }
          }}
        />
      </Box>
    </Container>
  );
}