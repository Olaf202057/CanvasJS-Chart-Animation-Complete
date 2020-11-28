(function() {
	var CanvasJS = window.CanvasJS || CanvasJS ? window.CanvasJS : null;
	if(CanvasJS && CanvasJS.Chart) {
		CanvasJS.Chart.prototype.updateCustomOptions = function() {
			this.animationComplete = this.options.animationComplete ? this.options.animationComplete : null;
		}
		CanvasJS.Chart.prototype.render = function(options) {
			if (options)
				this.options = options;
			var _this = this;	
			this._initialize();
			this.updateCustomOptions();
			this.setLayout();
			this.renderElements();

			this._preRenderCanvas = null;
			this.addEventListener("dataAnimationEnd", function () {
				_this.dispatchEvent("animationComplete", {chart: _this, options: _this.options}, _this.chart);
			});
		}
	}
})();