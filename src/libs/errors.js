
const NoData = {
    code: 8,
    message: 'No data available',
};

const InternalError = {
    code: 131,
    message: 'Internal error',
};

const FailValidateRegister = {
    code: 205,
    message: 'validate register request fail',
}

const BadAuthentication = {
    code: 215,
    message: 'Bad authentication data',
};

const FileIsNotSupport = {
    code: 305,
    message: 'The file is not in the required format',
};

const Forbidden = {
    code: 418,
    message: 'Do not have permission',
};


module.exports = {
    NoData,InternalError,BadAuthentication,FileIsNotSupport,Forbidden,FailValidateRegister
}