import jwt from 'jsonwebtoken';

const secretKey = 'test';

const auth = async (req, res, next) => {
    try {
        
        const token = req.headers.authorization.split(" ")[1];
        const isCustomAuth = token.length < 500;

        let decodedData;

        if (token && isCustomAuth) {
            decodedData = jwt.verify(token, secretKey);

            req.userId = decodedData?.id;
        } else { // for Google authorization
            decodedData = jwt.decode();

            req.userId = decodedData?.sub;
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

export default auth;