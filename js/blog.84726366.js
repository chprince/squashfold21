(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["blog"],{"37d3":function(t,o,s){"use strict";s.r(o);var e=function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("div",{staticClass:"post layout-container"},[s("div",{staticClass:"post__top"},[s("img",{attrs:{src:this.story.content.image,alt:this.story.content.title}}),s("div",[s("div",{staticClass:"post-meta"},[s("strong",[t._v(t._s(t.dateBuilder(this.story.first_published_at)))]),t._v(" | "),t._l(this.story.tag_list,(function(o){return s("span",{key:o},[t._v(t._s(o))])}))],2),s("h1",[t._v(t._s(this.story.content.title))]),s("p",{staticClass:"intro"},[t._v(t._s(this.story.content.intro))])])]),s("div",{staticClass:"post__content"},[s("rich-text-renderer",{attrs:{document:this.story.content.long_text}}),s("p",{staticClass:"small"},[t._v("Last edited "+t._s(t.dateBuilder(this.story.published_at)))])],1)])},n=[],a=(s("99af"),s("f7a8")),r="Ghd2CFQWsS9RgzmF2X03GQtt",i=new a["a"]({accessToken:r}),c={name:"PostSample",data:function(){return{story:"hello"}},props:{},components:{},computed:{},created:function(){var t=this;window.storyblok.init({accessToken:r}),window.storyblok.on("change",(function(){t.getStory(t.$route.params.id,"draft")})),window.storyblok.pingEditor((function(){window.storyblok.isInEditor()?t.getStory(t.$route.params.id,"draft"):t.getStory(t.$route.params.id,"published")}))},methods:{getStory:function(t,o){var s=this;console.log(t),i.get("cdn/stories/blog/"+t,{version:o}).then((function(t){s.story=t.data.story})).catch((function(t){console.log(t)}))},dateBuilder:function(){var t=new Date,o=["January","February","March","April","May","June","July","August","September","October","November","December"],s=t.getDate(),e=o[t.getMonth()],n=t.getFullYear();return"".concat(s," ").concat(e," ").concat(n)}}},l=c,u=(s("af4a"),s("2877")),d=Object(u["a"])(l,e,n,!1,null,"940a3d30",null);o["default"]=d.exports},6039:function(t,o,s){},af4a:function(t,o,s){"use strict";s("6039")}}]);
//# sourceMappingURL=blog.84726366.js.map