class HttpError extends Error {
    statusCode;
    constructor (message, statusCode) {
        super(message);
        this.statusCode = statusCode;
    }
}

export async function fetchGet (url, headers) {
    return fetch(url, { method: 'GET', headers }).then(async res => {
        const response = await res.json().catch(() => null);
        if (res.ok) return response;
        throw new HttpError(response.message ?? res.statusText, res.status);
    });
}
