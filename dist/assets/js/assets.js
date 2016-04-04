!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(e){function t(t,s){this.element=t,this.options=e.extend({},l,s),this.init()}function s(t){if(!e(t.target).parents().hasClass("jq-selectbox")&&"OPTION"!=t.target.nodeName&&e("div.jq-selectbox.opened").length){t=e("div.jq-selectbox.opened");var s=e("div.jq-selectbox__search input",t),l=e("div.jq-selectbox__dropdown",t);t.find("select").data("_"+i).options.onSelectClosed.call(t),s.length&&s.val("").keyup(),l.hide().find("li.sel").addClass("selected"),t.removeClass("focused opened dropup dropdown")}}var i="styler",l={wrapper:"form",idSuffix:"-styler",filePlaceholder:"Файл не выбран",fileBrowse:"Обзор...",fileNumber:"Выбрано файлов: %s",selectPlaceholder:"Выберите...",selectSearch:!1,selectSearchLimit:10,selectSearchNotFound:"Совпадений не найдено",selectSearchPlaceholder:"Поиск...",selectVisibleOptions:0,singleSelectzIndex:"100",selectSmartPositioning:!0,onSelectOpened:function(){},onSelectClosed:function(){},onFormStyled:function(){}};t.prototype={init:function(){function t(){var e="",t="",s="",o="";void 0!==i.attr("id")&&""!==i.attr("id")&&(e=' id="'+i.attr("id")+l.idSuffix+'"'),void 0!==i.attr("title")&&""!==i.attr("title")&&(t=' title="'+i.attr("title")+'"'),void 0!==i.attr("class")&&""!==i.attr("class")&&(s=" "+i.attr("class"));var a,d=i.data();for(a in d)""!==d[a]&&"_styler"!==a&&(o+=" data-"+a+'="'+d[a]+'"');this.id=e+o,this.title=t,this.classes=s}var i=e(this.element),l=this.options,o=!(!navigator.userAgent.match(/(iPad|iPhone|iPod)/i)||navigator.userAgent.match(/(Windows\sPhone)/i)),a=!(!navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/(Windows\sPhone)/i));if(i.is(":checkbox")){var d=function(){var s=new t,l=e("<div"+s.id+' class="jq-checkbox'+s.classes+'"'+s.title+'><div class="jq-checkbox__div"></div></div>');i.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(l).prependTo(l),l.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative",overflow:"hidden"}),i.is(":checked")&&l.addClass("checked"),i.is(":disabled")&&l.addClass("disabled"),l.click(function(e){e.preventDefault(),l.is(".disabled")||(i.is(":checked")?(i.prop("checked",!1),l.removeClass("checked")):(i.prop("checked",!0),l.addClass("checked")),i.focus().change())}),i.closest("label").add('label[for="'+i.attr("id")+'"]').on("click.styler",function(t){e(t.target).is("a")||e(t.target).closest(l).length||(l.triggerHandler("click"),t.preventDefault())}),i.on("change.styler",function(){i.is(":checked")?l.addClass("checked"):l.removeClass("checked")}).on("keydown.styler",function(e){32==e.which&&l.click()}).on("focus.styler",function(){l.is(".disabled")||l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")})};d(),i.on("refresh",function(){i.closest("label").add('label[for="'+i.attr("id")+'"]').off(".styler"),i.off(".styler").parent().before(i).remove(),d()})}else if(i.is(":radio")){var r=function(){var s=new t,o=e("<div"+s.id+' class="jq-radio'+s.classes+'"'+s.title+'><div class="jq-radio__div"></div></div>');i.css({position:"absolute",zIndex:"-1",opacity:0,margin:0,padding:0}).after(o).prependTo(o),o.attr("unselectable","on").css({"-webkit-user-select":"none","-moz-user-select":"none","-ms-user-select":"none","-o-user-select":"none","user-select":"none",display:"inline-block",position:"relative"}),i.is(":checked")&&o.addClass("checked"),i.is(":disabled")&&o.addClass("disabled"),o.click(function(e){e.preventDefault(),o.is(".disabled")||(o.closest(l.wrapper).find('input[name="'+i.attr("name")+'"]').prop("checked",!1).parent().removeClass("checked"),i.prop("checked",!0).parent().addClass("checked"),i.focus().change())}),i.closest("label").add('label[for="'+i.attr("id")+'"]').on("click.styler",function(t){e(t.target).is("a")||e(t.target).closest(o).length||(o.triggerHandler("click"),t.preventDefault())}),i.on("change.styler",function(){i.parent().addClass("checked")}).on("focus.styler",function(){o.is(".disabled")||o.addClass("focused")}).on("blur.styler",function(){o.removeClass("focused")})};r(),i.on("refresh",function(){i.closest("label").add('label[for="'+i.attr("id")+'"]').off(".styler"),i.off(".styler").parent().before(i).remove(),r()})}else if(i.is(":file")){i.css({position:"absolute",top:0,right:0,width:"100%",height:"100%",opacity:0,margin:0,padding:0});var n=function(){var s=new t,o=i.data("placeholder");void 0===o&&(o=l.filePlaceholder);var a=i.data("browse");void 0!==a&&""!==a||(a=l.fileBrowse);var d=e("<div"+s.id+' class="jq-file'+s.classes+'"'+s.title+' style="display: inline-block; position: relative; overflow: hidden"></div>'),r=e('<div class="jq-file__name">'+o+"</div>").appendTo(d);e('<div class="jq-file__browse">'+a+"</div>").appendTo(d),i.after(d).appendTo(d),i.is(":disabled")&&d.addClass("disabled"),i.on("change.styler",function(){var e=i.val();if(i.is("[multiple]")){var e="",t=i[0].files.length;t>0&&(e=i.data("number"),void 0===e&&(e=l.fileNumber),e=e.replace("%s",t))}r.text(e.replace(/.+[\\\/]/,"")),""===e?(r.text(o),d.removeClass("changed")):d.addClass("changed")}).on("focus.styler",function(){d.addClass("focused")}).on("blur.styler",function(){d.removeClass("focused")}).on("click.styler",function(){d.removeClass("focused")})};n(),i.on("refresh",function(){i.off(".styler").parent().before(i).remove(),n()})}else if(i.is('input[type="number"]')){var c=function(){var t=e('<div class="jq-number"><div class="jq-number__spin minus"></div><div class="jq-number__spin plus"></div></div>');i.after(t).prependTo(t).wrap('<div class="jq-number__field"></div>'),i.is(":disabled")&&t.addClass("disabled");var s,l,o,a=null,d=null;void 0!==i.attr("min")&&(s=i.attr("min")),void 0!==i.attr("max")&&(l=i.attr("max")),o=void 0!==i.attr("step")&&e.isNumeric(i.attr("step"))?Number(i.attr("step")):Number(1);var r=function(t){var a,d=i.val();e.isNumeric(d)||(d=0,i.val("0")),t.is(".minus")?(a=parseInt(d,10)-o,o>0&&(a=Math.ceil(a/o)*o)):t.is(".plus")&&(a=parseInt(d,10)+o,o>0&&(a=Math.floor(a/o)*o)),e.isNumeric(s)&&e.isNumeric(l)?a>=s&&l>=a&&i.val(a):e.isNumeric(s)&&!e.isNumeric(l)?a>=s&&i.val(a):!e.isNumeric(s)&&e.isNumeric(l)?l>=a&&i.val(a):i.val(a)};t.is(".disabled")||(t.on("mousedown","div.jq-number__spin",function(){var t=e(this);r(t),a=setTimeout(function(){d=setInterval(function(){r(t)},40)},350)}).on("mouseup mouseout","div.jq-number__spin",function(){clearTimeout(a),clearInterval(d)}),i.on("focus.styler",function(){t.addClass("focused")}).on("blur.styler",function(){t.removeClass("focused")}))};c(),i.on("refresh",function(){i.off(".styler").closest(".jq-number").before(i).remove(),c()})}else if(i.is("select")){var h=function(){function d(t){t.off("mousewheel DOMMouseScroll").on("mousewheel DOMMouseScroll",function(t){var s=null;"mousewheel"==t.type?s=-1*t.originalEvent.wheelDelta:"DOMMouseScroll"==t.type&&(s=40*t.originalEvent.detail),s&&(t.stopPropagation(),t.preventDefault(),e(this).scrollTop(s+e(this).scrollTop()))})}function r(){for(var e=0;e<h.length;e++){var t=h.eq(e),s="",i="",o=s="",a="",d="",r="",n="",c="";t.prop("selected")&&(i="selected sel"),t.is(":disabled")&&(i="disabled"),t.is(":selected:disabled")&&(i="selected sel disabled"),void 0!==t.attr("id")&&""!==t.attr("id")&&(o=' id="'+t.attr("id")+l.idSuffix+'"'),void 0!==t.attr("title")&&""!==h.attr("title")&&(a=' title="'+t.attr("title")+'"'),void 0!==t.attr("class")&&(r=" "+t.attr("class"),c=' data-jqfs-class="'+t.attr("class")+'"');var p,u=t.data();for(p in u)""!==u[p]&&(d+=" data-"+p+'="'+u[p]+'"');""!==i+r&&(s=' class="'+i+r+'"'),s="<li"+c+d+s+a+o+">"+t.html()+"</li>",t.parent().is("optgroup")&&(void 0!==t.parent().attr("class")&&(n=" "+t.parent().attr("class")),s="<li"+c+d+' class="'+i+r+" option"+n+'"'+a+o+">"+t.html()+"</li>",t.is(":first-child")&&(s='<li class="optgroup'+n+'">'+t.parent().attr("label")+"</li>"+s)),f+=s}}function n(){var a=new t,n="",c=i.data("placeholder"),p=i.data("search"),u=i.data("search-limit"),v=i.data("search-not-found"),m=i.data("search-placeholder"),g=i.data("z-index"),b=i.data("smart-positioning");void 0===c&&(c=l.selectPlaceholder),void 0!==p&&""!==p||(p=l.selectSearch),void 0!==u&&""!==u||(u=l.selectSearchLimit),void 0!==v&&""!==v||(v=l.selectSearchNotFound),void 0===m&&(m=l.selectSearchPlaceholder),void 0!==g&&""!==g||(g=l.singleSelectzIndex),void 0!==b&&""!==b||(b=l.selectSmartPositioning);var y=e("<div"+a.id+' class="jq-selectbox jqselect'+a.classes+'" style="display: inline-block; position: relative; z-index:'+g+'"><div class="jq-selectbox__select"'+a.title+' style="position: relative"><div class="jq-selectbox__select-text"></div><div class="jq-selectbox__trigger"><div class="jq-selectbox__trigger-arrow"></div></div></div></div>');i.css({margin:0,padding:0}).after(y).prependTo(y);var C=e("div.jq-selectbox__select",y),w=e("div.jq-selectbox__select-text",y),a=h.filter(":selected");r(),p&&(n='<div class="jq-selectbox__search"><input type="search" autocomplete="off" placeholder="'+m+'"></div><div class="jq-selectbox__not-found">'+v+"</div>");var x=e('<div class="jq-selectbox__dropdown" style="position: absolute">'+n+'<ul style="position: relative; list-style: none; overflow: auto; overflow-x: hidden">'+f+"</ul></div>");y.append(x);var q=e("ul",x),_=e("li",x),j=e("input",x),k=e("div.jq-selectbox__not-found",x).hide();_.length<u&&j.parent().hide(),""===i.val()?w.text(c).addClass("placeholder"):w.text(a.text());var T=0,S=0;_.each(function(){var t=e(this);t.css({display:"inline-block"}),t.innerWidth()>T&&(T=t.innerWidth(),S=t.width()),t.css({display:""})}),w.is(".placeholder")&&w.width()>T?w.width(w.width()):(n=y.clone().appendTo("body").width("auto"),p=n.outerWidth(),n.remove(),p==y.outerWidth()&&w.width(S)),T>y.width()&&x.width(T),""===h.first().text()&&""!==i.data("placeholder")&&_.first().hide(),i.css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0});var N=y.outerHeight(),A=j.outerHeight(),I=q.css("max-height"),n=_.filter(".selected");1>n.length&&_.first().addClass("selected sel"),void 0===_.data("li-height")&&_.data("li-height",_.outerHeight());var P=x.css("top");return"auto"==x.css("left")&&x.css({left:0}),"auto"==x.css("top")&&x.css({top:N}),x.hide(),n.length&&(h.first().text()!=a.text()&&y.addClass("changed"),y.data("jqfs-class",n.data("jqfs-class")),y.addClass(n.data("jqfs-class"))),i.is(":disabled")?(y.addClass("disabled"),!1):(C.click(function(){if(e("div.jq-selectbox").filter(".opened").length&&l.onSelectClosed.call(e("div.jq-selectbox").filter(".opened")),i.focus(),!o){var t=e(window),s=_.data("li-height"),a=y.offset().top,r=t.height()-N-(a-t.scrollTop()),n=i.data("visible-options");void 0!==n&&""!==n||(n=l.selectVisibleOptions);var c=5*s,f=s*n;n>0&&6>n&&(c=f),0===n&&(f="auto");var n=function(){x.height("auto").css({bottom:"auto",top:P});var e=function(){q.css("max-height",Math.floor((r-20-A)/s)*s)};e(),q.css("max-height",f),"none"!=I&&q.css("max-height",I),r<x.outerHeight()+20&&e()},p=function(){x.height("auto").css({top:"auto",bottom:P});var e=function(){q.css("max-height",Math.floor((a-t.scrollTop()-20-A)/s)*s)};e(),q.css("max-height",f),"none"!=I&&q.css("max-height",I),a-t.scrollTop()-20<x.outerHeight()+20&&e()};!0===b||1===b?r>c+A+20?(n(),y.removeClass("dropup").addClass("dropdown")):(p(),y.removeClass("dropdown").addClass("dropup")):(!1===b||0===b)&&r>c+A+20&&(n(),y.removeClass("dropup").addClass("dropdown")),y.offset().left+x.outerWidth()>t.width()&&x.css({left:"auto",right:0}),e("div.jqselect").css({zIndex:g-1}).removeClass("opened"),y.css({zIndex:g}),x.is(":hidden")?(e("div.jq-selectbox__dropdown:visible").hide(),x.show(),y.addClass("opened focused"),l.onSelectOpened.call(y)):(x.hide(),y.removeClass("opened dropup dropdown"),e("div.jq-selectbox").filter(".opened").length&&l.onSelectClosed.call(y)),j.length&&(j.val("").keyup(),k.hide(),j.keyup(function(){var t=e(this).val();_.each(function(){e(this).html().match(RegExp(".*?"+t+".*?","i"))?e(this).show():e(this).hide()}),""===h.first().text()&&""!==i.data("placeholder")&&_.first().hide(),1>_.filter(":visible").length?k.show():k.hide()})),_.filter(".selected").length&&(""===i.val()?q.scrollTop(0):(0!==q.innerHeight()/s%2&&(s/=2),q.scrollTop(q.scrollTop()+_.filter(".selected").position().top-q.innerHeight()/2+s))),d(q)}}),_.hover(function(){e(this).siblings().removeClass("selected")}),_.filter(".selected").text(),_.filter(":not(.disabled):not(.optgroup)").click(function(){i.focus();var t=e(this),s=t.text();if(!t.is(".selected")){var o=t.index(),o=o-t.prevAll(".optgroup").length;t.addClass("selected sel").siblings().removeClass("selected sel"),h.prop("selected",!1).eq(o).prop("selected",!0),w.text(s),y.data("jqfs-class")&&y.removeClass(y.data("jqfs-class")),y.data("jqfs-class",t.data("jqfs-class")),y.addClass(t.data("jqfs-class")),i.change()}x.hide(),y.removeClass("opened dropup dropdown"),l.onSelectClosed.call(y)}),x.mouseout(function(){e("li.sel",x).addClass("selected")}),i.on("change.styler",function(){w.text(h.filter(":selected").text()).removeClass("placeholder"),_.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"),h.first().text()!=_.filter(".selected").text()?y.addClass("changed"):y.removeClass("changed")}).on("focus.styler",function(){y.addClass("focused"),e("div.jqselect").not(".focused").removeClass("opened dropup dropdown").find("div.jq-selectbox__dropdown").hide()}).on("blur.styler",function(){y.removeClass("focused")}).on("keydown.styler keyup.styler",function(e){var t=_.data("li-height");""===i.val()?w.text(c).addClass("placeholder"):w.text(h.filter(":selected").text()),_.removeClass("selected sel").not(".optgroup").eq(i[0].selectedIndex).addClass("selected sel"),38!=e.which&&37!=e.which&&33!=e.which&&36!=e.which||(""===i.val()?q.scrollTop(0):q.scrollTop(q.scrollTop()+_.filter(".selected").position().top)),40!=e.which&&39!=e.which&&34!=e.which&&35!=e.which||q.scrollTop(q.scrollTop()+_.filter(".selected").position().top-q.innerHeight()+t),13==e.which&&(e.preventDefault(),x.hide(),y.removeClass("opened dropup dropdown"),l.onSelectClosed.call(y))}).on("keydown.styler",function(e){32==e.which&&(e.preventDefault(),C.click())}),void(s.registered||(e(document).on("click",s),s.registered=!0)))}function c(){var s=new t,l=e("<div"+s.id+' class="jq-select-multiple jqselect'+s.classes+'"'+s.title+' style="display: inline-block; position: relative"></div>');i.css({margin:0,padding:0}).after(l),r(),l.append("<ul>"+f+"</ul>");var o=e("ul",l).css({position:"relative","overflow-x":"hidden","-webkit-overflow-scrolling":"touch"}),a=e("li",l).attr("unselectable","on"),s=i.attr("size"),n=o.outerHeight(),c=a.outerHeight();void 0!==s&&s>0?o.css({height:c*s}):o.css({height:4*c}),n>l.height()&&(o.css("overflowY","scroll"),d(o),a.filter(".selected").length&&o.scrollTop(o.scrollTop()+a.filter(".selected").position().top)),i.prependTo(l).css({position:"absolute",left:0,top:0,width:"100%",height:"100%",opacity:0}),i.is(":disabled")?(l.addClass("disabled"),h.each(function(){e(this).is(":selected")&&a.eq(e(this).index()).addClass("selected")})):(a.filter(":not(.disabled):not(.optgroup)").click(function(t){i.focus();var s=e(this);if(t.ctrlKey||t.metaKey||s.addClass("selected"),t.shiftKey||s.addClass("first"),t.ctrlKey||t.metaKey||t.shiftKey||s.siblings().removeClass("selected first"),(t.ctrlKey||t.metaKey)&&(s.is(".selected")?s.removeClass("selected first"):s.addClass("selected first"),s.siblings().removeClass("first")),t.shiftKey){var l=!1,o=!1;s.siblings().removeClass("selected").siblings(".first").addClass("selected"),s.prevAll().each(function(){e(this).is(".first")&&(l=!0)}),s.nextAll().each(function(){e(this).is(".first")&&(o=!0)}),l&&s.prevAll().each(function(){return e(this).is(".selected")?!1:void e(this).not(".disabled, .optgroup").addClass("selected")}),o&&s.nextAll().each(function(){return e(this).is(".selected")?!1:void e(this).not(".disabled, .optgroup").addClass("selected")}),1==a.filter(".selected").length&&s.addClass("first")}h.prop("selected",!1),a.filter(".selected").each(function(){var t=e(this),s=t.index();t.is(".option")&&(s-=t.prevAll(".optgroup").length),h.eq(s).prop("selected",!0)}),i.change()}),h.each(function(t){e(this).data("optionIndex",t)}),i.on("change.styler",function(){a.removeClass("selected");var t=[];h.filter(":selected").each(function(){t.push(e(this).data("optionIndex"))}),a.not(".optgroup").filter(function(s){return-1<e.inArray(s,t)}).addClass("selected")}).on("focus.styler",function(){l.addClass("focused")}).on("blur.styler",function(){l.removeClass("focused")}),n>l.height()&&i.on("keydown.styler",function(e){38!=e.which&&37!=e.which&&33!=e.which||o.scrollTop(o.scrollTop()+a.filter(".selected").position().top-c),40!=e.which&&39!=e.which&&34!=e.which||o.scrollTop(o.scrollTop()+a.filter(".selected:last").position().top-o.innerHeight()+2*c)}))}var h=e("option",i),f="";i.is("[multiple]")?a||o||c():n()};h(),i.on("refresh",function(){i.off(".styler").parent().before(i).remove(),h()})}else i.is(":reset")&&i.on("click",function(){setTimeout(function(){i.closest(l.wrapper).find("input, select").trigger("refresh")},1)})},destroy:function(){var t=e(this.element);t.is(":checkbox")||t.is(":radio")?(t.removeData("_"+i).off(".styler refresh").removeAttr("style").parent().before(t).remove(),t.closest("label").add('label[for="'+t.attr("id")+'"]').off(".styler")):t.is('input[type="number"]')?t.removeData("_"+i).off(".styler refresh").closest(".jq-number").before(t).remove():(t.is(":file")||t.is("select"))&&t.removeData("_"+i).off(".styler refresh").removeAttr("style").parent().before(t).remove()}},e.fn[i]=function(s){var l=arguments;if(void 0===s||"object"==typeof s)return this.each(function(){e.data(this,"_"+i)||e.data(this,"_"+i,new t(this,s))}).promise().done(function(){var t=e(this[0]).data("_"+i);t&&t.options.onFormStyled.call()}),this;if("string"==typeof s&&"_"!==s[0]&&"init"!==s){var o;return this.each(function(){var a=e.data(this,"_"+i);a instanceof t&&"function"==typeof a[s]&&(o=a[s].apply(a,Array.prototype.slice.call(l,1)))}),void 0!==o?o:this}},s.registered=!1});
!function(){"use strict";function t(t){t.addEventListener("click",function(t){t.preventDefault(),this.classList.contains("active")===!0?this.classList.remove("active"):this.classList.add("active")})}for(var e=document.querySelectorAll(".opener"),i=e.length-1;i>=0;i--){var s=e[i];t(s)}}();