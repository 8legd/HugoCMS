!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t("object"==typeof exports?require("jquery"):jQuery)}(function(t){"use strict";function i(e,o){this.$element=t(e),this.options=t.extend({},i.DEFAULTS,t.isPlainObject(o)&&o),this.init()}var e="qor.widget",o="enable."+e,n="disable."+e,r="click."+e,a=".qor-widget-button, .qor-slideout__close",d="";return i.prototype={constructor:i,init:function(){this.$element;this.bind(),this.initStatus()},bind:function(){this.$element.on(r,t.proxy(this.click,this))},initStatus:function(){t("body").append('<iframe id="qor-widget-iframe" src="'+d+'"></iframe>')},click:function(i){var e=t(i.target);i.stopPropagation(),e.is(a)&&(t("#qor-widget-iframe").contents().find(".js-widget-edit-link").attr("data-url",e.data("url")),t("#qor-widget-iframe").addClass("show"),t("body").addClass("open-widget-editor"))}},i.plugin=function(o){return this.each(function(){var n,r=t(this),a=r.data(e);if(!a){if(/destroy/.test(o))return;r.data(e,a=new i(this,o))}"string"==typeof o&&t.isFunction(n=a[o])&&n.apply(a)})},i.isScrollToBottom=function(t){return t.clientHeight+t.scrollTop===t.scrollHeight},t(function(){t("body").attr("data-toggle","qor.widgets"),t(".qor-widget").each(function(i,e){var o=t(e).find("*").eq(0);d=t(e).data("widget-frontend-edit-url"),o.css("position","relative").addClass("qor-widget").attr("data-url",t(e).data("url")).unwrap(),o.append('<div class="qor-widget-embed-wrapper"><button data-url="'+t(e).data("url")+'" class="qor-widget-button">Edit</button></div>')}),window.closeWidgetEditBox=function(){t("#qor-widget-iframe").removeClass("show"),t("#qor-widget-iframe")[0].contentWindow.location.reload(),t("body").removeClass("open-widget-editor")};var e='[data-toggle="qor.widgets"]';t(document).on(n,function(o){i.plugin.call(t(e,o.target),"destroy")}).on(o,function(o){i.plugin.call(t(e,o.target))}).triggerHandler(o)}),i});