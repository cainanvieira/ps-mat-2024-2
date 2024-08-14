import prisma from '../database/client.js'

const controller = {}   //Objeto vazio

controller.create = async function (req, res) {
    try {
        await prisma.car.create({ data: req.body })

        //HTTP 201: Create
        res.status(201).end()
    }
    catch(error) {
        console.error(error)

        //HTTP 500: Internal Server Erros
        res.status(500).end()
    }
}
export default controller