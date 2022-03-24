// Unit Test

import moment from 'moment'
import {calculateExpirationDate} from '../src/helpers/calculate'
describe('Post Endpoints', () => {
  it('Should Return Expiration Date', async () => {
    const expiration_date = calculateExpirationDate(400)
    const expected_date = moment().subtract(4, 'days').add(1,'second').toDate()
    expect(expiration_date).toBe(expiration_date)
  })
  it('Should Return False Amount is invalid', async () => {
    const expiration_date = calculateExpirationDate(450)
    expect(expiration_date).toBeFalsy()
  })
})