import { type ServerErrorType } from '../enums/enums.js';

type ServerCommonErrorResponse = {
    errorType: typeof ServerErrorType.COMMON;
    message: string;
};

type ServerErrorDetail = {
    message: string;
    path: (number | string)[];
};

type ServerErrorResponse =
    | ServerCommonErrorResponse
    | ServerValidationErrorResponse;

type ServerValidationErrorResponse = {
    details: unknown;
    errorType: typeof ServerErrorType.VALIDATION;
    message: string;
};

export {
    type ServerCommonErrorResponse,
    type ServerErrorDetail,
    type ServerErrorResponse,
    type ServerValidationErrorResponse,
};
