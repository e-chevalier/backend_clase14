import { randomsService } from '../services/randomsService.js'

class Randoms {
    async getRandoms(req, res, next) {
        try {
            let {status, data} = await randomsService.getRandoms(req)

            res.render('randoms', {data} )

        } catch (error) {
            console.log(error)
        }

    }

}

export let randomsController = new Randoms()
