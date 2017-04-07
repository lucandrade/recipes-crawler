import Request from 'request';

export default (url) => {
    return new Promise((resolve, reject) => {
        return Request(url, (err, res, body) => {
            if (err) {
                return reject(err);
            }

            return resolve(body);
        });
    });
}
