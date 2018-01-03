
define('animatedMap',
[
	'map'
],
function(Map){
	
	return Map.$extend({
		__init__ : function(container){
			this.$super(container);
			var self = this;
			
			this.animation = {
				enabled : false,
				stepSize : 1000,
				iteration : 0,
				interval : null
			};
		},
		
		update : function(counts, title, options){
			$.extend(
				this.animation,
				options.animation,
				{
					maxIteration : counts.length
				}
			);
			
			this.$super(counts, title, options);
		},
		
		play : function(loop, stepSize, callback){
			var self = this;
			
			var animate = function() {
				var iteration;
				if(loop)
					iteration = self.animation.iteration % self.animation.maxIteration;
				else{
					iteration = Math.min(self.animation.iteration, self.animation.maxIteration);
					if(iteration == self.animation.maxIteration)
						self.stop();
				}
				$('.map_inside_container', self.mapContainer).vectorMap('set', 'colors', self.colors[iteration]);
				callback.call(self, iteration);
				self.animation.iteration = iteration + 1;
			};
			
			if(this.animation.interval) this.stop();
			animate();
			this.animation.interval = setInterval(animate, stepSize || self.animation.stepSize);
		},
		
		stop : function(){
			clearInterval(this.animation.interval);
			this.animation.interval = null;
		},
		
		reset : function(iteration){
			this.animation.iteration = Math.min(iteration, this.animation.maxIteration);
		},
		
		destroy : function() {
			this.$super();
		},
		
		getInitialColors : function() {
			return this.colors[this.animation.iteration];
		},

		calculateMinMax : function(counts) {
			var ret = {};
			for (var i = 0; i < counts.length; i++) {
				for (state in counts[i]) {
					if(counts[i].hasOwnProperty(state)){
						ret.min = ((ret.min == null || counts[i][state] < ret.min) ? counts[i][state] : ret.min);
						ret.max = ((ret.max == null || counts[i][state] > ret.max) ? counts[i][state] : ret.max);
					}
				}
			}
			
			return ret;
		},
		
		assignColors : function(counts, buckets, palette) {
			var ret = [];
			for(var i = 0; i < this.counts.length; i++) {
				ret[i] = this.$super(this.counts[i], this.buckets, palette);
			}
			
			return ret;
		}	
	});
});