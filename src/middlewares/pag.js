
async function pag(req, res, next) {
    try {
        let { limit = 10, pag = 1, ordering = "_id:-1" } = req.query;
        let [orderBy, order] = ordering.split(":");

        limit = parseInt(limit);
        pag = parseInt(pag);
        order = parseInt(order);

        const result = req.result;

        if (limit > 0 && pag > 0) {
            const resultPag = await result.find()
                .sort({ [orderBy]: order })
                .skip((pag - 1) * order)
                .limit(limit)
                .exec();

            res.status(200).json(resultPag);
        }
    } catch (err) {
        console.log(err);

    }
}

export default pag;