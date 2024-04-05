# Git Standards

## Branch name formats

**{BranchType}/{JiraIssueID}-{JiraIssueName}**

**Example**: feature/FL-621-add-sentry-logs

**Branch Types**:

- feature - for day to day development work
- hotfix - for urgent fixes
- bugfix - for bug fixes
- infra - for creating libs/apps/ops/resources
- docs - readme changes
- config - configuration changes
- actions - GitHub actions changes

## Special branch names for merging

- master
- main
- trunk
- **develop - our main branch**
- {STAGE} (dev, staging, prod)

## PR name format

Same as the branch name.

## Git commit format

**{JiraIssueID} message** relating to code change

**Example**: FL-621 created handler function

**Commit Best practices**:

- Commit frequently
- Commit per change
- Commit per file (unless your smallest change is relevant for multiple files)
- Keep your message short but informative
- Let your previous commits help us understand your last commit
- Reading commits of a PR from start to finish should tell a story (the jira story)


## Git pull

Pull frequently, especially from master.

## Git push

Pull before you push.

If your branch is long lived, make sure to pull and merge from master before pushing.

Push frequently.

## Git ignore

Don’t include local files in your git:

```jsx
.env
build/
dist/
.vscode/
.serverless/
etc.
```

## Before PR creation

before you rush into creating your PRs, make sure to

- **keep your PRs small and simple**.

  - The reviewer will be more focused and provide higher review quality in return.

  As a rule of thumb, if your PR contains more than 100 lines of code, you should consider PR splitting - an **infra** branch can be an exception to this.

  If you **split** your PR into **partial PRs**, make sure to **create small PRs in a trunk approach**, and after you merged everything to your trunk branch, you can safely merge to dev.

  DON’T merge and deploy partial PRs directly to dev! wait until all parts of the bigger PR are merged in the trunk first.

- make sure you code runs locally with no errors or warnings

- make sure all the tests are passing locally

- make sure you can build locally with 0 errors.

- make sure your console is clean!

- **ship and deploy your code in our DEV environment, and test it there before pushing to higher environments.**

### Here’s some extra tips to prepare your code for review:

[How to Make Your Code Reviewer Fall in Love with You](https://mtlynch.io/code-review-love/)

### When to create PRs?

You should create and publish your PR as soon as possible, even if its only partially ready, so the reviewers will have more time to go through it, while its still small and understandable.

DON’T wait until the last minute and publish huge PRs, consider a buffer time of at least 2 days for reviews in your ETA if you do…

To minimize this, just don’t wait til last minute to ask for huge reviews**.**

If your jira story requires more than unit testing, consider TDD to include tests as early as possible in your PR and make your reviewer happy.

### Creating PRs in github

Simply create a pull request in github from your branch to the branch you want to update with your code changes.

### After creating PRs

1. add descriptive and helpful info to the PR description including screenshots and links.
2. review your PR by yourself, to make sure its ready and you didn’t miss anything.
3. when you encounter questionable code, add a comment in your PR to address it and save ping-pong time between yourself and the reviewer.
4. make sure you didn’t accidently include unwanted files/changes
5. Make sure your PR passes the CI build & test jobs
6. make sure your code works on the dev environment
7. CHACE someone until your code is reviewed and approved.
8. Don’t proceed to another PR until your current PR is merged and deployed

**send a message in your slack #dev channel** that notifies the relevant reviewers and includes the jira ticket, pr link, small summary and notes:

**DON’T** send **PRs** in **private**, always publish them in your #dev channel first to give everyone a chance to get involved and assist, the more eyes you have the better!

## PR reviewer

when reviewing PRs of someone else

first notify that you are indeed reviewing:

when your done and the pr is approved mark the message with a check mark:

when you have comments mark the message with a speech baloon:

when you want to discuss the pr make sure to reply in the message thread so you don’t spam the channel:

when you review make sure the pr code is

1. **readable!** if you can’t read it you can’t own it
2. small, DON’T accept big PRs, demand splits
3. simple, try not to over complicate your code and keep it “cheap” and easy to change (agile)
4. answers its jira issue acceptance criteria
5. follows our coding standards
6. well designed
7. does not include garbage
8. consistent
9. type safe (no ‘any’ and ‘any inferred’ crap)
10. working (not broken → build, run and test locally) * this should be done by the review requester
11. testable
12. performant
13. passes CI build & test job

DON’T skip steps and accept bad code because of time constraints! the only thing we can concede is negligible performance **- think of code longevity first** and stop the bugs before they reach production**.**

DON’T keep the requester waiting: stop what your doing and review (unblock) the code as soon as possible. * Reviewing code for someone else and contributing to a team effort is more important than writing code for your own sake.

## After your PR is approved

- merge the code
- delete the branch
- deploy to a dev environment
- make sure the CI deployment passes without failures
- make sure your code works on staging environment

## Exceptions

when working on a hotfix or a config type issues, you may work on the main **develop** branch directly and bypass the pull requests
