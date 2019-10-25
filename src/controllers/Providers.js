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
            const sort = {}
            if(req.query.sort) {
                const getParts = req.query.sort.split('-')                
                sort[getParts[0]] = getParts[0] === 'lowest_price' ? 1 : -1
            }
            const data = await Provider.find({},
            null,
            {
              skip: parseInt(req.query.skip),
              limit: parseInt(req.query.limit),
              sort  
            } 
            )
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
    static async getSingleProvider(req, res){ 
        try {
            const data = await Provider.findById(req.params.id)
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
    static async updateProvider(req, res){ 
        try {
            const _id = req.params.id
            const updateKeys = Object.keys(req.body) 
            const toUpdateKey = ["name","lowest_price", "rating", "max_speed", "description", "contact_no","email", "image", "url"]
            const isvalidUpadateKeys = updateKeys.every((update) => toUpdateKey.includes(update))  
                      
            if(!isvalidUpadateKeys) {                
                return res.send({
                    status: 400,
                    message: "Fail", 
                    "error": "Invalid Update Key Value"
                })
            }
            const serviceProvider = await Provider.findOne({_id}, {new: true, runValidator: true})
            if(!serviceProvider) {
                return res.send({
                    status: 404,
                    message: "Fail",
                    error: `service provider with id ${_id} not found`
,                })
            }
            updateKeys.forEach((update) => serviceProvider[update] = req.body[update])
            serviceProvider.save()
            res.send({
                status: 200,
                message: 'success',
                data: serviceProvider
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