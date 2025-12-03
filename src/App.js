import './App.css';
import { Box, TextField, Grid, Stack, Typography, Button, FormControlLabel, Checkbox, Link } from '@mui/material';
import fryingPanImage from './frying-pan-empty-assorted-spices.jpg';

function App() {
  return (
    <div className="App">
      <Grid container spacing={2} sx={{ width: '100%', minHeight: '100vh' }}>
        <Grid size={5}>
          <LeftSide />
        </Grid>
        <Grid size={7}>
          <RightSide />
        </Grid>
      </Grid>
    </div>
  );
}

function LeftSide() {

  return (
    <Box
      component="form"
      sx={{
        marginTop: { xs: 4, md: 25 },
        px: 2,
      }}
    >
      <Stack spacing={3} direction="column">
        <Typography variant="h3" component="h1" sx={{ fontWeight: 'bold' }}>
          Welcome back
        </Typography>

        <Typography variant="body1" color="text.secondary">
          Login to access your account
        </Typography>

        <PhoneTextField />
        <PasswordTextField />

        <RememberMeAndForgotPassword />
        <Button
          variant="contained"
          size="large"
          sx={{ mt: 2 }}
        >
          Login
        </Button>

        <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center'}}>
          Or sign in with
        </Typography>
        <SocialLoginButton />
        <SignUpRow />
      </Stack>
    </Box>
  );
}

function SignUpRow(){
  return(
    <Box>
      <Typography variant="body2" color="text.secondary" sx={{textAlign: 'center'}}>
        Don't have an account? <Link href="#" variant="body2">Sign Up</Link>
      </Typography>
    </Box>
  )
}

function GoogleSignInButton() {
  const GoogleIcon = () => (
    <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd">
        <path d="M17.64 9.205c0-.639-.057-1.252-.164-1.841H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"/>
        <path d="M9 18c2.43 0 4.467-.806 5.956-2.18l-2.908-2.259c-.806.54-1.837.86-3.048.86-2.344 0-4.328-1.584-5.036-3.711H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"/>
        <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"/>
        <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"/>
      </g>
    </svg>
  );

  return (
    <Button
      variant="outlined"
      fullWidth
      startIcon={<GoogleIcon />}
      sx={{
        mr: 1,
        backgroundColor: '#fff',
        color: '#3c4043',
        borderColor: '#dadce0',
        textTransform: 'none',
        fontSize: '14px',
        fontWeight: 500,
        padding: '10px 12px',
        fontFamily: 'Roboto, arial, sans-serif',
        '&:hover': {
          backgroundColor: '#f8f9fa',
          borderColor: '#dadce0',
          boxShadow: '0 1px 2px 0 rgba(60,64,67,.30), 0 1px 3px 1px rgba(60,64,67,.15)',
        },
      }}
    >
      Sign in with Google
    </Button>
  );
}

function FacebookLoginButton() {
  const FacebookIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
        fill="#fff"
      />
    </svg>
  );

  return (
    <Button
      variant="contained"
      fullWidth
      startIcon={<FacebookIcon />}
      sx={{
        backgroundColor: '#1877F2',
        color: '#fff',
        textTransform: 'none',
        fontSize: '14px',
        fontWeight: 500,
        padding: '10px 12px',
        fontFamily: 'Helvetica, Arial, sans-serif',
        border: 'none',
        '&:hover': {
          backgroundColor: '#166FE5',
        },
      }}
    >
      Continue with Facebook
    </Button>
  );
}

function SocialLoginButton() {

  return(
    <Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 2,
      mt: 2,
    }}>

      <GoogleSignInButton />

      <FacebookLoginButton />
    </Box>

  )

}

function RememberMeAndForgotPassword() {

  return(
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <FormControlLabel
        control={<Checkbox />}
        label="Remember Me"
      />
      <Link href="#" variant="body2">
        Forgot Password?
      </Link>
    </Box>
  );
}

function PhoneTextField() {
  return (
    <Box>
      <TextField
        label="Phone Number"
        variant="outlined"
        fullWidth
        type="tel"
        placeholder="+1 234 567 8900"
      />
    </Box>
  );
}

function PasswordTextField() {
  return (
    <Box>
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        type="password"
        placeholder="Enter your password"
      />
    </Box>
  );
}

function RightSide() {
  return (
    <Box
      sx={{
        height: '100vh',
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src={fryingPanImage}
        alt="Delicious Cooking"
        sx={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </Box>
  );
}

export default App;
