const sinon = require('sinon');
const { expect } = require('chai');
const { MongoClient, ObjectID } = require('mongodb');
const { MongoMemoryServer } = require('mongodb-memory-server');

const MovieModel = require('../../models/movieModel');
const mongoConnection = require('../../models/connection');

describe('Pesquisa um filme por Id no BD', () => {
  const DBServer = new MongoMemoryServer();
  let connectionMock;
  
  const Id = '604cb554311d68f491ba5781';
  const movieExample = {
    title: 'Título exemplo',
    directedBy: 'Zé das Couves',
    releaseYear: 2000,
  }
  
  before(async () => {
    
    const URLMock = await DBServer.getUri();
    
    connectionMock = await MongoClient
    .connect(URLMock, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    .then((conn) => conn.db('model_example'));
    
    sinon.stub(mongoConnection, 'getConnection').resolves(connectionMock);
  });
  
  after(() => {
    mongoConnection.getConnection.restore();
  });

  describe('e não encontra o filme', () => {
    
    it('retorna null', async () => {
      const result = await MovieModel.findById(Id);
      console.log(result)
      expect(result).to.be.equal(null);
    })
  })

  describe('e encontra o Id informado', () => {
    before( async () => {
      const moviesCollection = await connectionMock.collection('movies');
      await moviesCollection.insertOne({
        _id: ObjectID(Id),
        title: 'Título exemplo',
        directedBy: 'Zé das Couves',
        releaseYear: 2000, 
      });
    });

    it('retorna um objeto', async () => {
      const result = await MovieModel.findById(Id);
      expect(result).to.be.an('object')
    })
    
    it('o objeto tem as propriedades "id, title, directedBy, releaseYear"', async () => {
      const result = await MovieModel.findById(Id);
      expect(result).to.includes.all.keys('_id', 'title', 'directedBy', 'releaseYear');
    })
  })
})