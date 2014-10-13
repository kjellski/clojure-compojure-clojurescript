// Compiled by ClojureScript 0.0-2371
goog.provide('acme.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
acme.core.fetch_widgets = (function fetch_widgets(url){var c = cljs.core.async.chan.call(null);var c__6439__auto___13119 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___13119,c){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___13119,c){
return (function (state_13105){var state_val_13106 = (state_13105[(1)]);if((state_val_13106 === (6)))
{var inst_13103 = (state_13105[(2)]);var state_13105__$1 = state_13105;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13105__$1,inst_13103);
} else
{if((state_val_13106 === (5)))
{var inst_13099 = (state_13105[(2)]);var inst_13100 = cljs.core.get.call(null,inst_13099,new cljs.core.Keyword(null,"body","body",-2049205669));var inst_13101 = cljs.core.vec.call(null,inst_13100);var state_13105__$1 = state_13105;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13105__$1,(6),c,inst_13101);
} else
{if((state_val_13106 === (4)))
{var inst_13093 = (state_13105[(7)]);var state_13105__$1 = state_13105;var statearr_13107_13120 = state_13105__$1;(statearr_13107_13120[(2)] = inst_13093);
(statearr_13107_13120[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (3)))
{var inst_13093 = (state_13105[(7)]);var inst_13096 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13093);var state_13105__$1 = state_13105;var statearr_13108_13121 = state_13105__$1;(statearr_13108_13121[(2)] = inst_13096);
(statearr_13108_13121[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (2)))
{var inst_13093 = (state_13105[(7)]);var inst_13093__$1 = (state_13105[(2)]);var inst_13094 = cljs.core.seq_QMARK_.call(null,inst_13093__$1);var state_13105__$1 = (function (){var statearr_13109 = state_13105;(statearr_13109[(7)] = inst_13093__$1);
return statearr_13109;
})();if(inst_13094)
{var statearr_13110_13122 = state_13105__$1;(statearr_13110_13122[(1)] = (3));
} else
{var statearr_13111_13123 = state_13105__$1;(statearr_13111_13123[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13106 === (1)))
{var inst_13091 = cljs_http.client.get.call(null,url);var state_13105__$1 = state_13105;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13105__$1,(2),inst_13091);
} else
{return null;
}
}
}
}
}
}
});})(c__6439__auto___13119,c))
;return ((function (switch__6424__auto__,c__6439__auto___13119,c){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_13115 = [null,null,null,null,null,null,null,null];(statearr_13115[(0)] = state_machine__6425__auto__);
(statearr_13115[(1)] = (1));
return statearr_13115;
});
var state_machine__6425__auto____1 = (function (state_13105){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_13105);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e13116){if((e13116 instanceof Object))
{var ex__6428__auto__ = e13116;var statearr_13117_13124 = state_13105;(statearr_13117_13124[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13105);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13116;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13125 = state_13105;
state_13105 = G__13125;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_13105){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_13105);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___13119,c))
})();var state__6441__auto__ = (function (){var statearr_13118 = f__6440__auto__.call(null);(statearr_13118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___13119);
return statearr_13118;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___13119,c))
);
return c;
});
acme.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
acme.core.widget = (function widget(p__13126,owner,opts){var map__13131 = p__13126;var map__13131__$1 = ((cljs.core.seq_QMARK_.call(null,map__13131))?cljs.core.apply.call(null,cljs.core.hash_map,map__13131):map__13131);var name = cljs.core.get.call(null,map__13131__$1,new cljs.core.Keyword(null,"name","name",1843675177));if(typeof acme.core.t13132 !== 'undefined')
{} else
{
/**
* @constructor
*/
acme.core.t13132 = (function (name,map__13131,opts,owner,p__13126,widget,meta13133){
this.name = name;
this.map__13131 = map__13131;
this.opts = opts;
this.owner = owner;
this.p__13126 = p__13126;
this.widget = widget;
this.meta13133 = meta13133;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t13132.cljs$lang$type = true;
acme.core.t13132.cljs$lang$ctorStr = "acme.core/t13132";
acme.core.t13132.cljs$lang$ctorPrWriter = ((function (map__13131,map__13131__$1,name){
return (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"acme.core/t13132");
});})(map__13131,map__13131__$1,name))
;
acme.core.t13132.prototype.om$core$IRender$ = true;
acme.core.t13132.prototype.om$core$IRender$render$arity$1 = ((function (map__13131,map__13131__$1,name){
return (function (this__5201__auto__){var self__ = this;
var this__5201__auto____$1 = this;return React.DOM.li(null,self__.name);
});})(map__13131,map__13131__$1,name))
;
acme.core.t13132.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13131,map__13131__$1,name){
return (function (_13134){var self__ = this;
var _13134__$1 = this;return self__.meta13133;
});})(map__13131,map__13131__$1,name))
;
acme.core.t13132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13131,map__13131__$1,name){
return (function (_13134,meta13133__$1){var self__ = this;
var _13134__$1 = this;return (new acme.core.t13132(self__.name,self__.map__13131,self__.opts,self__.owner,self__.p__13126,self__.widget,meta13133__$1));
});})(map__13131,map__13131__$1,name))
;
acme.core.__GT_t13132 = ((function (map__13131,map__13131__$1,name){
return (function __GT_t13132(name__$1,map__13131__$2,opts__$1,owner__$1,p__13126__$1,widget__$1,meta13133){return (new acme.core.t13132(name__$1,map__13131__$2,opts__$1,owner__$1,p__13126__$1,widget__$1,meta13133));
});})(map__13131,map__13131__$1,name))
;
}
return (new acme.core.t13132(name,map__13131__$1,opts,owner,p__13126,widget,null));
});
acme.core.widget_list = (function widget_list(p__13135){var map__13140 = p__13135;var map__13140__$1 = ((cljs.core.seq_QMARK_.call(null,map__13140))?cljs.core.apply.call(null,cljs.core.hash_map,map__13140):map__13140);var widgets = cljs.core.get.call(null,map__13140__$1,new cljs.core.Keyword(null,"widgets","widgets",-159098978));if(typeof acme.core.t13141 !== 'undefined')
{} else
{
/**
* @constructor
*/
acme.core.t13141 = (function (widgets,map__13140,p__13135,widget_list,meta13142){
this.widgets = widgets;
this.map__13140 = map__13140;
this.p__13135 = p__13135;
this.widget_list = widget_list;
this.meta13142 = meta13142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t13141.cljs$lang$type = true;
acme.core.t13141.cljs$lang$ctorStr = "acme.core/t13141";
acme.core.t13141.cljs$lang$ctorPrWriter = ((function (map__13140,map__13140__$1,widgets){
return (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"acme.core/t13141");
});})(map__13140,map__13140__$1,widgets))
;
acme.core.t13141.prototype.om$core$IRender$ = true;
acme.core.t13141.prototype.om$core$IRender$render$arity$1 = ((function (map__13140,map__13140__$1,widgets){
return (function (this__5201__auto__){var self__ = this;
var this__5201__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,acme.core.widget,self__.widgets));
});})(map__13140,map__13140__$1,widgets))
;
acme.core.t13141.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13140,map__13140__$1,widgets){
return (function (_13143){var self__ = this;
var _13143__$1 = this;return self__.meta13142;
});})(map__13140,map__13140__$1,widgets))
;
acme.core.t13141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13140,map__13140__$1,widgets){
return (function (_13143,meta13142__$1){var self__ = this;
var _13143__$1 = this;return (new acme.core.t13141(self__.widgets,self__.map__13140,self__.p__13135,self__.widget_list,meta13142__$1));
});})(map__13140,map__13140__$1,widgets))
;
acme.core.__GT_t13141 = ((function (map__13140,map__13140__$1,widgets){
return (function __GT_t13141(widgets__$1,map__13140__$2,p__13135__$1,widget_list__$1,meta13142){return (new acme.core.t13141(widgets__$1,map__13140__$2,p__13135__$1,widget_list__$1,meta13142));
});})(map__13140,map__13140__$1,widgets))
;
}
return (new acme.core.t13141(widgets,map__13140__$1,p__13135,widget_list,null));
});
acme.core.widget_box = (function widget_box(app,owner,opts){if(typeof acme.core.t13187 !== 'undefined')
{} else
{
/**
* @constructor
*/
acme.core.t13187 = (function (opts,owner,app,widget_box,meta13188){
this.opts = opts;
this.owner = owner;
this.app = app;
this.widget_box = widget_box;
this.meta13188 = meta13188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t13187.cljs$lang$type = true;
acme.core.t13187.cljs$lang$ctorStr = "acme.core/t13187";
acme.core.t13187.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"acme.core/t13187");
});
acme.core.t13187.prototype.om$core$IRender$ = true;
acme.core.t13187.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h1(null,"Widgets"),om.core.build.call(null,acme.core.widget_list,self__.app));
});
acme.core.t13187.prototype.om$core$IWillMount$ = true;
acme.core.t13187.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;om.core.transact_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widgets","widgets",-159098978)], null),((function (___$1){
return (function (){return cljs.core.PersistentVector.EMPTY;
});})(___$1))
);
var c__6439__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto__,___$1){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto__,___$1){
return (function (state_13213){var state_val_13214 = (state_13213[(1)]);if((state_val_13214 === (8)))
{var inst_13205 = (state_13213[(2)]);var state_13213__$1 = (function (){var statearr_13215 = state_13213;(statearr_13215[(7)] = inst_13205);
return statearr_13215;
})();var statearr_13216_13230 = state_13213__$1;(statearr_13216_13230[(2)] = null);
(statearr_13216_13230[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (7)))
{var inst_13195 = (state_13213[(2)]);var inst_13196 = cljs.core.pr_str.call(null,inst_13195);var inst_13197 = console.log(inst_13196);var inst_13198 = cljs.core.PersistentVector.EMPTY_NODE;var inst_13199 = [new cljs.core.Keyword(null,"widgets","widgets",-159098978)];var inst_13200 = (new cljs.core.PersistentVector(null,1,(5),inst_13198,inst_13199,null));var inst_13201 = om.core.update_BANG_.call(null,self__.app,inst_13200,inst_13195);var inst_13202 = new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_13203 = cljs.core.async.timeout.call(null,inst_13202);var state_13213__$1 = (function (){var statearr_13217 = state_13213;(statearr_13217[(8)] = inst_13201);
(statearr_13217[(9)] = inst_13197);
return statearr_13217;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13213__$1,(8),inst_13203);
} else
{if((state_val_13214 === (6)))
{var inst_13209 = (state_13213[(2)]);var state_13213__$1 = state_13213;var statearr_13218_13231 = state_13213__$1;(statearr_13218_13231[(2)] = inst_13209);
(statearr_13218_13231[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (5)))
{var state_13213__$1 = state_13213;var statearr_13219_13232 = state_13213__$1;(statearr_13219_13232[(2)] = null);
(statearr_13219_13232[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (4)))
{var inst_13192 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_13193 = acme.core.fetch_widgets.call(null,inst_13192);var state_13213__$1 = state_13213;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13213__$1,(7),inst_13193);
} else
{if((state_val_13214 === (3)))
{var inst_13211 = (state_13213[(2)]);var state_13213__$1 = state_13213;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13213__$1,inst_13211);
} else
{if((state_val_13214 === (2)))
{var state_13213__$1 = state_13213;var statearr_13220_13233 = state_13213__$1;(statearr_13220_13233[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13214 === (1)))
{var state_13213__$1 = state_13213;var statearr_13222_13234 = state_13213__$1;(statearr_13222_13234[(2)] = null);
(statearr_13222_13234[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
});})(c__6439__auto__,___$1))
;return ((function (switch__6424__auto__,c__6439__auto__,___$1){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_13226 = [null,null,null,null,null,null,null,null,null,null];(statearr_13226[(0)] = state_machine__6425__auto__);
(statearr_13226[(1)] = (1));
return statearr_13226;
});
var state_machine__6425__auto____1 = (function (state_13213){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_13213);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e13227){if((e13227 instanceof Object))
{var ex__6428__auto__ = e13227;var statearr_13228_13235 = state_13213;(statearr_13228_13235[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13213);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13227;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13236 = state_13213;
state_13213 = G__13236;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_13213){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_13213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto__,___$1))
})();var state__6441__auto__ = (function (){var statearr_13229 = f__6440__auto__.call(null);(statearr_13229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto__);
return statearr_13229;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto__,___$1))
);
return c__6439__auto__;
});
acme.core.t13187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13189){var self__ = this;
var _13189__$1 = this;return self__.meta13188;
});
acme.core.t13187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13189,meta13188__$1){var self__ = this;
var _13189__$1 = this;return (new acme.core.t13187(self__.opts,self__.owner,self__.app,self__.widget_box,meta13188__$1));
});
acme.core.__GT_t13187 = (function __GT_t13187(opts__$1,owner__$1,app__$1,widget_box__$1,meta13188){return (new acme.core.t13187(opts__$1,owner__$1,app__$1,widget_box__$1,meta13188));
});
}
return (new acme.core.t13187(opts,owner,app,widget_box,null));
});
acme.core.om_app = (function om_app(app,owner){if(typeof acme.core.t13240 !== 'undefined')
{} else
{
/**
* @constructor
*/
acme.core.t13240 = (function (owner,app,om_app,meta13241){
this.owner = owner;
this.app = app;
this.om_app = om_app;
this.meta13241 = meta13241;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
acme.core.t13240.cljs$lang$type = true;
acme.core.t13240.cljs$lang$ctorStr = "acme.core/t13240";
acme.core.t13240.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"acme.core/t13240");
});
acme.core.t13240.prototype.om$core$IRender$ = true;
acme.core.t13240.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,acme.core.widget_box,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"/widgets",new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570),(2000)], null)], null)));
});
acme.core.t13240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13242){var self__ = this;
var _13242__$1 = this;return self__.meta13241;
});
acme.core.t13240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13242,meta13241__$1){var self__ = this;
var _13242__$1 = this;return (new acme.core.t13240(self__.owner,self__.app,self__.om_app,meta13241__$1));
});
acme.core.__GT_t13240 = (function __GT_t13240(owner__$1,app__$1,om_app__$1,meta13241){return (new acme.core.t13240(owner__$1,app__$1,om_app__$1,meta13241));
});
}
return (new acme.core.t13240(owner,app,om_app,null));
});
om.core.root.call(null,acme.core.om_app,acme.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));

//# sourceMappingURL=core.js.map