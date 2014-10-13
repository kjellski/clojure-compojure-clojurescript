// Compiled by ClojureScript 0.0-2371
goog.provide('cognitect.transit');
goog.require('cljs.core');
goog.require('goog.math.Long');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.eq');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit.types');
goog.require('com.cognitect.transit');
goog.require('com.cognitect.transit');
cljs.core.UUID.prototype.cljs$core$IEquiv$ = true;
cljs.core.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return (this$__$1.uuid === other.uuid);
} else
{if((other instanceof com.cognitect.transit.types.UUID))
{return (this$__$1.uuid === other.toString());
} else
{return false;

}
}
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;if((other instanceof cljs.core.UUID))
{return cljs.core._equiv.call(null,other,this$__$1);
} else
{return this$__$1.equiv(other);
}
});
goog.math.Long.prototype.cljs$core$IEquiv$ = true;
goog.math.Long.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this$,other){var this$__$1 = this;return this$__$1.equiv(other);
});
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.TaggedValue.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$ = true;
com.cognitect.transit.types.UUID.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
goog.math.Long.prototype.cljs$core$IHash$ = true;
goog.math.Long.prototype.cljs$core$IHash$_hash$arity$1 = (function (this$){var this$__$1 = this;return com.cognitect.transit.eq.hashCode.call(null,this$__$1);
});
cognitect.transit.opts_merge = (function opts_merge(a,b){var seq__11919_11923 = cljs.core.seq.call(null,cljs.core.js_keys.call(null,b));var chunk__11920_11924 = null;var count__11921_11925 = (0);var i__11922_11926 = (0);while(true){
if((i__11922_11926 < count__11921_11925))
{var k_11927 = cljs.core._nth.call(null,chunk__11920_11924,i__11922_11926);var v_11928 = (b[k_11927]);(a[k_11927] = v_11928);
{
var G__11929 = seq__11919_11923;
var G__11930 = chunk__11920_11924;
var G__11931 = count__11921_11925;
var G__11932 = (i__11922_11926 + (1));
seq__11919_11923 = G__11929;
chunk__11920_11924 = G__11930;
count__11921_11925 = G__11931;
i__11922_11926 = G__11932;
continue;
}
} else
{var temp__4126__auto___11933 = cljs.core.seq.call(null,seq__11919_11923);if(temp__4126__auto___11933)
{var seq__11919_11934__$1 = temp__4126__auto___11933;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11919_11934__$1))
{var c__4369__auto___11935 = cljs.core.chunk_first.call(null,seq__11919_11934__$1);{
var G__11936 = cljs.core.chunk_rest.call(null,seq__11919_11934__$1);
var G__11937 = c__4369__auto___11935;
var G__11938 = cljs.core.count.call(null,c__4369__auto___11935);
var G__11939 = (0);
seq__11919_11923 = G__11936;
chunk__11920_11924 = G__11937;
count__11921_11925 = G__11938;
i__11922_11926 = G__11939;
continue;
}
} else
{var k_11940 = cljs.core.first.call(null,seq__11919_11934__$1);var v_11941 = (b[k_11940]);(a[k_11940] = v_11941);
{
var G__11942 = cljs.core.next.call(null,seq__11919_11934__$1);
var G__11943 = null;
var G__11944 = (0);
var G__11945 = (0);
seq__11919_11923 = G__11942;
chunk__11920_11924 = G__11943;
count__11921_11925 = G__11944;
i__11922_11926 = G__11945;
continue;
}
}
} else
{}
}
break;
}
return a;
});

/**
* @constructor
*/
cognitect.transit.MapBuilder = (function (){
})
cognitect.transit.MapBuilder.cljs$lang$type = true;
cognitect.transit.MapBuilder.cljs$lang$ctorStr = "cognitect.transit/MapBuilder";
cognitect.transit.MapBuilder.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cognitect.transit/MapBuilder");
});
cognitect.transit.MapBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);
});
cognitect.transit.MapBuilder.prototype.add = (function (m,k,v,node){var self__ = this;
var _ = this;return cljs.core.assoc_BANG_.call(null,m,k,v);
});
cognitect.transit.MapBuilder.prototype.finalize = (function (m,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,m);
});
cognitect.transit.MapBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentArrayMap.fromArray.call(null,arr,true,true);
});
cognitect.transit.__GT_MapBuilder = (function __GT_MapBuilder(){return (new cognitect.transit.MapBuilder());
});

/**
* @constructor
*/
cognitect.transit.VectorBuilder = (function (){
})
cognitect.transit.VectorBuilder.cljs$lang$type = true;
cognitect.transit.VectorBuilder.cljs$lang$ctorStr = "cognitect.transit/VectorBuilder";
cognitect.transit.VectorBuilder.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cognitect.transit/VectorBuilder");
});
cognitect.transit.VectorBuilder.prototype.init = (function (node){var self__ = this;
var _ = this;return cljs.core.transient$.call(null,cljs.core.PersistentVector.EMPTY);
});
cognitect.transit.VectorBuilder.prototype.add = (function (v,x,node){var self__ = this;
var _ = this;return cljs.core.conj_BANG_.call(null,v,x);
});
cognitect.transit.VectorBuilder.prototype.finalize = (function (v,node){var self__ = this;
var _ = this;return cljs.core.persistent_BANG_.call(null,v);
});
cognitect.transit.VectorBuilder.prototype.fromArray = (function (arr,node){var self__ = this;
var _ = this;return cljs.core.PersistentVector.fromArray.call(null,arr,true);
});
cognitect.transit.__GT_VectorBuilder = (function __GT_VectorBuilder(){return (new cognitect.transit.VectorBuilder());
});
/**
* Return a transit reader. type may be either :json or :json-verbose.
* opts may be a map optionally containing a :handlers entry. The value
* of :handlers should be map from tag to a decoder function which returns
* then in-memory representation of the semantic transit value.
*/
cognitect.transit.reader = (function() {
var reader = null;
var reader__1 = (function (type){return reader.call(null,type,null);
});
var reader__2 = (function (type,opts){return com.cognitect.transit.reader.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"prefersStrings": false, "arrayBuilder": (new cognitect.transit.VectorBuilder()), "mapBuilder": (new cognitect.transit.MapBuilder()), "handlers": cljs.core.clj__GT_js.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, ["$",(function (v){return cljs.core.symbol.call(null,v);
}),":",(function (v){return cljs.core.keyword.call(null,v);
}),"set",(function (v){return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,v);
}),"list",(function (v){return cljs.core.into.call(null,cljs.core.List.EMPTY,v.reverse());
}),"cmap",(function (v){var i = (0);var ret = cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY);while(true){
if((i < v.length))
{{
var G__11946 = (i + (2));
var G__11947 = cljs.core.assoc_BANG_.call(null,ret,(v[i]),(v[(i + (1))]));
i = G__11946;
ret = G__11947;
continue;
}
} else
{return cljs.core.persistent_BANG_.call(null,ret);
}
break;
}
})], null),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts)))},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
reader = function(type,opts){
switch(arguments.length){
case 1:
return reader__1.call(this,type);
case 2:
return reader__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reader.cljs$core$IFn$_invoke$arity$1 = reader__1;
reader.cljs$core$IFn$_invoke$arity$2 = reader__2;
return reader;
})()
;
/**
* Read a transit encoded string into ClojureScript values given a
* transit reader.
*/
cognitect.transit.read = (function read(r,str){return r.read(str);
});

/**
* @constructor
*/
cognitect.transit.KeywordHandler = (function (){
})
cognitect.transit.KeywordHandler.cljs$lang$type = true;
cognitect.transit.KeywordHandler.cljs$lang$ctorStr = "cognitect.transit/KeywordHandler";
cognitect.transit.KeywordHandler.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cognitect.transit/KeywordHandler");
});
cognitect.transit.KeywordHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return ":";
});
cognitect.transit.KeywordHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.KeywordHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.fqn;
});
cognitect.transit.__GT_KeywordHandler = (function __GT_KeywordHandler(){return (new cognitect.transit.KeywordHandler());
});

/**
* @constructor
*/
cognitect.transit.SymbolHandler = (function (){
})
cognitect.transit.SymbolHandler.cljs$lang$type = true;
cognitect.transit.SymbolHandler.cljs$lang$ctorStr = "cognitect.transit/SymbolHandler";
cognitect.transit.SymbolHandler.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cognitect.transit/SymbolHandler");
});
cognitect.transit.SymbolHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "$";
});
cognitect.transit.SymbolHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.SymbolHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return v.str;
});
cognitect.transit.__GT_SymbolHandler = (function __GT_SymbolHandler(){return (new cognitect.transit.SymbolHandler());
});

/**
* @constructor
*/
cognitect.transit.ListHandler = (function (){
})
cognitect.transit.ListHandler.cljs$lang$type = true;
cognitect.transit.ListHandler.cljs$lang$ctorStr = "cognitect.transit/ListHandler";
cognitect.transit.ListHandler.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cognitect.transit/ListHandler");
});
cognitect.transit.ListHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "list";
});
cognitect.transit.ListHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__11948_11952 = cljs.core.seq.call(null,v);var chunk__11949_11953 = null;var count__11950_11954 = (0);var i__11951_11955 = (0);while(true){
if((i__11951_11955 < count__11950_11954))
{var x_11956 = cljs.core._nth.call(null,chunk__11949_11953,i__11951_11955);ret.push(x_11956);
{
var G__11957 = seq__11948_11952;
var G__11958 = chunk__11949_11953;
var G__11959 = count__11950_11954;
var G__11960 = (i__11951_11955 + (1));
seq__11948_11952 = G__11957;
chunk__11949_11953 = G__11958;
count__11950_11954 = G__11959;
i__11951_11955 = G__11960;
continue;
}
} else
{var temp__4126__auto___11961 = cljs.core.seq.call(null,seq__11948_11952);if(temp__4126__auto___11961)
{var seq__11948_11962__$1 = temp__4126__auto___11961;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11948_11962__$1))
{var c__4369__auto___11963 = cljs.core.chunk_first.call(null,seq__11948_11962__$1);{
var G__11964 = cljs.core.chunk_rest.call(null,seq__11948_11962__$1);
var G__11965 = c__4369__auto___11963;
var G__11966 = cljs.core.count.call(null,c__4369__auto___11963);
var G__11967 = (0);
seq__11948_11952 = G__11964;
chunk__11949_11953 = G__11965;
count__11950_11954 = G__11966;
i__11951_11955 = G__11967;
continue;
}
} else
{var x_11968 = cljs.core.first.call(null,seq__11948_11962__$1);ret.push(x_11968);
{
var G__11969 = cljs.core.next.call(null,seq__11948_11962__$1);
var G__11970 = null;
var G__11971 = (0);
var G__11972 = (0);
seq__11948_11952 = G__11969;
chunk__11949_11953 = G__11970;
count__11950_11954 = G__11971;
i__11951_11955 = G__11972;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.ListHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_ListHandler = (function __GT_ListHandler(){return (new cognitect.transit.ListHandler());
});

/**
* @constructor
*/
cognitect.transit.MapHandler = (function (){
})
cognitect.transit.MapHandler.cljs$lang$type = true;
cognitect.transit.MapHandler.cljs$lang$ctorStr = "cognitect.transit/MapHandler";
cognitect.transit.MapHandler.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cognitect.transit/MapHandler");
});
cognitect.transit.MapHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "map";
});
cognitect.transit.MapHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v;
});
cognitect.transit.MapHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_MapHandler = (function __GT_MapHandler(){return (new cognitect.transit.MapHandler());
});

/**
* @constructor
*/
cognitect.transit.SetHandler = (function (){
})
cognitect.transit.SetHandler.cljs$lang$type = true;
cognitect.transit.SetHandler.cljs$lang$ctorStr = "cognitect.transit/SetHandler";
cognitect.transit.SetHandler.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cognitect.transit/SetHandler");
});
cognitect.transit.SetHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "set";
});
cognitect.transit.SetHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__11973_11977 = cljs.core.seq.call(null,v);var chunk__11974_11978 = null;var count__11975_11979 = (0);var i__11976_11980 = (0);while(true){
if((i__11976_11980 < count__11975_11979))
{var x_11981 = cljs.core._nth.call(null,chunk__11974_11978,i__11976_11980);ret.push(x_11981);
{
var G__11982 = seq__11973_11977;
var G__11983 = chunk__11974_11978;
var G__11984 = count__11975_11979;
var G__11985 = (i__11976_11980 + (1));
seq__11973_11977 = G__11982;
chunk__11974_11978 = G__11983;
count__11975_11979 = G__11984;
i__11976_11980 = G__11985;
continue;
}
} else
{var temp__4126__auto___11986 = cljs.core.seq.call(null,seq__11973_11977);if(temp__4126__auto___11986)
{var seq__11973_11987__$1 = temp__4126__auto___11986;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11973_11987__$1))
{var c__4369__auto___11988 = cljs.core.chunk_first.call(null,seq__11973_11987__$1);{
var G__11989 = cljs.core.chunk_rest.call(null,seq__11973_11987__$1);
var G__11990 = c__4369__auto___11988;
var G__11991 = cljs.core.count.call(null,c__4369__auto___11988);
var G__11992 = (0);
seq__11973_11977 = G__11989;
chunk__11974_11978 = G__11990;
count__11975_11979 = G__11991;
i__11976_11980 = G__11992;
continue;
}
} else
{var x_11993 = cljs.core.first.call(null,seq__11973_11987__$1);ret.push(x_11993);
{
var G__11994 = cljs.core.next.call(null,seq__11973_11987__$1);
var G__11995 = null;
var G__11996 = (0);
var G__11997 = (0);
seq__11973_11977 = G__11994;
chunk__11974_11978 = G__11995;
count__11975_11979 = G__11996;
i__11976_11980 = G__11997;
continue;
}
}
} else
{}
}
break;
}
return com.cognitect.transit.tagged.call(null,"array",ret);
});
cognitect.transit.SetHandler.prototype.stringRep = (function (){var self__ = this;
var v = this;return null;
});
cognitect.transit.__GT_SetHandler = (function __GT_SetHandler(){return (new cognitect.transit.SetHandler());
});

/**
* @constructor
*/
cognitect.transit.VectorHandler = (function (){
})
cognitect.transit.VectorHandler.cljs$lang$type = true;
cognitect.transit.VectorHandler.cljs$lang$ctorStr = "cognitect.transit/VectorHandler";
cognitect.transit.VectorHandler.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cognitect.transit/VectorHandler");
});
cognitect.transit.VectorHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "array";
});
cognitect.transit.VectorHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;var ret = [];var seq__11998_12002 = cljs.core.seq.call(null,v);var chunk__11999_12003 = null;var count__12000_12004 = (0);var i__12001_12005 = (0);while(true){
if((i__12001_12005 < count__12000_12004))
{var x_12006 = cljs.core._nth.call(null,chunk__11999_12003,i__12001_12005);ret.push(x_12006);
{
var G__12007 = seq__11998_12002;
var G__12008 = chunk__11999_12003;
var G__12009 = count__12000_12004;
var G__12010 = (i__12001_12005 + (1));
seq__11998_12002 = G__12007;
chunk__11999_12003 = G__12008;
count__12000_12004 = G__12009;
i__12001_12005 = G__12010;
continue;
}
} else
{var temp__4126__auto___12011 = cljs.core.seq.call(null,seq__11998_12002);if(temp__4126__auto___12011)
{var seq__11998_12012__$1 = temp__4126__auto___12011;if(cljs.core.chunked_seq_QMARK_.call(null,seq__11998_12012__$1))
{var c__4369__auto___12013 = cljs.core.chunk_first.call(null,seq__11998_12012__$1);{
var G__12014 = cljs.core.chunk_rest.call(null,seq__11998_12012__$1);
var G__12015 = c__4369__auto___12013;
var G__12016 = cljs.core.count.call(null,c__4369__auto___12013);
var G__12017 = (0);
seq__11998_12002 = G__12014;
chunk__11999_12003 = G__12015;
count__12000_12004 = G__12016;
i__12001_12005 = G__12017;
continue;
}
} else
{var x_12018 = cljs.core.first.call(null,seq__11998_12012__$1);ret.push(x_12018);
{
var G__12019 = cljs.core.next.call(null,seq__11998_12012__$1);
var G__12020 = null;
var G__12021 = (0);
var G__12022 = (0);
seq__11998_12002 = G__12019;
chunk__11999_12003 = G__12020;
count__12000_12004 = G__12021;
i__12001_12005 = G__12022;
continue;
}
}
} else
{}
}
break;
}
return ret;
});
cognitect.transit.VectorHandler.prototype.stringRep = (function (v){var self__ = this;
var _ = this;return null;
});
cognitect.transit.__GT_VectorHandler = (function __GT_VectorHandler(){return (new cognitect.transit.VectorHandler());
});

/**
* @constructor
*/
cognitect.transit.UUIDHandler = (function (){
})
cognitect.transit.UUIDHandler.cljs$lang$type = true;
cognitect.transit.UUIDHandler.cljs$lang$ctorStr = "cognitect.transit/UUIDHandler";
cognitect.transit.UUIDHandler.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cognitect.transit/UUIDHandler");
});
cognitect.transit.UUIDHandler.prototype.tag = (function (v){var self__ = this;
var _ = this;return "u";
});
cognitect.transit.UUIDHandler.prototype.rep = (function (v){var self__ = this;
var _ = this;return v.uuid;
});
cognitect.transit.UUIDHandler.prototype.stringRep = (function (v){var self__ = this;
var this$ = this;return this$.rep(v);
});
cognitect.transit.__GT_UUIDHandler = (function __GT_UUIDHandler(){return (new cognitect.transit.UUIDHandler());
});
/**
* Return a transit writer. type maybe either :json or :json-verbose.
* opts is a map containing a :handlers entry. :handlers is a JavaScript
* array of interleaved type constructors and handler instances for those
* type constructors.
*/
cognitect.transit.writer = (function() {
var writer = null;
var writer__1 = (function (type){return writer.call(null,type,null);
});
var writer__2 = (function (type,opts){var keyword_handler = (new cognitect.transit.KeywordHandler());var symbol_handler = (new cognitect.transit.SymbolHandler());var list_handler = (new cognitect.transit.ListHandler());var map_handler = (new cognitect.transit.MapHandler());var set_handler = (new cognitect.transit.SetHandler());var vector_handler = (new cognitect.transit.VectorHandler());var uuid_handler = (new cognitect.transit.UUIDHandler());var handlers = cljs.core.merge.call(null,cljs.core.PersistentHashMap.fromArrays([cljs.core.PersistentHashMap,cljs.core.Cons,cljs.core.PersistentArrayMap,cljs.core.NodeSeq,cljs.core.PersistentQueue,cljs.core.IndexedSeq,cljs.core.Keyword,cljs.core.EmptyList,cljs.core.LazySeq,cljs.core.Subvec,cljs.core.PersistentQueueSeq,cljs.core.ArrayNodeSeq,cljs.core.ValSeq,cljs.core.PersistentArrayMapSeq,cljs.core.PersistentVector,cljs.core.List,cljs.core.RSeq,cljs.core.PersistentHashSet,cljs.core.PersistentTreeMap,cljs.core.KeySeq,cljs.core.ChunkedSeq,cljs.core.PersistentTreeSet,cljs.core.ChunkedCons,cljs.core.Symbol,cljs.core.UUID,cljs.core.Range,cljs.core.PersistentTreeMapSeq],[map_handler,list_handler,map_handler,list_handler,list_handler,list_handler,keyword_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,list_handler,list_handler,vector_handler,list_handler,list_handler,set_handler,map_handler,list_handler,list_handler,set_handler,list_handler,symbol_handler,uuid_handler,list_handler,list_handler]),new cljs.core.Keyword(null,"handlers","handlers",79528781).cljs$core$IFn$_invoke$arity$1(opts));return com.cognitect.transit.writer.call(null,cljs.core.name.call(null,type),cognitect.transit.opts_merge.call(null,{"unpack": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (x){if((x instanceof cljs.core.PersistentArrayMap))
{return x.arr;
} else
{return false;
}
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
, "handlers": (function (){var x12032 = cljs.core.clone.call(null,handlers);x12032.forEach = ((function (x12032,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (f){var coll = this;var seq__12033 = cljs.core.seq.call(null,coll);var chunk__12034 = null;var count__12035 = (0);var i__12036 = (0);while(true){
if((i__12036 < count__12035))
{var vec__12037 = cljs.core._nth.call(null,chunk__12034,i__12036);var k = cljs.core.nth.call(null,vec__12037,(0),null);var v = cljs.core.nth.call(null,vec__12037,(1),null);f.call(null,v,k);
{
var G__12039 = seq__12033;
var G__12040 = chunk__12034;
var G__12041 = count__12035;
var G__12042 = (i__12036 + (1));
seq__12033 = G__12039;
chunk__12034 = G__12040;
count__12035 = G__12041;
i__12036 = G__12042;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__12033);if(temp__4126__auto__)
{var seq__12033__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__12033__$1))
{var c__4369__auto__ = cljs.core.chunk_first.call(null,seq__12033__$1);{
var G__12043 = cljs.core.chunk_rest.call(null,seq__12033__$1);
var G__12044 = c__4369__auto__;
var G__12045 = cljs.core.count.call(null,c__4369__auto__);
var G__12046 = (0);
seq__12033 = G__12043;
chunk__12034 = G__12044;
count__12035 = G__12045;
i__12036 = G__12046;
continue;
}
} else
{var vec__12038 = cljs.core.first.call(null,seq__12033__$1);var k = cljs.core.nth.call(null,vec__12038,(0),null);var v = cljs.core.nth.call(null,vec__12038,(1),null);f.call(null,v,k);
{
var G__12047 = cljs.core.next.call(null,seq__12033__$1);
var G__12048 = null;
var G__12049 = (0);
var G__12050 = (0);
seq__12033 = G__12047;
chunk__12034 = G__12048;
count__12035 = G__12049;
i__12036 = G__12050;
continue;
}
}
} else
{return null;
}
}
break;
}
});})(x12032,keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
;
return x12032;
})(), "objectBuilder": ((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (m,kfn,vfn){return cljs.core.reduce_kv.call(null,((function (keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers){
return (function (obj,k,v){var G__12031 = obj;G__12031.push(kfn.call(null,k),vfn.call(null,v));
return G__12031;
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
,["^ "],m);
});})(keyword_handler,symbol_handler,list_handler,map_handler,set_handler,vector_handler,uuid_handler,handlers))
},cljs.core.clj__GT_js.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"handlers","handlers",79528781)))));
});
writer = function(type,opts){
switch(arguments.length){
case 1:
return writer__1.call(this,type);
case 2:
return writer__2.call(this,type,opts);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
writer.cljs$core$IFn$_invoke$arity$1 = writer__1;
writer.cljs$core$IFn$_invoke$arity$2 = writer__2;
return writer;
})()
;
/**
* Encode an object into a transit string given a transit writer.
*/
cognitect.transit.write = (function write(w,o){return w.write(o);
});
/**
* Construct a read handler. Implemented as identity, exists primarily
* for API compatiblity with transit-clj
*/
cognitect.transit.read_handler = (function read_handler(from_rep){return from_rep;
});
/**
* Creates a transit write handler whose tag, rep,
* stringRep, and verboseWriteHandler methods
* invoke the provided fns.
*/
cognitect.transit.write_handler = (function() {
var write_handler = null;
var write_handler__2 = (function (tag_fn,rep_fn){return write_handler.call(null,tag_fn,rep_fn,null,null);
});
var write_handler__3 = (function (tag_fn,rep_fn,str_rep_fn){return write_handler.call(null,tag_fn,rep_fn,str_rep_fn,null);
});
var write_handler__4 = (function (tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){if(typeof cognitect.transit.t12054 !== 'undefined')
{} else
{
/**
* @constructor
*/
cognitect.transit.t12054 = (function (verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,meta12055){
this.verbose_handler_fn = verbose_handler_fn;
this.str_rep_fn = str_rep_fn;
this.rep_fn = rep_fn;
this.tag_fn = tag_fn;
this.write_handler = write_handler;
this.meta12055 = meta12055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cognitect.transit.t12054.cljs$lang$type = true;
cognitect.transit.t12054.cljs$lang$ctorStr = "cognitect.transit/t12054";
cognitect.transit.t12054.cljs$lang$ctorPrWriter = (function (this__4176__auto__,writer__4177__auto__,opt__4178__auto__){return cljs.core._write.call(null,writer__4177__auto__,"cognitect.transit/t12054");
});
cognitect.transit.t12054.prototype.tag = (function (o){var self__ = this;
var _ = this;return self__.tag_fn.call(null,o);
});
cognitect.transit.t12054.prototype.rep = (function (o){var self__ = this;
var _ = this;return self__.rep_fn.call(null,o);
});
cognitect.transit.t12054.prototype.stringRep = (function (o){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.str_rep_fn))
{return self__.str_rep_fn.call(null,o);
} else
{return null;
}
});
cognitect.transit.t12054.prototype.getVerboseHandler = (function (){var self__ = this;
var _ = this;if(cljs.core.truth_(self__.verbose_handler_fn))
{return self__.verbose_handler_fn.call(null);
} else
{return null;
}
});
cognitect.transit.t12054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12056){var self__ = this;
var _12056__$1 = this;return self__.meta12055;
});
cognitect.transit.t12054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12056,meta12055__$1){var self__ = this;
var _12056__$1 = this;return (new cognitect.transit.t12054(self__.verbose_handler_fn,self__.str_rep_fn,self__.rep_fn,self__.tag_fn,self__.write_handler,meta12055__$1));
});
cognitect.transit.__GT_t12054 = (function __GT_t12054(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta12055){return (new cognitect.transit.t12054(verbose_handler_fn__$1,str_rep_fn__$1,rep_fn__$1,tag_fn__$1,write_handler__$1,meta12055));
});
}
return (new cognitect.transit.t12054(verbose_handler_fn,str_rep_fn,rep_fn,tag_fn,write_handler,null));
});
write_handler = function(tag_fn,rep_fn,str_rep_fn,verbose_handler_fn){
switch(arguments.length){
case 2:
return write_handler__2.call(this,tag_fn,rep_fn);
case 3:
return write_handler__3.call(this,tag_fn,rep_fn,str_rep_fn);
case 4:
return write_handler__4.call(this,tag_fn,rep_fn,str_rep_fn,verbose_handler_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
write_handler.cljs$core$IFn$_invoke$arity$2 = write_handler__2;
write_handler.cljs$core$IFn$_invoke$arity$3 = write_handler__3;
write_handler.cljs$core$IFn$_invoke$arity$4 = write_handler__4;
return write_handler;
})()
;
/**
* Construct a tagged value. tag must be a string and rep can
* be any transit encodeable value.
*/
cognitect.transit.tagged_value = (function tagged_value(tag,rep){return com.cognitect.transit.types.taggedValue.call(null,tag,rep);
});
/**
* Returns true if x is a transit tagged value, false otherwise.
*/
cognitect.transit.tagged_value_QMARK_ = (function tagged_value_QMARK_(x){return com.cognitect.transit.types.isTaggedValue.call(null,x);
});
/**
* Construct a transit integer value. Returns JavaScript number if
* in the 53bit integer range, a goog.math.Long instance if above. s
* may be a string or a JavaScript number.
*/
cognitect.transit.integer = (function integer(s){return com.cognitect.transit.types.integer.call(null,s);
});
/**
* Returns true if x is an integer value between the 53bit and 64bit
* range, false otherwise.
*/
cognitect.transit.integer_QMARK_ = (function integer_QMARK_(x){return com.cognitect.transit.types.isInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigint = (function bigint(s){return com.cognitect.transit.types.bigInteger.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigint_QMARK_ = (function bigint_QMARK_(x){return com.cognitect.transit.types.isBigInteger.call(null,x);
});
/**
* Construct a big decimal from a string.
*/
cognitect.transit.bigdec = (function bigdec(s){return com.cognitect.transit.types.bigDecimalValue.call(null,s);
});
/**
* Returns true if x is a transit big decimal value, false otherwise.
*/
cognitect.transit.bigdec_QMARK_ = (function bigdec_QMARK_(x){return com.cognitect.transit.types.isBigDecimal.call(null,x);
});
/**
* Construct a URI from a string.
*/
cognitect.transit.uri = (function uri(s){return com.cognitect.transit.types.uri.call(null,s);
});
/**
* Returns true if x is a transit URI value, false otherwise.
*/
cognitect.transit.uri_QMARK_ = (function uri_QMARK_(x){return com.cognitect.transit.types.isURI.call(null,x);
});
/**
* Construct a UUID from a string.
*/
cognitect.transit.uuid = (function uuid(s){return com.cognitect.transit.types.uuid.call(null,s);
});
/**
* Returns true if x is a transit UUID value, false otherwise.
*/
cognitect.transit.uuid_QMARK_ = (function uuid_QMARK_(x){return com.cognitect.transit.types.isUUID.call(null,x);
});
/**
* Construct a transit binary value. s should be base64 encoded
* string.
*/
cognitect.transit.binary = (function binary(s){return com.cognitect.transit.types.binary.call(null,s);
});
/**
* Returns true if x is a transit binary value, false otherwise.
*/
cognitect.transit.binary_QMARK_ = (function binary_QMARK_(x){return com.cognitect.transit.types.isBinary.call(null,x);
});
/**
* Construct a quoted transit value. x should be a transit
* encodeable value.
*/
cognitect.transit.quoted = (function quoted(x){return com.cognitect.transit.types.quoted.call(null,x);
});
/**
* Returns true if x is a transit quoted value, false otherwise.
*/
cognitect.transit.quoted_QMARK_ = (function quoted_QMARK_(x){return com.cognitect.transit.types.isQuoted.call(null,x);
});
/**
* Construct a transit link value. x should be an IMap instance
* containing at a minimum the following keys: :href, :rel. It
* may optionall include :name, :render, and :prompt. :href must
* be a transit URI, all other values are strings, and :render must
* be either :image or :link.
*/
cognitect.transit.link = (function link(x){return com.cognitect.transit.types.link.call(null,x);
});
/**
* Returns true if x a transit link value, false if otherwise.
*/
cognitect.transit.link_QMARK_ = (function link_QMARK_(x){return com.cognitect.transit.types.isLink.call(null,x);
});

//# sourceMappingURL=transit.js.map