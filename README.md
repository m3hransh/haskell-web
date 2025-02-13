## Setup for system 

1. Install nix -> [installation-guide](https://nixos.org/download/#nix-install-linux)
2. `nix-env -i direnv` 
3. Add `$HOME/.local/bin` to PATH enviroment variable
4. Make sure to have docker compose (or docker-compose) installed
5. Install npm on your machine


## Develoment
1. Go to project directory `cd haskell-web`
2. `direnv allow`

### Backend
1. `cd server`
2. `docker-compose up -d`
3. **Do it once** -> `stack install yesod-bin --install-ghc`
4. Build libraries: `stack build`
5. Start:
```
stack exec -- yesod devel 
# or this
yesod devel
```
### Frontend
1. Install node modules `npm install`
2. Run frontend `npm run dev`

As your code changes, your site will be automatically recompiled and redeployed to localhost.

> If the server got stuck do the `stack build`

If you have trouble, refer to the [Yesod Quickstart guide](https://www.yesodweb.com/page/quickstart) for additional detail.
## Tests

```
stack test --flag haskell-web:library-only --flag haskell-web:dev
```

(Because `yesod devel` passes the `library-only` and `dev` flags, matching those flags means you don't need to recompile between tests and development, and it disables optimization to speed up your test compile times).

## Documentation

* Read the [Yesod Book](https://www.yesodweb.com/book) online for free
* Check [Stackage](http://stackage.org/) for documentation on the packages in your LTS Haskell version, or [search it using Hoogle](https://www.stackage.org/lts/hoogle?q=). Tip: Your LTS version is in your `stack.yaml` file.
* For local documentation, use:
	* `stack haddock --open` to generate Haddock documentation for your dependencies, and open that documentation in a browser
	* `stack hoogle <function, module or type signature>` to generate a Hoogle database and search for your query
* The [Yesod cookbook](https://github.com/yesodweb/yesod-cookbook) has sample code for various needs

## Getting Help

* Ask questions on [Stack Overflow, using the Yesod or Haskell tags](https://stackoverflow.com/questions/tagged/yesod+haskell)
* Ask the [Yesod Google Group](https://groups.google.com/forum/#!forum/yesodweb)
* There are several chatrooms you can ask for help:
	* For IRC, try Freenode#yesod and Freenode#haskell
	* [Functional Programming Slack](https://fpchat-invite.herokuapp.com/), in the #haskell, #haskell-beginners, or #yesod channels.


