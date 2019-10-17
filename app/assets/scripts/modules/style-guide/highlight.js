import hljs from 'highlight.js';

class HighlightModule {
    constructor() {
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    }
}
export default HighlightModule;