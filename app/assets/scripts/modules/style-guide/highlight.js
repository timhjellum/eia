//import Highlight from 'highlight.js';
import hljs from 'highlight.js';
//import css from 'highlight.js/lib/languages/css';
//import php from 'highlight.js/lib/languages/php';
//import javascript from 'highlight.js/lib/languages/javascript';
//import javascript from 'highlight.js/lib/languages/javascript';
//hljs.registerLanguage('javascript', javascript);

class HighlightModule {
    constructor() {
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    }
}
export default HighlightModule;