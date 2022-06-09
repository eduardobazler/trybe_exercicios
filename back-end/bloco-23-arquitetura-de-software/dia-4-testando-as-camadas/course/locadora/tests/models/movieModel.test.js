const sinon = require('sinon');
const { expect } = require('chai');

const connection = require('../../models/connection');
const MoviesModel = require('../../models/movieModel');

describe('Insere um novo filme no BD', () => {
  const payloadMovie = {
    title: 'Example Movie',
    directedBy: 'Jane Dow',
    releaseYear: 1999,
  }
  // mockando a conexão com o banco de dados
  before(async () => {
    const execute = [{ insertId: 1 }]; // retorno esperado nesse teste

    sinon.stub(connection, 'execute').resolves(execute);
  });

  // Restauraremos a função `execute` original após os testes.
  after(async () => {
    connection.execute.restore();
  });

  describe('quando é inserido com sucesso', () => {

    it('retorna um objeto', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.be.a('object')
    });

    it('tal objeto possui o "id" do novo filme inserido', async () => {
      const response = await MoviesModel.create(payloadMovie);

      expect(response).to.have.a.property('id')
    });

  });
});

describe('Retorna um unico filme através do id', () => {

  describe('Quando existe o filme no DB', () => {

    const ID_EXAMPLE = 1;

    movies = [{
      id: ID_EXAMPLE,
      title: 'Example Movie',
      directed_by: 'Jane Dow',
      release_year: 1999,
    }];

    before(() => {
      
      sinon.stub(connection, 'execute').resolves([movies]);

    })

    after(() => {
      connection.execute.restore();
    })

    it('retorna um objeto', async () => {
      const response = await MoviesModel.getById(ID_EXAMPLE);

      expect(response).to.be.an('object');
    });

    it('tal objeto deve possuir "id", "title", "directedBy", "releaseYear"', async () => {
      const response = await MoviesModel.getById(ID_EXAMPLE);
      
      expect(response).to.includes.keys("id", "title", "directedBy", "releaseYear");
    })
  })
})