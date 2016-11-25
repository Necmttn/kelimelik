Let's get Started

in your terminal type 


```
mkdir kelimelik
cd kelimelik
npm init -y 

```
than also we need to set git for project we will be use it a lot, for Open source project i use [github/hub](https://hub.github.com/) you need install it first . if you have brew it's to easy

in terminal just type

```
brew install hub
alias git=hub
git version
```

than we need to create our github repo. help from Hub it's to easy.


```
# create a repo for a new project
$ git init
$ git add . && git commit -m "It begins."
$ git create -d "kelimelik"
→ (creates a new project on GitHub with the name of current directory)
$ git push origin master

```

alright so far we have setup npm and git for our project let's start creating some real project folders ? 

```
mkdir dist
cd dist
touch index.html
```

The Distribution folder will be everything you need to publish your web app to a hosting server. 


dist/index.html
```
<html>
    <head>
        <title>Kelimelik</title>
    </head>
    <body>
        <div id="root"></div>
        <script src="bundle.js"></script>
    </body>
</html>
```

Two Notes in here: 
- the bundle.js will be a genarated file by webpack
- the id="root" attribute will help our React component to find its entry point. 


