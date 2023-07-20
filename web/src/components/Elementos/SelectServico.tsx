import useAutocomplete from '@mui/base/useAutocomplete';
import { ArrowDropDown } from '@mui/icons-material';
import { styled } from '@mui/system';

const Input = styled('input')(({ theme }) => ({
  width: '100%',
  backgroundColor: 'transparent',
  fontFamily: 'Inter',
  fontWeight: '700',
  fontSize: '23px',
  textAlign: 'center',
  color: 'black',
  textOverflow: "ellipsis",
}));

const Listbox = styled('ul')(({ theme }) => ({
  padding: 0,
  zIndex: 1,
  listStyle: 'none',
  margin: 'auto',
  textAlign: 'center',
  backgroundColor: theme.palette.mode === 'light' ? '#fff' : '#000',
  overflow: 'auto',
  maxHeight: 200,
  width: 282,
  position: 'absolute',
  border: '1px solid rgba(0,0,0,.25)',
  '& li.Mui-focused': {
    backgroundColor: '#4a8df6',
    color: 'white',
    cursor: 'pointer',
  },
  '& li:active': {
    backgroundColor: '#2977f5',
    color: 'white',
  },
}));


const servicos = [
  { nome: 'Box Padrão' },
  { nome: 'Box Até o Teto' },
  { nome: 'Porta 2 Folhas' },
  { nome: 'Porta 4 Folhas' },
  { nome: 'Janela 2 Folhas' },
  { nome: 'Janela 4 Folhas' },
  { nome: 'Vitrine de Vidro' },
  { nome: 'Espelho Decorativo' },
  { nome: 'Divisória de Vidro' },
  { nome: 'Tampo de Mesa' },
  { nome: 'Fachada de Vidro' },
  { nome: 'Cobertura de Vidro' },
  { nome: 'Guarda-corpo de Vidro' },
  { nome: 'Prateleiras de Vidro' },
  { nome: 'Vidro Temperado' },
  { nome: 'Vidro Laminado' },
  { nome: 'Vidro Serigrafado' },
  { nome: 'Vidro Acidato' },
  { nome: 'Vidro Jateado' },
  { nome: 'Vidro Colorido' },
  { nome: 'Vidro Reflecta' },
  // Add more service options here
];

export default function SelectServico() {
  
  const {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: servicos,
    getOptionLabel: (option) => option.nome,
  });

  const ArrowIcon = styled(ArrowDropDown)({
    position: 'absolute',
    left: '290px',
    top: '125px',
    transform: 'translateY(-50%)',
    pointerEvents: 'none',
  });

  

  return (
    <div>
      <div
        {...getRootProps()}>
        <Input placeholder="Selecione um serviço" {...getInputProps()} />
        <ArrowIcon />
      </div>
      {groupedOptions.length > 0 ? (
        <Listbox {...getListboxProps()}>
          {(groupedOptions as typeof servicos).map((option, index) => (
            <li {...getOptionProps({ option, index })}>{option.nome}</li>
          ))}
        </Listbox>
      ) : null}
    </div>
  );
}

