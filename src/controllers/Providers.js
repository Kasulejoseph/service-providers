import Provider from '../models/Providers'
class Providers{
    static async addProvider(req, res){
        try {
            const data = await new Provider(req.body)
            data.save()
            res.send({
                status: 201,
                message: 'success',
                data
            })
        } catch (error) {
            res.send({
                status: 400,
                message: 'fail',
                error
            })
        }
    }
    static async getAllProvider(req, res){ 
        try {
            const data = await Provider.find()
            res.send({
                status: 200,
                message: 'success',
                data
            })
        } catch (error) {
            res.send({
                status: 400,
                message: 'fail',
                error
            })
        }
    }
}

export default Providers