import { styled } from '@mui/system';

const Container = styled('div')({
  marginTop: '20px',
  boxSizing: 'border-box',
  width: '100%',
  height: '100%',
  padding: '10px',
  border: '1px solid #6C6C6C',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '5px',
  background: 'url(/projeto.png)',
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
});

const ImagemProjeto = () => {
  return <Container />;
};

export default ImagemProjeto;
