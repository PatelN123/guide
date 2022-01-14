"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[136],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return u}});var i=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),u=a,h=m["".concat(l,".").concat(u)]||m[u]||d[u]||o;return n?i.createElement(h,r(r({ref:t},c),{},{components:n})):i.createElement(h,r({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9479:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return c},default:function(){return g}});var i=n(5773),a=n(808),o=(n(7378),n(5318)),r=["components"],s={description:"An in-depth article on initializing your Discord bot project.",keywords:["disnake","bot","guide","tutorial","initial files","initialization","python"]},l="Initial files",p={unversionedId:"getting-started/initial-files",id:"getting-started/initial-files",title:"Initial files",description:"An in-depth article on initializing your Discord bot project.",source:"@site/docs/getting-started/initial-files.mdx",sourceDirName:"getting-started",slug:"/getting-started/initial-files",permalink:"/getting-started/initial-files",editUrl:"https://github.com/DisnakeDev/guide/edit/main/guide/docs/getting-started/initial-files.mdx",tags:[],version:"current",lastUpdatedBy:"Abhigyan Tripathi",lastUpdatedAt:1642179184,formattedLastUpdatedAt:"1/14/2022",frontMatter:{description:"An in-depth article on initializing your Discord bot project.",keywords:["disnake","bot","guide","tutorial","initial files","initialization","python"]},sidebar:"guideSidebar",previous:{title:"Creating your application",permalink:"/prerequisites/creating-your-application"},next:{title:"Creating commands",permalink:"/getting-started/creating-commands"}},c=[{value:"Creating configuration files",id:"creating-configuration-files",children:[{value:"Using environment variables",id:"using-environment-variables",children:[],level:3},{value:"Git and <code>.gitignore</code>",id:"git-and-gitignore",children:[],level:3}],level:2},{value:"Creating the main file",id:"creating-the-main-file",children:[],level:2},{value:"Resulting code",id:"resulting-code",children:[],level:2}],d=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,o.kt)("div",t)}},m=d("Tabs"),u=d("TabItem"),h=d("ResultingCode"),v={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,i.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"initial-files"},"Initial files"),(0,o.kt)("p",null,"Once you ",(0,o.kt)("a",{parentName:"p",href:"../prerequisites/creating-your-application#inviting-your-bot"},"add your bot to a server"),", the next step is to\nstart coding and get it online! Let's start by creating a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file for your client token and a main file for your bot\napplication."),(0,o.kt)("h2",{id:"creating-configuration-files"},"Creating configuration files"),(0,o.kt)("p",null,'As explained in the "What is a token, anyway?" section, your token is essentially your bot\'s password, and you should\nprotect it as best as possible. This can be done through a ',(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, or by using environment variables."),(0,o.kt)("p",null,"Open your application in the ",(0,o.kt)("a",{parentName:"p",href:"https://discord.com/developers/applications"},"Discord Developer Portal")," and go to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Bot"),"\npage to copy your token."),(0,o.kt)("h3",{id:"using-environment-variables"},"Using environment variables"),(0,o.kt)("p",null,"Environment variables are special values for your environment (e.g., terminal session, docker container, or environment\nvariable file). You can pass these values into your code's scope so that you can use them."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When referring to a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file, keep in mind that you can name this file whatever you prefer. For example, the file can\nbe named ",(0,o.kt)("inlineCode",{parentName:"p"},"token.env")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"secret.env"),"."))),(0,o.kt)("p",null,"Storing data in a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file is a common way of keeping your sensitive values safe. Create a ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file in your\nproject directory and paste in your token. You can access your token inside other files by using ",(0,o.kt)("inlineCode",{parentName:"p"},"os.environ"),"."),(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(u,{value:"main.py",label:"main.py",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'# Importing "os" module.\nimport os\n\n# Getting .env value.\n# You can name this variable in the script however you like.\nYOUR_BOT_TOKEN = os.environ["YOUR_BOT_TOKEN"]\n'))),(0,o.kt)(u,{value:"secret.env",label:"secret.env",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"# Each line in a .env file should hold a KEY=value pair.\nYOUR_BOT_TOKEN = OTA4MjgxMjk4NTU1MTA5Mzk2.YYzc4A.TB7Ng6DOnVDlpMS4idjGptsreFg\n")))),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you're using Git, you should not commit this file and should ignore it via ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore"),"."))),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://pypi.org/project/python-dotenv/"},"python-dotenv package")," to either load the ",(0,o.kt)("inlineCode",{parentName:"p"},"env")," variables into the environment, or make\na ",(0,o.kt)("inlineCode",{parentName:"p"},"config")," dict out of the env values."),(0,o.kt)(m,{mdxType:"Tabs"},(0,o.kt)(u,{value:"load_dotenv",label:"load_dotenv",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},"import os\nfrom dotenv import load_dotenv\n\nload_dotenv()  # Take environment variables from .env.\n\n# Using the variables in your application, which uses environment variables\n# (e.g. from 'os.environ()' or 'os.getenv()')\n# as if they came from the actual environment.\nYOUR_BOT_TOKEN = os.environ[\"YOUR_BOT_TOKEN\"]\n"))),(0,o.kt)(u,{value:"dotenv_values",label:"dotenv_values",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'from dotenv import dotenv_values\n\nconfig = dotenv_values(".env")  # Makes a dict out of the values.\n\n# Thus, we get\n# config = {YOUR_BOT_TOKEN: OTA4MjgxMjk4NTU1MTA5Mzk2.YYzc4A.TB7Ng6DOnVDlpMS4idjGptsreFg}\n# which can be used as:\nYOUR_BOT_TOKEN = config["YOUR_BOT_TOKEN"]\n')))),(0,o.kt)("p",null,"Keep in mind that the values imported from the ",(0,o.kt)("inlineCode",{parentName:"p"},".env")," file are ",(0,o.kt)("strong",{parentName:"p"},"in string format"),". Therefore if you would like to,\nsay, use them for calculations, you'll have to convert them via ",(0,o.kt)("inlineCode",{parentName:"p"},"int()")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Online editors (Glitch, Heroku, Replit, etc.)")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"While we generally do not recommend using online editors as hosting solutions, but rather invest in a proper virtual\nprivate server, these services do offer ways to keep your credentials safe as well! Please see the respective service's\ndocumentation and help articles for more information on how to keep sensitive values safe:"),(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"Glitch: ",(0,o.kt)("a",{parentName:"li",href:"https://glitch.happyfox.com/kb/article/18"},"Storing secrets in .env")),(0,o.kt)("li",{parentName:"ul"},"Heroku: ",(0,o.kt)("a",{parentName:"li",href:"https://devcenter.heroku.com/articles/config-vars"},"Configuration variables")),(0,o.kt)("li",{parentName:"ul"},"Replit: ",(0,o.kt)("a",{parentName:"li",href:"https://docs.replit.com/repls/secrets-environment-variables"},"Secrets and environment variables"))))),(0,o.kt)("h3",{id:"git-and-gitignore"},"Git and ",(0,o.kt)("inlineCode",{parentName:"h3"},".gitignore")),(0,o.kt)("p",null,"Git is a fantastic tool to keep track of your code changes and allows you to upload progress to services like\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/"},"GitHub"),", ",(0,o.kt)("a",{parentName:"p",href:"https://about.gitlab.com/"},"GitLab"),", or ",(0,o.kt)("a",{parentName:"p",href:"https://bitbucket.org/product"},"Bitbucket"),". While this is super useful to share code with other\ndevelopers, it also bears the risk of uploading your configuration files with sensitive values!"),(0,o.kt)("p",null,"You can specify files that Git should ignore in its versioning systems with a ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," file. Create a ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore"),"\nfile in your project directory and add the names of the files and folders you want to ignore:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"__pycache__/\nsecrets.env\nconfig.json\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/16869024/what-is-pycache"},(0,o.kt)("inlineCode",{parentName:"a"},"__pycache__/"))," has been included in ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," as it is simply cache that helps loading and running your\nscript faster (this is an oversimplification). As it is of no particular importance, and is recompiled every time a\nchange is made in the script, it is better to not commit the directory."),(0,o.kt)("p",{parentName:"div"},"Also, you can specify certain extensions/directories in ",(0,o.kt)("inlineCode",{parentName:"p"},".gitignore")," files, as per the requirements of your project -\n",(0,o.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/github/gitignore/main/Python.gitignore"},"here is an example"),". Check out the ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/gitignore"},"Git documentation on ",(0,o.kt)("inlineCode",{parentName:"a"},".gitignore"))," for more\ninformation!"))),(0,o.kt)("h2",{id:"creating-the-main-file"},"Creating the main file"),(0,o.kt)("p",null,"Open your code editor and create a new file. We suggest that you save the file as ",(0,o.kt)("inlineCode",{parentName:"p"},"main.py")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"bot.py"),", but you may\nname it whatever you wish."),(0,o.kt)("p",null,"Here's the base code to get you started:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python",metastring:'title="main.py"',title:'"main.py"'},'# Import the necessary libraries.\nimport disnake\nfrom disnake.ext import commands\n\n# Creating a commands.Bot() instance, and assigning it to "bot"\nbot = commands.Bot()\n\n# When the bot is ready, run this code.\n@bot.event\nasync def on_ready():\n    print("The bot is ready!")\n\n\n# Login to Discord with the bot\'s token.\nbot.run("YOUR_BOT_TOKEN")\n')),(0,o.kt)("p",null,"This is how you create a client instance for your Discord bot and login to Discord. Open your terminal and run\n",(0,o.kt)("inlineCode",{parentName:"p"},"python3 main.py"),' to start the process. If you see "The bot is ready!" after a few seconds, you\'re good to go!'),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"After closing the process with ",(0,o.kt)("inlineCode",{parentName:"p"},"Ctrl + C"),", you can press the up arrow on your keyboard to bring up the latest commands\nyou've run in the terminal. Pressing up and then enter after closing the process is a quick way to start it up again."))),(0,o.kt)("h2",{id:"resulting-code"},"Resulting code"),(0,o.kt)(h,{mdxType:"ResultingCode"}))}g.isMDXComponent=!0}}]);