import request from 'supertest';
import app from'../server.js'; // Import your Express app
import {generarMatriz6x6}  from '../utils/utils.js';
import  {MutationCheck}  from '../utils/DnaMutations.js';

describe('GET /', () => {
  test('should respond with "Conexion exitosa"', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Conexion exitosa');
  });

  test ('should respond with an object with parameters count_mutations count_no_mutations and ratio', async () =>{
    const response = await request(app).get('/stats'); 
    expect(response.body).toHaveProperty('count_mutations');
    expect(response.body).toHaveProperty('count_no_mutations');
    expect(response.body).toHaveProperty('ratio');
  },15000);
});

describe('POST /', () => {
  test('should have a Content-Type: application/json header', async () => {
    const response = await request(app).post("/mutation")
    expect(response.headers["content-type"]).toEqual(
      expect.stringContaining("json")
    );
  })

  test('should respond a message if its mutation or no mutation', async () => {
    const matriz6x6 = generarMatriz6x6()
    const response = await request(app).post("/mutation").send({dna:matriz6x6})
    expect(response.body).toHaveProperty('message');
  })

});
describe('No duplicate save', () => {
  test('should return DNA ya existente',async () => {
    const matriz6x6 = generarMatriz6x6();
    const response = await request(app).post("/mutation").send({ dna: matriz6x6 });
  
    if (response.status === 400) {
      expect(response.body.message).toBe('DNA ya existente');
    } else {
      const responseSecondTry = await request(app).post("/mutation").send({ dna: matriz6x6 });
      expect(responseSecondTry.status).toBe(400);
      expect(responseSecondTry.body.message).toBe('DNA ya existente');
    }

  })
});