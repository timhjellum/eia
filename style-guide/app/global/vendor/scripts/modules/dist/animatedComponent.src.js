
/**
 *	The 'animatedComponent' module has play/stop functions to play through an animation.
 *
 *	@module animatedComponent
 */

 define('animatedComponent', ['classy'],
function(Class){
	
	/**
	 *	Class for the {{#crossLinkModule "animatedComponent"}}animatedComponent{{/crossLinkModule}} Module
	 * 	@class AnimatedComponent
	 *	@extends Class
	 *	@constructor 
	 */
	return Class.$extend({
		/**
		 *	Constructor Function for animatedComponent
		 *	@method __init__
		 */
		__init__ : function(){
			this.animation = {
				enabled : false,
				stepSize : 1000,
				iteration : 0,
				interval : null
			};
		},
		
		update : function(animation){
			$.extend(
				this.animation,
				animation
			);
		},
		
		play : function(loop, stepSize){
			var self = this;
			
			var animate = function() {
				var iteration;
				if(self.animation.maxIteration){
					if(loop)
						iteration = self.animation.iteration % self.animation.maxIteration;
					else{
						iteration = Math.min(self.animation.iteration, self.animation.maxIteration);
						if(iteration == self.animation.maxIteration)
							self.stop();
					}
				}
				if (self.animation.callback) self.animation.callback.call(self, iteration);
				if(self.animation.maxIteration === void 0 || iteration + 1 <= self.animation.maxIteration)
					self.animation.iteration = iteration + 1;
			};
			
			if(this.animation.interval) this.stop();
			animate();
			this.animation.interval = setInterval(animate, stepSize || this.animation.stepSize);
		},
		
		stop : function(){
			clearInterval(this.animation.interval);
			this.animation.interval = null;
		},
		
		reset : function(iteration){
			this.animation.iteration = Math.min(iteration, this.animation.maxIteration);
			if(this.animation.callback) this.animation.callback.call(this, iteration);
		},
		
		destroy : function() {
			this.stop();
		}
	});
});