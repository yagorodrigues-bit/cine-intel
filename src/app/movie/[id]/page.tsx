'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  Container, 
  Typography, 
  Box, 
  Rating, 
  CircularProgress, 
  Button, 
  Grid, 
  Paper, 
  Snackbar, 
  Alert 
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { getMovieDetails, Movie } from '@/services/tmdb';

export default function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (id) {
      setLoading(true);
      getMovieDetails(id as string)
        .then((data) => setMovie(data))
        .catch(() => setError(true)) 
        .finally(() => setLoading(false));
    }
  }, [id]);

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress /> 
      </Box>
    );
  }

  if (error || !movie) {
    return (
      <Snackbar open={true}>
        <Alert severity="error">Erro ao carregar detalhes do filme.</Alert>
      </Snackbar>
    );
  }

  return (
    <Container sx={{ py: 4 }}>
      <Link href="/" passHref style={{ textDecoration: 'none' }}>
        <Button startIcon={<ArrowBackIcon />} sx={{ mb: 3 }}>
          Voltar
        </Button>
      </Link>

      <Paper elevation={0} sx={{ p: { xs: 2, md: 4 }, bgcolor: 'transparent' }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box
              component="img"
              src={`${process.env.NEXT_PUBLIC_TMDB_IMAGE_URL}${movie.poster_path}`}
              alt={movie.title}
              sx={{ width: '100%', borderRadius: 2, boxShadow: 3 }}
            />
          </Grid>

          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
              {movie.title}
            </Typography>
            
            <Box display="flex" alignItems="center" gap={1} mb={2}>
              <Rating value={movie.vote_average / 2} precision={0.5} readOnly />
              <Typography variant="body1">
                {movie.vote_average.toFixed(1)} / 10
              </Typography>
            </Box>

            <Typography variant="subtitle1" color="text.secondary" gutterBottom>
              Lançamento: {new Date(movie.release_date).toLocaleDateString('pt-BR')}
            </Typography>

            <Typography variant="h6" mt={3} gutterBottom sx={{ fontWeight: 'bold' }}>
              Sinopse
            </Typography>
            <Typography variant="body1" sx={{ lineHeight: 1.7, textAlign: 'justify' }}>
              {movie.overview || "Sinopse não disponível em português."}
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}