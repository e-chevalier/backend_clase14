
class Randoms {

    async getRandoms(req) {
        try {
            const { cant } = req.query
            const data = {}
            let tmp = 0

            if (cant) {
                for (let i = 0; i < cant; i++) {
                    tmp = this.getRandomIntInclusive(1, 1000)
                    let str_tmp = String(tmp)
                    data[str_tmp] ? data[str_tmp] = data[str_tmp] + 1 : data[str_tmp] = 1
                }

            } else {
                for (let i = 0; i < 100000000; i++) {
                    tmp = this.getRandomIntInclusive(1, 1000)
                    let str_tmp = String(tmp)
                    data[str_tmp] ? data[str_tmp] = data[str_tmp] + 1 : data[str_tmp] = 1
                }
            }

            console.log(data)

            return { status: "OK", data: data }

        } catch (error) {
            console.log(error)
        }
    }

    getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
    }

}

export let randomsService = new Randoms()