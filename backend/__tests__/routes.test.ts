// End To End Test
import request from 'supertest'
import app from '../src/index'
describe('Post Endpoints', () => {
  it('Should Get Token', async () => {
    const res = await request(app)
      .post('/api/token/ask')
      .send({
        amount:400,
        meter_number:123458
        
    })
    expect(res.statusCode).toEqual(201)
  })
  it('Should Not Add Because Amount is invalid', async () => {
    const res = await request(app)
      .post('/api/token/ask')
      .send({
        amount:450,
        meter_number:123456
        
    })
    expect(res.statusCode).toEqual(409)
  })
})