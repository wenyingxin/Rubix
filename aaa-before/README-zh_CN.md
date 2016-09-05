# Rubix Design 

一套企业级的 UI 设计语言和 React 实现。
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



## 安装

```bash
npm install rubix
```

