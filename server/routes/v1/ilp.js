const IlpPacket = require('ilp-packet')
module.exports = (app) => {
    app.get('/ilp', (req, res) => {
        const binaryPacket = Buffer.from(req.query.hash, 'hex')
        const jsonPacket = IlpPacket.deserializeIlpPacket(binaryPacket)
        res.send(jsonPacket)
    })
};