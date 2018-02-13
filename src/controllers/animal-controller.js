'use strict';

const ValidationContract = require('../validators/fluent-validator');
const repository = require('../repositories/animal-repository');

exports.get = async (req, res, next) => {
  try {
    var data = await repository.get();
    res.status(200).send(data);
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    })
  }
};

exports.post = async (req, res, next) => {
  let contract = new ValidationContract();
  contract.hasMinLen(req.body.name, 3, 'O nome do animal deve conter pelo menos 3 caracteres');
  contract.hasMinLen(req.body.photo, 3, 'E preciso selecionar uma foto');
  contract.hasMinLen(req.body.description, 10, 'A descrição deve conter pelo menos 10 caracteres');
  contract.isRequired(req.body.user, 1, 'Erro no usuário');

  if (!contract.isValid()) {
    res.status(400).send(contract.errors()).end();
    return;
  }

  try {
    await repository.create(req.body);
    res.status(201).send({ message: 'Animal cadastrado com sucesso! Boa sorte <3' });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requição'
    });
  }
};

exports.put = async (req, res, next) => {
  try {
    await repository.update(req.params.is, req.body);
    res.status(200).send({ message: 'Animal atualizado com sucesso!' });
  } catch (e) {
    res.status(500).send({
      message: 'Falha ao processar sua requisição'
    });
  }
};

exports.delete = async (req, res, next) => {
  try {
      await repository.delete(req.body.id)
      res.status(200).send({ message: 'Animal removido com sucesso!' });
  } catch (e) {
      res.status(500).send({
          message: 'Falha ao processar sua requisição'
      });
  }
};