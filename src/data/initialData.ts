import { Especialidade } from "../types/especialidade";
import { Medico } from "../interfaces/medico";
import { Paciente } from "../types/paciente";
import { Consulta } from "../interfaces/consulta";

export const initialEspecialidade: Especialidade = {
  id: 1,
  nome: "Cardiologia",
  descricao: "Cuidados com o coração",
};

export const initialMedico: Medico = {
  id: 1,
  nome: "Dr. Roberto Silva",
  crm: "CRM12345",
  especialidade: initialEspecialidade,
  ativo: true,
};

export const initialPaciente: Paciente = {
  id: 1,
  nome: "Carlos Andrade",
  cpf: "123.456.789-00",
  email: "carlos@email.com",
  telefone: "(11) 98765-4321",
};

export const consultaInicial: Consulta = {
  id: 1,
  medico: initialMedico,
  paciente: initialPaciente,
  data: new Date(2026, 2, 10),
  valor: 350,
  status: "agendada",
  observacoes: "Consulta de rotina",
};
