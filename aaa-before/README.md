# Rubix Design 

An enterprise-class UI design language and React-based implementation.

## Features

- An enterprise-class design language and high quality UI style.
- Rich library of UI components base on [React Component](http://react-component.github.io/badgeboard/).
- A npm + webpack + babel + dora [workflow](http://rubix-tool.github.io/index.html).

## Git Workflow

### coding on develop branch

```
git checkout develop

# coding....
# commit
# coding...
# commit
# ...
# code review

# rebase latest develop branch and resolve conflicts
git pull --rebase
git push
```

### coding on a local feature branch

```
# create your own local feature_branch
git checkout -b feature_branch

# coding....
# commit
# coding...
# commit
# ...
# code review

# update codebase to latest
git fetch
# rebase latest develop branch and resolve the conflicts
git rebase origin/develop

# update local develop branch to latest
git checkout develop
git rebase

# Always use --no-ff to create the merge commit for keeping the merge history
git merge feature_branch --no-ff

git push

```



## Install

```bash
npm install rubix
```

## Usage example

### Use prebuilt bundle

```jsx
import { DatePicker } from 'rubix';
ReactDOM.render(<DatePicker />, mountNode);
```

Import style:

```jsx
import 'rubix/dist/rubix.css';  // or 'rubix/dist/rubix.less'
```


