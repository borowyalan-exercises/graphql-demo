import { GraphQLClient } from 'graphql-request'

exports.handler = async (event, context, callback) => {
  const endpoint = 'https://api.github.com/graphql'

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer 892aab90643aaf9b1e2355c19e7719e58d1d3e2f`,
    },
  })

  const query = `
    query { 
        viewer { 
        login
        }
  }
  `

  const data = await graphQLClient.request(query)
  console.log(JSON.stringify(data, undefined, 2))
  callback(null, {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }, 
    body: JSON.stringify({
      data: data
    })
  })
}
