const { default: Axios } = require("axios")

import axios from 'axios'

export default axios.create({
    baseURL: 'http://8ecf02a37d3a.ngrok.io'
})