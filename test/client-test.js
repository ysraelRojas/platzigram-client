'use strict'

const test = require('ava')
const platzigram = require('../')
const fixtures = require('./fixtures')
const nock = require('nock')

let options = {
    endpoints: {
        pictures: 'http://platzigram.test/picture',
        users: 'http://platzigram.test/user',
        auth: 'http://platzigram.test/auth'
    }
}

test.beforeEach(t => {
    t.context.client = platzigram.createClient(options)
})

test('client', t => {
    const client = t.context.client

    t.is(typeof client.getPicture, 'function')
    t.is(typeof client.savePicture, 'function')
    t.is(typeof client.likePicture, 'function')
    t.is(typeof client.listPicture, 'function')
    t.is(typeof client.listPictureByTag, 'function')
    t.is(typeof client.saveUser, 'function')
    t.is(typeof client.getUser, 'function')
    t.is(typeof client.auth, 'function')

})

test('getPicture', async t => {
    const client = t.context.client

    let image = fixtures.getImage()

    nock(options.endpoints.pictures)
        .get(`/${image.publicId}`)
        .reply(200, image)

    let result = await client.getPicture(image.publicId)

    t.deepEqual(image, result)
})