import WatchResize from 'watch-element-resize.js';

var watchResize = new WatchElementResize('.footer');
watchResize.on('resize', function(evt){
  console.info(evt);

  // the DOM element
  var resized_element = evt.element.target;
  
  // the element offset (width, height, top, left) 
  var offset = evt.element.offset;
  
  // the window dimensions -- just in case you need
  var window_size = evt.window;
});



