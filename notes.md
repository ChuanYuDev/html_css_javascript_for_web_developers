# Notes

## Install
- nodejs

    ```
    sudo apt install nodejs
    ```

- npm

    ```
    sudo apt install npm
    ```
    - npm: node package manager

- browser-sync

    ```
    sudo npm install -g browser-sync
    ```
    - `-g`: for all users, not only for you

## Browser sync
- Browser sync is a command you call from command line

    ```
    cd site
    browser-sync start --server --directory --files "*"
    ```
    - `start --server`: start local http server
    - `--directory`: tell `browser sync` list the directory structures

    - `--files "*"`: which file do I need to watch for modification
        - `browser-sync` watches for the page if change, automatically reload, don't reload by yourself
    
    - `"*"`: any files

    ```
    browser-sync start --server --directory --files "**/*"
    ```
    - `"**/*"`: any files in the directory and any files in the folder inside the directory

- Local URL

    ```
    localhost: 3000
    ```

- UI

    ```
    localhost: 3001
    ```

## Use Github repository to host your website
- Settings
    1. Github pages: launch automatic page generator
    1. Continue to layout
    1. Publish page
    1. http://nealmatrix.github.io/coursera-test

    1. There's URL in Github pages
        - This link actually creates a separate branch `gh-pages`
        - Only the source code in `gh-pages` branch can be shown up 

## My first page
- `git push` to `gh-pages` branch
- http://nealmatrix.github.io/coursera-test/site/
    - Most servers use `index.html` as default first page, `index.html` can be omitted
