import { ChangeEvent, useState } from "react";
import useAutocomplete from '@mui/base/useAutocomplete';
import { ArrowDropDown } from '@mui/icons-material';
import { styled } from '@mui/system';

interface InputProps {
  title: string;
  carac: number;
  direction: string;
  type: string;
}

export default function InputSelect(props: InputProps) {
  const [num, setNum] = useState<string>('');
  const [select, setSelect] = useState<boolean>(props.type == 'select');

  const handleNumChange = (event: ChangeEvent<HTMLInputElement>) => {
    const limit = props.carac;
    if (props.type == 'number') {
      setNum(event.target.value.slice(0, limit).replace(/\D/g, ""));
    } else if (props.type == 'text') {
      setNum(event.target.value.slice(0, limit));
    }
  };


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

  var {
    getRootProps,
    getInputProps,
    getListboxProps,
    getOptionProps,
    groupedOptions,
  } = useAutocomplete({
    id: 'use-autocomplete-demo',
    options: servicos,
    getOptionLabel: (option) => option.nome,
  })


  return (
    <div
      className={`flex flex-${props.direction} w-full mx-0 my-5 gap-3 items-center`}
      id={`container_${props.title}`} {...select ? { ...getRootProps() } : ''}>
        <label className="mx-auto font-inter font-bold text-base leading-5 text-gray-600" id={`label_${props.title}`}>{props.title.toUpperCase()}</label>
        <div>
          {select ?
            (
              <input  className={`py-3 border-black h-8 border rounded text-sm placeholder:text-zinc-500 px-2 shadow-[0px_3px_5px_#0000008a] leading-normal text-center w-full`} placeholder="Selecione um serviço" {...getInputProps()} />
              
            ) : (
              <input
                className={`py-3 border-black h-8 border rounded text-sm placeholder:text-zinc-500 px-2 shadow-[0px_3px_5px_#0000008a] leading-normal text-center w-full`}
                placeholder={`Digite a ${props.title.charAt(0).toUpperCase() + props.title.slice(1).toLowerCase()}`}
                type="text"
                id={`input_${props.title}`}
                min={0}
                value={num}
                onChange={handleNumChange}
              />
            )}
        </div>
        {groupedOptions.length > 0 && select ? (
          <ul className="absolute" {...getListboxProps()}>
            {(groupedOptions as typeof servicos).map((option, index) => (
              <li {...getOptionProps({ option, index })}>{option.nome}</li>
            ))}
          </ul>
        ) : null}
    </div>
  );
}
