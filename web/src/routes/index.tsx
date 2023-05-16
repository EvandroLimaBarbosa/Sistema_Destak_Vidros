import { Routes, Route, Navigate } from 'react-router-dom'
import ControleEstoque from '../pages/ControleEstoque'
import FazerOrcamento from '../pages/FazerOrcamento'
import TodosOrcamentos from '../pages/TodosOrcamentos'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/fazerorcamento" element={<FazerOrcamento />} />
      <Route path="/controleestoque" element={<ControleEstoque />} />
      <Route path="/todosorcamentos" element={<TodosOrcamentos />} />


      {/* Rota inexistente volta para esta tela */}
      <Route path="*" element={<Navigate to="/fazerorcamento"/>}/>
      </Routes>
  )
}