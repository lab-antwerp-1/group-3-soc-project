<!--

  There will be different types of tasks for each user story:
    `type: components`
    `type: css`
    `type: logic`
    `type: handlers`
    ...

-->
# Development strategy

## Planning documents

- [ ] _There is a README.md file._
- [ ] _There is a constraints.md file._
- [ ] _There is a backlog.md file._
- [ ] _There is a development-strategy.md file._
- [ ] _There is a retrospective.md file._
- [ ] _There is a wireframe.jpeg file._

- This will be developed in the `planning` branch.

## Must have's

0 - Page title/header

> A user can see the title of the page.

- [ ] _there is a header with the name `To do` as the title of the page._

`type: HTML`

- [ ] _use `h1` and id `header` to set the title._

`type: CSS`

- [ ] _use `#header` to create style._

- This will be developed on the branch `0-title`.

---

1 - Short description of the page

> A user can read a short description of the page

- [ ] _there is a short text describing after the title describing basic usability._

`type: HTML`

- [ ] _use `div` and `id = text` to create a container for all text, including title_
- [ ] _use `p` and `id = introduction` to set the body of the text._

`type: CSS`

- [ ] _use the `id = introduction` to style the text._

- This will be developed on the branch `1-description`.

---

2 - Add items

> A user can add items to their list.

- [ ] _there is a text box where user can type in the new item in the list._
- [ ] _there is an `add button` to send the typed item onto the list._

`type: HTML`

- [ ] _use `form` and `input = text` to type the new item in._
- [ ] _use `input = button` to create the `Add` button._

`type: CSS`

- [ ] _use `add-button` id to style button._

`type: JS`

- [ ] _use `addEventListener` and `click` to create a user event for the `button` element._
- [ ] _use `getElementById` and `appendChild` method in handler function._
- [ ] _create a `data` file to store user's input._

- This will be developed on the branch `2-add-item`.

---

3 - List display

> A user can see all items in their list, wether they are done or not done.

- [ ] _there is a list with all pending items/tasks._
- [ ] _there is a list with all done items/tasks._

`type: HTML`

- [ ] _use `div` and `id = pending-list` to display new items._
- [ ] _use `ul` and `li` to set the elements._
- [ ] _use `div` and `id = done-list` to display the completed items._
- [ ] _use `ul` and `li` to set the elements._

`type: CSS`

- [ ] _use `text-decoration: line-through` for the elements in the `done` list._
- [ ] _use `text-align: center` to center all content._

- This will be developed on the branch `3-display-list`.

---

4 - Removing items

> A user can remove items in their list.

- [ ] _there is a `Delete` button next to each item in the pending list._

`type: HTML`

- [ ] _use `input type = button` to create button element._
- [ ] _use `id = delete-button` to reference element._

`type: CSS`

- [ ] _use `id = delete-button` to style it._

`type: JS`

- [ ] _use `addEventListener` and `click` event set user's event._
- [ ] _use `getElementById` and `.removeChild` to delete element._

- This will be developed on the branch `4-remove-item`.

---

5 - Done items

> A user can mark items as done

- [ ] _there is a `Done` button to mark an item/task as done._

`type: HTML`

- [ ] _use `input type = button` to create button element._
- [ ] _use `id = done-button` to reference the element._

`type: CSS`

- [ ] _use `id = done-button` to style it._

`type:JS`

- [ ] _use `data` to store a new list with all elements marked as done._
- [ ] _use `addEventListener` and `click` to create user's event._

- This will be developed on the branch `5-done-items`.

---

6 - Reset all lists

> A user can delete all current info and restart with an empty list.

- [ ] _there is a `Refresh all` button that clears all current information._

`type: HTML`

- [ ] _use `button` to create the element._
- [ ] _use `a` to turn the button into a link that redirects to the home page._
- [ ] _use `id = refresh-button` to reference the element._

`type: CSS`

- [ ] _use `id = refresh-button` to style it._

- This will be developed on the branch `6-reset`.