#DLF-AIG Metadata Assessment Working Group

## Intro

This site was developed by the [Digital Library Federation Assessment Interest Group Metadata Assessment Working Group](https://groups.google.com/forum/#!forum/dlf-aig-metadata-assessment-working-group), a.k.a. the DLF Metadata Assessment Working Group.

We want the [DLF Metadata Assessment Working Group site](http://dlfmetadataassessment.github.io/) and the information contained therein to be a living document. Working Group members will continue to add resources, recommendations, and information to this website as well as to our working documents. If you want to make a comment, suggestion, correction or update, you can:
  
  * [submit a pull request to this website](https://github.com/DLFMetadataAssessment/DLFMetadataAssessment.github.io/pulls),

  * [open a GitHub issue on this repository](https://github.com/DLFMetadataAssessment/DLFMetadataAssessment.github.io/issues),

  * [comment on our working docs in this Google Drive folder](https://drive.google.com/open?id=0B74oOQcTdnHjWk51a283bUVta0E),

  * [send a message to our Google Group](https://groups.google.com/forum/#!forum/dlf-aig-metadata-assessment-working-group),

  * [join one of our calls](https://wiki.diglib.org/Assessment:Metadata).

Anyone and everyone is welcomed to take part in the DLF AIG Metadata Working Group. Use the link below to find out more about the group or get involved.

  * [our DLF wiki page](https://wiki.diglib.org/Assessment:Metadata)

## Contributing via this GitHub Repository

This is a group effort and we welcome any and all contributions. This information belows includes the basics to get you started with making change requests directly to this repository. If you get stuck, please contact a group member. We'd love to improve the documentation to make it easier for everyone to contribute. 

## Practices for Contributing to this Repository

**Branch Names**

Once an issue is raised in our GitHub repository, we create a branch with a name based on the issue number it is addressing, i.e. 'issue#1'. The pull request generated to fix Issue 1 is then the merging of that branch into the **master** branch, which feeds into the Github.io website. 

You can see and comment on a list of [outstanding issues](https://github.com/DLFMetadataAssessment/DLFMetadataAssessment.github.io/issues). 

The examples and walk through of GitHub and Jekyll below uses "issue#3" as a subject. That's the branch name used in the commit message.

**Pull Requests**

Once you have committed your changes to your branch for a particular issue, submit a pull request to have your changes reviewed. It will be merged by another member of the group. We request that nobody merges their own pull requests. 

If your pull request sits for a while, you can submit an email to the [Google Group](https://groups.google.com/forum/#!forum/dlf-aig-metadata-assessment-working-group) asking for it to be reviewed.

### About GitHub

If you're new to GitHub, we recommend an [introduction to the GitHub flow](https://guides.github.com/introduction/flow/) and [simple steps for getting started in GitHub](https://guides.github.com/activities/hello-world/). 

### About Jekyll

This site is built with Jekyll. [Jekyll](http://jekyllrb.com) is a Rails gem that generates static websites from markdown, HTML, and other formats. See the [official Jekyll documentation](http://jekyllrb.com/docs/home/) for details and instructions on how to install. There is also a comprehensive guide to installing Jekyll on a Windows machine available [here](http://jekyll-windows.juthilo.com/). 

### Here's how to make a Git Pull Request for this Jekyll site:

#### The first time you want to contribute

You'll need:
	
1. Git
2. Ruby version between 2.0 and 2.2
3. Rubygems
4. Bundler
5. Jekyll

In a terminal: 

1. clone the repo with ```git clone https://github.com/DLFMetadataAssessment/DLFMetadataAssessment.github.io.git```
2. change to the repository's root directory with ```cd DLFMetadataAssessment.github.io```  
3. run ```bundle install```
4. Continue with step 3 below

#### Subsequent work
1. Make sure you're on the master branch (necessary if you skipped step 9)
  * ```git checkout master```
2. Make sure your master branch is up to date
  * ```git pull origin master```
3. Start up jekyll
  * ```bundle exec jekyll serve```
  * check [http://localhost:4000](http://localhost:4000)
4. create a new branch for your changes
  * ```git checkout -b issue#3```
5. make changes, check [http://localhost:4000](http://localhost:4000) to see your changes
6. add your changed files
  * ```git add {changed-files}``` or ```git add .``` to add all untracked files
7. commit your changes with a message
  * ```git commit -m "fixes issue #3"```
8. add your branch to the repo
  * ```git push --set-upstream origin issue#3```
9. switch back to the master branch
  * ```git checkout master```

10. go to https://github.com/DLFMetadataAssessment/DLFMetadataAssessment.github.io/pulls 
11. make a new pull request with base:master and compare:issue-3
12. wait for someone to test your changes and merge
13. start over with step 1 for your next change
