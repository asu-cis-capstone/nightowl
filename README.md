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

Cloud9 comes preinstalled with PostgreSQL. Therefore, it's not necessary to install it, but we still have to configure it to work with Couch-Board.

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

Now you can create the Couche-Board databases. Run the following command:
```
$ bundle exec rake db:create:all
```

*Upcoming*
Populating the database

##Authors

* [Patrick Morong](https://github.com/pmorong)  
* [Vincent Nguyen](https://github.com/vietcent)  
* [Jordan Parra](https://github.com/Jordan-Parra)  
* [Rachel Vaney](https://ithub.com/theroguemuppet)


##Thanks

* Ric Spargo
* Joe Clark



