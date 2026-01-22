'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Box, 
  Container, 
  TextField, 
  InputAdornment 
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MovieIcon from '@mui/icons-material/Movie';
import ThemeRegistry from '@/components/ThemeRegistry';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      router.push(`/?q=${encodeURIComponent(query)}`);
    } else {
      router.push('/');
    }
  };

  return (
    <html lang="pt-BR">
      <body>
        <ThemeRegistry>
          <AppBar 
            position="static" 
            color="primary" 
            elevation={0} 
            sx={{ borderBottom: '1px solid #333' }}
          >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
              <Box display="flex" alignItems="center" gap={1}>
                <MovieIcon sx={{ color: '#E50914', fontSize: 30 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#E50914' }}>
                  <Link href="/" style={{ color: 'inherit', textDecoration: 'none' }}>
                    CineIntel
                  </Link>
                </Typography>
              </Box>

              <Box component="form" onSubmit={handleSearch} sx={{ width: '250px' }}>
                <TextField
                  id="main-search-bar"
                  fullWidth
                  size="small"
                  placeholder="Buscar filmes..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  sx={{ 
                    bgcolor: 'rgba(255,255,255,0.1)', 
                    borderRadius: 1,
                    input: { color: 'white', fontSize: '0.9rem' },
                    '& .MuiOutlinedInput-notchedOutline': { border: 'none' }
                  }}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <SearchIcon sx={{ color: 'rgba(255,255,255,0.7)', fontSize: 20 }} />
                      </InputAdornment>
                    ),
                  }}
                />
              </Box>
            </Toolbar>
          </AppBar>

          <main style={{ minHeight: '85vh' }}>
            {children}
          </main>

          <Box 
            component="footer" 
            sx={{ 
              py: 4, 
              mt: 'auto', 
              bgcolor: '#121212', 
              borderTop: '1px solid #333',
              color: 'text.secondary'
            }}
          >
            <Container maxWidth="lg">
              <Box 
                display="flex" 
                flexDirection={{ xs: 'column', md: 'row' }} 
                justifyContent="space-between" 
                alignItems="center"
                gap={2}
              >
                <Typography variant="body2">
                  {new Date().getFullYear()} CineIntel. Projeto avaliativo de front-end.
                </Typography>

                <Typography variant="body2">
                  Dados fornecidos por{' '}
                  <Link 
                    href="https://www.themoviedb.org/" 
                    target="_blank" 
                    rel="noopener"
                    style={{ color: '#E50914', textDecoration: 'none', fontWeight: 'bold' }}
                  >
                    TMDB
                  </Link>
                </Typography>
              </Box>

              <Typography 
                variant="caption" 
                display="block" 
                textAlign="center" 
                sx={{ mt: 3, opacity: 0.6 }}
              >
                Este produto utiliza a API TMDB, mas não é endossado ou certificado pelo TMDB.
              </Typography>
            </Container>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}