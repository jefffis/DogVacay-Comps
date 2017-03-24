function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length,c.length);
    }
    return 0;
}

function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

var reloadPage = true;

if(readCookie('design_qa_testing')) {

    reloadPage = false;

    // Usual, via Typekit
    var typekit = '!function(a){var h,b={kitId:"giv8wkc",scriptTimeout:3e3,async:!0},c=a.documentElement,d=setTimeout(function(){c.className=c.className.replace(/\bwf-loading\b/g,"")+" wf-inactive"},b.scriptTimeout),e=a.createElement("script"),f=!1,g=a.getElementsByTagName("script")[0];c.className+=" wf-loading",e.src="https://use.typekit.net/"+b.kitId+".js",e.async=!0,e.onload=e.onreadystatechange=function(){if(h=this.readyState,!(f||h&&"complete"!=h&&"loaded"!=h)){f=!0,clearTimeout(d);try{Typekit.load(b)}catch(a){}}},g.parentNode.insertBefore(e,g)}(document);';

    var proximaBody = '.proxima-body .dwcc *, .proxima-body *[class*="dv-input"], .proxima-body *[class*="dv-select"], .proxima-body *[class*="dv-profile"], .proxima-body *[class*="body"],.proxima-body *[class*="text"],.proxima-body *[class*="nav"],.proxima-body .dv-link, .proxima-body *[class*="button"],.proxima-body p,.proxima-body li,.proxima-body .dv-search-filter__content{font-family: "proxima-nova",sans-serif !important;}',
    	proximaTitle = '.proxima-title *[class*="header"], .proxima-title *[class*="title"]{font-family: "proxima-nova",sans-serif !important;}';

    var sourceSansBody = '.ss-body .dwcc *, .ss-body *[class*="dv-input"], .ss-body *[class*="dv-select"], .ss-body *[class*="dv-profile"], .ss-body *[class*="body"],.ss-body *[class*="text"],.ss-body *[class*="nav"],.ss-body .dv-link, .ss-body *[class*="button"],.s-body p,.ss-body li,.ss-body .dv-search-filter__content{font-family: "Source Sans Pro", sans-serif !important;}',
    	sourceSansTitle = '.ss-title *[class*="header"], .ss-title *[class*="title"]{font-family: "Source Sans Pro",sans-serif !important;}';

    var montserratTitle = '.montserrat-title *[class*="header"], .montserrat-title *[class*="title"]{font-family: "Montserrat",sans-serif !important;font-weight:normal !important}';

    var libreFranklingTitle = '.libre-franklin-title *[class*="header"], .libre-franklin-title *[class*="title"]{font-family: "Libre Franklin",sans-serif !important;}';

    var googleFonts = 'https://fonts.googleapis.com/css?family=Libre+Franklin:700|Montserrat:500|Source+Sans+Pro:400,700';

    var picker = '<div id="dv-list"> <em>Titles</em> <span class="head" data-title data-typeface="libre-franklin-title">Libre Franklin (h)</span> <span class="head" data-title data-typeface="montserrat-title">Montserrat</span> <span class="head" data-title data-typeface="proxima-title">Proxima (h)</span> <span class="head" data-title data-typeface="ss-title">Source Sans (h)</span> <span class="head" data-title data-typeface="intro-title">Intro (h)</span> <em>Body</em> <span class="copy" data-body data-typeface="proxima-body">Proxima (b)</span> <span class="copy" data-body data-typeface="ss-body">Source Sans (b)</span> <span class="copy" data-body data-typeface="intro-body">Intro (b)</span> <span class="reset active">None</span></div>',
    	pickerStyles = '#dv-list{position:fixed;bottom:1.5rem;right:1.5rem;z-index:100000000000;overflow:hidden;width:10rem;background:white;border:1px solid #ddd;border-radius:3px;box-shadow:0 1px 2px rgba(0, 0, 0, 0.1)}#dv-list.shown em,#dv-list.shown span{display:block;font-family:-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif !important}#dv-list em,#dv-list span{display:none;position:relative;background:white;padding:.75rem 1rem;cursor:pointer;font-size:13px;font-family:-apple-system, BlinkMacSystemFont, "Helvetica Neue", Helvetica, Arial, sans-serif !important}#dv-list em{background:#efefef;padding:1rem 1rem .5rem;color:#999;cursor:default;font-size:12px;letter-spacing:1px;text-transform:uppercase}#dv-list em:nth-of-type(2){border-top:1px solid #e8e5e0}#dv-list span{display:none}#dv-list span:active{background:#efefef}#dv-list span.active{display:block;border-top-width:0 !important;border-left:5px solid;color:#999}#dv-list span.reset{border-left:0}#dv-list.shown span.active{border-top-width:1px !important}#dv-list span:nth-of-type(n+2){border-top:1px solid #e8e5e0}';

    // insert all CSS
    $('#dv-list').remove();
    $('head').append('<script>' + typekit + '</script>');
    $('head').append('<link href="' + googleFonts + '" rel="stylesheet">');
    $('head').append('<style>' + proximaBody + sourceSansBody + proximaTitle + sourceSansTitle + montserratTitle + libreFranklingTitle + pickerStyles + '</style>');
    $('body').append(picker);

    // keep typeface across page loads
    if(readCookie('design_qa_testing_typeface_title')) {
    	$('span.reset', '#dv-list').removeClass('active');
    	$('span[data-title][data-typeface="' + readCookie('design_qa_testing_typeface_title') + '"]', '#dv-list').addClass('active');
    	// $('html').removeAttr('class').addClass(readCookie('design_qa_testing_typeface_title'));
        updateHtml(true);
        console.log(readCookie('design_qa_testing_typeface_title'));
    }

    // keep typeface across page loads
    if(readCookie('design_qa_testing_typeface_body')) {
        $('span.reset', '#dv-list').removeClass('active');
        $('span[data-body][data-typeface="' + readCookie('design_qa_testing_typeface_body') + '"]', '#dv-list').addClass('active');
        // $('html').removeAttr('class').addClass(readCookie('design_qa_testing_typeface_body'));
        updateHtml(false);
        console.log(readCookie('design_qa_testing_typeface_body'));
    }

    $('span', '#dv-list').click(function() {
    	if($(this).hasClass('active') && !$('#dv-list').hasClass('shown')) {
    		$('#dv-list').addClass('shown');
    	}else{
    		var resetTypeface = $(this).hasClass('reset') ? true : false,
                isTitleChoice = $(this).data('title') !== undefined ? true : false;
            // console.log(typeSet);

            if(resetTypeface) {
                $('span', '#dv-list').removeClass('active');
                $('html').removeAttr('class');
                $(this).addClass('active');
                document.cookie = 'design_qa_testing_typeface_title=; expires=; domain=.dogvacay.com; path=/';
                document.cookie = 'design_qa_testing_typeface_body=; expires=; domain=.dogvacay.com; path=/';
            } else {
                $('span.reset', '#dv-list').removeClass('active');
                if(isTitleChoice) {
                    $('span.head', '#dv-list').removeClass('active');
                } else {
                    $('span.copy', '#dv-list').removeClass('active');
                }
                // if(!typeSet) {
                //     typeSet = true;
                //     $('html').removeAttr('class');
                // }
                $(this).addClass('active');
                $('html').removeAttr('class');
                updateHtml();
            }
    		
    		// $('span', '#dv-list').removeClass('active');
    		// $(this).addClass('active');
    		// $('html').removeAttr('class').addClass($(this).attr('class'));
    		$('#dv-list').removeClass('shown');
    	}
    });

    function updateHtml() {
        $('span.active', '#dv-list').each(function() {
            var isTitleChoice = $(this).data('title') !== undefined ? true : false;

            $('html').addClass($(this).data('typeface'));
            if(isTitleChoice) {
                console.log(isTitleChoice, $(this).data('typeface'));
                document.cookie = 'design_qa_testing_typeface_title=' + $(this).data('typeface') + '; expires=; domain=.dogvacay.com; path=/';
            } else {
                console.log(isTitleChoice, $(this).data('typeface'));
                document.cookie = 'design_qa_testing_typeface_body=' + $(this).data('typeface') + '; expires=; domain=.dogvacay.com; path=/';
            }
            // console.log($(this).data('typeface'));
        });
    }

}

if(getUrlParameter('add-design-qa-cookie')) {
    document.cookie = 'design_qa_testing=1; expires=; domain=.dogvacay.com; path=/';
    if(reloadPage) window.location.reload(true);
}

console.log('this is running, v7');