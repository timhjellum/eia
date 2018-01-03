
/**
 *	Adds input text boxes as the labels to the TimeSlider Module.
 *	
 *	@module timeSliderInput
 *	@requires  timeSlider, dateCodeUtils
 */

 define('timeSliderInput',
[
	'timeSlider',
	'dateCodeUtils'
],
function(TimeSlider, dateCodeUtils){
	
	/**
	 *	Class for the {{#crossLinkModule "timeSlider"}}timeSliderInput{{/crossLinkModule}} Module
	 * 	@class TimeSliderInput
	 *	@extends Class
	 *	@constructor 
	 */
	return TimeSlider.$extend({
		/**
		 *	This method creates the timeSlider.
		 *	@method createSlider
		 */
		createSlider : function(){
			this.$super();
			var self = this;
			this.lowLabel.empty().append('<input type="text"></input');
			
			var blurLow = function(event) {
				if(event.target != $('input', self.lowLabel).get(0)) {
					$('input', self.lowLabel).blur();
				}
			};
			var blurHigh = function(event) {
				if(event.target != $('input', self.highLabel).get(0)) {
					$('input', self.highLabel).blur();
				}
			};
			
			$('input', this.lowLabel).on('focusin', function(event) {
				$('input', this.lowLabel).val('');
				$(window).on('click', blurLow);
				$('.highcharts-container').on('click', blurLow);
				
			});
			$('input', this.lowLabel).on('focusout', function(event) {
				var oldval = self.lowVal;
				var newval = self.parseLabelInput($('input', self.lowLabel).val());
				console.log(newval);
				if($.inArray(newval, self.values) == -1) {
					$('input', self.lowLabel).val(self.formatLabel(oldval));
				}
				else {
					self.timeSelectionChanged.dispatch(
						newval,
						self.highVal
					);
				}
				$(window).off('click', blurLow);
				$('.highcharts-container').off('click', blurLow);
			});
			if(this.sliderType === this.$class.RANGE_SLIDER) {
				this.highLabel.empty().append('<input type="text"></input');
				$('input', this.highLabel).on('focusin', function(event) {
					$('input', this.highLabel).val('');
					$(window).on('click', blurHigh);
					$('.highcharts-container').on('click', blurHigh);
				});
				$('input', this.highLabel).on('focusout', function(event) {
					var oldval = self.highVal;
					var newval = self.parseLabelInput($('input', self.highLabel).val());
					console.log(newval);
					if($.inArray(newval, self.values) == -1) {
						$('input', self.highLabel).val(self.formatLabel(oldval));
					}
					else {
						self.timeSelectionChanged.dispatch(
							self.lowVal,
							newval
						);
					}
					$(window).off('click', blurHigh);
					$('.highcharts-container').off('click', blurHigh);
				});
			}
			
		},
		
		
        /**
         *  This method updates the time slider label.
         *  @method updateLabel
		 *	@param {Boolean} low A Boolean. If true the low value label is updated, if false the high value label is updated.
         */
		updateLabel : function(low){
			var label = low ? this.lowLabel : this.highLabel;
			if(label && label.length > 0){
				var value = low ? this.lowVal : this.highVal,
				handle = low ? this.lowHandle : this.highHandle,
				input = label.find('input');
				
				input.val(this.formatLabel(value));
				
				if(this.sliderType === this.$class.SINGLE_SLIDER)
					label.css({
						left : -0.5 * input.width() + 0.5 * handle.width()
					});
				else if(!low)
					label.css({
						left : this.timeSlider.width() - input.width()
					});
			}
		},
		
		formatLabel : function(value) {
			return dateCodeUtils.formatDateCode(value, this.freq);
		},
		
		parseLabelInput : function(input) {
			// Implement
			return input;
		}
	});
});