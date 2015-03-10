#Couche-Board

Couche-Tard Dashboard  
current release: v0.3

##Overview

Couche-Board is a browser-based GUI dashboard that will allow Couche-Tard management to view company metrics.

##Official Site

Visit [couche-board.herokuapp.com](https://couche-board.herokuapp.com) to use our version of the Couche-Board application.

##Technology Stack
* **Ubuntu 14.04 LTS (Trusty)**
* **Phusion Passenger**
* **PostgreSQL**
* **Ruby**
* **Rails** for the web development framework
* **Bootstrap** for the design
 
##Development Environment

For the sake of a consistent environment, we recommend that you use the browser-based IDE, [Cloud9](https://c9.io/), as your development environment.

Here is list of instructions to get started with Cloud9:

1. Sign up for an account at [c9.io](https://c9.io/)
2. Go to your dashboard
3. Click the "Create New Workspace" button in the top left and select "Clone From URL"
4. In the dialog box that appears:
 * Enter https://github.com/asu-cis-capstone/nightowl into the Source URL field
 * Leave every other field as-is
 * Click "Create"
5. Wait for Cloud9 to provision your new workspace
6. Select your workspace from the left-hand navigation
7. Click "START EDITING"
8. Switch to the new tab where your workspace is loaded
   
Before you start to work with our rails applciation, it would be helpful to run the following command in the terminal:
```
$ bundle install
```
This will install the dependencies that the project relies on.

On that note, you are good to go!

##Database Setup

[Cloud9](https://c9.io/) comes preinstalled with PostgreSQL, but the commands are idiosyncratic and the install is not fully-featured, so we recommend a fresh install instead.

###Installation

Here are the setup instructions for a fresh install of PostgreSQL on Cloud9:

```
# Add the PostgreSQL repository to your list of sources for the apt-get package manager
$ sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt/ $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'

# Import the repository key
$ wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -

# Update the apt-get package manager to include the new source
$ sudo apt-get update

# Install PostgreSQL package
$ sudo apt-get install postgresql-9.4
```

At this point, you want to update your PATH to include the PostgreSQL /bin folder
```
$ echo "export PATH=/usr/lib/postgresql/9.4/bin:$PATH" >> ~/.bashrc
$ source ~/.bashrc
```

For good measure, verify that you are using the new install by running the following command:
```
# The output should be /usr/lib/postgresql/9.4/bin/psql, not /usr/bin/psql
$ which psql
```

Congrats! You have the correct version of PostgreSQL installed in your Cloud9 workspace.

###Configuration

##Authors

* [Patrick Morong](https:github.com/pmorong)  
* [Vincent Nguyen](https:github.com/vietcent)  
* [Jordan Parra](https:github.com/Jordan-Parra)  
* [Rachel Vaney](https:github.com/theroguemuppet)


##Thanks

* Ric Spargo
* Joe Clark



