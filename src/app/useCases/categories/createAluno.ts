import { Request, Response } from 'express';
import { Aluno } from '../../models/Aluno';

export async function createAluno(req: Request, res: Response) {
	//res.send('Ok post category');
	const {_id, nome, sobrenome, datanascimento, matricula, email} = req.body;
	const aluno = await Aluno.create({_id, datanascimento, email, matricula, nome, sobrenome});
	res.json(aluno);
}