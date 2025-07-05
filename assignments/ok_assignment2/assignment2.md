# Assignment 2
## Table of contents
- [Solution](#solution)
- [TO DO](#to-do)

## Solution
- Spacing
    - We call
        - Section spacing: the spacing between sections 
        - Window spacing: the spacing between the edges of the section and the edges of the brower window

    - In the desktop/table view, section spacing is equal to window spacing

        ![](./images/desktop_tablet.png)
        - The spacings are all 30px

    - In the mobile view, window spacing is twice than section spacing

        ![](./images/mobile.png)
        - Window spacing: 30px
        - Section spacing: 15px

- The section title is defined in `<h2>` element which matches with the semantics

- If the text is too long, I use `overflow: auto;` to display the text by adding a scroll
        
## TO DO
- The way to push down the dummy text in order to not overlap with section title is to give a `30px` top padding of the `<section>`
    - Is there a better method to fit with the section tile?