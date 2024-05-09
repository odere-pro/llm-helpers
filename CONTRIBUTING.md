# Contributing to LLM Helpers

First off, thank you for considering contributing to LLM Helpers. It's people like you that make LLM Helpers such a great tool.

## Where do I go from here?

If you've noticed a bug or have a feature request, make sure to check our [Issues](https://github.com/odere-pro/llm-helpers/issues) if there's something new. It's very possible that you're not the first to notice!

## Fork & create a branch

If this is something you think you can fix, then fork LLM Helpers and create a branch with a descriptive name.

```bash
git checkout -b feature/[ticket_descriptive_name]
```

## Implement your fix or feature

At this point, you're ready to make your changes! Feel free to ask for help; everyone is a beginner at first.

## Get the style right

Your patch should follow the same syntax and semantic.

## Make a Pull Request

At this point, you should switch back to your main branch and make sure it's up to date

```bash
git remote add upstream git@github.com:yourusername/LLMHelpers.git
git checkout main
git pull upstream main
```

Then update your feature branch from your local copy of master, and push it.

```bash
git checkout -b feature/[ticket_descriptive_name]
git rebase master
git push --set-upstream origin feature/[ticket_descriptive_name]
```

Do your changes, commit it and push again. Please use [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

```bash
git add .
git commit -m "feat: short description"
git push
```

Finally, go to GitHub and make a [Pull Request](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request)

## Keeping your Pull Request updated

If a maintainer asks you to "rebase" your PR, they're saying that a lot of code has changed, and that you need to update your branch so it's easier to merge.

To learn more about rebasing in Git, follow the [link](https://git-scm.com/book/en/v2/Git-Branching-Rebasing).
Suggested workflow:

```bash
git checkout feature/325_add_jquery_plugin
git pull --rebase upstream master
git push --force-with-lease feature/325_add_jquery_plugin
```

## Merging a PR (maintainers only)

A PR can only be merged into master by a maintainer if:

1. It is passing CI.
2. It has been approved by at least two maintainers. If it was a maintainer who opened the PR, only one extra approval is needed.
3. It has no requested changes.
4. It is up to date with current master.
5. Any maintainer is allowed to merge a PR if all of these conditions are met.
