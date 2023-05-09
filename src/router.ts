import { Router } from 'express';
import { listAluno } from './app/useCases/categories/listAlunos';
import { createAluno} from './app/useCases/categories/createAluno';

export const router = Router();

//List alunos
router.get('/alunos', listAluno);

//Create aluno
router.post('/alunos', createAluno);

