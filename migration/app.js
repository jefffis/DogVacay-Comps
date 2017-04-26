var faqs = document.querySelectorAll('h3'),
	tabLinks = document.querySelectorAll('.dv-tab-link'),
	tabs = document.querySelectorAll('.dv-tab'),
	sub = document.getElementById('dv-tab-containers'),
	subTabs = document.getElementById('dv-sub-tabs'),
	subTabsHeight = subTabs.clientHeight,
	subTabsOffset = document.getElementById('dv-sub-tabs').offsetTop + subTabsHeight + 50,
	subTabLinks = document.querySelectorAll('.dv-sub-tab');

// faq links
Array.prototype.forEach.call(faqs, function(el, i){
	el.onclick = function() {
		this.classList.toggle('shown');
	}
});

// tab links
Array.prototype.forEach.call(tabLinks, function(el, i){
	el.onclick = function(e) {
		e.preventDefault();
		document.querySelector('.dv-tab-link.active').classList.remove('active');
		this.classList.add('active');
		showActiveTab(el);
	}
});

// subtab links
Array.prototype.forEach.call(subTabLinks, function(el, i){
	el.onclick = function(e) {
		e.preventDefault();
		document.querySelector('.dv-sub-tab.active-subtab').classList.remove('active-subtab');
		this.classList.add('active-subtab');
		window.scrollTo(0, document.getElementById(el.href.split('#')[1]).offsetTop - 100);
	}
});

function showActiveTab(el, onLoad) {
	var tabToShow = onLoad ? document.getElementById(el) : document.getElementById(el.href.split('#')[1]);
	document.querySelector('.dv-tab.open').classList.remove('open');
	tabToShow.classList.add('open');
}

// for coupon code traffic
function getUrlParameter(name) {
	name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
	var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
	var results = regex.exec(location.search);
	return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

window.onscroll = function() {
	if(document.getElementById('dv-guests').classList.contains('open')) return;
	var scrollTop = window.pageYOffset,
		roverlapContentTop = document.getElementById('dv-roverlap').offsetTop - 50;
	
	// sticky or not
	if(scrollTop > subTabsOffset){
		subTabs.classList.add('sticky');
		sub.style.paddingTop = subTabsHeight + 'px';
	} else if(scrollTop <= (subTabsOffset - subTabsHeight - 50)) {
		subTabs.classList.remove('sticky');
		sub.style.paddingTop = 0;
	}

	// viewing roverlap or not
	if(scrollTop >= roverlapContentTop) {
		document.getElementById('dv-noroverlap-link').classList.remove('active-subtab');
		document.getElementById('dv-roverlap-link').classList.add('active-subtab');
	} else if(roverlapContentTop > scrollTop + 200) {
		document.getElementById('dv-noroverlap-link').classList.add('active-subtab');
		document.getElementById('dv-roverlap-link').classList.remove('active-subtab');
	}
}

// default to guests
if(window.location.hash === '#dv-guests' || window.location.hash === '#dv-guest') {
	showActiveTab(window.location.hash.substr(1), true);
	document.querySelector('.dv-tab-link.active').classList.remove('active');
	document.getElementById('dv-guest').classList.add('active');
	setTimeout(function() {
		window.scrollTo(0, 0);
	}, 0);
}

// show a Q open on load
if(getUrlParameter('show-q-open')) {
	document.getElementById(getUrlParameter('show-q-open')).classList.add('shown');
	setTimeout(function() {
		window.scrollTo(0, document.getElementById(getUrlParameter('show-q-open')).parentElement.offsetTop - 100);
	}, 0);
}