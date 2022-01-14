"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[673],{5318:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return u}});var i=t(7378);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},c=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=d(t),u=r,k=c["".concat(l,".").concat(u)]||c[u]||m[u]||a;return t?i.createElement(k,o(o({ref:n},p),{},{components:t})):i.createElement(k,o({ref:n},p))}));function u(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}c.displayName="MDXCreateElement"},6363:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return d},toc:function(){return p},default:function(){return h}});var i=t(5773),r=t(808),a=(t(7378),t(5318)),o=["components"],s={},l="Migrating from discord.py",d={unversionedId:"prerequisites/migrating-from-dpy",id:"prerequisites/migrating-from-dpy",title:"Migrating from discord.py",description:"After the discontinuation of discord.py (refer",source:"@site/docs/prerequisites/migrating-from-dpy.mdx",sourceDirName:"prerequisites",slug:"/prerequisites/migrating-from-dpy",permalink:"/prerequisites/migrating-from-dpy",editUrl:"https://github.com/DisnakeDev/guide/edit/main/guide/docs/prerequisites/migrating-from-dpy.mdx",tags:[],version:"current",lastUpdatedBy:"Abhigyan Tripathi",lastUpdatedAt:1642179184,formattedLastUpdatedAt:"1/14/2022",frontMatter:{},sidebar:"guideSidebar",previous:{title:"Installing disnake",permalink:"/prerequisites/installing-disnake"},next:{title:"Creating your application",permalink:"/prerequisites/creating-your-application"}},p=[{value:"Differences between libraries",id:"differences-between-libraries",children:[],level:2},{value:"Changing requirements",id:"changing-requirements",children:[],level:2},{value:"Rewriting your bot",id:"rewriting-your-bot",children:[{value:"Replace <code>discord</code> with <code>disnake</code>",id:"replace-discord-with-disnake",children:[],level:4},{value:"Import <code>disnake as discord</code>",id:"import-disnake-as-discord",children:[],level:4},{value:"Using the <code>discord</code> shim",id:"using-the-discord-shim",children:[],level:4}],level:2}],m=function(e){return function(n){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,a.kt)("div",n)}},c=m("Tabs"),u=m("TabItem"),k={toc:p};function h(e){var n=e.components,t=(0,r.Z)(e,o);return(0,a.kt)("wrapper",(0,i.Z)({},k,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"migrating-from-discordpy"},"Migrating from discord.py"),(0,a.kt)("p",null,"After the discontinuation of ",(0,a.kt)("inlineCode",{parentName:"p"},"discord.py")," (refer\n",(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/Rapptz/4a2f62751b9600a31a0d3c78100287f1"},"this gist"),"), many forks of the API wrapper branched\nonward to maintain the library, in order to keep it updated with the latest features and Discord API changes - ",(0,a.kt)("inlineCode",{parentName:"p"},"disnake"),"\nis one such fork."),(0,a.kt)("p",null,"Thus, if you've chosen ",(0,a.kt)("inlineCode",{parentName:"p"},"disnake")," as your fork of choice in order to implement interactions/components and other\nfeatures, this page will help you understand the changes in syntax, and aim for making your migrating process as smooth\nas possible."),(0,a.kt)("h2",{id:"differences-between-libraries"},"Differences between libraries"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"disnake")," is based on ",(0,a.kt)("inlineCode",{parentName:"p"},"discord.py 2.0"),", which had major syntax changes from its previous version. Therefore, if you're\nshifting to ",(0,a.kt)("inlineCode",{parentName:"p"},"disnake")," from a version of ",(0,a.kt)("inlineCode",{parentName:"p"},"discord.py")," lower than 2.0, you will have to make some important syntax changes\nin your code. You can refer ",(0,a.kt)("a",{parentName:"p",href:"https://gist.github.com/apple502j/f75b4f24652f04de85c7084ffd73ec58"},"this page")," for the full\nlist of breaking changes in ",(0,a.kt)("inlineCode",{parentName:"p"},"discord.py 2.0"),", though we will list some primary API reference changes here:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Methods and attributes that returned ",(0,a.kt)("inlineCode",{parentName:"li"},"TextChannel"),", etc can now return ",(0,a.kt)("inlineCode",{parentName:"li"},"Thread"),"."),(0,a.kt)("li",{parentName:"ul"},"Attributes that returned ",(0,a.kt)("inlineCode",{parentName:"li"},"Asset")," are renamed, e.g. attributes ending with ",(0,a.kt)("inlineCode",{parentName:"li"},"_url")," (i.e. ",(0,a.kt)("inlineCode",{parentName:"li"},"avatar_url"),") are changed to\n",(0,a.kt)("inlineCode",{parentName:"li"},"avatar.url"),". ",(0,a.kt)("inlineCode",{parentName:"li"},"User.avatar")," returns ",(0,a.kt)("inlineCode",{parentName:"li"},"None")," in case the default avatar is used."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"on_presence_update")," replaces ",(0,a.kt)("inlineCode",{parentName:"li"},"on_member_update")," for updates to ",(0,a.kt)("inlineCode",{parentName:"li"},"Member.status")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"Member.activities"),"."),(0,a.kt)("li",{parentName:"ul"},"Webhooks are changed significantly: ",(0,a.kt)("inlineCode",{parentName:"li"},"WebhookAdapter")," is removed, and synchronous requests using ",(0,a.kt)("inlineCode",{parentName:"li"},"requests")," is now\ninside ",(0,a.kt)("inlineCode",{parentName:"li"},"SyncWebhook"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"edit")," methods no longer updates cache and instead returns modified instance."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Client.logout")," is removed; use ",(0,a.kt)("inlineCode",{parentName:"li"},"Client.close")," instead."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Message.type")," for replies are now ",(0,a.kt)("inlineCode",{parentName:"li"},"MessageType.reply"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Reaction.custom_emoji")," property is changed to ",(0,a.kt)("inlineCode",{parentName:"li"},"Reaction.is_custom_emoji")," method."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"missing_perms")," attributes and arguments are renamed to ",(0,a.kt)("inlineCode",{parentName:"li"},"missing_permissions"),"."),(0,a.kt)("li",{parentName:"ul"},"Many arguments are now specified as positional-only or keyword-only; e.g. ",(0,a.kt)("inlineCode",{parentName:"li"},"oauth_url")," now takes keyword-only\narguments, and methods starting with ",(0,a.kt)("inlineCode",{parentName:"li"},"get_")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"fetch_")," take positional-only arguments.")),(0,a.kt)("h2",{id:"changing-requirements"},"Changing requirements"),(0,a.kt)("p",null,"In order to avoid conflicts between the libraries, you must uninstall ",(0,a.kt)("inlineCode",{parentName:"p"},"discord.py"),". You can do so by using the following\ncommand in your terminal:"),(0,a.kt)(c,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(u,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"py -3 -m pip uninstall discord\n"))),(0,a.kt)(u,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python3 -m pip uninstall discord\n"))),(0,a.kt)(u,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python3 -m pip uninstall discord\n")))),(0,a.kt)("p",null,"To install ",(0,a.kt)("inlineCode",{parentName:"p"},"disnake"),", you can follow the instructions on ",(0,a.kt)("a",{parentName:"p",href:"./installing-disnake"},"this page"),"."),(0,a.kt)("h2",{id:"rewriting-your-bot"},"Rewriting your bot"),(0,a.kt)("p",null,"As discussed above, rewriting your code from an older ",(0,a.kt)("inlineCode",{parentName:"p"},"discord.py")," version to ",(0,a.kt)("inlineCode",{parentName:"p"},"disnake")," will require some major syntax\nchanges. But if you're migrating from ",(0,a.kt)("inlineCode",{parentName:"p"},"discord.py 2.0"),", all that's left now is changing the library references\nthroughout the code, since the base code for both the libraries is practically the same."),(0,a.kt)("p",null,"There are three ways to switch between libraries:"),(0,a.kt)("h4",{id:"replace-discord-with-disnake"},"Replace ",(0,a.kt)("inlineCode",{parentName:"h4"},"discord")," with ",(0,a.kt)("inlineCode",{parentName:"h4"},"disnake")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Import ",(0,a.kt)("inlineCode",{parentName:"p"},"disnake")," into your code (and delete the lines where you import ",(0,a.kt)("inlineCode",{parentName:"p"},"discord"),")."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-py"},"import disnake\nfrom disnake.ext import commands\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"With your favorite editor, replace every ",(0,a.kt)("inlineCode",{parentName:"p"},"discord")," reference in your code with ",(0,a.kt)("inlineCode",{parentName:"p"},"disnake"),' (this is fairly simple, if\nyour editor has a "Find & Replace" tool).'))),(0,a.kt)("h4",{id:"import-disnake-as-discord"},"Import ",(0,a.kt)("inlineCode",{parentName:"h4"},"disnake as discord")),(0,a.kt)("p",null,"Import ",(0,a.kt)("inlineCode",{parentName:"p"},"disnake as discord")," into your code (and delete the lines where you import ",(0,a.kt)("inlineCode",{parentName:"p"},"discord"),"). This reduces the effort of\nchanging all references throughout your code."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-py"},"import disnake as discord\nfrom disnake.ext import commands\n")),(0,a.kt)("h4",{id:"using-the-discord-shim"},"Using the ",(0,a.kt)("inlineCode",{parentName:"h4"},"discord")," shim"),(0,a.kt)("p",null,"Using the ",(0,a.kt)("inlineCode",{parentName:"p"},"discord")," shim allows you to use ",(0,a.kt)("inlineCode",{parentName:"p"},"disnake"),", without the need to import it directly or importing it as\ndiscord - thus eliminating the need to change your code at all. To install the shim, you can use the following command\nin your terminal:"),(0,a.kt)(c,{groupId:"operating-systems",mdxType:"Tabs"},(0,a.kt)(u,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"py -3 -m pip install disnake[discord]\n"))),(0,a.kt)(u,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python3 -m pip install disnake[discord]\n"))),(0,a.kt)(u,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"python3 -m pip install disnake[discord]\n")))),(0,a.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"We don't recommend using the shim, as it is updated less frequently and may break the behaviour of\ninteractions/components in some cases. If possible, proceed with one of the other two procedures mentioned."))),(0,a.kt)("p",null,"And that's it! Since ",(0,a.kt)("inlineCode",{parentName:"p"},"disnake")," is a fork of ",(0,a.kt)("inlineCode",{parentName:"p"},"discord.py"),", it inherits a lot of similarities - though we recommend you to\nalways run your code to fix any possible issues."))}h.isMDXComponent=!0}}]);