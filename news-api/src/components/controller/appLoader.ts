import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super(process.env.API_URL ?? 'default name', {
            apiKey: process.env.API_KEY ?? 'default name',
        });
    }
}

export default AppLoader;
