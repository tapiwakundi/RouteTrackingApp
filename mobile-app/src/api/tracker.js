const { default: Axios } = require("axios")

import axios from 'axios'

export default axios.create({
    baseURL: 'http://e14cb546e393.ngrok.io'
})