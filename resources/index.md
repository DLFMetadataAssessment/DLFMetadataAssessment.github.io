---
title: Resources
---

Some of our ongoing projects may be helpful:

* [Presentations and Publications of Note]({{ "/projects/publications/" | relative_url }})
* [Metadata Application Profiles]({{ "/projects/metadata-application-profiles/" | relative_url }})
* [Tools Repository]({{ "/projects/tools/" | relative_url }})

Skillbuilding
-------------

* [Overview](#overview)
* [General Introduction to Website and its Structure](#general-introduction-to-website-and-its-structure)
* [Skillbuilding](#skillbuilding)
* [Supporting the DLF AIG Metadata Assessment Site](#supporting-the-dlf-aig-metadata-assessment-site)

### Overview

This list of tutorials and resources is offered to support those who are interested in contributing and collaborating on the site maintenance and improvement. One of the 2018 goals of the Website Subgroup is to maintain a document to encourage self-guided learning for Jekyll, Git, and GitHub.

Each resource includes a description of its usefulness, applicability to the group’s work on this site, or general ease of use. Recommendations and tips are included, as well.

### General Introduction to Website and its Structure

This site presents a comprehensive but simplified resource for how to approach metadata assessment. In 2019, the MWG Website subgroup updated the site to run on a simplified Jekyll template, resulting in a more streamlined and unified structure. The intention was to increase usability of the site and its contents.

#### What is Git? What is GitHub?

A very common question! The quote below from [Library Code Year’s GitHub Tutorial](https://github.com/LibraryCodeYearIG/Codeyear-IG-Github-Project/blob/master/Getting%20Started/readme.mdown#what-is-git-what-is-github) explains:

> Git is an open source version control software. Think of it as a way to manage multiple people working on the same project; Git allows them to smartly “merge” changes to avoid conflicts. It also keeps a history of the project, so that you can roll back to a time before an error was introduced.
> 
> GitHub is a cloud-based storage site for git. It is a central place where everyone can download projects, track ongoing issues, and view information. It’s not the only such site—Gitorious is another one, for example—but it’s very popular and has some nice features.

#### What is Jekyll?

Jekyll is a static site generator. It builds a static website for you based on simple text files organized into folders and their corresponding HTML templates. GitHub pages are powered by Jekyll. For more information see: https://jekyllrb.com/

_Excerpt from CloudCannon’s [‘Why use a static site generator?’](https://learn.cloudcannon.com/jekyll/why-use-a-static-site-generator/):_ \[…\] the difference between dynamic CMSs such as WordPress or Drupal and static site generators like Jekyll:

*   Static sites respond quickly because it retrieves files only, so there is not a lot of processing
*   Static sites are more secure; not as many vulnerabilities; no plugins
*   Static sites on server can handle more traffic
*   Static sites have version control

### Skillbuilding

General introductions to resources that can help you approach more targeted tutorials and guides.

| Resource | Comments |
| -------- | -------- |
| [Stack Overflow](https://stackoverflow.com/) | When you’ve got a problem you can’t solve, Stack Overflow can be a place to find  answers (or answers to very closely related problems). |
| [Django Girls - Intro to Command Line](https://tutorial.djangogirls.org/en/intro_to_command_line)| - |
| [Django Girls - Code editor](https://tutorial.djangogirls.org/en/code_editor/) | - |

#### Skillbuilding: Git + GitHub

| Resource | Comments |
| -------- | -------- |
| [Try Git](https://try.github.io/levels/1/challenges/1)|Step by step tutorial on how to understand and use Git. Includes instructions for some of the most commonly used commands. Serves as a refresher for those with command-line interface (CLI) experience, but also good way for people to get exposed to and practice using the command line. |
| [Library Code Year’s tutorial on Git](https://github.com/LibraryCodeYearIG/Codeyear-IG-Github-Project) | - |
| [Intro to Git/GitHub for Metadata workshop materials](https://github.com/ucsdlib/git-novice) developed by UCSB/UCSD|A comprehensive introduction to Git for first-time users. Special thanks to Chrissy Rissmeyer at UCSB for the recommendation! |

#### Skillbuilding: Site Building with Jekyll, GitHub Pages

| Resource | Comments |
| -------- | -------- |
| [Jekyll 3 on Windows](https://labs.sverrirs.com/jekyll/) | Very through step-by-step guide on how to install Jekyll for Windows machines. Starts with how to install Ruby and goes up through how to configure Jekyll once you’ve got it installed. Works best for Windows 7 & Windows 10 (pre-anniversary) machines. Please note: In testing, [Bundler](http://bundler.io/) was installed to manage gems. The only potential issue in this process may be the absence of instructions on how to use a manager for multiple Rubies. |
| [Building a Site with Jekyll: Getting Started with Jekyll](http://kateefly.github.io/getting-started) | Jekyll walkthrough created for  Code4Lib Midwest 2017. |
| [Tutorial on building a static site](https://programminghistorian.org/lessons/building-static-sites-with-jekyll-github-pages) | From the **Programming Historian**: "This lesson is for you if you’d like an entirely free, easy-to-maintain, preservation-friendly, secure website over which you have full control, such as a scholarly blog, project website, or online portfolio. At the end of this lesson, you’ll have a basic live website where you can publish content that other people can visit [...] and you’ll also have some resources to explore if you want to further customize the site." |
| [A Guide to Using Github Pages](https://www.thinkful.com/learn/a-guide-to-using-github-pages/)| From **Thinkful**, "this step-by-step guide gets you up to speed in minutes" using GitHub Pages as a hosting tool. |
| [Git Bash](https://gitforwindows.org/)|Git Bash refers to the BASH emulation tool that is provided when you install Git on a Windows machine. It provides a way for Windows users to use this Unix based environment instead of the DOS environment that Windows comes with (Command Prompt). This gives users an interface that is the same as what is used in macOS and most Linux systems and lets them follow instructions without having to substitute commands (such as dir for ls and so on). |

### Supporting the DLF AIG Metadata Assessment Site

Get involved! Ask questions! Submit feedback! Submit a PR!

#### Contributing via this GitHub Repository

This is a group effort and we welcome any and all contributions. This information below includes the basics to get you started with making change requests directly to this repository. If you get stuck, please contact a group member. We’d love to improve the documentation to make it easier for everyone to contribute.

#### Branch Names

Once an issue is raised in our GitHub repository, we create a branch with a name based on the issue number it is addressing, i.e. ‘issue#1’. The pull request generated to fix Issue 1 is then the merging of that branch into the master branch, which feeds into the Github.io website.

You can see and comment on a list of outstanding issues.

The examples and walk through of GitHub and Jekyll below uses “issue#3” as a subject. That’s the branch name used in the commit message.

#### Pull Requests

Once you have committed your changes to your branch for a particular issue, submit a pull request to have your changes reviewed. It will be merged by another member of the group. We request that nobody merges their own pull requests.
