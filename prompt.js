var Prompt = (function($, undefined){
		var defaultOptions = {
			header 		: '提示',
			text 		: '你确定继续吗？',
			yesButton	: '确定',
			noButton	: '取消',
			yesNode		: '#yes',
			noNode		: '#no',
			el			: '#prompt',
			tpl			: '<div style="width: 452px; display: block;" id="prompt"><div class="modal-custom-common">            <div class="modal-body-noScroll">             <p>是否删除此消息？</p>             </div>         <div class="modal-footer">             <form class="form-inline" style="margin-top:20px; text-align:right;">                 <a href="javascript:;" class="btn default-btn-width" id="no" style="">取消</a>                 <a href="javascript:;" class="btn btn-primary default-btn-width" id="yes" style="">确定</a>             </form>         </div>     </div></div>',
			yesCallback	: function(){},
			noCallback	: function(){}
		};
	
		var Prompt = {
			show : function(options){
				this.options = $.extend({}, defaultOptions, options);
				Prompt.rander();
				Prompt.initHtml();
				this.addEvents();
			},
			initHtml : function(){
				$(this.options.el).find(this.options.yesNode).text(this.options.yesButton).end().find(this.options.noNode).text(this.options.noButton);
			},
			rander : function(){
				$("body").append(this.options.tpl);
			},
			addEvents : function(){
				var self = this;
				
				$(self.options.el).delegate(self.options.yesNode, "click", function(){
					$.isFunction(self.options.yesCallback) ? self.options.yesCallback.call(self) : "";
				});
				
				$(self.options.el).delegate(self.options.noNode, "click", function(){
					$.isFunction(self.options.noCallback) ? self.options.noCallback.call(self) : "";
				});
				
				$(self.options.el).off("modal.hide").on("modal.hide", function(){
					Prompt.hide();	
				})
			},
			hide : function(){
				$(this.options.el).hide();
			}
		}
		
		return Prompt;
	})(jQuery);
