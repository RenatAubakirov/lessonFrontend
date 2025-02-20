function checkUserID(schema) {
    return (req, res, next) => {
        const validateResult = schema.validate(req.params.id);
        if (validateResult.error) {
            return res.status(400).send(validateResult.error.details);
        }
        next();
    }
}

function checkUserInputData(schema) {
    return (req, res, next) => {
        const validateResult = schema.validate(req.body);
        if (validateResult.error) {
            return res.status(400).send(validateResult.error.details);
        }
        next();
    }
}

module.exports = { checkUserID, checkUserInputData };