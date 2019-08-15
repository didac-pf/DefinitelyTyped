import { Request } from "express";
import { Options } from "swagger-express-validator";
import validator = require("swagger-express-validator");

const options: Options = {
    schema: {}
};
validator(options);

// minimal required parameter
validator({
    schema: {}
});

// all parameters
validator({
    schema: {},
    validateRequest: true,
    validateResponse: true,
    allowNullable: true,
    requestValidationFn: (req: Request, data: any, errors: any) => {
    },
    responseValidationFn: (req: Request, data: any, errors: any) => {
    }
});
