## What is KnowledgeUI ?

This is a UI for the Oracle Knowledge Management Application, build and deploy using [VBCS](https://www.oracle.com/webfolder/technetwork/jet/).

At this time, the project is currently develop and deploy under your own [VBCS instance (browser IDE)](https://vbreleasedev-vbcsqatest.uscom-central-1.c9dev1.oc9qadev.com/ic/builder/)

The project is associate to [ODCS KnowledgeUI Git Repository](https://alm.oraclecorp.com/ec/#projects/knowledgeui/scm/knowledgeui.git/) 


## Requirements

1. Get OIM permission for ODCS (GIT) with "ec.Developer"
1. Get permission for [VBCS Onboarding](https://oraabcs-corp.builder.us.oraclecloud.com/release/VBCS_Onboarding/live/#/homePage)
1. Be member of KnowledgeUI.git repository
1. Install Git
1. Install NodeJS (node and npm executable)
1. Install OracleJET (`npm install -g @oracle/ojet-cli`)
1. Install TypeScript compiler (`npm install -g typescript`)
1. A text editor

## Quick Start for Developers

Here is how you get started on developing CCA on your local PC.

NOTE: You need setup SSH Key in [ODCS Git Platform](https://alm.oraclecorp.com/ec) before you can use the `ssh` git protocol! (TIPS: Run `ssh-keygen` and add `$HOME/.ssh/id_rsa.pub` content to ODCS Autentication settings.)

```
cd $HOME
git clone ssh://zemian.deng%40oracle.com@alm.oraclecorp.com:2222/ec_knowledgeui_19955/knowledgeui.git
cd $HOME/knowledgeui/km-ojet
ojet serve
```

## How KnowledgeUI Project is Structured

The root folder of KnowledgeUI contains what's needed for a VBCS application, and these
(eg: "webApps/fa-vb-webapp") are required and cannot be renamed. You do not edit these files
with local editor, but to use VBCS browser based IDE instead. However you can use the Git
as medium to push/pull file changes to perform large updates.

Inside this project, we added "km-ojet" folder. This contains a full OracleJET project
that we use to develop CCA (Composite Component Architecture, or  simply Web Components). Developers
may use their local PC to clone the Git repository and work with "km-oject" offline for each
components until ready, then we can add/sync to VBCS structure. This means we will make
VBCS pages and changes as thin as possible (wrapper), and all major work are using CCA instead.

## First Time VBCS and KnowledgeUI Setup

Assume you have met all the requirements mentioned above.

1. Login to your own instance of VBCS
1. Import new project from KnowledgeUI.git repository
1. Name your project "<your_name>_KnowledgeUI"

## Updating CCA to VBCS

Developers are encourage to create their own Git work branch and associate to
their own instance of VBCS, make changes and then raise Merge Request to
merge back into the master branch.

Here is how you create a new git branch "zemian-jira-12345"

```
cd $HOME/knowledgeui
git checkout master
git pull
git co -b zemian-jira-12345
```

Now you have new branch and ready to update CCA code.

```
cd $HOME/knowledgeui/km-ojet
# Modify any source files

# You can see your changes with this local web server:
ojet serve

# If you modify any TypeScript files, you can open another terminal, cd into same directory
# and run this:
tsc -w
```

When you are done and ready with a CCA, you can publish to VBCS like this:

```
# Step1: Build OJET and Sync to VBCS
cd $HOME/knowledgeui/km-ojet
ojet build
cd $HOME/knowledgeui
bash update-cca.sh # If you are on Linux/Mac

# If you are on Windows, then simply manually copy files from these two directories
# FROM km-ojet/web/js/jet-composites/*
# TO webApps/fa-vb-webapp/resources/components

# Step2: Commit to Git and Push
cd $HOME/knowledgeui
git status # inspect changes first
git add .  # add all changes or you can specify specific files instead
git commit -m 'Update CCA'
git push

# Step3: Go to VBCS browser IDE and perform "Pull from Git"

# Step4: Run VBCS to verify changes
```

When all looks good on VBCS, you would raise a Git "Merge Request" (MR)
from your working branch (eg: `zemian-jira-12345`) to the "master".

1. Go to ODCS for KnowledgeUI.git repository
1. On Left Navigation, click "Merge Requests"
1. Enter Required Info:

    Repository: KnowledgeUI.git
    
    Target branch: master
    
    Review branch: zemian-jira-12345

1. Select a Reviewer
1. Complete the MR.
