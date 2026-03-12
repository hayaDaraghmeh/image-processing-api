import supertest from 'supertest'
import app from '../src/app'
import resizeImage from '../src/utilities/imageProcessing'


const request = supertest(app)

describe('Test endpoint responses', () => {
  it('gets the api endpoint', async () => {
    const response = await request.get('/api/images?filename=fjord&width=200&height=200')
    expect(response.status).toBe(200)
  })

    it('returns error if parameters are missing', async () => {
    const response = await request.get('/api/images')
    expect(response.status).toBe(400)
  })

  it('returns error for invalid image name', async () => {
    const response = await request.get('/api/images?filename=wrong&width=200&height=200')
    expect(response.status).toBe(404)
  })

  it('returns error for invalid width or height', async () => {
    const response = await request.get('/api/images?filename=fjord&width=-100&height=200')
    expect(response.status).toBe(500)
  })
})


/*describe('Image processing function', () => {
  it('should resize an image', async () => {
    const input = 'assets/full/fjord.jpg'
    const output = 'assets/thumb/test.jpg'

    const result = await resizeImage(input, output, 200, 200)

    expect(result).toBeUndefined()
  })
})*/