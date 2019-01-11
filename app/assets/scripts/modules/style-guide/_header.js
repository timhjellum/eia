//import headsUp from 'headsup.js';

class Header {
constructor() {
/*
headsUp({
    selector: '._header',
    duration: 0.3,
    easing: 'ease',
    delay: 0,
    debounce: false
});
*/


$("._nested-layouts ._module-container > .l-row > .l-col").html('<div class="l-row header l-full-width-col">' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'</div>' +
'' +        
'' +        
'' +        
'' +       
'<div class="l-row l-full-width-col">' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'</div>' +
'' +        
'' +        
'' +        
'' +   
'<div class="l-row l-two-col-even">' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'</div>' +
'' +        
'' +        
'' +        
'' +   
'<div class="l-row l-two-col-left-narrow">' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'</div>' +
'' +        
'' +        
'' +        
'' +   
'<div class="l-row l-two-col-right-narrow">' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'</div>' +
'' +        
'' +        
'' +        
'' +   
'<div class="l-row l-two-col-left">' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'</div>' +
'' +        
'' +        
'' +        
'' +   
'<div class="l-row l-two-col-right">' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'</div>' +
'' +        
'' +        
'' +        
'' +   
'<div class="l-row l-two-col-right-wide">' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'</div>' +
'' +   
'' +   
'' +   
'' +   
'<div class="l-row l-two-col-left-wide">' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'</div>' +
'' +   
'' +        
'' +         
'' +        
'<div class="l-row l-three-col-even">' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'</div>' +
'' +   
'' +        
'' +         
'' +       
'<div class="l-row l-three-col">' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'</div>' +
'' +        
'' +        
'' +        
'' +   
'<div class="l-row l-four-col-even">' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'</div>' +
'' +        
'' +        
'' +        
'' +   
'<div class="l-row l-five-col-even">' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'</div>' +
'' +        
'' +        
'' +        
'' +   
'<div class="l-row l-six-col-even">' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'   <div class="l-col">' +
'        <!-- start filler text -->' +
'        <div class="primary-fixed">' +
'           <span class="_module-bg">' +
'            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lorem massa, semper nec eros a, lacinia porttitor nunc. Phasellus ex dolor, ultricies eu ornare ut, placerat non sapien. Suspendisse sagittis risus eu sem suscipit sodales. Vivamus ligula turpis, aliquam et maximus vel, tempor sed lectus. Mauris quis posuere massa. Ut quis diam sed mi placerat efficitur eu sed felis. Aliquam ipsum metus, bibendum vel ipsum sed, lobortis fringilla sem. Vestibulum ut odio id nulla commodo dignissim. Proin a pharetra tellus.' +
'           </span>' +
'       </div>' +
'       <!-- end filler text  -->' +
'   </div>' +
'</div>');




$(".add-header").html('<div class="l-body-wrapper  l-full-page">' +
'   <header>' +
'       <nav class="navigation">' +
'           <a class="logo" href="/">' +
'               <h1>U.S. Energy Information Administration - EIA - Independent Statistics and Analysis</h1>' +
'           </a>' +
'        <ul class="_nav">' +
'            <li class="_nav-primary-item"><a href="https://wwwdev.eia.gov/style-guide/base/index.html">Base</a>' +
'                <ul class="_base _nav-dropdown"></ul>' +
'            </li>' +
'            <li class="_nav-primary-item"><a href="https://wwwdev.eia.gov/style-guide/layouts/index.html">Layouts</a><ul class="_layouts _nav-dropdown"></ul>' +
'            </li>' +
'            <li class="_nav-primary-item"><a href="https://wwwdev.eia.gov/style-guide/modules/index.html">Modules</a>' +
'                <ul class="_modules _nav-dropdown">' +
'                </ul>' +
'            </li>' +
'            <li class="_nav-primary-item"><a href="https://wwwdev.eia.gov/style-guide/states/index.html">States</a>' +
'                <ul class="_states _nav-dropdown">' +
'                </ul>' +
'            </li>' +
'           <li class="_nav-primary-item"><a href="https://wwwdev.eia.gov/style-guide/themes/index.html">Themes</a>' +
'                <ul class="_themes _nav-dropdown">' +
'                </ul>' +
'            </li>' +
'            <li class="_nav-primary-item"><a href="https://wwwdev.eia.gov/style-guide/examples/index.html">Examples</a>' +
'                <ul class="_examples _nav-dropdown">' +
'                </ul>' +
'            </li>' +
'        </ul>' +
'        <div class="_resolution _mobile">Mobile</div>' +
'        <div class="_resolution _mobile-landscape">Mobile Landscape</div>' +
'        <div class="_resolution _tablet">Tablet</div>' +
'        <div class="_resolution _tablet-landscape">Tablet Landscape</div>' +
'        <div class="_resolution _laptop">Laptop +</div>' +
'       </nav>' +
'   </header>' +
'   <div class="l-outer-wrapper">' +
'       <div class="l-inner-wrapper">');








$(".add-footer").html('<footer class="clearfix footer">' +
'   <div class="l-row  l-two-col-right address-bar">' +
'       <div class="l-col">' +
'           <ul class="above-address-links">' +
'               <li><a href="/about/">About EIA</a><span class="right-arrow-head"></span></li>' +
'               <li><a href="/beta/api/">Open Data</a><span class="right-arrow-head"></span></li>' +
'               <li><a href="/pressroom/">Press Room</a><span class="right-arrow-head"></span></li>' +
'               <li><a href="/about/careers/">Careers</a><span class="right-arrow-head"></span></li>' +
'               <li><a href="/about/contact/">Contact Us</a><span class="right-arrow-head"></span></li>' +
'           </ul>' +
'       </div>' +
'       <div class="l-col">' +
'           <div class="address stacked">U.S. Energy Information Administration<br>1000 Independence Ave., SW <br>Washington, DC 20585</div>' +
'           <div class="address un-stacked">U.S. Energy Information Administration, 1000 Independence Ave., SW, Washington, DC 20585</div>' +
'       </div>' +
'   </div>' +
'   <div class="l-row l-six-col-even footer-links">' +
'       <ul class="l-col">' +
'           <li>Sources &amp; Uses</li>' +
'           <li><a href="/petroleum/">Petroleum</a></li>' +
'           <li><a href="/coal/">Coal</a></li>' +
'           <li><a href="/naturalgas/">Natural Gas</a></li>' +
'           <li><a href="/renewable/">Renewable</a></li>' +
'           <li><a href="/nuclear/">Nuclear</a></li>' +
'           <li><a href="/electricity/">Electricity</a></li>' +
'           <li><a href="/consumption/">Consumption</a></li>' +
'           <li><a href="/totalenergy/">Total Energy</a></li>' +
'       </ul>' +
'       <ul class="l-col">' +
'           <li>Topics</li>' +
'           <li><a href="/analysis/">Analysis &amp; Projections</a></li>' +
'           <li><a href="/environment">Environment</a></li>' +
'           <li><a href="/finance/">Markets &amp; Finance</a></li>' +
'           <li><a href="/todayinenergy/">Today in Energy</a></li>' +
'           <li>Geography</li>' +
'           <li><a href="/state/">States</a></li>' +
'           <li><a href="/countries/">Countries</a></li>' +
'           <li><a href="/maps/">Maps</a></li>' +
'       </ul>' +
'       <ul class="l-col">' +
'           <li>Tools</li>' +
'           <li><a href="/tools/a-z/">A-Z Index</a></li>' +
'           <li><a href="/reports/"><span class="line-break">All Reports &amp;</span> <span class="line-break">Publications</span></a></li>' +
'           <li><a href="/tools/"><span class="line-break">Data Tools, Apps,</span> <span class="line-break">and Maps</span></a></li>' +
'           <li><a href="/survey/">EIA Survey Forms</a></li>' +
'           <li><a href="/beta/">EIA Beta</a></li>' +
'       </ul>' +
'       <ul class="l-col">' +
'           <li>Policies</li>' +
'           <li><a href="/about/privacy_security_policy.cfm">Privacy/Security</a></li>' +
'           <li><a href="/about/copyrights_reuse.cfm">Copyright &amp; Reuse</a></li>' +
'           <li><a href="/about/accessability.cfm">Accessibility</a></li>' +
'       </ul>' +
'       <ul class="l-col">' +
'           <li>Related Sites</li>' +
'           <li><a href="https://www.energy.gov/">U.S. Department of Energy</a></li>' +
'           <li><a href="https://www.usa.gov/">USA.gov</a></li>' +
'       </ul>' +
'       <ul class="l-col">' +
'           <li>Stay Connected</li>' +
'           <li><a href="http://facebook.com/eiagov/" target="_blank"><i class="ico-footer facebook"></i>Facebook</a></li>' +
'           <li><a href="http://twitter.com/eiagov/" target="_blank"><i class="ico-footer twitter"></i>Twitter</a></li>' +
'           <li><a href="http://youtube.com/eiagov/" target="_blank"><i class="ico-footer youtube"></i>Youtube</a></li>' +
'           <li><a href="https://www.flickr.com/photos/eiagov/" target="_blank"><i class="ico-footer flickr"></i>Flickr</a></li>' +
'           <li><a href="http://linkedin.com/company/u-s-energy-information-administration" target="_blank"><i class="ico-footer linkedin"></i>LinkedIn</a></li>' +
'           <li><a href="/tools/emailupdates/" target="_blank"><i class="ico-footer email"></i>Email Updates</a></li>' +
'           <li><a href="/tools/rssfeeds/" target="_blank"><i class="ico-footer rss"></i>RSS Feeds</a></li>' +
'       </ul>' +
'   </div>' +
'</footer>');



$("._base").html('<li><a href="https://wwwdev.eia.gov/style-guide/base/color-palette.html">Color Palette</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/base/forms.html">Forms</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/base/icons.html">Icons</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/base/lists.html">Lists</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/base/size-conversions.html">Size Conversions</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/base/symbols.html">Symbols</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/base/tables.html">Tables</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/base/typography.html">Typography</a></li>');

$("._layouts").html('<li><a href="https://wwwdev.eia.gov/style-guide/layouts/index.html">Layouts</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/layouts/nested-layouts.html">Nested Layouts</a></li>');

$("._modules").html('<li><a href="https://wwwdev.eia.gov/style-guide/modules/accordion.html">Accordions</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/modules/banners.html">Banners</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/modules/custom-modules.html">Custom Modules</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/modules/home-modules.html.html">Home Modules</a></li>' +
//    '<li><a href="https://wwwdev.eia.gov/style-guide/modules/lists.html">Lists</a></li>' +
//    '<li><a href="https://wwwdev.eia.gov/style-guide/modules/list-formatting.html">Lists Formatting</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/modules/fancybox.html">Modals (FancyBox)</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/modules/page-titles.html">Page Titles</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/modules/reusable-modules.html">Reusable Modules</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/modules/table-formatting.html">Tables</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/modules/side-content-containers.html>Side-Column Modules</a></li>');

$("._states").html('<li><a href="https://wwwdev.eia.gov/style-guide/states/empty-list-items.html">Empty List Items</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/states/sticky-table-headers.html">Sticky Table Headers</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/states/toggle.html">Show/Hide Toggle</a></li>');

//$("._themes").html('<li><a href="https://wwwdev.eia.gov/style-guide/theme/accordion.html">Accordion</a></li>' +
//    '<li><a href="https://wwwdev.eia.gov/style-guide/theme/basic-table.html">Basic Tables</a></li>' +
//    '<li><a href="https://wwwdev.eia.gov/style-guide/theme/data.html">Date Tables</a></li>' +
//    '<li><a href="https://wwwdev.eia.gov/style-guide/theme/natural-gas.html">Natural Gas</a></li>' +
//    '<li><a href="https://wwwdev.eia.gov/style-guide/theme/overview.html">Overview</a></li>' +
//    '<li><a href="https://wwwdev.eia.gov/style-guide/theme/primary-col-modules.html">Primary Modules</a></li>' +
//    '<li><a href="https://wwwdev.eia.gov/style-guide/theme/secondary-col-modules.html">Secondary Modules</a></li>');

$("._examples").html('<li><a href="https://wwwdev.eia.gov/style-guide/examples/index.html"></a>Page Template</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/examples/index.html">Header</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/examples/sub-navigation.html">Sub-navigation</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/examples/header.html">Header</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/examples/slider-home.html">Slider Home</a></li>' +
    '<li><a href="https://wwwdev.eia.gov/style-guide/examples/slider-multi.html">Slider Multi</a></li>');







    $('button').click(function() {
        var dillyDilly = $(this).attr('id');
        alert(dillyDilly);
        var CopiedValue = $('input#' + dillyDilly).val();
        alert(CopiedValue);
    });







//if ($('.navbar-brand:contains(Base)').length > 0) {
//    $('#nav-2').prop('checked', true);
//}
(function($) {
    // First, check to see if cssHooks are supported
    if (!$.cssHooks) {
        // If not, output an error message
        throw (new Error("jQuery 1.4.3 or above is required for this plugin to work"));
    }
    // Wrap in a document ready call, because jQuery writes
    // cssHooks at this time and will blow away your functions
    // if they exist.
    $.cssHooks.backgroundColor = {
        get: function(elem) {
            if (elem.currentStyle)
                var bg = elem.currentStyle["background-color"];
            else if (window.getComputedStyle)
                var bg = document.defaultView.getComputedStyle(elem,
                    null).getPropertyValue("background-color");
            if (bg.search("rgb") == -1)
                return bg;
            else {
                bg = bg.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);

                function hex(x) {
                    return ("0" + parseInt(x).toString(16)).slice(-2);
                }
                return ("#" + hex(bg[1]) + hex(bg[2]) + hex(bg[3]));
            }
        }
    }
})(jQuery);
/*

*/

$(function() {
    //$('.swatch-wrapper').each(function() { 
    $(".eia-dark-blue").html($(".eia-dark-blue").css("backgroundColor"));
    $(".eia-dark-blue-75").html($(".eia-dark-blue-75").css("backgroundColor"));
    $(".eia-dark-blue-50").html($(".eia-dark-blue-50").css("backgroundColor"));
    $(".eia-dark-blue-25").html($(".eia-dark-blue-25").css("backgroundColor"));
    $(".eia-blue").html($(".eia-blue").css("backgroundColor"));
    $(".eia-light-blue-75").html($(".eia-light-blue-75").css("backgroundColor"));
    $(".eia-light-blue-50").html($(".eia-light-blue-50").css("backgroundColor"));
    $(".eia-light-blue-25").html($(".eia-light-blue-25").css("backgroundColor"));
    $(".eia-light-blue").html($(".eia-light-blue").css("backgroundColor"));
    $(".eia-dark-green").html($(".eia-dark-green").css("backgroundColor"));
    $(".eia-dark-green-75").html($(".eia-dark-green-75").css("backgroundColor"));
    $(".eia-dark-green-50").html($(".eia-dark-green-50").css("backgroundColor"));
    $(".eia-dark-green-25").html($(".eia-dark-green-25").css("backgroundColor"));
    $(".eia-green").html($(".eia-green").css("backgroundColor"));
    $(".eia-light-green-75").html($(".eia-light-green-75").css("backgroundColor"));
    $(".eia-light-green-50").html($(".eia-light-green-50").css("backgroundColor"));
    $(".eia-light-green-25").html($(".eia-light-green-25").css("backgroundColor"));
    $(".eia-light-green").html($(".eia-light-green").css("backgroundColor"));
    $(".eia-dark-red").html($(".eia-dark-red").css("backgroundColor"));
    $(".eia-dark-red-75").html($(".eia-dark-red-75").css("backgroundColor"));
    $(".eia-dark-red-50").html($(".eia-dark-red-50").css("backgroundColor"));
    $(".eia-dark-red-25").html($(".eia-dark-red-25").css("backgroundColor"));
    $(".eia-red").html($(".eia-red").css("backgroundColor"));
    $(".eia-light-red-75").html($(".eia-light-red-75").css("backgroundColor"));
    $(".eia-light-red-50").html($(".eia-light-red-50").css("backgroundColor"));
    $(".eia-light-red-25").html($(".eia-light-red-25").css("backgroundColor"));
    $(".eia-light-red").html($(".eia-light-red").css("backgroundColor"));
    $(".eia-dark-yellow").html($(".eia-dark-yellow").css("backgroundColor"));
    $(".eia-dark-yellow-75").html($(".eia-dark-yellow-75").css("backgroundColor"));
    $(".eia-dark-yellow-50").html($(".eia-dark-yellow-50").css("backgroundColor"));
    $(".eia-dark-yellow-25").html($(".eia-dark-yellow-25").css("backgroundColor"));
    $(".eia-dark-yellow").html($(".eia-dark-yellow").css("backgroundColor"));
    $(".eia-light-yellow-75").html($(".eia-light-yellow-75").css("backgroundColor"));
    $(".eia-light-yellow-50").html($(".eia-light-yellow-50").css("backgroundColor"));
    $(".eia-light-yellow-25").html($(".eia-light-yellow-25").css("backgroundColor"));
    $(".eia-light-yellow").html($(".eia-light-yellow").css("backgroundColor"));
    $(".eia-dark-purple").html($(".eia-dark-purple").css("backgroundColor"));

    $(".eia-dark-purple-75").html($(".eia-dark-purple-75").css("backgroundColor"));
    $(".eia-dark-purple-50").html($(".eia-dark-purple-50").css("backgroundColor"));
    $(".eia-dark-purple-25").html($(".eia-dark-purple-25").css("backgroundColor"));
    $(".eia-purple").html($(".eia-purple").css("backgroundColor"));
    $(".eia-light-purple-75").html($(".eia-light-purple-75").css("backgroundColor"));
    $(".eia-light-purple-50").html($(".eia-light-purple-50").css("backgroundColor"));
    $(".eia-light-purple-25").html($(".eia-light-purple-25").css("backgroundColor"));
    $(".eia-light-purple").html($(".eia-light-purple").css("backgroundColor"));

    $(".eia-dark-brown").html($(".eia-dark-brown").css("backgroundColor"));
    $(".eia-dark-brown-75").html($(".eia-dark-brown-75").css("backgroundColor"));
    $(".eia-dark-brown-50").html($(".eia-dark-brown-50").css("backgroundColor"));
    $(".eia-dark-brown-25").html($(".eia-dark-brown-25").css("backgroundColor"));
    $(".eia-tan").html($(".eia-tan").css("backgroundColor"));
    $(".eia-light-brown-75").html($(".eia-light-brown-75").css("backgroundColor"));
    $(".eia-light-brown-50").html($(".eia-light-brown-50").css("backgroundColor"));
    $(".eia-light-brown-25").html($(".eia-light-brown-25").css("backgroundColor"));
    $(".eia-light-brown").html($(".eia-light-brown").css("backgroundColor"));


    //commonly used tints of black
    $(".eia-333333").html($(".eia-333333").css("backgroundColor"));
    $(".eia-666666").html($(".eia-666666").css("backgroundColor"));
    $(".eia-767676").html($(".eia-767676").css("backgroundColor"));
    $(".eia-999999").html($(".eia-999999").css("backgroundColor"));
    $(".eia-silver").html($(".eia-silver").css("backgroundColor"));
    //common used shades of white
    $(".eia-b2b2b2").html($(".eia-b2b2b2").css("backgroundColor"));
    $(".eia-d4d4d4").html($(".eia-d4d4d4").css("backgroundColor"));
    $(".eia-dddddd").html($(".eia-dddddd").css("backgroundColor"));
    $(".eia-e5e5e5").html($(".eia-e5e5e5").css("backgroundColor"));
    $(".eia-d3d3d3").html($(".eia-d3d3d3").css("backgroundColor"));
    $(".eia-efefef").html($(".eia-efefef").css("backgroundColor"));

    $(".misc-one").html($(".misc-one").css("backgroundColor"));
    $(".misc-two").html($(".misc-two").css("backgroundColor"));
    $(".misc-thr").html($(".misc-thr").css("backgroundColor"));
    $(".misc-fou").html($(".misc-fou").css("backgroundColor"));
    $(".misc-fiv").html($(".misc-fiv").css("backgroundColor"));
    $(".misc-six").html($(".misc-six").css("backgroundColor"));

    $(".eia-dark-black").html($(".eia-dark-black").css("backgroundColor"));
    $(".eia-dark-black-75").html($(".eia-dark-black-75").css("backgroundColor"));
    $(".eia-dark-black-50").html($(".eia-dark-black-50").css("backgroundColor"));
    $(".eia-dark-black-25").html($(".eia-dark-black-25").css("backgroundColor"));
    $(".eia-black").html($(".eia-black").css("backgroundColor"));
    $(".eia-light-black-25").html($(".eia-light-black-25k").css("backgroundColor"));
    $(".eia-light-black-50").html($(".eia-light-black-50").css("backgroundColor"));
    $(".eia-light-black-75").html($(".eia-light-black-75").css("backgroundColor"));
    $(".eia-light-black").html($(".eia-light-black").css("backgroundColor"));

    $(".eia-dark-white").html($(".eia-dark-white").css("backgroundColor"));
    $(".eia-dark-white-75").html($(".eia-dark-white-75").css("backgroundColor"));
    $(".eia-dark-white-50").html($(".eia-dark-white-50").css("backgroundColor"));
    $(".eia-dark-white-25").html($(".eia-dark-white-25").css("backgroundColor"));
    $(".eia-white").html($(".eia-white").css("backgroundColor"));
    $(".eia-light-white-25").html($(".eia-light-white-25").css("backgroundColor"));
    $(".eia-light-white-50").html($(".eia-light-white-50").css("backgroundColor"));
    $(".eia-light-white-75").html($(".eia-light-white-75").css("backgroundColor"));
    $(".eia-light-white").html($(".eia-light-white").css("backgroundColor"));
});


var rowOneOneOne = $('ul.l-default-page .dally-row-one-one span._module-bg._row-one-one-one').width();
var rowOneTwoOne = $('ul.l-default-page .dally-row-one-two span._module-bg._row-one-two-one').width();
$('ul.l-default-page li._mod span._row-one-one-one').append(rowOneOneOne);
$('ul.l-default-page li._mod span._row-one-two-one').append(rowOneTwoOne);

var colOneOneOne = $('ul.l-default-page .dally-one-one span._module-bg._col-one-one-one').width();
$('ul.l-default-page li._mod span._col-one-one-one').append(colOneOneOne);

var colTwoOneOne = $('ul.l-default-page .dally-two-one span._module-bg._col-two-one-one').width();
var colTwoOneTwo = $('ul.l-default-page .dally-two-one span._module-bg._col-two-one-two').width();
var colTwoTwoOne = $('ul.l-default-page .dally-two-two span._module-bg._col-two-two-one').width();
var colTwoTwoTwo = $('ul.l-default-page .dally-two-two span._module-bg._col-two-two-two').width();
var colTwoThrOne = $('ul.l-default-page .dally-two-thr span._module-bg._col-two-thr-one').width();
var colTwoThrTwo = $('ul.l-default-page .dally-two-thr span._module-bg._col-two-thr-two').width();
var colTwoFouOne = $('ul.l-default-page .dally-two-fou span._module-bg._col-two-fou-one').width();
var colTwoFouTwo = $('ul.l-default-page .dally-two-fou span._module-bg._col-two-fou-two').width();
var colTwoFivOne = $('ul.l-default-page .dally-two-fiv span._module-bg._col-two-fiv-one').width();
var colTwoFivTwo = $('ul.l-default-page .dally-two-fiv span._module-bg._col-two-fiv-two').width();
var colTwoSixOne = $('ul.l-default-page .dally-two-six span._module-bg._col-two-six-one').width();
var colTwoSixTwo = $('ul.l-default-page .dally-two-six span._module-bg._col-two-six-two').width();
var colTwoSevOne = $('ul.l-default-page .dally-two-sev span._module-bg._col-two-sev-one').width();
var colTwoSevTwo = $('ul.l-default-page .dally-two-sev span._module-bg._col-two-sev-two').width();
$('ul.l-default-page li._mod span._col-two-one-one').append(colTwoOneOne);
$('ul.l-default-page li._mod span._col-two-one-two').append(colTwoOneTwo);
$('ul.l-default-page li._mod span._col-two-two-one').append(colTwoTwoOne);
$('ul.l-default-page li._mod span._col-two-two-two').append(colTwoTwoTwo);
$('ul.l-default-page li._mod span._col-two-thr-one').append(colTwoThrOne);
$('ul.l-default-page li._mod span._col-two-thr-two').append(colTwoThrTwo);
$('ul.l-default-page li._mod span._col-two-fou-one').append(colTwoFouOne);
$('ul.l-default-page li._mod span._col-two-fou-two').append(colTwoFouTwo);
$('ul.l-default-page li._mod span._col-two-fiv-one').append(colTwoFivOne);
$('ul.l-default-page li._mod span._col-two-fiv-two').append(colTwoFivTwo);
$('ul.l-default-page li._mod span._col-two-six-one').append(colTwoSixOne);
$('ul.l-default-page li._mod span._col-two-six-two').append(colTwoSixTwo);
$('ul.l-default-page li._mod span._col-two-sev-one').append(colTwoSevOne);
$('ul.l-default-page li._mod span._col-two-sev-two').append(colTwoSevTwo);

var colThrOneOne = $('ul.l-default-page .dally-thr-one span._module-bg._col-thr-one-one').width();
var colThrOneTwo = $('ul.l-default-page .dally-thr-one span._module-bg._col-thr-one-two').width();
var colThrOneThr = $('ul.l-default-page .dally-thr-one span._module-bg._col-thr-one-thr').width();
var colThrTwoOne = $('ul.l-default-page .dally-thr-two span._module-bg._col-thr-two-one').width();
var colThrTwoTwo = $('ul.l-default-page .dally-thr-two span._module-bg._col-thr-two-two').width();
var colThrTwoThr = $('ul.l-default-page .dally-thr-two span._module-bg._col-thr-two-thr').width();
var colThrThrOne = $('ul.l-default-page .dally-thr-thr span._module-bg._col-thr-thr-one').width();
var colThrThrTwo = $('ul.l-default-page .dally-thr-thr span._module-bg._col-thr-thr-two').width();
var colThrThrThr = $('ul.l-default-page .dally-thr-thr span._module-bg._col-thr-thr-thr').width();
$('ul.l-default-page li._mod span._col-thr-one-one').append(colThrOneOne);
$('ul.l-default-page li._mod span._col-thr-one-two').append(colThrOneTwo);
$('ul.l-default-page li._mod span._col-thr-one-thr').append(colThrOneThr);
$('ul.l-default-page li._mod span._col-thr-two-one').append(colThrTwoOne);
$('ul.l-default-page li._mod span._col-thr-two-two').append(colThrTwoTwo);
$('ul.l-default-page li._mod span._col-thr-two-thr').append(colThrTwoThr);
$('ul.l-default-page li._mod span._col-thr-thr-one').append(colThrThrOne);
$('ul.l-default-page li._mod span._col-thr-thr-two').append(colThrThrTwo);
$('ul.l-default-page li._mod span._col-thr-thr-thr').append(colThrThrThr);

var colFouOneOne = $('ul.l-default-page .dally-fou-one span._module-bg._col-fou-one-one').width();
var colFouOneTwo = $('ul.l-default-page .dally-fou-one span._module-bg._col-fou-one-two').width();
var colFouOneThr = $('ul.l-default-page .dally-fou-one span._module-bg._col-fou-one-thr').width();
var colFouOneFou = $('ul.l-default-page .dally-fou-one span._module-bg._col-fou-one-fou').width();
$('ul.l-default-page li._mod span._col-fou-one-one').append(colFouOneOne);
$('ul.l-default-page li._mod span._col-fou-one-two').append(colFouOneTwo);
$('ul.l-default-page li._mod span._col-fou-one-thr').append(colFouOneThr);
$('ul.l-default-page li._mod span._col-fou-one-fou').append(colFouOneFou);

var pageColSixOneOne = $('ul.l-default-page .dally-six-one span._module-bg._col-six-one-one').width();
var pageColSixOneTwo = $('ul.l-default-page .dally-six-one span._module-bg._col-six-one-two').width();
var pageColSixOneThr = $('ul.l-default-page .dally-six-one span._module-bg._col-six-one-thr').width();
var pageColSixOneFou = $('ul.l-default-page .dally-six-one span._module-bg._col-six-one-fou').width();
var pageColSixOneFiv = $('ul.l-default-page .dally-six-one span._module-bg._col-six-one-fiv').width();
var pageColSixOneSix = $('ul.l-default-page .dally-six-one span._module-bg._col-six-one-six').width();
$('ul.l-default-page li._mod span._col-six-one-one').append(pageColSixOneOne);
$('ul.l-default-page li._mod span._col-six-one-two').append(pageColSixOneTwo);
$('ul.l-default-page li._mod span._col-six-one-thr').append(pageColSixOneThr);
$('ul.l-default-page li._mod span._col-six-one-fou').append(pageColSixOneFou);
$('ul.l-default-page li._mod span._col-six-one-fiv').append(pageColSixOneFiv);
$('ul.l-default-page li._mod span._col-six-one-six').append(pageColSixOneSix);



var pageRowOneOneOne = $('ul.l-full-width-page .dally-row-one-one span._module-bg._row-one-one-one').width();
var pageRowOneTwoOne = $('ul.l-full-width-page .dally-row-one-two span._module-bg._row-one-two-one').width();
$('ul.l-full-width-page li._mod span._row-one-one-one').append(pageRowOneOneOne);
$('ul.l-full-width-page li._mod span._row-one-two-one').append(pageRowOneTwoOne);

var pageColOneOneOne = $('ul.l-full-width-page .dally-one-one span._module-bg._col-one-one-one').width();
$('ul.l-full-width-page li._mod span._col-one-one-one').append(pageColOneOneOne);

var pageColTwoOneOne = $('ul.l-full-width-page .dally-two-one span._module-bg._col-two-one-one').width();
var pageColTwoOneTwo = $('ul.l-full-width-page .dally-two-one span._module-bg._col-two-one-two').width();
var pageColTwoTwoOne = $('ul.l-full-width-page .dally-two-two span._module-bg._col-two-two-one').width();
var pageColTwoTwoTwo = $('ul.l-full-width-page .dally-two-two span._module-bg._col-two-two-two').width();
var pageColTwoThrOne = $('ul.l-full-width-page .dally-two-thr span._module-bg._col-two-thr-one').width();
var pageColTwoThrTwo = $('ul.l-full-width-page .dally-two-thr span._module-bg._col-two-thr-two').width();
var pageColTwoFouOne = $('ul.l-full-width-page .dally-two-fou span._module-bg._col-two-fou-one').width();
var pageColTwoFouTwo = $('ul.l-full-width-page .dally-two-fou span._module-bg._col-two-fou-two').width();
var pageColTwoFivOne = $('ul.l-full-width-page .dally-two-fiv span._module-bg._col-two-fiv-one').width();
var pageColTwoFivTwo = $('ul.l-full-width-page .dally-two-fiv span._module-bg._col-two-fiv-two').width();
var pageColTwoSixOne = $('ul.l-full-width-page .dally-two-six span._module-bg._col-two-six-one').width();
var pageColTwoSixTwo = $('ul.l-full-width-page .dally-two-six span._module-bg._col-two-six-two').width();
var pageColTwoSevOne = $('ul.l-full-width-page .dally-two-sev span._module-bg._col-two-sev-one').width();
var pageColTwoSevTwo = $('ul.l-full-width-page .dally-two-sev span._module-bg._col-two-sev-two').width();
$('ul.l-full-width-page li._mod span._col-two-one-one').append(pageColTwoOneOne);
$('ul.l-full-width-page li._mod span._col-two-one-two').append(pageColTwoOneTwo);
$('ul.l-full-width-page li._mod span._col-two-two-one').append(pageColTwoTwoOne);
$('ul.l-full-width-page li._mod span._col-two-two-two').append(pageColTwoTwoTwo);
$('ul.l-full-width-page li._mod span._col-two-thr-one').append(pageColTwoThrOne);
$('ul.l-full-width-page li._mod span._col-two-thr-two').append(pageColTwoThrTwo);
$('ul.l-full-width-page li._mod span._col-two-fou-one').append(pageColTwoFouOne);
$('ul.l-full-width-page li._mod span._col-two-fou-two').append(pageColTwoFouTwo);
$('ul.l-full-width-page li._mod span._col-two-fiv-one').append(pageColTwoFivOne);
$('ul.l-full-width-page li._mod span._col-two-fiv-two').append(pageColTwoFivTwo);
$('ul.l-full-width-page li._mod span._col-two-six-one').append(pageColTwoSixOne);
$('ul.l-full-width-page li._mod span._col-two-six-two').append(pageColTwoSixTwo);
$('ul.l-full-width-page li._mod span._col-two-sev-one').append(pageColTwoSevOne);
$('ul.l-full-width-page li._mod span._col-two-sev-two').append(pageColTwoSevTwo);

var pageColThrOneOne = $('ul.l-full-width-page .dally-thr-one span._module-bg._col-thr-one-one').width();
var pageColThrOneTwo = $('ul.l-full-width-page .dally-thr-one span._module-bg._col-thr-one-two').width();
var pageColThrOneThr = $('ul.l-full-width-page .dally-thr-one span._module-bg._col-thr-one-thr').width();
var pageColThrTwoOne = $('ul.l-full-width-page .dally-thr-two span._module-bg._col-thr-two-one').width();
var pageColThrTwoTwo = $('ul.l-full-width-page .dally-thr-two span._module-bg._col-thr-two-two').width();
var pageColThrTwoThr = $('ul.l-full-width-page .dally-thr-two span._module-bg._col-thr-two-thr').width();
var pageColThrThrOne = $('ul.l-full-width-page .dally-thr-thr span._module-bg._col-thr-thr-one').width();
var pageColThrThrTwo = $('ul.l-full-width-page .dally-thr-thr span._module-bg._col-thr-thr-two').width();
var pageColThrThrThr = $('ul.l-full-width-page .dally-thr-thr span._module-bg._col-thr-thr-thr').width();
$('ul.l-full-width-page li._mod span._col-thr-one-one').append(pageColThrOneOne);
$('ul.l-full-width-page li._mod span._col-thr-one-two').append(pageColThrOneTwo);
$('ul.l-full-width-page li._mod span._col-thr-one-thr').append(pageColThrOneThr);
$('ul.l-full-width-page li._mod span._col-thr-two-one').append(pageColThrTwoOne);
$('ul.l-full-width-page li._mod span._col-thr-two-two').append(pageColThrTwoTwo);
$('ul.l-full-width-page li._mod span._col-thr-two-thr').append(pageColThrTwoThr);
$('ul.l-full-width-page li._mod span._col-thr-thr-one').append(pageColThrThrOne);
$('ul.l-full-width-page li._mod span._col-thr-thr-two').append(pageColThrThrTwo);
$('ul.l-full-width-page li._mod span._col-thr-thr-thr').append(pageColThrThrThr);

var pageColFouOneOne = $('ul.l-full-width-page .dally-fou-one span._module-bg._col-fou-one-one').width();
var pageColFouOneTwo = $('ul.l-full-width-page .dally-fou-one span._module-bg._col-fou-one-two').width();
var pageColFouOneThr = $('ul.l-full-width-page .dally-fou-one span._module-bg._col-fou-one-thr').width();
var pageColFouOneFou = $('ul.l-full-width-page .dally-fou-one span._module-bg._col-fou-one-fou').width();
$('ul.l-full-width-page li._mod span._col-fou-one-one').append(pageColFouOneOne);
$('ul.l-full-width-page li._mod span._col-fou-one-two').append(pageColFouOneTwo);
$('ul.l-full-width-page li._mod span._col-fou-one-thr').append(pageColFouOneThr);
$('ul.l-full-width-page li._mod span._col-fou-one-fou').append(pageColFouOneFou);


$('p._caption').click(function() {
    $(this).next('pre').toggleClass('_toggle-code');
});
}
}
export default Header;