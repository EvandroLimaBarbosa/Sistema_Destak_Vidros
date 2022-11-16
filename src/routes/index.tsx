import { Routes, Route, Navigate } from 'react-router-dom'
import MenuIniciar from '../pages/MenuIniciar'
import Relatorios from '../pages/Relatorios'
import TelaOrcamento from '../pages/TelaOrcamento'

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/fazerorcamento" element={<TelaOrcamento />} />
      <Route path="/menuiniciar" element={<MenuIniciar />} />
      <Route path="/relatorios" element={<Relatorios />} />


      {/* Rota inexistente volta para esta tela */}
      <Route path="*" element={<Navigate to="/fazerorcamento"/>}/>
      </Routes>
  )
}