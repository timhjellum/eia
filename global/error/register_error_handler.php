<?php

/**
 * for non-fatal runtime errors, we use the 
 */
set_error_handler(function($errno, $errstr, $errfile, $errline){
    
    if (!(error_reporting() & $errno)) {
        // This error code is not included in error_reporting
        return;
    }
    $last_error = [
        'type' => $errno,
        'message' => $errstr,
        'file' =>  $errfile,
        'line' => $errline,
    ];
    $showStopper = false;
    require_once('site-err.php');
    // exit(1);
});

// handle fatal errors
register_shutdown_function(function(){
    
    $last_error = error_get_last();
    if ( 
        !empty($last_error) &&
        $last_error['type'] & (E_ERROR | E_COMPILE_ERROR | E_PARSE | E_CORE_ERROR | E_USER_ERROR)
       ) {
        $showStopper = true;
        require_once('site-err.php');
        exit(1);
    }
});
?>
