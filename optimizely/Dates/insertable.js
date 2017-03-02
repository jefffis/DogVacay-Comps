var markup = '<div id="dv-container"><h3>What day?</h3><label class="dv-date-picker"><input type="text" id="selector" placeholder="Select Date"/></label><div id="dv-time-picker"><h3>What time?</h3><label><input type="radio" name="dv-walk-time" value="0"/><span>9am-11am</span></label><label><input type="radio" name="dv-walk-time" value="1"/><span>11am-1pm</span></label><label><input type="radio" name="dv-walk-time" value="2"/><span>1pm-3pm</span></label><label><input type="radio" name="dv-walk-time" value="3"/><span>3pm-5pm</span></label> <label><input type="radio" name="dv-walk-time" value="3"/><span>5pm-7pm</span></label></div></div>',
	styles = '#dv-time-picker span,.dv-date-picker input{display:block;cursor:pointer;font-family:inherit}#dv-container{max-width:560px}.dv-date-picker{display:block;position:relative;max-width:300px;cursor:pointer}.dv-date-picker:active{opacity:.65}.dv-date-picker:after{display:block;position:absolute;top:0;right:0;height:100%;width:3rem;background:url(https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/calendar-128.png) center no-repeat;background-size:18px;opacity:.5;content:""}.dv-date-picker input{width:100%;padding:.75rem;border:1px solid #ccc;border-radius:4px;box-shadow:0 2px 0 #efefef;outline:0;font-size:16px;-webkit-appearance:none}.dv-date-picker input:focus{border-color:#69BBC0}input[name=dv-walk-time]{position:absolute;left:-9999px}#dv-time-picker{margin-top:20px}#dv-container h3{margin:0 0 5px;font-size:16px;font-weight:400}#dv-time-picker span{float:left;width:20%;background:#fff;padding:.5rem 0;border:1px solid #ccc;box-shadow:0 1px 0 rgba(0,0,0,.025);color:#444;font-size:13px;text-align:center}#dv-time-picker span:active{background:rgba(0,0,0,.0025)}#dv-time-picker label:nth-of-type(1) span{border-radius:4px 0 0 4px}#dv-time-picker label:last-of-type span{border-radius:0 4px 4px 0}#dv-time-picker label:nth-of-type(n+2) span{margin-left:-1px}#dv-time-picker input:focus+span{position:relative;z-index:1;outline:dotted 1px}#dv-time-picker input:checked+span{position:relative;z-index:1;outline:0;border-color:#69bbc0;box-shadow:0 0 0 1px #69bbc0 inset;color:#2a494b;font-weight:700}@media screen and (max-width:450px){#dv-time-picker span{padding:.65rem 0;font-size:12px}}@media screen and (max-width:410px){#dv-time-picker{width:100%}#dv-time-picker span{float:none;width:100%;padding:.75rem 0;font-size:16px}#dv-time-picker label:nth-of-type(1) span{border-radius:4px 4px 0 0}#dv-time-picker label:last-of-type span{border-radius:0 0 4px 4px;box-shadow:0 2px 0 #efefef}#dv-time-picker label:nth-of-type(n+2) span{margin-top:-1px;margin-left:0}}';

$('head').append('<style>' + styles + '</style>');