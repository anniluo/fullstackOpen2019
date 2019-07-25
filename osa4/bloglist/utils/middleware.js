const errorHandler = (error, request, response, next) => {
    if (error.name === 'ValidationError') {
        return response.status(400).send({error: error.message})
    }
    if (error.name === 'JsonWebTokenError') {
        return response.status(401).json({
            error: 'invalid token'
        })
    }
    next(error)
}

const tokenExtractor = (request, response, next) => {
    const authorization = request.get('authorization')
    if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
        request.token = authorization.substring(7)
    }
    next()
}

module.exports = {
    errorHandler, tokenExtractor
}