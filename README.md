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
* **Rails**
* **Bootstrap**
 
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

###Using the preinstalled PostgreSQL on Cloud9

Cloud9 comes preinstalled with PostgreSQL. It's not necessary to install it, but we still have to configure it to work with Couch-Board.

Start the database server:
```
$ sudo service postgresql start
```

You need to complete two configuration tasks in order to create the Couche-Board databases: 
 
1. Create an "ubuntu" role
2. Change the default encoding scheme to UTF8
 
The steps to accomplish them will follow in a bit, but first start up the client Postgres interactive prompt in the terminal:

```
$ sudo sudo -u postgres psql

# Below is what you should see after the command
postgres=#
```
 
We will accomplish the tasks by inputting some SQL statements. Now, for accomplishing the tasks:

1. Create an "ubuntu" role 

Enter the following SQL statement:
```
CREATE ROLE ubuntu CREATEDB LOGIN;
```
Done.

2. Change the default encoding scheme to UTF8
 
Enter the following SQL statements:
```
UPDATE pg_database SET datistemplate = FALSE WHERE datname = 'template1';

DROP DATABASE template1;

CREATE DATABASE template1 WITH TEMPLATE = template0 ENCODING = 'UNICODE';

UPDATE pg_database SET datistemplate = TRUE WHERE datname = 'template1';

# Below is a Postgres meta command
\c template1

VACUUM FREEZE;
```

Done.

Now you can create the Couche-Board databases. Run the following command:
```
$ bundle exec rake db:create:all
```

###Using a fresh install of PostgreSQL on Cloud9

There seem to be some limitations of the preinstalled PostgreSQL version on Cloud9. One notable limitation is the absence of the *initdb* utility program that allows us to create space for our database cluster to reside.

####Installation

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

PostgreSQL is installed, but there are no databases yet or space for the databases to reside. In PostgreSQL, databases reside within a database cluster. First, we need to create a directory to house the database cluster.

```
$ sudo mkdir /usr/local/var
$ sudo mkdir /usr/local/var/postgres
$ sudo chown -R ubuntu /usr/local/var/postgres
```

Now initialize the database cluster.
```
$ initdb /usr/local/var/postgres
```

PostgreSQL uses the client/server model as its architecture. For that reason, we need to start the database server.
```
# Take ownership of directory where the server process will reside
$ sudo chown -R ubuntu /var/run/postgresql

# Start the server process
$ pg_ctl -D /usr/local/var/postgres -l /usr/local/var/postgres/server.log start
```

Everything should be working now. Test it:
```
# List the databases
$ psql --list

# Enter the database (postgres is usually the default initial database)
$ psql postgres
```

To create the databases for Couche-Board, run the following commands:
```
# If you are not within the rails root directory for our project, navigate there
$ cd /home/ubuntu/workspace

# This will create all the databases listed in the config/database.yml file
$ bundle exec rake db:create:all
```

Now the databases should be installed in your local environment
```
# List available databases in your local environment
$ psql --list
```

You should see coucheboard_development and coucheboard_test as list items in the output table

Interact with any of your databases by running any of the example commands here:
```
# Use psql to launch the database
$ psql coucheboard_development

# Use rails to launch the database
$ rails db
```

That's it for setting up the databases for now. 

*Upcoming*
Populating the database

##Authors

* [Patrick Morong](https:github.com/pmorong)  
* [Vincent Nguyen](https:github.com/vietcent)  
* [Jordan Parra](https:github.com/Jordan-Parra)  
* [Rachel Vaney](https:github.com/theroguemuppet)


##Thanks

* Ric Spargo
* Joe Clark



