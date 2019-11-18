const urlGetData = 'https://api.myjson.com/bins/w5n0o';

function* getDataFromApi() {
    const response = yield fetch(urlGetData);
    const data = yield response.json();

    return data;
}
export const Api = {
    getDataFromApi
}; 