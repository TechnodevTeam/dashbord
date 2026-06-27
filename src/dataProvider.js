import simpleRestProvider from 'ra-data-simple-rest'

const baseURL = 'http://localhost:8080/api'

const dataProvider = simpleRestProvider(baseURL)

export default dataProvider