//import $ from 'jquery';

var jQuery = require('jquery');
import ellipsis from '../../../../node_modules/truncate.js/truncate.js';

//class Ellipsis {
//	constructor() {

      //$(document).ready(function() {
            $('.ellipsis').each(function () {
                  var $el = $(this);
                  console.time('truncate performance');
                  var config = {
                        lines: $el.data('truncate-lines'),
                        position: $el.data('truncate-position')
                  };
                  if(!$el.data("auto-line-height")) {
                        config.lineHeight = $el.css('line-height');
                  }
                  $el.truncate(config);
                  console.timeEnd('truncate performance');
            });
      //});

      //}
//}
//export default Ellipsis;
