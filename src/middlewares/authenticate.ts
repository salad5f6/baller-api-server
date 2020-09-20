import tokenService from "../services/tokenActions"

const authenticateIncomingAPIs = async (req, _res, next) => {
    const accessToken = req.headers.authorization && req.headers.authorization.split(" ")[1];
    console.log({ accessToken })
    if (!accessToken) {
        return next();
    }
    if (accessToken) {
        const { user } = await tokenService.validateToken(accessToken);
        req.user = user;
        next()
    }
    next()
}

export { authenticateIncomingAPIs }