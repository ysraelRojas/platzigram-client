'use strict'

const request = require('request-promise')
const Promise = require('bluebird')

class Client {

    constructor (options) {
        this.options = options || {
            endpoints: {
                pictures: 'http://api.platzigram.com/picture',
                users: 'http://api.platzigram.com/user',
                auth: 'http://api.platzigram.com/auth'
            }
        }
    }

    getPicture (id, callback) {
        let opts = {
            method: 'GET',
            uri: `${this.options.endpoints.pictures}/${id}`,
            json: true
        }

        return Promise.resolve(request(opts)).asCallback(callback)
    }

    savePicture(){}
    likePicture(){}
    listPicture(){}
    listPictureByTag(){}
    saveUser(){}
    getUser(){}
    auth(){}
}

module.exports = Client