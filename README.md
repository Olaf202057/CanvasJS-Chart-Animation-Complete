# CanvasJS Chart Animation Complete
This plugin allows you to bind animationComplete event handler in CanvasJS Chart. Animation Complete Event gets fired after the dataseries has finished its initial animation. 

### [Live Example](https://vishwas-r.github.io/CanvasJS-Animation-Complete/)

## How to Use?
```javascript
var chart = new CanvasJS.Chart("chartContainer", {
	.
	.
	.
	//Chart Options
	animationEnabled: true,
	animationComplete: function(e) {
		//Things to do once chart animation is complete
	}
	.
	.
	.
});
chart.render();
```
[CanvasJS Documentation](https://canvasjs.com/docs/charts/basics-of-creating-html5-chart/)

**Note:**
* Plugin was last tested with CanvasJS Charts v3.2.3GA
* This plugin requires you to have CanvasJS License. Please visit [CanvasJS](https://canvasjs.com/license/) for more info.
