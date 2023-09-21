const chai = require('chai');
const sinon = require('sinon');
const assert = chai.assert;
const expect = chai.expect;
const ListaDeTarefa = require('../src/tarefaList.js').ListaDeTarefa;
const Tarefa = require('../src/tarefaList.js').Tarefas; 

describe('Testes da ListaDeTarefa', () => {
  let listaDeTarefas;
  let consoleSpy;

  beforeEach(() => {
    listaDeTarefas = new ListaDeTarefa();
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    consoleSpy.restore();
  });

  it('Deve adicionar uma nova tarefa', () => {
    const tarefa = new Tarefa('Título 1', 'Descrição 1');
    
    listaDeTarefas.addTarefa(tarefa);
    
    assert.equal(listaDeTarefas.listaDeTarefa.length, 1);
  });

  it('Deve adicionar duas novas tarefas', () => {
    const tarefa = new Tarefa('Título 1', 'Descrição 1');
    const tarefa1 = new Tarefa('Título 2', 'Descrição 2');

    listaDeTarefas.addTarefa(tarefa);
    listaDeTarefas.addTarefa(tarefa1);

    assert.equal(listaDeTarefas.listaDeTarefa.length, 2);
  });

  it('Deve adicionar uma nova tarefa duplicada', () => {
    const tarefa = new Tarefa('Título 1', 'Descrição 1');
    const tarefa1 = new Tarefa('Título 1', 'Descrição 1');

    listaDeTarefas.addTarefa(tarefa);
    listaDeTarefas.addTarefa(tarefa1);

    expect(consoleSpy.getCall(0).args[0]).to.include('Tarefa Duplicada');
    assert.equal(listaDeTarefas.listaDeTarefa.length, 1);
  });

  it('Deve visualizar a lista de tarefas(vazia)', () => {
    listaDeTarefas.mostrarTarefas();

    expect(consoleSpy.getCall(0).args[0]).to.include('Lista Vazia');

  });

  it('Deve visualizar a lista de tarefas(com valores)', () => {
    const tarefa1 = new Tarefa('Título 1', 'Descrição 1');
    const tarefa2 = new Tarefa('Título 2', 'Descrição 2');

    listaDeTarefas.addTarefa(tarefa1);
    listaDeTarefas.addTarefa(tarefa2);
    listaDeTarefas.mostrarTarefas();

    expect(consoleSpy.getCall(1).args[0]).to.include('Título 1');
    expect(consoleSpy.getCall(2).args[0]).to.include('Descrição 1');
    expect(consoleSpy.getCall(3).args[0]).to.include('Status: A fazer');
    expect(consoleSpy.getCall(5).args[0]).to.include('Título 2');
    expect(consoleSpy.getCall(6).args[0]).to.include('Descrição 2');
    expect(consoleSpy.getCall(7).args[0]).to.include('Status: A fazer');
  });

  it('Deve atualizar o status de uma tarefa, para "Em Andamento"', () => {
    const tarefa = new Tarefa('Título 1', 'Descrição 1');

    listaDeTarefas.addTarefa(tarefa);
    listaDeTarefas.attStatus('Título 1');

    expect(listaDeTarefas.listaDeTarefa[0].status).to.equal('Em Andamento');
  });

  it('Deve atualizar o status de uma tarefa, para "Concluida"', () => {
    const tarefa = new Tarefa('Título 1', 'Descrição 1');

    listaDeTarefas.addTarefa(tarefa);
    listaDeTarefas.attStatus('Título 1');
    listaDeTarefas.attStatus('Título 1');

    expect(listaDeTarefas.listaDeTarefa[0].status).to.equal('Concluida');
  });

  it('Nao deve atualizar o status da tarefa', () => {
    const tarefa = new Tarefa('Título 1', 'Descrição 1');

    listaDeTarefas.addTarefa(tarefa);
    listaDeTarefas.attStatus('Título 1');
    listaDeTarefas.attStatus('Título 1');
    listaDeTarefas.attStatus('Título 1');
    
    expect(listaDeTarefas.listaDeTarefa[0].status).to.equal('Concluida');
    expect(consoleSpy.getCall(0).args[0]).to.include('Tarefa ja concluida');
  });

  it('Atualizar o status da tarefa que nao existe', () => {

    listaDeTarefas.attStatus('Título 1');

    expect(consoleSpy.getCall(0).args[0]).to.include('Tarefa nao encontrada');
  });

  it('Deve excluir uma tarefa', () => {
    const tarefa1 = new Tarefa('Título 1', 'Descrição 1');
    const tarefa2 = new Tarefa('Título 2', 'Descrição 2');

    listaDeTarefas.addTarefa(tarefa1);
    listaDeTarefas.addTarefa(tarefa2);
    listaDeTarefas.removerTarefa('Título 1');

    expect(listaDeTarefas.listaDeTarefa.length).to.equal(1);
  });

  it('Nao deve excluir uma tarefa', () => {
    listaDeTarefas.removerTarefa('Título 3');

    expect(consoleSpy.getCall(0).args[0]).to.include('Tarefa nao encontrada');
  });

});
