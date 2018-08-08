

export default class ApiClient {
    async fetchLocations() {
        try {
            let response = await fetch(
                'https://willyweather-stub.getsandbox.com/v2/key/search/closest.json?id=193&distance=km&weatherTypes=swell'
            );
            let responseJson = await response.json();
            console.log(responseJson);
            return responseJson.swell;
        } catch (error) {
            console.error(error);
        }
    }
}