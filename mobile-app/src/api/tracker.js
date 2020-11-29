const { default: Axios } = require("axios")

import axios from 'axios'

export default axios.create({
    baseURL: 'http://8e604678c022.ngrok.io'
})