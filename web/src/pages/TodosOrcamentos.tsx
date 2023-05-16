export default function TodosOrcamentos() {
  // Dados da tabela
  const dados = [
    { data: '27/11/2021', dia: 'Sábado', cliente: 'Michel', vendedor: 'Vina', status: 'FINALIZADO' },
    { data: '29/11/2021', dia: 'Segunda', cliente: 'Evandro', vendedor: 'Gabriel', status: 'PENDENTE' },
    // Outros dados...
  ];
  
  const header1 = ['','06/12/2021','SEGUNDA','LILO','EVANDRO'];
  const header2 = ['OBSERVAÇÃO','HORARIO','CLIENTE','SERVIÇO','VALOR','BAIRRO','OBSERVAÇÃO/ENCAIXE','CONTATO','VENDEDOR','ORIGEM','STATUS','MOTIVO'];

  return (
    <div className="m-20">
      <h2 className="text-2xl font-bold mb-4">Tabela de Agendas</h2>
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            {header1.map((item, index) => (
              <th key={index} className="py-2 px-4 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b">
                {item}
              </th>
            ))}
          </tr>
          <tr>
            {header2.map((item, index) => (
              <th key={index} className="py-2 px-4 bg-gray-100 font-bold uppercase text-sm text-gray-600 border-b">
                {item}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {dados.map((item, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-b">{item.data}</td>
              <td className="py-2 px-4 border-b">{item.dia}</td>
              <td className="py-2 px-4 border-b">{item.cliente}</td>
              <td className="py-2 px-4 border-b">{item.vendedor}</td>
              <td className="py-2 px-4 border-b">{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
