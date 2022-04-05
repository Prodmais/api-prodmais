const { JoiValidatorError } = require('../errors/index');

function JoiValidator (fn, schema){
    return async (request, response, next) => {
        if(schema){
            try{
                let data = {};
                
                const types = ["body", "params", "query"];
                
                for(const type of types){
                    data = {...data, ...request[type]};
                }

                await schema.validateAsync(data);
                
                await fn(request, response, next);
            } catch(err){
                console.log(err);
                next(new JoiValidatorError(err));
            }
        } else {
            await fn(request, response, next);
        }
    }
}

module.exports = JoiValidator;