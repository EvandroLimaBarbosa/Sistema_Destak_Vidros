import { styled } from '@mui/system';

const Container = styled('div')({
  marginTop: '20px',
  boxSizing: 'border-box',
  width: '279px',
  height: '309px',
  border: '1px solid #6C6C6C',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  borderRadius: '5px',
  background: 'url(/projeto.png)'
});

const ImagemProjeto = () => {
  return <Container />;
};

export default ImagemProjeto;
