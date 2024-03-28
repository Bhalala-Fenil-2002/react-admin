const sendSuccess = (async (res:any, req:any) => {
    const responseData = {
        'message': req.message,
        'data': req.data
    };
    res.status(200).send(responseData);
});

const sendAuthError = (async (res:any, req:any) => {
    res.status(401).send(req.error)
});

const sendError = (async (res:any, error:any) => {
    res.status(422).send(error)
});

const sendValidationError = (async (res:any, error:any) => {
    let transformed:any = { };
    if (error) {
        Object.keys(error).forEach(function (key, val) {
            transformed[key] = error[key][0];
        });
    }
    res.status(422).send({ status: false, error: transformed })
});

export { sendSuccess, sendError, sendAuthError, sendValidationError }