// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12216 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12216 = (function (f,fn_handler,meta12217){
this.f = f;
this.fn_handler = fn_handler;
this.meta12217 = meta12217;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12216.cljs$lang$type = true;
cljs.core.async.t12216.cljs$lang$ctorStr = "cljs.core.async/t12216";
cljs.core.async.t12216.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t12216");
});
cljs.core.async.t12216.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12216.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12216.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12216.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12218){var self__ = this;
var _12218__$1 = this;return self__.meta12217;
});
cljs.core.async.t12216.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12218,meta12217__$1){var self__ = this;
var _12218__$1 = this;return (new cljs.core.async.t12216(self__.f,self__.fn_handler,meta12217__$1));
});
cljs.core.async.__GT_t12216 = (function __GT_t12216(f__$1,fn_handler__$1,meta12217){return (new cljs.core.async.t12216(f__$1,fn_handler__$1,meta12217));
});
}
return (new cljs.core.async.t12216(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12220 = buff;if(G__12220)
{var bit__4263__auto__ = null;if(cljs.core.truth_((function (){var or__3599__auto__ = bit__4263__auto__;if(cljs.core.truth_(or__3599__auto__))
{return or__3599__auto__;
} else
{return G__12220.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12220.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12220);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12220);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_12221 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12221);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12221,ret){
return (function (){return fn1.call(null,val_12221);
});})(val_12221,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4469__auto___12222 = n;var x_12223 = (0);while(true){
if((x_12223 < n__4469__auto___12222))
{(a[x_12223] = (0));
{
var G__12224 = (x_12223 + (1));
x_12223 = G__12224;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__12225 = (i + (1));
i = G__12225;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12229 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12229 = (function (flag,alt_flag,meta12230){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12230 = meta12230;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12229.cljs$lang$type = true;
cljs.core.async.t12229.cljs$lang$ctorStr = "cljs.core.async/t12229";
cljs.core.async.t12229.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t12229");
});})(flag))
;
cljs.core.async.t12229.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12229.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12229.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12229.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12231){var self__ = this;
var _12231__$1 = this;return self__.meta12230;
});})(flag))
;
cljs.core.async.t12229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12231,meta12230__$1){var self__ = this;
var _12231__$1 = this;return (new cljs.core.async.t12229(self__.flag,self__.alt_flag,meta12230__$1));
});})(flag))
;
cljs.core.async.__GT_t12229 = ((function (flag){
return (function __GT_t12229(flag__$1,alt_flag__$1,meta12230){return (new cljs.core.async.t12229(flag__$1,alt_flag__$1,meta12230));
});})(flag))
;
}
return (new cljs.core.async.t12229(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12235 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12235 = (function (cb,flag,alt_handler,meta12236){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12236 = meta12236;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12235.cljs$lang$type = true;
cljs.core.async.t12235.cljs$lang$ctorStr = "cljs.core.async/t12235";
cljs.core.async.t12235.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t12235");
});
cljs.core.async.t12235.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12235.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12235.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12235.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12237){var self__ = this;
var _12237__$1 = this;return self__.meta12236;
});
cljs.core.async.t12235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12237,meta12236__$1){var self__ = this;
var _12237__$1 = this;return (new cljs.core.async.t12235(self__.cb,self__.flag,self__.alt_handler,meta12236__$1));
});
cljs.core.async.__GT_t12235 = (function __GT_t12235(cb__$1,flag__$1,alt_handler__$1,meta12236){return (new cljs.core.async.t12235(cb__$1,flag__$1,alt_handler__$1,meta12236));
});
}
return (new cljs.core.async.t12235(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12238_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12238_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12239_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12239_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3599__auto__ = wport;if(cljs.core.truth_(or__3599__auto__))
{return or__3599__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12240 = (i + (1));
i = G__12240;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3599__auto__ = ret;if(cljs.core.truth_(or__3599__auto__))
{return or__3599__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3587__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3587__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3587__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12241){var map__12243 = p__12241;var map__12243__$1 = ((cljs.core.seq_QMARK_.call(null,map__12243))?cljs.core.apply.call(null,cljs.core.hash_map,map__12243):map__12243);var opts = map__12243__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12241 = null;if (arguments.length > 1) {
  p__12241 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12241);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12244){
var ports = cljs.core.first(arglist__12244);
var p__12241 = cljs.core.rest(arglist__12244);
return alts_BANG___delegate(ports,p__12241);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6439__auto___12339 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___12339){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___12339){
return (function (state_12315){var state_val_12316 = (state_12315[(1)]);if((state_val_12316 === (7)))
{var inst_12311 = (state_12315[(2)]);var state_12315__$1 = state_12315;var statearr_12317_12340 = state_12315__$1;(statearr_12317_12340[(2)] = inst_12311);
(statearr_12317_12340[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12316 === (1)))
{var state_12315__$1 = state_12315;var statearr_12318_12341 = state_12315__$1;(statearr_12318_12341[(2)] = null);
(statearr_12318_12341[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12316 === (4)))
{var inst_12294 = (state_12315[(7)]);var inst_12294__$1 = (state_12315[(2)]);var inst_12295 = (inst_12294__$1 == null);var state_12315__$1 = (function (){var statearr_12319 = state_12315;(statearr_12319[(7)] = inst_12294__$1);
return statearr_12319;
})();if(cljs.core.truth_(inst_12295))
{var statearr_12320_12342 = state_12315__$1;(statearr_12320_12342[(1)] = (5));
} else
{var statearr_12321_12343 = state_12315__$1;(statearr_12321_12343[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12316 === (13)))
{var state_12315__$1 = state_12315;var statearr_12322_12344 = state_12315__$1;(statearr_12322_12344[(2)] = null);
(statearr_12322_12344[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12316 === (6)))
{var inst_12294 = (state_12315[(7)]);var state_12315__$1 = state_12315;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12315__$1,(11),to,inst_12294);
} else
{if((state_val_12316 === (3)))
{var inst_12313 = (state_12315[(2)]);var state_12315__$1 = state_12315;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12315__$1,inst_12313);
} else
{if((state_val_12316 === (12)))
{var state_12315__$1 = state_12315;var statearr_12323_12345 = state_12315__$1;(statearr_12323_12345[(2)] = null);
(statearr_12323_12345[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12316 === (2)))
{var state_12315__$1 = state_12315;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12315__$1,(4),from);
} else
{if((state_val_12316 === (11)))
{var inst_12304 = (state_12315[(2)]);var state_12315__$1 = state_12315;if(cljs.core.truth_(inst_12304))
{var statearr_12324_12346 = state_12315__$1;(statearr_12324_12346[(1)] = (12));
} else
{var statearr_12325_12347 = state_12315__$1;(statearr_12325_12347[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12316 === (9)))
{var state_12315__$1 = state_12315;var statearr_12326_12348 = state_12315__$1;(statearr_12326_12348[(2)] = null);
(statearr_12326_12348[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12316 === (5)))
{var state_12315__$1 = state_12315;if(cljs.core.truth_(close_QMARK_))
{var statearr_12327_12349 = state_12315__$1;(statearr_12327_12349[(1)] = (8));
} else
{var statearr_12328_12350 = state_12315__$1;(statearr_12328_12350[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12316 === (14)))
{var inst_12309 = (state_12315[(2)]);var state_12315__$1 = state_12315;var statearr_12329_12351 = state_12315__$1;(statearr_12329_12351[(2)] = inst_12309);
(statearr_12329_12351[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12316 === (10)))
{var inst_12301 = (state_12315[(2)]);var state_12315__$1 = state_12315;var statearr_12330_12352 = state_12315__$1;(statearr_12330_12352[(2)] = inst_12301);
(statearr_12330_12352[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12316 === (8)))
{var inst_12298 = cljs.core.async.close_BANG_.call(null,to);var state_12315__$1 = state_12315;var statearr_12331_12353 = state_12315__$1;(statearr_12331_12353[(2)] = inst_12298);
(statearr_12331_12353[(1)] = (10));
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
}
}
}
}
}
}
});})(c__6439__auto___12339))
;return ((function (switch__6424__auto__,c__6439__auto___12339){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12335 = [null,null,null,null,null,null,null,null];(statearr_12335[(0)] = state_machine__6425__auto__);
(statearr_12335[(1)] = (1));
return statearr_12335;
});
var state_machine__6425__auto____1 = (function (state_12315){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12315);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12336){if((e12336 instanceof Object))
{var ex__6428__auto__ = e12336;var statearr_12337_12354 = state_12315;(statearr_12337_12354[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12315);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12336;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12355 = state_12315;
state_12315 = G__12355;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12315){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___12339))
})();var state__6441__auto__ = (function (){var statearr_12338 = f__6440__auto__.call(null);(statearr_12338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___12339);
return statearr_12338;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___12339))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__12539){var vec__12540 = p__12539;var v = cljs.core.nth.call(null,vec__12540,(0),null);var p = cljs.core.nth.call(null,vec__12540,(1),null);var job = vec__12540;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6439__auto___12722 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___12722,res,vec__12540,v,p,job,jobs,results){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___12722,res,vec__12540,v,p,job,jobs,results){
return (function (state_12545){var state_val_12546 = (state_12545[(1)]);if((state_val_12546 === (2)))
{var inst_12542 = (state_12545[(2)]);var inst_12543 = cljs.core.async.close_BANG_.call(null,res);var state_12545__$1 = (function (){var statearr_12547 = state_12545;(statearr_12547[(7)] = inst_12542);
return statearr_12547;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12545__$1,inst_12543);
} else
{if((state_val_12546 === (1)))
{var state_12545__$1 = state_12545;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12545__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6439__auto___12722,res,vec__12540,v,p,job,jobs,results))
;return ((function (switch__6424__auto__,c__6439__auto___12722,res,vec__12540,v,p,job,jobs,results){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12551 = [null,null,null,null,null,null,null,null];(statearr_12551[(0)] = state_machine__6425__auto__);
(statearr_12551[(1)] = (1));
return statearr_12551;
});
var state_machine__6425__auto____1 = (function (state_12545){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12545);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12552){if((e12552 instanceof Object))
{var ex__6428__auto__ = e12552;var statearr_12553_12723 = state_12545;(statearr_12553_12723[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12545);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12552;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12724 = state_12545;
state_12545 = G__12724;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12545){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12545);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___12722,res,vec__12540,v,p,job,jobs,results))
})();var state__6441__auto__ = (function (){var statearr_12554 = f__6440__auto__.call(null);(statearr_12554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___12722);
return statearr_12554;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___12722,res,vec__12540,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12555){var vec__12556 = p__12555;var v = cljs.core.nth.call(null,vec__12556,(0),null);var p = cljs.core.nth.call(null,vec__12556,(1),null);var job = vec__12556;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4469__auto___12725 = n;var __12726 = (0);while(true){
if((__12726 < n__4469__auto___12725))
{var G__12557_12727 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12557_12727) {
case "async":
var c__6439__auto___12729 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12726,c__6439__auto___12729,G__12557_12727,n__4469__auto___12725,jobs,results,process,async){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (__12726,c__6439__auto___12729,G__12557_12727,n__4469__auto___12725,jobs,results,process,async){
return (function (state_12570){var state_val_12571 = (state_12570[(1)]);if((state_val_12571 === (7)))
{var inst_12566 = (state_12570[(2)]);var state_12570__$1 = state_12570;var statearr_12572_12730 = state_12570__$1;(statearr_12572_12730[(2)] = inst_12566);
(statearr_12572_12730[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (6)))
{var state_12570__$1 = state_12570;var statearr_12573_12731 = state_12570__$1;(statearr_12573_12731[(2)] = null);
(statearr_12573_12731[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (5)))
{var state_12570__$1 = state_12570;var statearr_12574_12732 = state_12570__$1;(statearr_12574_12732[(2)] = null);
(statearr_12574_12732[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (4)))
{var inst_12560 = (state_12570[(2)]);var inst_12561 = async.call(null,inst_12560);var state_12570__$1 = state_12570;if(cljs.core.truth_(inst_12561))
{var statearr_12575_12733 = state_12570__$1;(statearr_12575_12733[(1)] = (5));
} else
{var statearr_12576_12734 = state_12570__$1;(statearr_12576_12734[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12571 === (3)))
{var inst_12568 = (state_12570[(2)]);var state_12570__$1 = state_12570;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12570__$1,inst_12568);
} else
{if((state_val_12571 === (2)))
{var state_12570__$1 = state_12570;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12570__$1,(4),jobs);
} else
{if((state_val_12571 === (1)))
{var state_12570__$1 = state_12570;var statearr_12577_12735 = state_12570__$1;(statearr_12577_12735[(2)] = null);
(statearr_12577_12735[(1)] = (2));
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
});})(__12726,c__6439__auto___12729,G__12557_12727,n__4469__auto___12725,jobs,results,process,async))
;return ((function (__12726,switch__6424__auto__,c__6439__auto___12729,G__12557_12727,n__4469__auto___12725,jobs,results,process,async){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12581 = [null,null,null,null,null,null,null];(statearr_12581[(0)] = state_machine__6425__auto__);
(statearr_12581[(1)] = (1));
return statearr_12581;
});
var state_machine__6425__auto____1 = (function (state_12570){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12570);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12582){if((e12582 instanceof Object))
{var ex__6428__auto__ = e12582;var statearr_12583_12736 = state_12570;(statearr_12583_12736[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12570);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12582;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12737 = state_12570;
state_12570 = G__12737;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12570){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(__12726,switch__6424__auto__,c__6439__auto___12729,G__12557_12727,n__4469__auto___12725,jobs,results,process,async))
})();var state__6441__auto__ = (function (){var statearr_12584 = f__6440__auto__.call(null);(statearr_12584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___12729);
return statearr_12584;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(__12726,c__6439__auto___12729,G__12557_12727,n__4469__auto___12725,jobs,results,process,async))
);

break;
case "compute":
var c__6439__auto___12738 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12726,c__6439__auto___12738,G__12557_12727,n__4469__auto___12725,jobs,results,process,async){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (__12726,c__6439__auto___12738,G__12557_12727,n__4469__auto___12725,jobs,results,process,async){
return (function (state_12597){var state_val_12598 = (state_12597[(1)]);if((state_val_12598 === (7)))
{var inst_12593 = (state_12597[(2)]);var state_12597__$1 = state_12597;var statearr_12599_12739 = state_12597__$1;(statearr_12599_12739[(2)] = inst_12593);
(statearr_12599_12739[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12598 === (6)))
{var state_12597__$1 = state_12597;var statearr_12600_12740 = state_12597__$1;(statearr_12600_12740[(2)] = null);
(statearr_12600_12740[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12598 === (5)))
{var state_12597__$1 = state_12597;var statearr_12601_12741 = state_12597__$1;(statearr_12601_12741[(2)] = null);
(statearr_12601_12741[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12598 === (4)))
{var inst_12587 = (state_12597[(2)]);var inst_12588 = process.call(null,inst_12587);var state_12597__$1 = state_12597;if(cljs.core.truth_(inst_12588))
{var statearr_12602_12742 = state_12597__$1;(statearr_12602_12742[(1)] = (5));
} else
{var statearr_12603_12743 = state_12597__$1;(statearr_12603_12743[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12598 === (3)))
{var inst_12595 = (state_12597[(2)]);var state_12597__$1 = state_12597;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12597__$1,inst_12595);
} else
{if((state_val_12598 === (2)))
{var state_12597__$1 = state_12597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12597__$1,(4),jobs);
} else
{if((state_val_12598 === (1)))
{var state_12597__$1 = state_12597;var statearr_12604_12744 = state_12597__$1;(statearr_12604_12744[(2)] = null);
(statearr_12604_12744[(1)] = (2));
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
});})(__12726,c__6439__auto___12738,G__12557_12727,n__4469__auto___12725,jobs,results,process,async))
;return ((function (__12726,switch__6424__auto__,c__6439__auto___12738,G__12557_12727,n__4469__auto___12725,jobs,results,process,async){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12608 = [null,null,null,null,null,null,null];(statearr_12608[(0)] = state_machine__6425__auto__);
(statearr_12608[(1)] = (1));
return statearr_12608;
});
var state_machine__6425__auto____1 = (function (state_12597){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12597);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12609){if((e12609 instanceof Object))
{var ex__6428__auto__ = e12609;var statearr_12610_12745 = state_12597;(statearr_12610_12745[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12597);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12609;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12746 = state_12597;
state_12597 = G__12746;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12597){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(__12726,switch__6424__auto__,c__6439__auto___12738,G__12557_12727,n__4469__auto___12725,jobs,results,process,async))
})();var state__6441__auto__ = (function (){var statearr_12611 = f__6440__auto__.call(null);(statearr_12611[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___12738);
return statearr_12611;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(__12726,c__6439__auto___12738,G__12557_12727,n__4469__auto___12725,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__12747 = (__12726 + (1));
__12726 = G__12747;
continue;
}
} else
{}
break;
}
var c__6439__auto___12748 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___12748,jobs,results,process,async){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___12748,jobs,results,process,async){
return (function (state_12633){var state_val_12634 = (state_12633[(1)]);if((state_val_12634 === (9)))
{var inst_12626 = (state_12633[(2)]);var state_12633__$1 = (function (){var statearr_12635 = state_12633;(statearr_12635[(7)] = inst_12626);
return statearr_12635;
})();var statearr_12636_12749 = state_12633__$1;(statearr_12636_12749[(2)] = null);
(statearr_12636_12749[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12634 === (8)))
{var inst_12619 = (state_12633[(8)]);var inst_12624 = (state_12633[(2)]);var state_12633__$1 = (function (){var statearr_12637 = state_12633;(statearr_12637[(9)] = inst_12624);
return statearr_12637;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12633__$1,(9),results,inst_12619);
} else
{if((state_val_12634 === (7)))
{var inst_12629 = (state_12633[(2)]);var state_12633__$1 = state_12633;var statearr_12638_12750 = state_12633__$1;(statearr_12638_12750[(2)] = inst_12629);
(statearr_12638_12750[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12634 === (6)))
{var inst_12614 = (state_12633[(10)]);var inst_12619 = (state_12633[(8)]);var inst_12619__$1 = cljs.core.async.chan.call(null,(1));var inst_12620 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12621 = [inst_12614,inst_12619__$1];var inst_12622 = (new cljs.core.PersistentVector(null,2,(5),inst_12620,inst_12621,null));var state_12633__$1 = (function (){var statearr_12639 = state_12633;(statearr_12639[(8)] = inst_12619__$1);
return statearr_12639;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12633__$1,(8),jobs,inst_12622);
} else
{if((state_val_12634 === (5)))
{var inst_12617 = cljs.core.async.close_BANG_.call(null,jobs);var state_12633__$1 = state_12633;var statearr_12640_12751 = state_12633__$1;(statearr_12640_12751[(2)] = inst_12617);
(statearr_12640_12751[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12634 === (4)))
{var inst_12614 = (state_12633[(10)]);var inst_12614__$1 = (state_12633[(2)]);var inst_12615 = (inst_12614__$1 == null);var state_12633__$1 = (function (){var statearr_12641 = state_12633;(statearr_12641[(10)] = inst_12614__$1);
return statearr_12641;
})();if(cljs.core.truth_(inst_12615))
{var statearr_12642_12752 = state_12633__$1;(statearr_12642_12752[(1)] = (5));
} else
{var statearr_12643_12753 = state_12633__$1;(statearr_12643_12753[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12634 === (3)))
{var inst_12631 = (state_12633[(2)]);var state_12633__$1 = state_12633;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12633__$1,inst_12631);
} else
{if((state_val_12634 === (2)))
{var state_12633__$1 = state_12633;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12633__$1,(4),from);
} else
{if((state_val_12634 === (1)))
{var state_12633__$1 = state_12633;var statearr_12644_12754 = state_12633__$1;(statearr_12644_12754[(2)] = null);
(statearr_12644_12754[(1)] = (2));
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
}
});})(c__6439__auto___12748,jobs,results,process,async))
;return ((function (switch__6424__auto__,c__6439__auto___12748,jobs,results,process,async){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12648 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12648[(0)] = state_machine__6425__auto__);
(statearr_12648[(1)] = (1));
return statearr_12648;
});
var state_machine__6425__auto____1 = (function (state_12633){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12633);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12649){if((e12649 instanceof Object))
{var ex__6428__auto__ = e12649;var statearr_12650_12755 = state_12633;(statearr_12650_12755[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12633);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12649;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12756 = state_12633;
state_12633 = G__12756;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12633){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___12748,jobs,results,process,async))
})();var state__6441__auto__ = (function (){var statearr_12651 = f__6440__auto__.call(null);(statearr_12651[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___12748);
return statearr_12651;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___12748,jobs,results,process,async))
);
var c__6439__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto__,jobs,results,process,async){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto__,jobs,results,process,async){
return (function (state_12689){var state_val_12690 = (state_12689[(1)]);if((state_val_12690 === (7)))
{var inst_12685 = (state_12689[(2)]);var state_12689__$1 = state_12689;var statearr_12691_12757 = state_12689__$1;(statearr_12691_12757[(2)] = inst_12685);
(statearr_12691_12757[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12690 === (20)))
{var state_12689__$1 = state_12689;var statearr_12692_12758 = state_12689__$1;(statearr_12692_12758[(2)] = null);
(statearr_12692_12758[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12690 === (1)))
{var state_12689__$1 = state_12689;var statearr_12693_12759 = state_12689__$1;(statearr_12693_12759[(2)] = null);
(statearr_12693_12759[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12690 === (4)))
{var inst_12654 = (state_12689[(7)]);var inst_12654__$1 = (state_12689[(2)]);var inst_12655 = (inst_12654__$1 == null);var state_12689__$1 = (function (){var statearr_12694 = state_12689;(statearr_12694[(7)] = inst_12654__$1);
return statearr_12694;
})();if(cljs.core.truth_(inst_12655))
{var statearr_12695_12760 = state_12689__$1;(statearr_12695_12760[(1)] = (5));
} else
{var statearr_12696_12761 = state_12689__$1;(statearr_12696_12761[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12690 === (15)))
{var inst_12667 = (state_12689[(8)]);var state_12689__$1 = state_12689;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12689__$1,(18),to,inst_12667);
} else
{if((state_val_12690 === (21)))
{var inst_12680 = (state_12689[(2)]);var state_12689__$1 = state_12689;var statearr_12697_12762 = state_12689__$1;(statearr_12697_12762[(2)] = inst_12680);
(statearr_12697_12762[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12690 === (13)))
{var inst_12682 = (state_12689[(2)]);var state_12689__$1 = (function (){var statearr_12698 = state_12689;(statearr_12698[(9)] = inst_12682);
return statearr_12698;
})();var statearr_12699_12763 = state_12689__$1;(statearr_12699_12763[(2)] = null);
(statearr_12699_12763[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12690 === (6)))
{var inst_12654 = (state_12689[(7)]);var state_12689__$1 = state_12689;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12689__$1,(11),inst_12654);
} else
{if((state_val_12690 === (17)))
{var inst_12675 = (state_12689[(2)]);var state_12689__$1 = state_12689;if(cljs.core.truth_(inst_12675))
{var statearr_12700_12764 = state_12689__$1;(statearr_12700_12764[(1)] = (19));
} else
{var statearr_12701_12765 = state_12689__$1;(statearr_12701_12765[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12690 === (3)))
{var inst_12687 = (state_12689[(2)]);var state_12689__$1 = state_12689;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12689__$1,inst_12687);
} else
{if((state_val_12690 === (12)))
{var inst_12664 = (state_12689[(10)]);var state_12689__$1 = state_12689;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12689__$1,(14),inst_12664);
} else
{if((state_val_12690 === (2)))
{var state_12689__$1 = state_12689;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12689__$1,(4),results);
} else
{if((state_val_12690 === (19)))
{var state_12689__$1 = state_12689;var statearr_12702_12766 = state_12689__$1;(statearr_12702_12766[(2)] = null);
(statearr_12702_12766[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12690 === (11)))
{var inst_12664 = (state_12689[(2)]);var state_12689__$1 = (function (){var statearr_12703 = state_12689;(statearr_12703[(10)] = inst_12664);
return statearr_12703;
})();var statearr_12704_12767 = state_12689__$1;(statearr_12704_12767[(2)] = null);
(statearr_12704_12767[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12690 === (9)))
{var state_12689__$1 = state_12689;var statearr_12705_12768 = state_12689__$1;(statearr_12705_12768[(2)] = null);
(statearr_12705_12768[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12690 === (5)))
{var state_12689__$1 = state_12689;if(cljs.core.truth_(close_QMARK_))
{var statearr_12706_12769 = state_12689__$1;(statearr_12706_12769[(1)] = (8));
} else
{var statearr_12707_12770 = state_12689__$1;(statearr_12707_12770[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12690 === (14)))
{var inst_12669 = (state_12689[(11)]);var inst_12667 = (state_12689[(8)]);var inst_12667__$1 = (state_12689[(2)]);var inst_12668 = (inst_12667__$1 == null);var inst_12669__$1 = cljs.core.not.call(null,inst_12668);var state_12689__$1 = (function (){var statearr_12708 = state_12689;(statearr_12708[(11)] = inst_12669__$1);
(statearr_12708[(8)] = inst_12667__$1);
return statearr_12708;
})();if(inst_12669__$1)
{var statearr_12709_12771 = state_12689__$1;(statearr_12709_12771[(1)] = (15));
} else
{var statearr_12710_12772 = state_12689__$1;(statearr_12710_12772[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12690 === (16)))
{var inst_12669 = (state_12689[(11)]);var state_12689__$1 = state_12689;var statearr_12711_12773 = state_12689__$1;(statearr_12711_12773[(2)] = inst_12669);
(statearr_12711_12773[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12690 === (10)))
{var inst_12661 = (state_12689[(2)]);var state_12689__$1 = state_12689;var statearr_12712_12774 = state_12689__$1;(statearr_12712_12774[(2)] = inst_12661);
(statearr_12712_12774[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12690 === (18)))
{var inst_12672 = (state_12689[(2)]);var state_12689__$1 = state_12689;var statearr_12713_12775 = state_12689__$1;(statearr_12713_12775[(2)] = inst_12672);
(statearr_12713_12775[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12690 === (8)))
{var inst_12658 = cljs.core.async.close_BANG_.call(null,to);var state_12689__$1 = state_12689;var statearr_12714_12776 = state_12689__$1;(statearr_12714_12776[(2)] = inst_12658);
(statearr_12714_12776[(1)] = (10));
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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto__,jobs,results,process,async))
;return ((function (switch__6424__auto__,c__6439__auto__,jobs,results,process,async){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12718 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12718[(0)] = state_machine__6425__auto__);
(statearr_12718[(1)] = (1));
return statearr_12718;
});
var state_machine__6425__auto____1 = (function (state_12689){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12689);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12719){if((e12719 instanceof Object))
{var ex__6428__auto__ = e12719;var statearr_12720_12777 = state_12689;(statearr_12720_12777[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12689);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12719;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12778 = state_12689;
state_12689 = G__12778;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12689){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto__,jobs,results,process,async))
})();var state__6441__auto__ = (function (){var statearr_12721 = f__6440__auto__.call(null);(statearr_12721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto__);
return statearr_12721;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto__,jobs,results,process,async))
);
return c__6439__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6439__auto___12879 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___12879,tc,fc){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___12879,tc,fc){
return (function (state_12854){var state_val_12855 = (state_12854[(1)]);if((state_val_12855 === (7)))
{var inst_12850 = (state_12854[(2)]);var state_12854__$1 = state_12854;var statearr_12856_12880 = state_12854__$1;(statearr_12856_12880[(2)] = inst_12850);
(statearr_12856_12880[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (1)))
{var state_12854__$1 = state_12854;var statearr_12857_12881 = state_12854__$1;(statearr_12857_12881[(2)] = null);
(statearr_12857_12881[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (4)))
{var inst_12831 = (state_12854[(7)]);var inst_12831__$1 = (state_12854[(2)]);var inst_12832 = (inst_12831__$1 == null);var state_12854__$1 = (function (){var statearr_12858 = state_12854;(statearr_12858[(7)] = inst_12831__$1);
return statearr_12858;
})();if(cljs.core.truth_(inst_12832))
{var statearr_12859_12882 = state_12854__$1;(statearr_12859_12882[(1)] = (5));
} else
{var statearr_12860_12883 = state_12854__$1;(statearr_12860_12883[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (13)))
{var state_12854__$1 = state_12854;var statearr_12861_12884 = state_12854__$1;(statearr_12861_12884[(2)] = null);
(statearr_12861_12884[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (6)))
{var inst_12831 = (state_12854[(7)]);var inst_12837 = p.call(null,inst_12831);var state_12854__$1 = state_12854;if(cljs.core.truth_(inst_12837))
{var statearr_12862_12885 = state_12854__$1;(statearr_12862_12885[(1)] = (9));
} else
{var statearr_12863_12886 = state_12854__$1;(statearr_12863_12886[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (3)))
{var inst_12852 = (state_12854[(2)]);var state_12854__$1 = state_12854;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12854__$1,inst_12852);
} else
{if((state_val_12855 === (12)))
{var state_12854__$1 = state_12854;var statearr_12864_12887 = state_12854__$1;(statearr_12864_12887[(2)] = null);
(statearr_12864_12887[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (2)))
{var state_12854__$1 = state_12854;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12854__$1,(4),ch);
} else
{if((state_val_12855 === (11)))
{var inst_12831 = (state_12854[(7)]);var inst_12841 = (state_12854[(2)]);var state_12854__$1 = state_12854;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12854__$1,(8),inst_12841,inst_12831);
} else
{if((state_val_12855 === (9)))
{var state_12854__$1 = state_12854;var statearr_12865_12888 = state_12854__$1;(statearr_12865_12888[(2)] = tc);
(statearr_12865_12888[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (5)))
{var inst_12834 = cljs.core.async.close_BANG_.call(null,tc);var inst_12835 = cljs.core.async.close_BANG_.call(null,fc);var state_12854__$1 = (function (){var statearr_12866 = state_12854;(statearr_12866[(8)] = inst_12834);
return statearr_12866;
})();var statearr_12867_12889 = state_12854__$1;(statearr_12867_12889[(2)] = inst_12835);
(statearr_12867_12889[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (14)))
{var inst_12848 = (state_12854[(2)]);var state_12854__$1 = state_12854;var statearr_12868_12890 = state_12854__$1;(statearr_12868_12890[(2)] = inst_12848);
(statearr_12868_12890[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (10)))
{var state_12854__$1 = state_12854;var statearr_12869_12891 = state_12854__$1;(statearr_12869_12891[(2)] = fc);
(statearr_12869_12891[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12855 === (8)))
{var inst_12843 = (state_12854[(2)]);var state_12854__$1 = state_12854;if(cljs.core.truth_(inst_12843))
{var statearr_12870_12892 = state_12854__$1;(statearr_12870_12892[(1)] = (12));
} else
{var statearr_12871_12893 = state_12854__$1;(statearr_12871_12893[(1)] = (13));
}
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
}
}
}
}
}
}
});})(c__6439__auto___12879,tc,fc))
;return ((function (switch__6424__auto__,c__6439__auto___12879,tc,fc){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12875 = [null,null,null,null,null,null,null,null,null];(statearr_12875[(0)] = state_machine__6425__auto__);
(statearr_12875[(1)] = (1));
return statearr_12875;
});
var state_machine__6425__auto____1 = (function (state_12854){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12854);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12876){if((e12876 instanceof Object))
{var ex__6428__auto__ = e12876;var statearr_12877_12894 = state_12854;(statearr_12877_12894[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12854);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12876;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12895 = state_12854;
state_12854 = G__12895;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12854){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12854);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___12879,tc,fc))
})();var state__6441__auto__ = (function (){var statearr_12878 = f__6440__auto__.call(null);(statearr_12878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___12879);
return statearr_12878;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___12879,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6439__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto__){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto__){
return (function (state_12942){var state_val_12943 = (state_12942[(1)]);if((state_val_12943 === (7)))
{var inst_12938 = (state_12942[(2)]);var state_12942__$1 = state_12942;var statearr_12944_12960 = state_12942__$1;(statearr_12944_12960[(2)] = inst_12938);
(statearr_12944_12960[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12943 === (6)))
{var inst_12928 = (state_12942[(7)]);var inst_12931 = (state_12942[(8)]);var inst_12935 = f.call(null,inst_12928,inst_12931);var inst_12928__$1 = inst_12935;var state_12942__$1 = (function (){var statearr_12945 = state_12942;(statearr_12945[(7)] = inst_12928__$1);
return statearr_12945;
})();var statearr_12946_12961 = state_12942__$1;(statearr_12946_12961[(2)] = null);
(statearr_12946_12961[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12943 === (5)))
{var inst_12928 = (state_12942[(7)]);var state_12942__$1 = state_12942;var statearr_12947_12962 = state_12942__$1;(statearr_12947_12962[(2)] = inst_12928);
(statearr_12947_12962[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12943 === (4)))
{var inst_12931 = (state_12942[(8)]);var inst_12931__$1 = (state_12942[(2)]);var inst_12932 = (inst_12931__$1 == null);var state_12942__$1 = (function (){var statearr_12948 = state_12942;(statearr_12948[(8)] = inst_12931__$1);
return statearr_12948;
})();if(cljs.core.truth_(inst_12932))
{var statearr_12949_12963 = state_12942__$1;(statearr_12949_12963[(1)] = (5));
} else
{var statearr_12950_12964 = state_12942__$1;(statearr_12950_12964[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12943 === (3)))
{var inst_12940 = (state_12942[(2)]);var state_12942__$1 = state_12942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12942__$1,inst_12940);
} else
{if((state_val_12943 === (2)))
{var state_12942__$1 = state_12942;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12942__$1,(4),ch);
} else
{if((state_val_12943 === (1)))
{var inst_12928 = init;var state_12942__$1 = (function (){var statearr_12951 = state_12942;(statearr_12951[(7)] = inst_12928);
return statearr_12951;
})();var statearr_12952_12965 = state_12942__$1;(statearr_12952_12965[(2)] = null);
(statearr_12952_12965[(1)] = (2));
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
});})(c__6439__auto__))
;return ((function (switch__6424__auto__,c__6439__auto__){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_12956 = [null,null,null,null,null,null,null,null,null];(statearr_12956[(0)] = state_machine__6425__auto__);
(statearr_12956[(1)] = (1));
return statearr_12956;
});
var state_machine__6425__auto____1 = (function (state_12942){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_12942);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e12957){if((e12957 instanceof Object))
{var ex__6428__auto__ = e12957;var statearr_12958_12966 = state_12942;(statearr_12958_12966[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12942);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12957;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12967 = state_12942;
state_12942 = G__12967;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_12942){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_12942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto__))
})();var state__6441__auto__ = (function (){var statearr_12959 = f__6440__auto__.call(null);(statearr_12959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto__);
return statearr_12959;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto__))
);
return c__6439__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6439__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto__){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto__){
return (function (state_13041){var state_val_13042 = (state_13041[(1)]);if((state_val_13042 === (7)))
{var inst_13023 = (state_13041[(2)]);var state_13041__$1 = state_13041;var statearr_13043_13066 = state_13041__$1;(statearr_13043_13066[(2)] = inst_13023);
(statearr_13043_13066[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13042 === (1)))
{var inst_13017 = cljs.core.seq.call(null,coll);var inst_13018 = inst_13017;var state_13041__$1 = (function (){var statearr_13044 = state_13041;(statearr_13044[(7)] = inst_13018);
return statearr_13044;
})();var statearr_13045_13067 = state_13041__$1;(statearr_13045_13067[(2)] = null);
(statearr_13045_13067[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13042 === (4)))
{var inst_13018 = (state_13041[(7)]);var inst_13021 = cljs.core.first.call(null,inst_13018);var state_13041__$1 = state_13041;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13041__$1,(7),ch,inst_13021);
} else
{if((state_val_13042 === (13)))
{var inst_13035 = (state_13041[(2)]);var state_13041__$1 = state_13041;var statearr_13046_13068 = state_13041__$1;(statearr_13046_13068[(2)] = inst_13035);
(statearr_13046_13068[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13042 === (6)))
{var inst_13026 = (state_13041[(2)]);var state_13041__$1 = state_13041;if(cljs.core.truth_(inst_13026))
{var statearr_13047_13069 = state_13041__$1;(statearr_13047_13069[(1)] = (8));
} else
{var statearr_13048_13070 = state_13041__$1;(statearr_13048_13070[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13042 === (3)))
{var inst_13039 = (state_13041[(2)]);var state_13041__$1 = state_13041;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13041__$1,inst_13039);
} else
{if((state_val_13042 === (12)))
{var state_13041__$1 = state_13041;var statearr_13049_13071 = state_13041__$1;(statearr_13049_13071[(2)] = null);
(statearr_13049_13071[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13042 === (2)))
{var inst_13018 = (state_13041[(7)]);var state_13041__$1 = state_13041;if(cljs.core.truth_(inst_13018))
{var statearr_13050_13072 = state_13041__$1;(statearr_13050_13072[(1)] = (4));
} else
{var statearr_13051_13073 = state_13041__$1;(statearr_13051_13073[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13042 === (11)))
{var inst_13032 = cljs.core.async.close_BANG_.call(null,ch);var state_13041__$1 = state_13041;var statearr_13052_13074 = state_13041__$1;(statearr_13052_13074[(2)] = inst_13032);
(statearr_13052_13074[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13042 === (9)))
{var state_13041__$1 = state_13041;if(cljs.core.truth_(close_QMARK_))
{var statearr_13053_13075 = state_13041__$1;(statearr_13053_13075[(1)] = (11));
} else
{var statearr_13054_13076 = state_13041__$1;(statearr_13054_13076[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13042 === (5)))
{var inst_13018 = (state_13041[(7)]);var state_13041__$1 = state_13041;var statearr_13055_13077 = state_13041__$1;(statearr_13055_13077[(2)] = inst_13018);
(statearr_13055_13077[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13042 === (10)))
{var inst_13037 = (state_13041[(2)]);var state_13041__$1 = state_13041;var statearr_13056_13078 = state_13041__$1;(statearr_13056_13078[(2)] = inst_13037);
(statearr_13056_13078[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13042 === (8)))
{var inst_13018 = (state_13041[(7)]);var inst_13028 = cljs.core.next.call(null,inst_13018);var inst_13018__$1 = inst_13028;var state_13041__$1 = (function (){var statearr_13057 = state_13041;(statearr_13057[(7)] = inst_13018__$1);
return statearr_13057;
})();var statearr_13058_13079 = state_13041__$1;(statearr_13058_13079[(2)] = null);
(statearr_13058_13079[(1)] = (2));
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
}
}
}
}
}
});})(c__6439__auto__))
;return ((function (switch__6424__auto__,c__6439__auto__){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_13062 = [null,null,null,null,null,null,null,null];(statearr_13062[(0)] = state_machine__6425__auto__);
(statearr_13062[(1)] = (1));
return statearr_13062;
});
var state_machine__6425__auto____1 = (function (state_13041){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_13041);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e13063){if((e13063 instanceof Object))
{var ex__6428__auto__ = e13063;var statearr_13064_13080 = state_13041;(statearr_13064_13080[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13041);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13063;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13081 = state_13041;
state_13041 = G__13081;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_13041){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_13041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto__))
})();var state__6441__auto__ = (function (){var statearr_13065 = f__6440__auto__.call(null);(statearr_13065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto__);
return statearr_13065;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto__))
);
return c__6439__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj13083 = {};return obj13083;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3587__auto__ = _;if(and__3587__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3587__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4236__auto__ = (((_ == null))?null:_);return (function (){var or__3599__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj13085 = {};return obj13085;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3587__auto__ = m;if(and__3587__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3587__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3599__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3587__auto__ = m;if(and__3587__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3587__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3599__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3587__auto__ = m;if(and__3587__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3587__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3599__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13307 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13307 = (function (cs,ch,mult,meta13308){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13308 = meta13308;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13307.cljs$lang$type = true;
cljs.core.async.t13307.cljs$lang$ctorStr = "cljs.core.async/t13307";
cljs.core.async.t13307.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t13307");
});})(cs))
;
cljs.core.async.t13307.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13307.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13307.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13307.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13307.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13307.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13307.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13309){var self__ = this;
var _13309__$1 = this;return self__.meta13308;
});})(cs))
;
cljs.core.async.t13307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13309,meta13308__$1){var self__ = this;
var _13309__$1 = this;return (new cljs.core.async.t13307(self__.cs,self__.ch,self__.mult,meta13308__$1));
});})(cs))
;
cljs.core.async.__GT_t13307 = ((function (cs){
return (function __GT_t13307(cs__$1,ch__$1,mult__$1,meta13308){return (new cljs.core.async.t13307(cs__$1,ch__$1,mult__$1,meta13308));
});})(cs))
;
}
return (new cljs.core.async.t13307(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6439__auto___13528 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___13528,cs,m,dchan,dctr,done){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___13528,cs,m,dchan,dctr,done){
return (function (state_13440){var state_val_13441 = (state_13440[(1)]);if((state_val_13441 === (7)))
{var inst_13436 = (state_13440[(2)]);var state_13440__$1 = state_13440;var statearr_13442_13529 = state_13440__$1;(statearr_13442_13529[(2)] = inst_13436);
(statearr_13442_13529[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (20)))
{var inst_13341 = (state_13440[(7)]);var inst_13351 = cljs.core.first.call(null,inst_13341);var inst_13352 = cljs.core.nth.call(null,inst_13351,(0),null);var inst_13353 = cljs.core.nth.call(null,inst_13351,(1),null);var state_13440__$1 = (function (){var statearr_13443 = state_13440;(statearr_13443[(8)] = inst_13352);
return statearr_13443;
})();if(cljs.core.truth_(inst_13353))
{var statearr_13444_13530 = state_13440__$1;(statearr_13444_13530[(1)] = (22));
} else
{var statearr_13445_13531 = state_13440__$1;(statearr_13445_13531[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (27)))
{var inst_13312 = (state_13440[(9)]);var inst_13383 = (state_13440[(10)]);var inst_13388 = (state_13440[(11)]);var inst_13381 = (state_13440[(12)]);var inst_13388__$1 = cljs.core._nth.call(null,inst_13381,inst_13383);var inst_13389 = cljs.core.async.put_BANG_.call(null,inst_13388__$1,inst_13312,done);var state_13440__$1 = (function (){var statearr_13446 = state_13440;(statearr_13446[(11)] = inst_13388__$1);
return statearr_13446;
})();if(cljs.core.truth_(inst_13389))
{var statearr_13447_13532 = state_13440__$1;(statearr_13447_13532[(1)] = (30));
} else
{var statearr_13448_13533 = state_13440__$1;(statearr_13448_13533[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (1)))
{var state_13440__$1 = state_13440;var statearr_13449_13534 = state_13440__$1;(statearr_13449_13534[(2)] = null);
(statearr_13449_13534[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (24)))
{var inst_13341 = (state_13440[(7)]);var inst_13358 = (state_13440[(2)]);var inst_13359 = cljs.core.next.call(null,inst_13341);var inst_13321 = inst_13359;var inst_13322 = null;var inst_13323 = (0);var inst_13324 = (0);var state_13440__$1 = (function (){var statearr_13450 = state_13440;(statearr_13450[(13)] = inst_13321);
(statearr_13450[(14)] = inst_13358);
(statearr_13450[(15)] = inst_13322);
(statearr_13450[(16)] = inst_13324);
(statearr_13450[(17)] = inst_13323);
return statearr_13450;
})();var statearr_13451_13535 = state_13440__$1;(statearr_13451_13535[(2)] = null);
(statearr_13451_13535[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (39)))
{var state_13440__$1 = state_13440;var statearr_13455_13536 = state_13440__$1;(statearr_13455_13536[(2)] = null);
(statearr_13455_13536[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (4)))
{var inst_13312 = (state_13440[(9)]);var inst_13312__$1 = (state_13440[(2)]);var inst_13313 = (inst_13312__$1 == null);var state_13440__$1 = (function (){var statearr_13456 = state_13440;(statearr_13456[(9)] = inst_13312__$1);
return statearr_13456;
})();if(cljs.core.truth_(inst_13313))
{var statearr_13457_13537 = state_13440__$1;(statearr_13457_13537[(1)] = (5));
} else
{var statearr_13458_13538 = state_13440__$1;(statearr_13458_13538[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (15)))
{var inst_13321 = (state_13440[(13)]);var inst_13322 = (state_13440[(15)]);var inst_13324 = (state_13440[(16)]);var inst_13323 = (state_13440[(17)]);var inst_13337 = (state_13440[(2)]);var inst_13338 = (inst_13324 + (1));var tmp13452 = inst_13321;var tmp13453 = inst_13322;var tmp13454 = inst_13323;var inst_13321__$1 = tmp13452;var inst_13322__$1 = tmp13453;var inst_13323__$1 = tmp13454;var inst_13324__$1 = inst_13338;var state_13440__$1 = (function (){var statearr_13459 = state_13440;(statearr_13459[(18)] = inst_13337);
(statearr_13459[(13)] = inst_13321__$1);
(statearr_13459[(15)] = inst_13322__$1);
(statearr_13459[(16)] = inst_13324__$1);
(statearr_13459[(17)] = inst_13323__$1);
return statearr_13459;
})();var statearr_13460_13539 = state_13440__$1;(statearr_13460_13539[(2)] = null);
(statearr_13460_13539[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (21)))
{var inst_13362 = (state_13440[(2)]);var state_13440__$1 = state_13440;var statearr_13464_13540 = state_13440__$1;(statearr_13464_13540[(2)] = inst_13362);
(statearr_13464_13540[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (31)))
{var inst_13388 = (state_13440[(11)]);var inst_13392 = done.call(null,null);var inst_13393 = cljs.core.async.untap_STAR_.call(null,m,inst_13388);var state_13440__$1 = (function (){var statearr_13465 = state_13440;(statearr_13465[(19)] = inst_13392);
return statearr_13465;
})();var statearr_13466_13541 = state_13440__$1;(statearr_13466_13541[(2)] = inst_13393);
(statearr_13466_13541[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (32)))
{var inst_13382 = (state_13440[(20)]);var inst_13383 = (state_13440[(10)]);var inst_13381 = (state_13440[(12)]);var inst_13380 = (state_13440[(21)]);var inst_13395 = (state_13440[(2)]);var inst_13396 = (inst_13383 + (1));var tmp13461 = inst_13382;var tmp13462 = inst_13381;var tmp13463 = inst_13380;var inst_13380__$1 = tmp13463;var inst_13381__$1 = tmp13462;var inst_13382__$1 = tmp13461;var inst_13383__$1 = inst_13396;var state_13440__$1 = (function (){var statearr_13467 = state_13440;(statearr_13467[(20)] = inst_13382__$1);
(statearr_13467[(10)] = inst_13383__$1);
(statearr_13467[(22)] = inst_13395);
(statearr_13467[(12)] = inst_13381__$1);
(statearr_13467[(21)] = inst_13380__$1);
return statearr_13467;
})();var statearr_13468_13542 = state_13440__$1;(statearr_13468_13542[(2)] = null);
(statearr_13468_13542[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (40)))
{var inst_13408 = (state_13440[(23)]);var inst_13412 = done.call(null,null);var inst_13413 = cljs.core.async.untap_STAR_.call(null,m,inst_13408);var state_13440__$1 = (function (){var statearr_13469 = state_13440;(statearr_13469[(24)] = inst_13412);
return statearr_13469;
})();var statearr_13470_13543 = state_13440__$1;(statearr_13470_13543[(2)] = inst_13413);
(statearr_13470_13543[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (33)))
{var inst_13399 = (state_13440[(25)]);var inst_13401 = cljs.core.chunked_seq_QMARK_.call(null,inst_13399);var state_13440__$1 = state_13440;if(inst_13401)
{var statearr_13471_13544 = state_13440__$1;(statearr_13471_13544[(1)] = (36));
} else
{var statearr_13472_13545 = state_13440__$1;(statearr_13472_13545[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (13)))
{var inst_13331 = (state_13440[(26)]);var inst_13334 = cljs.core.async.close_BANG_.call(null,inst_13331);var state_13440__$1 = state_13440;var statearr_13473_13546 = state_13440__$1;(statearr_13473_13546[(2)] = inst_13334);
(statearr_13473_13546[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (22)))
{var inst_13352 = (state_13440[(8)]);var inst_13355 = cljs.core.async.close_BANG_.call(null,inst_13352);var state_13440__$1 = state_13440;var statearr_13474_13547 = state_13440__$1;(statearr_13474_13547[(2)] = inst_13355);
(statearr_13474_13547[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (36)))
{var inst_13399 = (state_13440[(25)]);var inst_13403 = cljs.core.chunk_first.call(null,inst_13399);var inst_13404 = cljs.core.chunk_rest.call(null,inst_13399);var inst_13405 = cljs.core.count.call(null,inst_13403);var inst_13380 = inst_13404;var inst_13381 = inst_13403;var inst_13382 = inst_13405;var inst_13383 = (0);var state_13440__$1 = (function (){var statearr_13475 = state_13440;(statearr_13475[(20)] = inst_13382);
(statearr_13475[(10)] = inst_13383);
(statearr_13475[(12)] = inst_13381);
(statearr_13475[(21)] = inst_13380);
return statearr_13475;
})();var statearr_13476_13548 = state_13440__$1;(statearr_13476_13548[(2)] = null);
(statearr_13476_13548[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (41)))
{var inst_13399 = (state_13440[(25)]);var inst_13415 = (state_13440[(2)]);var inst_13416 = cljs.core.next.call(null,inst_13399);var inst_13380 = inst_13416;var inst_13381 = null;var inst_13382 = (0);var inst_13383 = (0);var state_13440__$1 = (function (){var statearr_13477 = state_13440;(statearr_13477[(20)] = inst_13382);
(statearr_13477[(10)] = inst_13383);
(statearr_13477[(27)] = inst_13415);
(statearr_13477[(12)] = inst_13381);
(statearr_13477[(21)] = inst_13380);
return statearr_13477;
})();var statearr_13478_13549 = state_13440__$1;(statearr_13478_13549[(2)] = null);
(statearr_13478_13549[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (43)))
{var state_13440__$1 = state_13440;var statearr_13479_13550 = state_13440__$1;(statearr_13479_13550[(2)] = null);
(statearr_13479_13550[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (29)))
{var inst_13424 = (state_13440[(2)]);var state_13440__$1 = state_13440;var statearr_13480_13551 = state_13440__$1;(statearr_13480_13551[(2)] = inst_13424);
(statearr_13480_13551[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (44)))
{var inst_13433 = (state_13440[(2)]);var state_13440__$1 = (function (){var statearr_13481 = state_13440;(statearr_13481[(28)] = inst_13433);
return statearr_13481;
})();var statearr_13482_13552 = state_13440__$1;(statearr_13482_13552[(2)] = null);
(statearr_13482_13552[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (6)))
{var inst_13372 = (state_13440[(29)]);var inst_13371 = cljs.core.deref.call(null,cs);var inst_13372__$1 = cljs.core.keys.call(null,inst_13371);var inst_13373 = cljs.core.count.call(null,inst_13372__$1);var inst_13374 = cljs.core.reset_BANG_.call(null,dctr,inst_13373);var inst_13379 = cljs.core.seq.call(null,inst_13372__$1);var inst_13380 = inst_13379;var inst_13381 = null;var inst_13382 = (0);var inst_13383 = (0);var state_13440__$1 = (function (){var statearr_13483 = state_13440;(statearr_13483[(20)] = inst_13382);
(statearr_13483[(10)] = inst_13383);
(statearr_13483[(30)] = inst_13374);
(statearr_13483[(12)] = inst_13381);
(statearr_13483[(29)] = inst_13372__$1);
(statearr_13483[(21)] = inst_13380);
return statearr_13483;
})();var statearr_13484_13553 = state_13440__$1;(statearr_13484_13553[(2)] = null);
(statearr_13484_13553[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (28)))
{var inst_13399 = (state_13440[(25)]);var inst_13380 = (state_13440[(21)]);var inst_13399__$1 = cljs.core.seq.call(null,inst_13380);var state_13440__$1 = (function (){var statearr_13485 = state_13440;(statearr_13485[(25)] = inst_13399__$1);
return statearr_13485;
})();if(inst_13399__$1)
{var statearr_13486_13554 = state_13440__$1;(statearr_13486_13554[(1)] = (33));
} else
{var statearr_13487_13555 = state_13440__$1;(statearr_13487_13555[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (25)))
{var inst_13382 = (state_13440[(20)]);var inst_13383 = (state_13440[(10)]);var inst_13385 = (inst_13383 < inst_13382);var inst_13386 = inst_13385;var state_13440__$1 = state_13440;if(cljs.core.truth_(inst_13386))
{var statearr_13488_13556 = state_13440__$1;(statearr_13488_13556[(1)] = (27));
} else
{var statearr_13489_13557 = state_13440__$1;(statearr_13489_13557[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (34)))
{var state_13440__$1 = state_13440;var statearr_13490_13558 = state_13440__$1;(statearr_13490_13558[(2)] = null);
(statearr_13490_13558[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (17)))
{var state_13440__$1 = state_13440;var statearr_13491_13559 = state_13440__$1;(statearr_13491_13559[(2)] = null);
(statearr_13491_13559[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (3)))
{var inst_13438 = (state_13440[(2)]);var state_13440__$1 = state_13440;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13440__$1,inst_13438);
} else
{if((state_val_13441 === (12)))
{var inst_13367 = (state_13440[(2)]);var state_13440__$1 = state_13440;var statearr_13492_13560 = state_13440__$1;(statearr_13492_13560[(2)] = inst_13367);
(statearr_13492_13560[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (2)))
{var state_13440__$1 = state_13440;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13440__$1,(4),ch);
} else
{if((state_val_13441 === (23)))
{var state_13440__$1 = state_13440;var statearr_13493_13561 = state_13440__$1;(statearr_13493_13561[(2)] = null);
(statearr_13493_13561[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (35)))
{var inst_13422 = (state_13440[(2)]);var state_13440__$1 = state_13440;var statearr_13494_13562 = state_13440__$1;(statearr_13494_13562[(2)] = inst_13422);
(statearr_13494_13562[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (19)))
{var inst_13341 = (state_13440[(7)]);var inst_13345 = cljs.core.chunk_first.call(null,inst_13341);var inst_13346 = cljs.core.chunk_rest.call(null,inst_13341);var inst_13347 = cljs.core.count.call(null,inst_13345);var inst_13321 = inst_13346;var inst_13322 = inst_13345;var inst_13323 = inst_13347;var inst_13324 = (0);var state_13440__$1 = (function (){var statearr_13495 = state_13440;(statearr_13495[(13)] = inst_13321);
(statearr_13495[(15)] = inst_13322);
(statearr_13495[(16)] = inst_13324);
(statearr_13495[(17)] = inst_13323);
return statearr_13495;
})();var statearr_13496_13563 = state_13440__$1;(statearr_13496_13563[(2)] = null);
(statearr_13496_13563[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (11)))
{var inst_13341 = (state_13440[(7)]);var inst_13321 = (state_13440[(13)]);var inst_13341__$1 = cljs.core.seq.call(null,inst_13321);var state_13440__$1 = (function (){var statearr_13497 = state_13440;(statearr_13497[(7)] = inst_13341__$1);
return statearr_13497;
})();if(inst_13341__$1)
{var statearr_13498_13564 = state_13440__$1;(statearr_13498_13564[(1)] = (16));
} else
{var statearr_13499_13565 = state_13440__$1;(statearr_13499_13565[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (9)))
{var inst_13369 = (state_13440[(2)]);var state_13440__$1 = state_13440;var statearr_13500_13566 = state_13440__$1;(statearr_13500_13566[(2)] = inst_13369);
(statearr_13500_13566[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (5)))
{var inst_13319 = cljs.core.deref.call(null,cs);var inst_13320 = cljs.core.seq.call(null,inst_13319);var inst_13321 = inst_13320;var inst_13322 = null;var inst_13323 = (0);var inst_13324 = (0);var state_13440__$1 = (function (){var statearr_13501 = state_13440;(statearr_13501[(13)] = inst_13321);
(statearr_13501[(15)] = inst_13322);
(statearr_13501[(16)] = inst_13324);
(statearr_13501[(17)] = inst_13323);
return statearr_13501;
})();var statearr_13502_13567 = state_13440__$1;(statearr_13502_13567[(2)] = null);
(statearr_13502_13567[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (14)))
{var state_13440__$1 = state_13440;var statearr_13503_13568 = state_13440__$1;(statearr_13503_13568[(2)] = null);
(statearr_13503_13568[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (45)))
{var inst_13430 = (state_13440[(2)]);var state_13440__$1 = state_13440;var statearr_13504_13569 = state_13440__$1;(statearr_13504_13569[(2)] = inst_13430);
(statearr_13504_13569[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (26)))
{var inst_13372 = (state_13440[(29)]);var inst_13426 = (state_13440[(2)]);var inst_13427 = cljs.core.seq.call(null,inst_13372);var state_13440__$1 = (function (){var statearr_13505 = state_13440;(statearr_13505[(31)] = inst_13426);
return statearr_13505;
})();if(inst_13427)
{var statearr_13506_13570 = state_13440__$1;(statearr_13506_13570[(1)] = (42));
} else
{var statearr_13507_13571 = state_13440__$1;(statearr_13507_13571[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (16)))
{var inst_13341 = (state_13440[(7)]);var inst_13343 = cljs.core.chunked_seq_QMARK_.call(null,inst_13341);var state_13440__$1 = state_13440;if(inst_13343)
{var statearr_13508_13572 = state_13440__$1;(statearr_13508_13572[(1)] = (19));
} else
{var statearr_13509_13573 = state_13440__$1;(statearr_13509_13573[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (38)))
{var inst_13419 = (state_13440[(2)]);var state_13440__$1 = state_13440;var statearr_13510_13574 = state_13440__$1;(statearr_13510_13574[(2)] = inst_13419);
(statearr_13510_13574[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (30)))
{var state_13440__$1 = state_13440;var statearr_13511_13575 = state_13440__$1;(statearr_13511_13575[(2)] = null);
(statearr_13511_13575[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (10)))
{var inst_13322 = (state_13440[(15)]);var inst_13324 = (state_13440[(16)]);var inst_13330 = cljs.core._nth.call(null,inst_13322,inst_13324);var inst_13331 = cljs.core.nth.call(null,inst_13330,(0),null);var inst_13332 = cljs.core.nth.call(null,inst_13330,(1),null);var state_13440__$1 = (function (){var statearr_13512 = state_13440;(statearr_13512[(26)] = inst_13331);
return statearr_13512;
})();if(cljs.core.truth_(inst_13332))
{var statearr_13513_13576 = state_13440__$1;(statearr_13513_13576[(1)] = (13));
} else
{var statearr_13514_13577 = state_13440__$1;(statearr_13514_13577[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (18)))
{var inst_13365 = (state_13440[(2)]);var state_13440__$1 = state_13440;var statearr_13515_13578 = state_13440__$1;(statearr_13515_13578[(2)] = inst_13365);
(statearr_13515_13578[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (42)))
{var state_13440__$1 = state_13440;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13440__$1,(45),dchan);
} else
{if((state_val_13441 === (37)))
{var inst_13312 = (state_13440[(9)]);var inst_13399 = (state_13440[(25)]);var inst_13408 = (state_13440[(23)]);var inst_13408__$1 = cljs.core.first.call(null,inst_13399);var inst_13409 = cljs.core.async.put_BANG_.call(null,inst_13408__$1,inst_13312,done);var state_13440__$1 = (function (){var statearr_13516 = state_13440;(statearr_13516[(23)] = inst_13408__$1);
return statearr_13516;
})();if(cljs.core.truth_(inst_13409))
{var statearr_13517_13579 = state_13440__$1;(statearr_13517_13579[(1)] = (39));
} else
{var statearr_13518_13580 = state_13440__$1;(statearr_13518_13580[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13441 === (8)))
{var inst_13324 = (state_13440[(16)]);var inst_13323 = (state_13440[(17)]);var inst_13326 = (inst_13324 < inst_13323);var inst_13327 = inst_13326;var state_13440__$1 = state_13440;if(cljs.core.truth_(inst_13327))
{var statearr_13519_13581 = state_13440__$1;(statearr_13519_13581[(1)] = (10));
} else
{var statearr_13520_13582 = state_13440__$1;(statearr_13520_13582[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___13528,cs,m,dchan,dctr,done))
;return ((function (switch__6424__auto__,c__6439__auto___13528,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_13524 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13524[(0)] = state_machine__6425__auto__);
(statearr_13524[(1)] = (1));
return statearr_13524;
});
var state_machine__6425__auto____1 = (function (state_13440){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_13440);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e13525){if((e13525 instanceof Object))
{var ex__6428__auto__ = e13525;var statearr_13526_13583 = state_13440;(statearr_13526_13583[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13440);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13525;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13584 = state_13440;
state_13440 = G__13584;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_13440){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_13440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___13528,cs,m,dchan,dctr,done))
})();var state__6441__auto__ = (function (){var statearr_13527 = f__6440__auto__.call(null);(statearr_13527[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___13528);
return statearr_13527;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___13528,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13586 = {};return obj13586;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3587__auto__ = m;if(and__3587__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3587__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3599__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3587__auto__ = m;if(and__3587__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3587__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3599__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3587__auto__ = m;if(and__3587__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3587__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3599__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3587__auto__ = m;if(and__3587__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3587__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3599__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3587__auto__ = m;if(and__3587__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3587__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4236__auto__ = (((m == null))?null:m);return (function (){var or__3599__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13587){var map__13592 = p__13587;var map__13592__$1 = ((cljs.core.seq_QMARK_.call(null,map__13592))?cljs.core.apply.call(null,cljs.core.hash_map,map__13592):map__13592);var opts = map__13592__$1;var statearr_13593_13596 = state;(statearr_13593_13596[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13592,map__13592__$1,opts){
return (function (val){var statearr_13594_13597 = state;(statearr_13594_13597[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13592,map__13592__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_13595_13598 = state;(statearr_13595_13598[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13587 = null;if (arguments.length > 3) {
  p__13587 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13587);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13599){
var state = cljs.core.first(arglist__13599);
arglist__13599 = cljs.core.next(arglist__13599);
var cont_block = cljs.core.first(arglist__13599);
arglist__13599 = cljs.core.next(arglist__13599);
var ports = cljs.core.first(arglist__13599);
var p__13587 = cljs.core.rest(arglist__13599);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13587);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13719 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13719 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13720){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13720 = meta13720;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13719.cljs$lang$type = true;
cljs.core.async.t13719.cljs$lang$ctorStr = "cljs.core.async/t13719";
cljs.core.async.t13719.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t13719");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13719.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13719.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13719.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13719.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13719.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13719.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13719.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13719.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13719.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13721){var self__ = this;
var _13721__$1 = this;return self__.meta13720;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13719.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13721,meta13720__$1){var self__ = this;
var _13721__$1 = this;return (new cljs.core.async.t13719(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13720__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13719 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13719(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13720){return (new cljs.core.async.t13719(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13720));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13719(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6439__auto___13838 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___13838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___13838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13791){var state_val_13792 = (state_13791[(1)]);if((state_val_13792 === (7)))
{var inst_13735 = (state_13791[(7)]);var inst_13740 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13735);var state_13791__$1 = state_13791;var statearr_13793_13839 = state_13791__$1;(statearr_13793_13839[(2)] = inst_13740);
(statearr_13793_13839[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (20)))
{var inst_13750 = (state_13791[(8)]);var state_13791__$1 = state_13791;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13791__$1,(23),out,inst_13750);
} else
{if((state_val_13792 === (1)))
{var inst_13725 = (state_13791[(9)]);var inst_13725__$1 = calc_state.call(null);var inst_13726 = cljs.core.seq_QMARK_.call(null,inst_13725__$1);var state_13791__$1 = (function (){var statearr_13794 = state_13791;(statearr_13794[(9)] = inst_13725__$1);
return statearr_13794;
})();if(inst_13726)
{var statearr_13795_13840 = state_13791__$1;(statearr_13795_13840[(1)] = (2));
} else
{var statearr_13796_13841 = state_13791__$1;(statearr_13796_13841[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (24)))
{var inst_13743 = (state_13791[(10)]);var inst_13735 = inst_13743;var state_13791__$1 = (function (){var statearr_13797 = state_13791;(statearr_13797[(7)] = inst_13735);
return statearr_13797;
})();var statearr_13798_13842 = state_13791__$1;(statearr_13798_13842[(2)] = null);
(statearr_13798_13842[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (4)))
{var inst_13725 = (state_13791[(9)]);var inst_13731 = (state_13791[(2)]);var inst_13732 = cljs.core.get.call(null,inst_13731,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13733 = cljs.core.get.call(null,inst_13731,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13734 = cljs.core.get.call(null,inst_13731,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13735 = inst_13725;var state_13791__$1 = (function (){var statearr_13799 = state_13791;(statearr_13799[(11)] = inst_13734);
(statearr_13799[(12)] = inst_13733);
(statearr_13799[(13)] = inst_13732);
(statearr_13799[(7)] = inst_13735);
return statearr_13799;
})();var statearr_13800_13843 = state_13791__$1;(statearr_13800_13843[(2)] = null);
(statearr_13800_13843[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (15)))
{var state_13791__$1 = state_13791;var statearr_13801_13844 = state_13791__$1;(statearr_13801_13844[(2)] = null);
(statearr_13801_13844[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (21)))
{var inst_13743 = (state_13791[(10)]);var inst_13735 = inst_13743;var state_13791__$1 = (function (){var statearr_13802 = state_13791;(statearr_13802[(7)] = inst_13735);
return statearr_13802;
})();var statearr_13803_13845 = state_13791__$1;(statearr_13803_13845[(2)] = null);
(statearr_13803_13845[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (13)))
{var inst_13787 = (state_13791[(2)]);var state_13791__$1 = state_13791;var statearr_13804_13846 = state_13791__$1;(statearr_13804_13846[(2)] = inst_13787);
(statearr_13804_13846[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (22)))
{var inst_13785 = (state_13791[(2)]);var state_13791__$1 = state_13791;var statearr_13805_13847 = state_13791__$1;(statearr_13805_13847[(2)] = inst_13785);
(statearr_13805_13847[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (6)))
{var inst_13789 = (state_13791[(2)]);var state_13791__$1 = state_13791;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13791__$1,inst_13789);
} else
{if((state_val_13792 === (25)))
{var state_13791__$1 = state_13791;var statearr_13806_13848 = state_13791__$1;(statearr_13806_13848[(2)] = null);
(statearr_13806_13848[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (17)))
{var inst_13765 = (state_13791[(14)]);var state_13791__$1 = state_13791;var statearr_13807_13849 = state_13791__$1;(statearr_13807_13849[(2)] = inst_13765);
(statearr_13807_13849[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (3)))
{var inst_13725 = (state_13791[(9)]);var state_13791__$1 = state_13791;var statearr_13808_13850 = state_13791__$1;(statearr_13808_13850[(2)] = inst_13725);
(statearr_13808_13850[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (12)))
{var inst_13765 = (state_13791[(14)]);var inst_13746 = (state_13791[(15)]);var inst_13751 = (state_13791[(16)]);var inst_13765__$1 = inst_13746.call(null,inst_13751);var state_13791__$1 = (function (){var statearr_13809 = state_13791;(statearr_13809[(14)] = inst_13765__$1);
return statearr_13809;
})();if(cljs.core.truth_(inst_13765__$1))
{var statearr_13810_13851 = state_13791__$1;(statearr_13810_13851[(1)] = (17));
} else
{var statearr_13811_13852 = state_13791__$1;(statearr_13811_13852[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (2)))
{var inst_13725 = (state_13791[(9)]);var inst_13728 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13725);var state_13791__$1 = state_13791;var statearr_13812_13853 = state_13791__$1;(statearr_13812_13853[(2)] = inst_13728);
(statearr_13812_13853[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (23)))
{var inst_13776 = (state_13791[(2)]);var state_13791__$1 = state_13791;if(cljs.core.truth_(inst_13776))
{var statearr_13813_13854 = state_13791__$1;(statearr_13813_13854[(1)] = (24));
} else
{var statearr_13814_13855 = state_13791__$1;(statearr_13814_13855[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (19)))
{var inst_13773 = (state_13791[(2)]);var state_13791__$1 = state_13791;if(cljs.core.truth_(inst_13773))
{var statearr_13815_13856 = state_13791__$1;(statearr_13815_13856[(1)] = (20));
} else
{var statearr_13816_13857 = state_13791__$1;(statearr_13816_13857[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (11)))
{var inst_13750 = (state_13791[(8)]);var inst_13756 = (inst_13750 == null);var state_13791__$1 = state_13791;if(cljs.core.truth_(inst_13756))
{var statearr_13817_13858 = state_13791__$1;(statearr_13817_13858[(1)] = (14));
} else
{var statearr_13818_13859 = state_13791__$1;(statearr_13818_13859[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (9)))
{var inst_13743 = (state_13791[(10)]);var inst_13743__$1 = (state_13791[(2)]);var inst_13744 = cljs.core.get.call(null,inst_13743__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13745 = cljs.core.get.call(null,inst_13743__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13746 = cljs.core.get.call(null,inst_13743__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_13791__$1 = (function (){var statearr_13819 = state_13791;(statearr_13819[(17)] = inst_13745);
(statearr_13819[(15)] = inst_13746);
(statearr_13819[(10)] = inst_13743__$1);
return statearr_13819;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_13791__$1,(10),inst_13744);
} else
{if((state_val_13792 === (5)))
{var inst_13735 = (state_13791[(7)]);var inst_13738 = cljs.core.seq_QMARK_.call(null,inst_13735);var state_13791__$1 = state_13791;if(inst_13738)
{var statearr_13820_13860 = state_13791__$1;(statearr_13820_13860[(1)] = (7));
} else
{var statearr_13821_13861 = state_13791__$1;(statearr_13821_13861[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (14)))
{var inst_13751 = (state_13791[(16)]);var inst_13758 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13751);var state_13791__$1 = state_13791;var statearr_13822_13862 = state_13791__$1;(statearr_13822_13862[(2)] = inst_13758);
(statearr_13822_13862[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (26)))
{var inst_13781 = (state_13791[(2)]);var state_13791__$1 = state_13791;var statearr_13823_13863 = state_13791__$1;(statearr_13823_13863[(2)] = inst_13781);
(statearr_13823_13863[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (16)))
{var inst_13761 = (state_13791[(2)]);var inst_13762 = calc_state.call(null);var inst_13735 = inst_13762;var state_13791__$1 = (function (){var statearr_13824 = state_13791;(statearr_13824[(18)] = inst_13761);
(statearr_13824[(7)] = inst_13735);
return statearr_13824;
})();var statearr_13825_13864 = state_13791__$1;(statearr_13825_13864[(2)] = null);
(statearr_13825_13864[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (10)))
{var inst_13751 = (state_13791[(16)]);var inst_13750 = (state_13791[(8)]);var inst_13749 = (state_13791[(2)]);var inst_13750__$1 = cljs.core.nth.call(null,inst_13749,(0),null);var inst_13751__$1 = cljs.core.nth.call(null,inst_13749,(1),null);var inst_13752 = (inst_13750__$1 == null);var inst_13753 = cljs.core._EQ_.call(null,inst_13751__$1,change);var inst_13754 = (inst_13752) || (inst_13753);var state_13791__$1 = (function (){var statearr_13826 = state_13791;(statearr_13826[(16)] = inst_13751__$1);
(statearr_13826[(8)] = inst_13750__$1);
return statearr_13826;
})();if(cljs.core.truth_(inst_13754))
{var statearr_13827_13865 = state_13791__$1;(statearr_13827_13865[(1)] = (11));
} else
{var statearr_13828_13866 = state_13791__$1;(statearr_13828_13866[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (18)))
{var inst_13745 = (state_13791[(17)]);var inst_13746 = (state_13791[(15)]);var inst_13751 = (state_13791[(16)]);var inst_13768 = cljs.core.empty_QMARK_.call(null,inst_13746);var inst_13769 = inst_13745.call(null,inst_13751);var inst_13770 = cljs.core.not.call(null,inst_13769);var inst_13771 = (inst_13768) && (inst_13770);var state_13791__$1 = state_13791;var statearr_13829_13867 = state_13791__$1;(statearr_13829_13867[(2)] = inst_13771);
(statearr_13829_13867[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13792 === (8)))
{var inst_13735 = (state_13791[(7)]);var state_13791__$1 = state_13791;var statearr_13830_13868 = state_13791__$1;(statearr_13830_13868[(2)] = inst_13735);
(statearr_13830_13868[(1)] = (9));
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___13838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6424__auto__,c__6439__auto___13838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_13834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13834[(0)] = state_machine__6425__auto__);
(statearr_13834[(1)] = (1));
return statearr_13834;
});
var state_machine__6425__auto____1 = (function (state_13791){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_13791);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e13835){if((e13835 instanceof Object))
{var ex__6428__auto__ = e13835;var statearr_13836_13869 = state_13791;(statearr_13836_13869[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13791);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13835;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13870 = state_13791;
state_13791 = G__13870;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_13791){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_13791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___13838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6441__auto__ = (function (){var statearr_13837 = f__6440__auto__.call(null);(statearr_13837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___13838);
return statearr_13837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___13838,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13872 = {};return obj13872;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3587__auto__ = p;if(and__3587__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3587__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4236__auto__ = (((p == null))?null:p);return (function (){var or__3599__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3587__auto__ = p;if(and__3587__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3587__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4236__auto__ = (((p == null))?null:p);return (function (){var or__3599__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3587__auto__ = p;if(and__3587__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3587__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4236__auto__ = (((p == null))?null:p);return (function (){var or__3599__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3587__auto__ = p;if(and__3587__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3587__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4236__auto__ = (((p == null))?null:p);return (function (){var or__3599__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4236__auto__)]);if(or__3599__auto__)
{return or__3599__auto__;
} else
{var or__3599__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3599__auto____$1)
{return or__3599__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3599__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3599__auto__))
{return or__3599__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3599__auto__,mults){
return (function (p1__13873_SHARP_){if(cljs.core.truth_(p1__13873_SHARP_.call(null,topic)))
{return p1__13873_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13873_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3599__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13996 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13996 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13997){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13997 = meta13997;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13996.cljs$lang$type = true;
cljs.core.async.t13996.cljs$lang$ctorStr = "cljs.core.async/t13996";
cljs.core.async.t13996.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t13996");
});})(mults,ensure_mult))
;
cljs.core.async.t13996.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13996.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13996.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13996.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13996.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13996.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13996.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13996.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13998){var self__ = this;
var _13998__$1 = this;return self__.meta13997;
});})(mults,ensure_mult))
;
cljs.core.async.t13996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13998,meta13997__$1){var self__ = this;
var _13998__$1 = this;return (new cljs.core.async.t13996(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13997__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13996 = ((function (mults,ensure_mult){
return (function __GT_t13996(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13997){return (new cljs.core.async.t13996(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13997));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13996(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6439__auto___14118 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___14118,mults,ensure_mult,p){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___14118,mults,ensure_mult,p){
return (function (state_14070){var state_val_14071 = (state_14070[(1)]);if((state_val_14071 === (7)))
{var inst_14066 = (state_14070[(2)]);var state_14070__$1 = state_14070;var statearr_14072_14119 = state_14070__$1;(statearr_14072_14119[(2)] = inst_14066);
(statearr_14072_14119[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (20)))
{var state_14070__$1 = state_14070;var statearr_14073_14120 = state_14070__$1;(statearr_14073_14120[(2)] = null);
(statearr_14073_14120[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (1)))
{var state_14070__$1 = state_14070;var statearr_14074_14121 = state_14070__$1;(statearr_14074_14121[(2)] = null);
(statearr_14074_14121[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (24)))
{var inst_14049 = (state_14070[(7)]);var inst_14058 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14049);var state_14070__$1 = state_14070;var statearr_14075_14122 = state_14070__$1;(statearr_14075_14122[(2)] = inst_14058);
(statearr_14075_14122[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (4)))
{var inst_14001 = (state_14070[(8)]);var inst_14001__$1 = (state_14070[(2)]);var inst_14002 = (inst_14001__$1 == null);var state_14070__$1 = (function (){var statearr_14076 = state_14070;(statearr_14076[(8)] = inst_14001__$1);
return statearr_14076;
})();if(cljs.core.truth_(inst_14002))
{var statearr_14077_14123 = state_14070__$1;(statearr_14077_14123[(1)] = (5));
} else
{var statearr_14078_14124 = state_14070__$1;(statearr_14078_14124[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (15)))
{var inst_14043 = (state_14070[(2)]);var state_14070__$1 = state_14070;var statearr_14079_14125 = state_14070__$1;(statearr_14079_14125[(2)] = inst_14043);
(statearr_14079_14125[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (21)))
{var inst_14063 = (state_14070[(2)]);var state_14070__$1 = (function (){var statearr_14080 = state_14070;(statearr_14080[(9)] = inst_14063);
return statearr_14080;
})();var statearr_14081_14126 = state_14070__$1;(statearr_14081_14126[(2)] = null);
(statearr_14081_14126[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (13)))
{var inst_14025 = (state_14070[(10)]);var inst_14027 = cljs.core.chunked_seq_QMARK_.call(null,inst_14025);var state_14070__$1 = state_14070;if(inst_14027)
{var statearr_14082_14127 = state_14070__$1;(statearr_14082_14127[(1)] = (16));
} else
{var statearr_14083_14128 = state_14070__$1;(statearr_14083_14128[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (22)))
{var inst_14055 = (state_14070[(2)]);var state_14070__$1 = state_14070;if(cljs.core.truth_(inst_14055))
{var statearr_14084_14129 = state_14070__$1;(statearr_14084_14129[(1)] = (23));
} else
{var statearr_14085_14130 = state_14070__$1;(statearr_14085_14130[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (6)))
{var inst_14051 = (state_14070[(11)]);var inst_14049 = (state_14070[(7)]);var inst_14001 = (state_14070[(8)]);var inst_14049__$1 = topic_fn.call(null,inst_14001);var inst_14050 = cljs.core.deref.call(null,mults);var inst_14051__$1 = cljs.core.get.call(null,inst_14050,inst_14049__$1);var state_14070__$1 = (function (){var statearr_14086 = state_14070;(statearr_14086[(11)] = inst_14051__$1);
(statearr_14086[(7)] = inst_14049__$1);
return statearr_14086;
})();if(cljs.core.truth_(inst_14051__$1))
{var statearr_14087_14131 = state_14070__$1;(statearr_14087_14131[(1)] = (19));
} else
{var statearr_14088_14132 = state_14070__$1;(statearr_14088_14132[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (25)))
{var inst_14060 = (state_14070[(2)]);var state_14070__$1 = state_14070;var statearr_14089_14133 = state_14070__$1;(statearr_14089_14133[(2)] = inst_14060);
(statearr_14089_14133[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (17)))
{var inst_14025 = (state_14070[(10)]);var inst_14034 = cljs.core.first.call(null,inst_14025);var inst_14035 = cljs.core.async.muxch_STAR_.call(null,inst_14034);var inst_14036 = cljs.core.async.close_BANG_.call(null,inst_14035);var inst_14037 = cljs.core.next.call(null,inst_14025);var inst_14011 = inst_14037;var inst_14012 = null;var inst_14013 = (0);var inst_14014 = (0);var state_14070__$1 = (function (){var statearr_14090 = state_14070;(statearr_14090[(12)] = inst_14014);
(statearr_14090[(13)] = inst_14013);
(statearr_14090[(14)] = inst_14036);
(statearr_14090[(15)] = inst_14012);
(statearr_14090[(16)] = inst_14011);
return statearr_14090;
})();var statearr_14091_14134 = state_14070__$1;(statearr_14091_14134[(2)] = null);
(statearr_14091_14134[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (3)))
{var inst_14068 = (state_14070[(2)]);var state_14070__$1 = state_14070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14070__$1,inst_14068);
} else
{if((state_val_14071 === (12)))
{var inst_14045 = (state_14070[(2)]);var state_14070__$1 = state_14070;var statearr_14092_14135 = state_14070__$1;(statearr_14092_14135[(2)] = inst_14045);
(statearr_14092_14135[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (2)))
{var state_14070__$1 = state_14070;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14070__$1,(4),ch);
} else
{if((state_val_14071 === (23)))
{var state_14070__$1 = state_14070;var statearr_14093_14136 = state_14070__$1;(statearr_14093_14136[(2)] = null);
(statearr_14093_14136[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (19)))
{var inst_14051 = (state_14070[(11)]);var inst_14001 = (state_14070[(8)]);var inst_14053 = cljs.core.async.muxch_STAR_.call(null,inst_14051);var state_14070__$1 = state_14070;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14070__$1,(22),inst_14053,inst_14001);
} else
{if((state_val_14071 === (11)))
{var inst_14025 = (state_14070[(10)]);var inst_14011 = (state_14070[(16)]);var inst_14025__$1 = cljs.core.seq.call(null,inst_14011);var state_14070__$1 = (function (){var statearr_14094 = state_14070;(statearr_14094[(10)] = inst_14025__$1);
return statearr_14094;
})();if(inst_14025__$1)
{var statearr_14095_14137 = state_14070__$1;(statearr_14095_14137[(1)] = (13));
} else
{var statearr_14096_14138 = state_14070__$1;(statearr_14096_14138[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (9)))
{var inst_14047 = (state_14070[(2)]);var state_14070__$1 = state_14070;var statearr_14097_14139 = state_14070__$1;(statearr_14097_14139[(2)] = inst_14047);
(statearr_14097_14139[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (5)))
{var inst_14008 = cljs.core.deref.call(null,mults);var inst_14009 = cljs.core.vals.call(null,inst_14008);var inst_14010 = cljs.core.seq.call(null,inst_14009);var inst_14011 = inst_14010;var inst_14012 = null;var inst_14013 = (0);var inst_14014 = (0);var state_14070__$1 = (function (){var statearr_14098 = state_14070;(statearr_14098[(12)] = inst_14014);
(statearr_14098[(13)] = inst_14013);
(statearr_14098[(15)] = inst_14012);
(statearr_14098[(16)] = inst_14011);
return statearr_14098;
})();var statearr_14099_14140 = state_14070__$1;(statearr_14099_14140[(2)] = null);
(statearr_14099_14140[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (14)))
{var state_14070__$1 = state_14070;var statearr_14103_14141 = state_14070__$1;(statearr_14103_14141[(2)] = null);
(statearr_14103_14141[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (16)))
{var inst_14025 = (state_14070[(10)]);var inst_14029 = cljs.core.chunk_first.call(null,inst_14025);var inst_14030 = cljs.core.chunk_rest.call(null,inst_14025);var inst_14031 = cljs.core.count.call(null,inst_14029);var inst_14011 = inst_14030;var inst_14012 = inst_14029;var inst_14013 = inst_14031;var inst_14014 = (0);var state_14070__$1 = (function (){var statearr_14104 = state_14070;(statearr_14104[(12)] = inst_14014);
(statearr_14104[(13)] = inst_14013);
(statearr_14104[(15)] = inst_14012);
(statearr_14104[(16)] = inst_14011);
return statearr_14104;
})();var statearr_14105_14142 = state_14070__$1;(statearr_14105_14142[(2)] = null);
(statearr_14105_14142[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (10)))
{var inst_14014 = (state_14070[(12)]);var inst_14013 = (state_14070[(13)]);var inst_14012 = (state_14070[(15)]);var inst_14011 = (state_14070[(16)]);var inst_14019 = cljs.core._nth.call(null,inst_14012,inst_14014);var inst_14020 = cljs.core.async.muxch_STAR_.call(null,inst_14019);var inst_14021 = cljs.core.async.close_BANG_.call(null,inst_14020);var inst_14022 = (inst_14014 + (1));var tmp14100 = inst_14013;var tmp14101 = inst_14012;var tmp14102 = inst_14011;var inst_14011__$1 = tmp14102;var inst_14012__$1 = tmp14101;var inst_14013__$1 = tmp14100;var inst_14014__$1 = inst_14022;var state_14070__$1 = (function (){var statearr_14106 = state_14070;(statearr_14106[(17)] = inst_14021);
(statearr_14106[(12)] = inst_14014__$1);
(statearr_14106[(13)] = inst_14013__$1);
(statearr_14106[(15)] = inst_14012__$1);
(statearr_14106[(16)] = inst_14011__$1);
return statearr_14106;
})();var statearr_14107_14143 = state_14070__$1;(statearr_14107_14143[(2)] = null);
(statearr_14107_14143[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (18)))
{var inst_14040 = (state_14070[(2)]);var state_14070__$1 = state_14070;var statearr_14108_14144 = state_14070__$1;(statearr_14108_14144[(2)] = inst_14040);
(statearr_14108_14144[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14071 === (8)))
{var inst_14014 = (state_14070[(12)]);var inst_14013 = (state_14070[(13)]);var inst_14016 = (inst_14014 < inst_14013);var inst_14017 = inst_14016;var state_14070__$1 = state_14070;if(cljs.core.truth_(inst_14017))
{var statearr_14109_14145 = state_14070__$1;(statearr_14109_14145[(1)] = (10));
} else
{var statearr_14110_14146 = state_14070__$1;(statearr_14110_14146[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto___14118,mults,ensure_mult,p))
;return ((function (switch__6424__auto__,c__6439__auto___14118,mults,ensure_mult,p){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_14114 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14114[(0)] = state_machine__6425__auto__);
(statearr_14114[(1)] = (1));
return statearr_14114;
});
var state_machine__6425__auto____1 = (function (state_14070){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_14070);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e14115){if((e14115 instanceof Object))
{var ex__6428__auto__ = e14115;var statearr_14116_14147 = state_14070;(statearr_14116_14147[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14070);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14115;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14148 = state_14070;
state_14070 = G__14148;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_14070){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_14070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___14118,mults,ensure_mult,p))
})();var state__6441__auto__ = (function (){var statearr_14117 = f__6440__auto__.call(null);(statearr_14117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___14118);
return statearr_14117;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___14118,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6439__auto___14285 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___14285,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___14285,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14255){var state_val_14256 = (state_14255[(1)]);if((state_val_14256 === (7)))
{var state_14255__$1 = state_14255;var statearr_14257_14286 = state_14255__$1;(statearr_14257_14286[(2)] = null);
(statearr_14257_14286[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14256 === (1)))
{var state_14255__$1 = state_14255;var statearr_14258_14287 = state_14255__$1;(statearr_14258_14287[(2)] = null);
(statearr_14258_14287[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14256 === (4)))
{var inst_14219 = (state_14255[(7)]);var inst_14221 = (inst_14219 < cnt);var state_14255__$1 = state_14255;if(cljs.core.truth_(inst_14221))
{var statearr_14259_14288 = state_14255__$1;(statearr_14259_14288[(1)] = (6));
} else
{var statearr_14260_14289 = state_14255__$1;(statearr_14260_14289[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14256 === (15)))
{var inst_14251 = (state_14255[(2)]);var state_14255__$1 = state_14255;var statearr_14261_14290 = state_14255__$1;(statearr_14261_14290[(2)] = inst_14251);
(statearr_14261_14290[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14256 === (13)))
{var inst_14244 = cljs.core.async.close_BANG_.call(null,out);var state_14255__$1 = state_14255;var statearr_14262_14291 = state_14255__$1;(statearr_14262_14291[(2)] = inst_14244);
(statearr_14262_14291[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14256 === (6)))
{var state_14255__$1 = state_14255;var statearr_14263_14292 = state_14255__$1;(statearr_14263_14292[(2)] = null);
(statearr_14263_14292[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14256 === (3)))
{var inst_14253 = (state_14255[(2)]);var state_14255__$1 = state_14255;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14255__$1,inst_14253);
} else
{if((state_val_14256 === (12)))
{var inst_14241 = (state_14255[(8)]);var inst_14241__$1 = (state_14255[(2)]);var inst_14242 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14241__$1);var state_14255__$1 = (function (){var statearr_14264 = state_14255;(statearr_14264[(8)] = inst_14241__$1);
return statearr_14264;
})();if(cljs.core.truth_(inst_14242))
{var statearr_14265_14293 = state_14255__$1;(statearr_14265_14293[(1)] = (13));
} else
{var statearr_14266_14294 = state_14255__$1;(statearr_14266_14294[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14256 === (2)))
{var inst_14218 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14219 = (0);var state_14255__$1 = (function (){var statearr_14267 = state_14255;(statearr_14267[(9)] = inst_14218);
(statearr_14267[(7)] = inst_14219);
return statearr_14267;
})();var statearr_14268_14295 = state_14255__$1;(statearr_14268_14295[(2)] = null);
(statearr_14268_14295[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14256 === (11)))
{var inst_14219 = (state_14255[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14255,(10),Object,null,(9));var inst_14228 = chs__$1.call(null,inst_14219);var inst_14229 = done.call(null,inst_14219);var inst_14230 = cljs.core.async.take_BANG_.call(null,inst_14228,inst_14229);var state_14255__$1 = state_14255;var statearr_14269_14296 = state_14255__$1;(statearr_14269_14296[(2)] = inst_14230);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14255__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14256 === (9)))
{var inst_14219 = (state_14255[(7)]);var inst_14232 = (state_14255[(2)]);var inst_14233 = (inst_14219 + (1));var inst_14219__$1 = inst_14233;var state_14255__$1 = (function (){var statearr_14270 = state_14255;(statearr_14270[(10)] = inst_14232);
(statearr_14270[(7)] = inst_14219__$1);
return statearr_14270;
})();var statearr_14271_14297 = state_14255__$1;(statearr_14271_14297[(2)] = null);
(statearr_14271_14297[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14256 === (5)))
{var inst_14239 = (state_14255[(2)]);var state_14255__$1 = (function (){var statearr_14272 = state_14255;(statearr_14272[(11)] = inst_14239);
return statearr_14272;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14255__$1,(12),dchan);
} else
{if((state_val_14256 === (14)))
{var inst_14241 = (state_14255[(8)]);var inst_14246 = cljs.core.apply.call(null,f,inst_14241);var state_14255__$1 = state_14255;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14255__$1,(16),out,inst_14246);
} else
{if((state_val_14256 === (16)))
{var inst_14248 = (state_14255[(2)]);var state_14255__$1 = (function (){var statearr_14273 = state_14255;(statearr_14273[(12)] = inst_14248);
return statearr_14273;
})();var statearr_14274_14298 = state_14255__$1;(statearr_14274_14298[(2)] = null);
(statearr_14274_14298[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14256 === (10)))
{var inst_14223 = (state_14255[(2)]);var inst_14224 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14255__$1 = (function (){var statearr_14275 = state_14255;(statearr_14275[(13)] = inst_14223);
return statearr_14275;
})();var statearr_14276_14299 = state_14255__$1;(statearr_14276_14299[(2)] = inst_14224);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14255__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14256 === (8)))
{var inst_14237 = (state_14255[(2)]);var state_14255__$1 = state_14255;var statearr_14277_14300 = state_14255__$1;(statearr_14277_14300[(2)] = inst_14237);
(statearr_14277_14300[(1)] = (5));
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
}
}
}
}
}
}
}
}
});})(c__6439__auto___14285,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6424__auto__,c__6439__auto___14285,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_14281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14281[(0)] = state_machine__6425__auto__);
(statearr_14281[(1)] = (1));
return statearr_14281;
});
var state_machine__6425__auto____1 = (function (state_14255){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_14255);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e14282){if((e14282 instanceof Object))
{var ex__6428__auto__ = e14282;var statearr_14283_14301 = state_14255;(statearr_14283_14301[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14255);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14282;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14302 = state_14255;
state_14255 = G__14302;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_14255){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_14255);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___14285,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6441__auto__ = (function (){var statearr_14284 = f__6440__auto__.call(null);(statearr_14284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___14285);
return statearr_14284;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___14285,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6439__auto___14410 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___14410,out){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___14410,out){
return (function (state_14386){var state_val_14387 = (state_14386[(1)]);if((state_val_14387 === (7)))
{var inst_14366 = (state_14386[(7)]);var inst_14365 = (state_14386[(8)]);var inst_14365__$1 = (state_14386[(2)]);var inst_14366__$1 = cljs.core.nth.call(null,inst_14365__$1,(0),null);var inst_14367 = cljs.core.nth.call(null,inst_14365__$1,(1),null);var inst_14368 = (inst_14366__$1 == null);var state_14386__$1 = (function (){var statearr_14388 = state_14386;(statearr_14388[(7)] = inst_14366__$1);
(statearr_14388[(9)] = inst_14367);
(statearr_14388[(8)] = inst_14365__$1);
return statearr_14388;
})();if(cljs.core.truth_(inst_14368))
{var statearr_14389_14411 = state_14386__$1;(statearr_14389_14411[(1)] = (8));
} else
{var statearr_14390_14412 = state_14386__$1;(statearr_14390_14412[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14387 === (1)))
{var inst_14357 = cljs.core.vec.call(null,chs);var inst_14358 = inst_14357;var state_14386__$1 = (function (){var statearr_14391 = state_14386;(statearr_14391[(10)] = inst_14358);
return statearr_14391;
})();var statearr_14392_14413 = state_14386__$1;(statearr_14392_14413[(2)] = null);
(statearr_14392_14413[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14387 === (4)))
{var inst_14358 = (state_14386[(10)]);var state_14386__$1 = state_14386;return cljs.core.async.ioc_alts_BANG_.call(null,state_14386__$1,(7),inst_14358);
} else
{if((state_val_14387 === (6)))
{var inst_14382 = (state_14386[(2)]);var state_14386__$1 = state_14386;var statearr_14393_14414 = state_14386__$1;(statearr_14393_14414[(2)] = inst_14382);
(statearr_14393_14414[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14387 === (3)))
{var inst_14384 = (state_14386[(2)]);var state_14386__$1 = state_14386;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14386__$1,inst_14384);
} else
{if((state_val_14387 === (2)))
{var inst_14358 = (state_14386[(10)]);var inst_14360 = cljs.core.count.call(null,inst_14358);var inst_14361 = (inst_14360 > (0));var state_14386__$1 = state_14386;if(cljs.core.truth_(inst_14361))
{var statearr_14395_14415 = state_14386__$1;(statearr_14395_14415[(1)] = (4));
} else
{var statearr_14396_14416 = state_14386__$1;(statearr_14396_14416[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14387 === (11)))
{var inst_14358 = (state_14386[(10)]);var inst_14375 = (state_14386[(2)]);var tmp14394 = inst_14358;var inst_14358__$1 = tmp14394;var state_14386__$1 = (function (){var statearr_14397 = state_14386;(statearr_14397[(10)] = inst_14358__$1);
(statearr_14397[(11)] = inst_14375);
return statearr_14397;
})();var statearr_14398_14417 = state_14386__$1;(statearr_14398_14417[(2)] = null);
(statearr_14398_14417[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14387 === (9)))
{var inst_14366 = (state_14386[(7)]);var state_14386__$1 = state_14386;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14386__$1,(11),out,inst_14366);
} else
{if((state_val_14387 === (5)))
{var inst_14380 = cljs.core.async.close_BANG_.call(null,out);var state_14386__$1 = state_14386;var statearr_14399_14418 = state_14386__$1;(statearr_14399_14418[(2)] = inst_14380);
(statearr_14399_14418[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14387 === (10)))
{var inst_14378 = (state_14386[(2)]);var state_14386__$1 = state_14386;var statearr_14400_14419 = state_14386__$1;(statearr_14400_14419[(2)] = inst_14378);
(statearr_14400_14419[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14387 === (8)))
{var inst_14366 = (state_14386[(7)]);var inst_14367 = (state_14386[(9)]);var inst_14358 = (state_14386[(10)]);var inst_14365 = (state_14386[(8)]);var inst_14370 = (function (){var c = inst_14367;var v = inst_14366;var vec__14363 = inst_14365;var cs = inst_14358;return ((function (c,v,vec__14363,cs,inst_14366,inst_14367,inst_14358,inst_14365,state_val_14387,c__6439__auto___14410,out){
return (function (p1__14303_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14303_SHARP_);
});
;})(c,v,vec__14363,cs,inst_14366,inst_14367,inst_14358,inst_14365,state_val_14387,c__6439__auto___14410,out))
})();var inst_14371 = cljs.core.filterv.call(null,inst_14370,inst_14358);var inst_14358__$1 = inst_14371;var state_14386__$1 = (function (){var statearr_14401 = state_14386;(statearr_14401[(10)] = inst_14358__$1);
return statearr_14401;
})();var statearr_14402_14420 = state_14386__$1;(statearr_14402_14420[(2)] = null);
(statearr_14402_14420[(1)] = (2));
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
}
}
}
});})(c__6439__auto___14410,out))
;return ((function (switch__6424__auto__,c__6439__auto___14410,out){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_14406 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14406[(0)] = state_machine__6425__auto__);
(statearr_14406[(1)] = (1));
return statearr_14406;
});
var state_machine__6425__auto____1 = (function (state_14386){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_14386);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e14407){if((e14407 instanceof Object))
{var ex__6428__auto__ = e14407;var statearr_14408_14421 = state_14386;(statearr_14408_14421[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14386);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14407;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14422 = state_14386;
state_14386 = G__14422;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_14386){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_14386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___14410,out))
})();var state__6441__auto__ = (function (){var statearr_14409 = f__6440__auto__.call(null);(statearr_14409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___14410);
return statearr_14409;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___14410,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6439__auto___14515 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___14515,out){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___14515,out){
return (function (state_14492){var state_val_14493 = (state_14492[(1)]);if((state_val_14493 === (7)))
{var inst_14474 = (state_14492[(7)]);var inst_14474__$1 = (state_14492[(2)]);var inst_14475 = (inst_14474__$1 == null);var inst_14476 = cljs.core.not.call(null,inst_14475);var state_14492__$1 = (function (){var statearr_14494 = state_14492;(statearr_14494[(7)] = inst_14474__$1);
return statearr_14494;
})();if(inst_14476)
{var statearr_14495_14516 = state_14492__$1;(statearr_14495_14516[(1)] = (8));
} else
{var statearr_14496_14517 = state_14492__$1;(statearr_14496_14517[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14493 === (1)))
{var inst_14469 = (0);var state_14492__$1 = (function (){var statearr_14497 = state_14492;(statearr_14497[(8)] = inst_14469);
return statearr_14497;
})();var statearr_14498_14518 = state_14492__$1;(statearr_14498_14518[(2)] = null);
(statearr_14498_14518[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14493 === (4)))
{var state_14492__$1 = state_14492;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14492__$1,(7),ch);
} else
{if((state_val_14493 === (6)))
{var inst_14487 = (state_14492[(2)]);var state_14492__$1 = state_14492;var statearr_14499_14519 = state_14492__$1;(statearr_14499_14519[(2)] = inst_14487);
(statearr_14499_14519[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14493 === (3)))
{var inst_14489 = (state_14492[(2)]);var inst_14490 = cljs.core.async.close_BANG_.call(null,out);var state_14492__$1 = (function (){var statearr_14500 = state_14492;(statearr_14500[(9)] = inst_14489);
return statearr_14500;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14492__$1,inst_14490);
} else
{if((state_val_14493 === (2)))
{var inst_14469 = (state_14492[(8)]);var inst_14471 = (inst_14469 < n);var state_14492__$1 = state_14492;if(cljs.core.truth_(inst_14471))
{var statearr_14501_14520 = state_14492__$1;(statearr_14501_14520[(1)] = (4));
} else
{var statearr_14502_14521 = state_14492__$1;(statearr_14502_14521[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14493 === (11)))
{var inst_14469 = (state_14492[(8)]);var inst_14479 = (state_14492[(2)]);var inst_14480 = (inst_14469 + (1));var inst_14469__$1 = inst_14480;var state_14492__$1 = (function (){var statearr_14503 = state_14492;(statearr_14503[(10)] = inst_14479);
(statearr_14503[(8)] = inst_14469__$1);
return statearr_14503;
})();var statearr_14504_14522 = state_14492__$1;(statearr_14504_14522[(2)] = null);
(statearr_14504_14522[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14493 === (9)))
{var state_14492__$1 = state_14492;var statearr_14505_14523 = state_14492__$1;(statearr_14505_14523[(2)] = null);
(statearr_14505_14523[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14493 === (5)))
{var state_14492__$1 = state_14492;var statearr_14506_14524 = state_14492__$1;(statearr_14506_14524[(2)] = null);
(statearr_14506_14524[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14493 === (10)))
{var inst_14484 = (state_14492[(2)]);var state_14492__$1 = state_14492;var statearr_14507_14525 = state_14492__$1;(statearr_14507_14525[(2)] = inst_14484);
(statearr_14507_14525[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14493 === (8)))
{var inst_14474 = (state_14492[(7)]);var state_14492__$1 = state_14492;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14492__$1,(11),out,inst_14474);
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
}
}
}
});})(c__6439__auto___14515,out))
;return ((function (switch__6424__auto__,c__6439__auto___14515,out){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_14511 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14511[(0)] = state_machine__6425__auto__);
(statearr_14511[(1)] = (1));
return statearr_14511;
});
var state_machine__6425__auto____1 = (function (state_14492){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_14492);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e14512){if((e14512 instanceof Object))
{var ex__6428__auto__ = e14512;var statearr_14513_14526 = state_14492;(statearr_14513_14526[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14492);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14512;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14527 = state_14492;
state_14492 = G__14527;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_14492){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_14492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___14515,out))
})();var state__6441__auto__ = (function (){var statearr_14514 = f__6440__auto__.call(null);(statearr_14514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___14515);
return statearr_14514;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___14515,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14535 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14535 = (function (ch,f,map_LT_,meta14536){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14536 = meta14536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14535.cljs$lang$type = true;
cljs.core.async.t14535.cljs$lang$ctorStr = "cljs.core.async/t14535";
cljs.core.async.t14535.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t14535");
});
cljs.core.async.t14535.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14535.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14535.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14535.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14538 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14538 = (function (fn1,_,meta14536,ch,f,map_LT_,meta14539){
this.fn1 = fn1;
this._ = _;
this.meta14536 = meta14536;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14539 = meta14539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14538.cljs$lang$type = true;
cljs.core.async.t14538.cljs$lang$ctorStr = "cljs.core.async/t14538";
cljs.core.async.t14538.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t14538");
});})(___$1))
;
cljs.core.async.t14538.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14528_SHARP_){return f1.call(null,(((p1__14528_SHARP_ == null))?null:self__.f.call(null,p1__14528_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14538.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14540){var self__ = this;
var _14540__$1 = this;return self__.meta14539;
});})(___$1))
;
cljs.core.async.t14538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14540,meta14539__$1){var self__ = this;
var _14540__$1 = this;return (new cljs.core.async.t14538(self__.fn1,self__._,self__.meta14536,self__.ch,self__.f,self__.map_LT_,meta14539__$1));
});})(___$1))
;
cljs.core.async.__GT_t14538 = ((function (___$1){
return (function __GT_t14538(fn1__$1,___$2,meta14536__$1,ch__$2,f__$2,map_LT___$2,meta14539){return (new cljs.core.async.t14538(fn1__$1,___$2,meta14536__$1,ch__$2,f__$2,map_LT___$2,meta14539));
});})(___$1))
;
}
return (new cljs.core.async.t14538(fn1,___$1,self__.meta14536,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3587__auto__ = ret;if(cljs.core.truth_(and__3587__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3587__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14535.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14535.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14535.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14537){var self__ = this;
var _14537__$1 = this;return self__.meta14536;
});
cljs.core.async.t14535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14537,meta14536__$1){var self__ = this;
var _14537__$1 = this;return (new cljs.core.async.t14535(self__.ch,self__.f,self__.map_LT_,meta14536__$1));
});
cljs.core.async.__GT_t14535 = (function __GT_t14535(ch__$1,f__$1,map_LT___$1,meta14536){return (new cljs.core.async.t14535(ch__$1,f__$1,map_LT___$1,meta14536));
});
}
return (new cljs.core.async.t14535(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14544 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14544 = (function (ch,f,map_GT_,meta14545){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14545 = meta14545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14544.cljs$lang$type = true;
cljs.core.async.t14544.cljs$lang$ctorStr = "cljs.core.async/t14544";
cljs.core.async.t14544.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t14544");
});
cljs.core.async.t14544.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14544.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14544.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14544.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14544.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14544.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14546){var self__ = this;
var _14546__$1 = this;return self__.meta14545;
});
cljs.core.async.t14544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14546,meta14545__$1){var self__ = this;
var _14546__$1 = this;return (new cljs.core.async.t14544(self__.ch,self__.f,self__.map_GT_,meta14545__$1));
});
cljs.core.async.__GT_t14544 = (function __GT_t14544(ch__$1,f__$1,map_GT___$1,meta14545){return (new cljs.core.async.t14544(ch__$1,f__$1,map_GT___$1,meta14545));
});
}
return (new cljs.core.async.t14544(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14550 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14550 = (function (ch,p,filter_GT_,meta14551){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14551 = meta14551;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14550.cljs$lang$type = true;
cljs.core.async.t14550.cljs$lang$ctorStr = "cljs.core.async/t14550";
cljs.core.async.t14550.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cljs.core.async/t14550");
});
cljs.core.async.t14550.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14550.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14550.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14550.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14550.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14550.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14550.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14552){var self__ = this;
var _14552__$1 = this;return self__.meta14551;
});
cljs.core.async.t14550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14552,meta14551__$1){var self__ = this;
var _14552__$1 = this;return (new cljs.core.async.t14550(self__.ch,self__.p,self__.filter_GT_,meta14551__$1));
});
cljs.core.async.__GT_t14550 = (function __GT_t14550(ch__$1,p__$1,filter_GT___$1,meta14551){return (new cljs.core.async.t14550(ch__$1,p__$1,filter_GT___$1,meta14551));
});
}
return (new cljs.core.async.t14550(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6439__auto___14635 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___14635,out){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___14635,out){
return (function (state_14614){var state_val_14615 = (state_14614[(1)]);if((state_val_14615 === (7)))
{var inst_14610 = (state_14614[(2)]);var state_14614__$1 = state_14614;var statearr_14616_14636 = state_14614__$1;(statearr_14616_14636[(2)] = inst_14610);
(statearr_14616_14636[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14615 === (1)))
{var state_14614__$1 = state_14614;var statearr_14617_14637 = state_14614__$1;(statearr_14617_14637[(2)] = null);
(statearr_14617_14637[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14615 === (4)))
{var inst_14596 = (state_14614[(7)]);var inst_14596__$1 = (state_14614[(2)]);var inst_14597 = (inst_14596__$1 == null);var state_14614__$1 = (function (){var statearr_14618 = state_14614;(statearr_14618[(7)] = inst_14596__$1);
return statearr_14618;
})();if(cljs.core.truth_(inst_14597))
{var statearr_14619_14638 = state_14614__$1;(statearr_14619_14638[(1)] = (5));
} else
{var statearr_14620_14639 = state_14614__$1;(statearr_14620_14639[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14615 === (6)))
{var inst_14596 = (state_14614[(7)]);var inst_14601 = p.call(null,inst_14596);var state_14614__$1 = state_14614;if(cljs.core.truth_(inst_14601))
{var statearr_14621_14640 = state_14614__$1;(statearr_14621_14640[(1)] = (8));
} else
{var statearr_14622_14641 = state_14614__$1;(statearr_14622_14641[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14615 === (3)))
{var inst_14612 = (state_14614[(2)]);var state_14614__$1 = state_14614;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14614__$1,inst_14612);
} else
{if((state_val_14615 === (2)))
{var state_14614__$1 = state_14614;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14614__$1,(4),ch);
} else
{if((state_val_14615 === (11)))
{var inst_14604 = (state_14614[(2)]);var state_14614__$1 = state_14614;var statearr_14623_14642 = state_14614__$1;(statearr_14623_14642[(2)] = inst_14604);
(statearr_14623_14642[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14615 === (9)))
{var state_14614__$1 = state_14614;var statearr_14624_14643 = state_14614__$1;(statearr_14624_14643[(2)] = null);
(statearr_14624_14643[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14615 === (5)))
{var inst_14599 = cljs.core.async.close_BANG_.call(null,out);var state_14614__$1 = state_14614;var statearr_14625_14644 = state_14614__$1;(statearr_14625_14644[(2)] = inst_14599);
(statearr_14625_14644[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14615 === (10)))
{var inst_14607 = (state_14614[(2)]);var state_14614__$1 = (function (){var statearr_14626 = state_14614;(statearr_14626[(8)] = inst_14607);
return statearr_14626;
})();var statearr_14627_14645 = state_14614__$1;(statearr_14627_14645[(2)] = null);
(statearr_14627_14645[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14615 === (8)))
{var inst_14596 = (state_14614[(7)]);var state_14614__$1 = state_14614;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14614__$1,(11),out,inst_14596);
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
}
}
}
});})(c__6439__auto___14635,out))
;return ((function (switch__6424__auto__,c__6439__auto___14635,out){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_14631 = [null,null,null,null,null,null,null,null,null];(statearr_14631[(0)] = state_machine__6425__auto__);
(statearr_14631[(1)] = (1));
return statearr_14631;
});
var state_machine__6425__auto____1 = (function (state_14614){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_14614);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e14632){if((e14632 instanceof Object))
{var ex__6428__auto__ = e14632;var statearr_14633_14646 = state_14614;(statearr_14633_14646[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14614);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14632;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14647 = state_14614;
state_14614 = G__14647;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_14614){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_14614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___14635,out))
})();var state__6441__auto__ = (function (){var statearr_14634 = f__6440__auto__.call(null);(statearr_14634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___14635);
return statearr_14634;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___14635,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6439__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto__){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto__){
return (function (state_14813){var state_val_14814 = (state_14813[(1)]);if((state_val_14814 === (7)))
{var inst_14809 = (state_14813[(2)]);var state_14813__$1 = state_14813;var statearr_14815_14856 = state_14813__$1;(statearr_14815_14856[(2)] = inst_14809);
(statearr_14815_14856[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (20)))
{var inst_14779 = (state_14813[(7)]);var inst_14790 = (state_14813[(2)]);var inst_14791 = cljs.core.next.call(null,inst_14779);var inst_14765 = inst_14791;var inst_14766 = null;var inst_14767 = (0);var inst_14768 = (0);var state_14813__$1 = (function (){var statearr_14816 = state_14813;(statearr_14816[(8)] = inst_14767);
(statearr_14816[(9)] = inst_14765);
(statearr_14816[(10)] = inst_14790);
(statearr_14816[(11)] = inst_14766);
(statearr_14816[(12)] = inst_14768);
return statearr_14816;
})();var statearr_14817_14857 = state_14813__$1;(statearr_14817_14857[(2)] = null);
(statearr_14817_14857[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (1)))
{var state_14813__$1 = state_14813;var statearr_14818_14858 = state_14813__$1;(statearr_14818_14858[(2)] = null);
(statearr_14818_14858[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (4)))
{var inst_14754 = (state_14813[(13)]);var inst_14754__$1 = (state_14813[(2)]);var inst_14755 = (inst_14754__$1 == null);var state_14813__$1 = (function (){var statearr_14819 = state_14813;(statearr_14819[(13)] = inst_14754__$1);
return statearr_14819;
})();if(cljs.core.truth_(inst_14755))
{var statearr_14820_14859 = state_14813__$1;(statearr_14820_14859[(1)] = (5));
} else
{var statearr_14821_14860 = state_14813__$1;(statearr_14821_14860[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (15)))
{var state_14813__$1 = state_14813;var statearr_14825_14861 = state_14813__$1;(statearr_14825_14861[(2)] = null);
(statearr_14825_14861[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (21)))
{var state_14813__$1 = state_14813;var statearr_14826_14862 = state_14813__$1;(statearr_14826_14862[(2)] = null);
(statearr_14826_14862[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (13)))
{var inst_14767 = (state_14813[(8)]);var inst_14765 = (state_14813[(9)]);var inst_14766 = (state_14813[(11)]);var inst_14768 = (state_14813[(12)]);var inst_14775 = (state_14813[(2)]);var inst_14776 = (inst_14768 + (1));var tmp14822 = inst_14767;var tmp14823 = inst_14765;var tmp14824 = inst_14766;var inst_14765__$1 = tmp14823;var inst_14766__$1 = tmp14824;var inst_14767__$1 = tmp14822;var inst_14768__$1 = inst_14776;var state_14813__$1 = (function (){var statearr_14827 = state_14813;(statearr_14827[(8)] = inst_14767__$1);
(statearr_14827[(9)] = inst_14765__$1);
(statearr_14827[(14)] = inst_14775);
(statearr_14827[(11)] = inst_14766__$1);
(statearr_14827[(12)] = inst_14768__$1);
return statearr_14827;
})();var statearr_14828_14863 = state_14813__$1;(statearr_14828_14863[(2)] = null);
(statearr_14828_14863[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (22)))
{var state_14813__$1 = state_14813;var statearr_14829_14864 = state_14813__$1;(statearr_14829_14864[(2)] = null);
(statearr_14829_14864[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (6)))
{var inst_14754 = (state_14813[(13)]);var inst_14763 = f.call(null,inst_14754);var inst_14764 = cljs.core.seq.call(null,inst_14763);var inst_14765 = inst_14764;var inst_14766 = null;var inst_14767 = (0);var inst_14768 = (0);var state_14813__$1 = (function (){var statearr_14830 = state_14813;(statearr_14830[(8)] = inst_14767);
(statearr_14830[(9)] = inst_14765);
(statearr_14830[(11)] = inst_14766);
(statearr_14830[(12)] = inst_14768);
return statearr_14830;
})();var statearr_14831_14865 = state_14813__$1;(statearr_14831_14865[(2)] = null);
(statearr_14831_14865[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (17)))
{var inst_14779 = (state_14813[(7)]);var inst_14783 = cljs.core.chunk_first.call(null,inst_14779);var inst_14784 = cljs.core.chunk_rest.call(null,inst_14779);var inst_14785 = cljs.core.count.call(null,inst_14783);var inst_14765 = inst_14784;var inst_14766 = inst_14783;var inst_14767 = inst_14785;var inst_14768 = (0);var state_14813__$1 = (function (){var statearr_14832 = state_14813;(statearr_14832[(8)] = inst_14767);
(statearr_14832[(9)] = inst_14765);
(statearr_14832[(11)] = inst_14766);
(statearr_14832[(12)] = inst_14768);
return statearr_14832;
})();var statearr_14833_14866 = state_14813__$1;(statearr_14833_14866[(2)] = null);
(statearr_14833_14866[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (3)))
{var inst_14811 = (state_14813[(2)]);var state_14813__$1 = state_14813;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14813__$1,inst_14811);
} else
{if((state_val_14814 === (12)))
{var inst_14799 = (state_14813[(2)]);var state_14813__$1 = state_14813;var statearr_14834_14867 = state_14813__$1;(statearr_14834_14867[(2)] = inst_14799);
(statearr_14834_14867[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (2)))
{var state_14813__$1 = state_14813;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14813__$1,(4),in$);
} else
{if((state_val_14814 === (23)))
{var inst_14807 = (state_14813[(2)]);var state_14813__$1 = state_14813;var statearr_14835_14868 = state_14813__$1;(statearr_14835_14868[(2)] = inst_14807);
(statearr_14835_14868[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (19)))
{var inst_14794 = (state_14813[(2)]);var state_14813__$1 = state_14813;var statearr_14836_14869 = state_14813__$1;(statearr_14836_14869[(2)] = inst_14794);
(statearr_14836_14869[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (11)))
{var inst_14779 = (state_14813[(7)]);var inst_14765 = (state_14813[(9)]);var inst_14779__$1 = cljs.core.seq.call(null,inst_14765);var state_14813__$1 = (function (){var statearr_14837 = state_14813;(statearr_14837[(7)] = inst_14779__$1);
return statearr_14837;
})();if(inst_14779__$1)
{var statearr_14838_14870 = state_14813__$1;(statearr_14838_14870[(1)] = (14));
} else
{var statearr_14839_14871 = state_14813__$1;(statearr_14839_14871[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (9)))
{var inst_14801 = (state_14813[(2)]);var inst_14802 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_14813__$1 = (function (){var statearr_14840 = state_14813;(statearr_14840[(15)] = inst_14801);
return statearr_14840;
})();if(cljs.core.truth_(inst_14802))
{var statearr_14841_14872 = state_14813__$1;(statearr_14841_14872[(1)] = (21));
} else
{var statearr_14842_14873 = state_14813__$1;(statearr_14842_14873[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (5)))
{var inst_14757 = cljs.core.async.close_BANG_.call(null,out);var state_14813__$1 = state_14813;var statearr_14843_14874 = state_14813__$1;(statearr_14843_14874[(2)] = inst_14757);
(statearr_14843_14874[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (14)))
{var inst_14779 = (state_14813[(7)]);var inst_14781 = cljs.core.chunked_seq_QMARK_.call(null,inst_14779);var state_14813__$1 = state_14813;if(inst_14781)
{var statearr_14844_14875 = state_14813__$1;(statearr_14844_14875[(1)] = (17));
} else
{var statearr_14845_14876 = state_14813__$1;(statearr_14845_14876[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (16)))
{var inst_14797 = (state_14813[(2)]);var state_14813__$1 = state_14813;var statearr_14846_14877 = state_14813__$1;(statearr_14846_14877[(2)] = inst_14797);
(statearr_14846_14877[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14814 === (10)))
{var inst_14766 = (state_14813[(11)]);var inst_14768 = (state_14813[(12)]);var inst_14773 = cljs.core._nth.call(null,inst_14766,inst_14768);var state_14813__$1 = state_14813;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14813__$1,(13),out,inst_14773);
} else
{if((state_val_14814 === (18)))
{var inst_14779 = (state_14813[(7)]);var inst_14788 = cljs.core.first.call(null,inst_14779);var state_14813__$1 = state_14813;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14813__$1,(20),out,inst_14788);
} else
{if((state_val_14814 === (8)))
{var inst_14767 = (state_14813[(8)]);var inst_14768 = (state_14813[(12)]);var inst_14770 = (inst_14768 < inst_14767);var inst_14771 = inst_14770;var state_14813__$1 = state_14813;if(cljs.core.truth_(inst_14771))
{var statearr_14847_14878 = state_14813__$1;(statearr_14847_14878[(1)] = (10));
} else
{var statearr_14848_14879 = state_14813__$1;(statearr_14848_14879[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6439__auto__))
;return ((function (switch__6424__auto__,c__6439__auto__){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_14852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14852[(0)] = state_machine__6425__auto__);
(statearr_14852[(1)] = (1));
return statearr_14852;
});
var state_machine__6425__auto____1 = (function (state_14813){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_14813);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e14853){if((e14853 instanceof Object))
{var ex__6428__auto__ = e14853;var statearr_14854_14880 = state_14813;(statearr_14854_14880[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14813);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14853;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14881 = state_14813;
state_14813 = G__14881;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_14813){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_14813);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto__))
})();var state__6441__auto__ = (function (){var statearr_14855 = f__6440__auto__.call(null);(statearr_14855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto__);
return statearr_14855;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto__))
);
return c__6439__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6439__auto___14978 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___14978,out){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___14978,out){
return (function (state_14953){var state_val_14954 = (state_14953[(1)]);if((state_val_14954 === (7)))
{var inst_14948 = (state_14953[(2)]);var state_14953__$1 = state_14953;var statearr_14955_14979 = state_14953__$1;(statearr_14955_14979[(2)] = inst_14948);
(statearr_14955_14979[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (1)))
{var inst_14930 = null;var state_14953__$1 = (function (){var statearr_14956 = state_14953;(statearr_14956[(7)] = inst_14930);
return statearr_14956;
})();var statearr_14957_14980 = state_14953__$1;(statearr_14957_14980[(2)] = null);
(statearr_14957_14980[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (4)))
{var inst_14933 = (state_14953[(8)]);var inst_14933__$1 = (state_14953[(2)]);var inst_14934 = (inst_14933__$1 == null);var inst_14935 = cljs.core.not.call(null,inst_14934);var state_14953__$1 = (function (){var statearr_14958 = state_14953;(statearr_14958[(8)] = inst_14933__$1);
return statearr_14958;
})();if(inst_14935)
{var statearr_14959_14981 = state_14953__$1;(statearr_14959_14981[(1)] = (5));
} else
{var statearr_14960_14982 = state_14953__$1;(statearr_14960_14982[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (6)))
{var state_14953__$1 = state_14953;var statearr_14961_14983 = state_14953__$1;(statearr_14961_14983[(2)] = null);
(statearr_14961_14983[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (3)))
{var inst_14950 = (state_14953[(2)]);var inst_14951 = cljs.core.async.close_BANG_.call(null,out);var state_14953__$1 = (function (){var statearr_14962 = state_14953;(statearr_14962[(9)] = inst_14950);
return statearr_14962;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14953__$1,inst_14951);
} else
{if((state_val_14954 === (2)))
{var state_14953__$1 = state_14953;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14953__$1,(4),ch);
} else
{if((state_val_14954 === (11)))
{var inst_14933 = (state_14953[(8)]);var inst_14942 = (state_14953[(2)]);var inst_14930 = inst_14933;var state_14953__$1 = (function (){var statearr_14963 = state_14953;(statearr_14963[(10)] = inst_14942);
(statearr_14963[(7)] = inst_14930);
return statearr_14963;
})();var statearr_14964_14984 = state_14953__$1;(statearr_14964_14984[(2)] = null);
(statearr_14964_14984[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (9)))
{var inst_14933 = (state_14953[(8)]);var state_14953__$1 = state_14953;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14953__$1,(11),out,inst_14933);
} else
{if((state_val_14954 === (5)))
{var inst_14933 = (state_14953[(8)]);var inst_14930 = (state_14953[(7)]);var inst_14937 = cljs.core._EQ_.call(null,inst_14933,inst_14930);var state_14953__$1 = state_14953;if(inst_14937)
{var statearr_14966_14985 = state_14953__$1;(statearr_14966_14985[(1)] = (8));
} else
{var statearr_14967_14986 = state_14953__$1;(statearr_14967_14986[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (10)))
{var inst_14945 = (state_14953[(2)]);var state_14953__$1 = state_14953;var statearr_14968_14987 = state_14953__$1;(statearr_14968_14987[(2)] = inst_14945);
(statearr_14968_14987[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14954 === (8)))
{var inst_14930 = (state_14953[(7)]);var tmp14965 = inst_14930;var inst_14930__$1 = tmp14965;var state_14953__$1 = (function (){var statearr_14969 = state_14953;(statearr_14969[(7)] = inst_14930__$1);
return statearr_14969;
})();var statearr_14970_14988 = state_14953__$1;(statearr_14970_14988[(2)] = null);
(statearr_14970_14988[(1)] = (2));
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
}
}
}
});})(c__6439__auto___14978,out))
;return ((function (switch__6424__auto__,c__6439__auto___14978,out){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_14974 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14974[(0)] = state_machine__6425__auto__);
(statearr_14974[(1)] = (1));
return statearr_14974;
});
var state_machine__6425__auto____1 = (function (state_14953){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_14953);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e14975){if((e14975 instanceof Object))
{var ex__6428__auto__ = e14975;var statearr_14976_14989 = state_14953;(statearr_14976_14989[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14953);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14975;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14990 = state_14953;
state_14953 = G__14990;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_14953){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_14953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___14978,out))
})();var state__6441__auto__ = (function (){var statearr_14977 = f__6440__auto__.call(null);(statearr_14977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___14978);
return statearr_14977;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___14978,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6439__auto___15125 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___15125,out){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___15125,out){
return (function (state_15095){var state_val_15096 = (state_15095[(1)]);if((state_val_15096 === (7)))
{var inst_15091 = (state_15095[(2)]);var state_15095__$1 = state_15095;var statearr_15097_15126 = state_15095__$1;(statearr_15097_15126[(2)] = inst_15091);
(statearr_15097_15126[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15096 === (1)))
{var inst_15058 = (new Array(n));var inst_15059 = inst_15058;var inst_15060 = (0);var state_15095__$1 = (function (){var statearr_15098 = state_15095;(statearr_15098[(7)] = inst_15060);
(statearr_15098[(8)] = inst_15059);
return statearr_15098;
})();var statearr_15099_15127 = state_15095__$1;(statearr_15099_15127[(2)] = null);
(statearr_15099_15127[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15096 === (4)))
{var inst_15063 = (state_15095[(9)]);var inst_15063__$1 = (state_15095[(2)]);var inst_15064 = (inst_15063__$1 == null);var inst_15065 = cljs.core.not.call(null,inst_15064);var state_15095__$1 = (function (){var statearr_15100 = state_15095;(statearr_15100[(9)] = inst_15063__$1);
return statearr_15100;
})();if(inst_15065)
{var statearr_15101_15128 = state_15095__$1;(statearr_15101_15128[(1)] = (5));
} else
{var statearr_15102_15129 = state_15095__$1;(statearr_15102_15129[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15096 === (15)))
{var inst_15085 = (state_15095[(2)]);var state_15095__$1 = state_15095;var statearr_15103_15130 = state_15095__$1;(statearr_15103_15130[(2)] = inst_15085);
(statearr_15103_15130[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15096 === (13)))
{var state_15095__$1 = state_15095;var statearr_15104_15131 = state_15095__$1;(statearr_15104_15131[(2)] = null);
(statearr_15104_15131[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15096 === (6)))
{var inst_15060 = (state_15095[(7)]);var inst_15081 = (inst_15060 > (0));var state_15095__$1 = state_15095;if(cljs.core.truth_(inst_15081))
{var statearr_15105_15132 = state_15095__$1;(statearr_15105_15132[(1)] = (12));
} else
{var statearr_15106_15133 = state_15095__$1;(statearr_15106_15133[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15096 === (3)))
{var inst_15093 = (state_15095[(2)]);var state_15095__$1 = state_15095;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15095__$1,inst_15093);
} else
{if((state_val_15096 === (12)))
{var inst_15059 = (state_15095[(8)]);var inst_15083 = cljs.core.vec.call(null,inst_15059);var state_15095__$1 = state_15095;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15095__$1,(15),out,inst_15083);
} else
{if((state_val_15096 === (2)))
{var state_15095__$1 = state_15095;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15095__$1,(4),ch);
} else
{if((state_val_15096 === (11)))
{var inst_15075 = (state_15095[(2)]);var inst_15076 = (new Array(n));var inst_15059 = inst_15076;var inst_15060 = (0);var state_15095__$1 = (function (){var statearr_15107 = state_15095;(statearr_15107[(7)] = inst_15060);
(statearr_15107[(8)] = inst_15059);
(statearr_15107[(10)] = inst_15075);
return statearr_15107;
})();var statearr_15108_15134 = state_15095__$1;(statearr_15108_15134[(2)] = null);
(statearr_15108_15134[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15096 === (9)))
{var inst_15059 = (state_15095[(8)]);var inst_15073 = cljs.core.vec.call(null,inst_15059);var state_15095__$1 = state_15095;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15095__$1,(11),out,inst_15073);
} else
{if((state_val_15096 === (5)))
{var inst_15060 = (state_15095[(7)]);var inst_15068 = (state_15095[(11)]);var inst_15059 = (state_15095[(8)]);var inst_15063 = (state_15095[(9)]);var inst_15067 = (inst_15059[inst_15060] = inst_15063);var inst_15068__$1 = (inst_15060 + (1));var inst_15069 = (inst_15068__$1 < n);var state_15095__$1 = (function (){var statearr_15109 = state_15095;(statearr_15109[(11)] = inst_15068__$1);
(statearr_15109[(12)] = inst_15067);
return statearr_15109;
})();if(cljs.core.truth_(inst_15069))
{var statearr_15110_15135 = state_15095__$1;(statearr_15110_15135[(1)] = (8));
} else
{var statearr_15111_15136 = state_15095__$1;(statearr_15111_15136[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15096 === (14)))
{var inst_15088 = (state_15095[(2)]);var inst_15089 = cljs.core.async.close_BANG_.call(null,out);var state_15095__$1 = (function (){var statearr_15113 = state_15095;(statearr_15113[(13)] = inst_15088);
return statearr_15113;
})();var statearr_15114_15137 = state_15095__$1;(statearr_15114_15137[(2)] = inst_15089);
(statearr_15114_15137[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15096 === (10)))
{var inst_15079 = (state_15095[(2)]);var state_15095__$1 = state_15095;var statearr_15115_15138 = state_15095__$1;(statearr_15115_15138[(2)] = inst_15079);
(statearr_15115_15138[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15096 === (8)))
{var inst_15068 = (state_15095[(11)]);var inst_15059 = (state_15095[(8)]);var tmp15112 = inst_15059;var inst_15059__$1 = tmp15112;var inst_15060 = inst_15068;var state_15095__$1 = (function (){var statearr_15116 = state_15095;(statearr_15116[(7)] = inst_15060);
(statearr_15116[(8)] = inst_15059__$1);
return statearr_15116;
})();var statearr_15117_15139 = state_15095__$1;(statearr_15117_15139[(2)] = null);
(statearr_15117_15139[(1)] = (2));
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
}
}
}
}
}
}
}
});})(c__6439__auto___15125,out))
;return ((function (switch__6424__auto__,c__6439__auto___15125,out){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_15121 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15121[(0)] = state_machine__6425__auto__);
(statearr_15121[(1)] = (1));
return statearr_15121;
});
var state_machine__6425__auto____1 = (function (state_15095){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_15095);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e15122){if((e15122 instanceof Object))
{var ex__6428__auto__ = e15122;var statearr_15123_15140 = state_15095;(statearr_15123_15140[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15095);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15122;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15141 = state_15095;
state_15095 = G__15141;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_15095){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_15095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___15125,out))
})();var state__6441__auto__ = (function (){var statearr_15124 = f__6440__auto__.call(null);(statearr_15124[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___15125);
return statearr_15124;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___15125,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6439__auto___15284 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6439__auto___15284,out){
return (function (){var f__6440__auto__ = (function (){var switch__6424__auto__ = ((function (c__6439__auto___15284,out){
return (function (state_15254){var state_val_15255 = (state_15254[(1)]);if((state_val_15255 === (7)))
{var inst_15250 = (state_15254[(2)]);var state_15254__$1 = state_15254;var statearr_15256_15285 = state_15254__$1;(statearr_15256_15285[(2)] = inst_15250);
(statearr_15256_15285[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15255 === (1)))
{var inst_15213 = [];var inst_15214 = inst_15213;var inst_15215 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15254__$1 = (function (){var statearr_15257 = state_15254;(statearr_15257[(7)] = inst_15215);
(statearr_15257[(8)] = inst_15214);
return statearr_15257;
})();var statearr_15258_15286 = state_15254__$1;(statearr_15258_15286[(2)] = null);
(statearr_15258_15286[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15255 === (4)))
{var inst_15218 = (state_15254[(9)]);var inst_15218__$1 = (state_15254[(2)]);var inst_15219 = (inst_15218__$1 == null);var inst_15220 = cljs.core.not.call(null,inst_15219);var state_15254__$1 = (function (){var statearr_15259 = state_15254;(statearr_15259[(9)] = inst_15218__$1);
return statearr_15259;
})();if(inst_15220)
{var statearr_15260_15287 = state_15254__$1;(statearr_15260_15287[(1)] = (5));
} else
{var statearr_15261_15288 = state_15254__$1;(statearr_15261_15288[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15255 === (15)))
{var inst_15244 = (state_15254[(2)]);var state_15254__$1 = state_15254;var statearr_15262_15289 = state_15254__$1;(statearr_15262_15289[(2)] = inst_15244);
(statearr_15262_15289[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15255 === (13)))
{var state_15254__$1 = state_15254;var statearr_15263_15290 = state_15254__$1;(statearr_15263_15290[(2)] = null);
(statearr_15263_15290[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15255 === (6)))
{var inst_15214 = (state_15254[(8)]);var inst_15239 = inst_15214.length;var inst_15240 = (inst_15239 > (0));var state_15254__$1 = state_15254;if(cljs.core.truth_(inst_15240))
{var statearr_15264_15291 = state_15254__$1;(statearr_15264_15291[(1)] = (12));
} else
{var statearr_15265_15292 = state_15254__$1;(statearr_15265_15292[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15255 === (3)))
{var inst_15252 = (state_15254[(2)]);var state_15254__$1 = state_15254;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15254__$1,inst_15252);
} else
{if((state_val_15255 === (12)))
{var inst_15214 = (state_15254[(8)]);var inst_15242 = cljs.core.vec.call(null,inst_15214);var state_15254__$1 = state_15254;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15254__$1,(15),out,inst_15242);
} else
{if((state_val_15255 === (2)))
{var state_15254__$1 = state_15254;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15254__$1,(4),ch);
} else
{if((state_val_15255 === (11)))
{var inst_15218 = (state_15254[(9)]);var inst_15222 = (state_15254[(10)]);var inst_15232 = (state_15254[(2)]);var inst_15233 = [];var inst_15234 = inst_15233.push(inst_15218);var inst_15214 = inst_15233;var inst_15215 = inst_15222;var state_15254__$1 = (function (){var statearr_15266 = state_15254;(statearr_15266[(7)] = inst_15215);
(statearr_15266[(8)] = inst_15214);
(statearr_15266[(11)] = inst_15234);
(statearr_15266[(12)] = inst_15232);
return statearr_15266;
})();var statearr_15267_15293 = state_15254__$1;(statearr_15267_15293[(2)] = null);
(statearr_15267_15293[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15255 === (9)))
{var inst_15214 = (state_15254[(8)]);var inst_15230 = cljs.core.vec.call(null,inst_15214);var state_15254__$1 = state_15254;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15254__$1,(11),out,inst_15230);
} else
{if((state_val_15255 === (5)))
{var inst_15215 = (state_15254[(7)]);var inst_15218 = (state_15254[(9)]);var inst_15222 = (state_15254[(10)]);var inst_15222__$1 = f.call(null,inst_15218);var inst_15223 = cljs.core._EQ_.call(null,inst_15222__$1,inst_15215);var inst_15224 = cljs.core.keyword_identical_QMARK_.call(null,inst_15215,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_15225 = (inst_15223) || (inst_15224);var state_15254__$1 = (function (){var statearr_15268 = state_15254;(statearr_15268[(10)] = inst_15222__$1);
return statearr_15268;
})();if(cljs.core.truth_(inst_15225))
{var statearr_15269_15294 = state_15254__$1;(statearr_15269_15294[(1)] = (8));
} else
{var statearr_15270_15295 = state_15254__$1;(statearr_15270_15295[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15255 === (14)))
{var inst_15247 = (state_15254[(2)]);var inst_15248 = cljs.core.async.close_BANG_.call(null,out);var state_15254__$1 = (function (){var statearr_15272 = state_15254;(statearr_15272[(13)] = inst_15247);
return statearr_15272;
})();var statearr_15273_15296 = state_15254__$1;(statearr_15273_15296[(2)] = inst_15248);
(statearr_15273_15296[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15255 === (10)))
{var inst_15237 = (state_15254[(2)]);var state_15254__$1 = state_15254;var statearr_15274_15297 = state_15254__$1;(statearr_15274_15297[(2)] = inst_15237);
(statearr_15274_15297[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15255 === (8)))
{var inst_15218 = (state_15254[(9)]);var inst_15222 = (state_15254[(10)]);var inst_15214 = (state_15254[(8)]);var inst_15227 = inst_15214.push(inst_15218);var tmp15271 = inst_15214;var inst_15214__$1 = tmp15271;var inst_15215 = inst_15222;var state_15254__$1 = (function (){var statearr_15275 = state_15254;(statearr_15275[(14)] = inst_15227);
(statearr_15275[(7)] = inst_15215);
(statearr_15275[(8)] = inst_15214__$1);
return statearr_15275;
})();var statearr_15276_15298 = state_15254__$1;(statearr_15276_15298[(2)] = null);
(statearr_15276_15298[(1)] = (2));
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
}
}
}
}
}
}
}
});})(c__6439__auto___15284,out))
;return ((function (switch__6424__auto__,c__6439__auto___15284,out){
return (function() {
var state_machine__6425__auto__ = null;
var state_machine__6425__auto____0 = (function (){var statearr_15280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15280[(0)] = state_machine__6425__auto__);
(statearr_15280[(1)] = (1));
return statearr_15280;
});
var state_machine__6425__auto____1 = (function (state_15254){while(true){
var ret_value__6426__auto__ = (function (){try{while(true){
var result__6427__auto__ = switch__6424__auto__.call(null,state_15254);if(cljs.core.keyword_identical_QMARK_.call(null,result__6427__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6427__auto__;
}
break;
}
}catch (e15281){if((e15281 instanceof Object))
{var ex__6428__auto__ = e15281;var statearr_15282_15299 = state_15254;(statearr_15282_15299[(5)] = ex__6428__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15254);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15281;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6426__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15300 = state_15254;
state_15254 = G__15300;
continue;
}
} else
{return ret_value__6426__auto__;
}
break;
}
});
state_machine__6425__auto__ = function(state_15254){
switch(arguments.length){
case 0:
return state_machine__6425__auto____0.call(this);
case 1:
return state_machine__6425__auto____1.call(this,state_15254);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6425__auto____0;
state_machine__6425__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6425__auto____1;
return state_machine__6425__auto__;
})()
;})(switch__6424__auto__,c__6439__auto___15284,out))
})();var state__6441__auto__ = (function (){var statearr_15283 = f__6440__auto__.call(null);(statearr_15283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6439__auto___15284);
return statearr_15283;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6441__auto__);
});})(c__6439__auto___15284,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map