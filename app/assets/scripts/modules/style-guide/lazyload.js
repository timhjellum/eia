import LazyLoad from '../../../../node_modules/lazyload/lazyload.js';

class LazyLoadModule {
    constructor() {
        lazyload();
        console.log('Got LazyLoad?')
    }
}
export default LazyLoadModule;


