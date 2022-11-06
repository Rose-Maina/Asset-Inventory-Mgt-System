# Asset Inventory Management System Web Application
 ## By Vincent Nduri, Jackson Ohallo, Rose Maina, James Odiwuor, & Vinson Steve
 
## Screenshot
 ![image](/client/public/hero.png)
 
 ## Table of Content
 - [Description](#description)
 - [Features](#features)
 - [Requirements](#requirements)
 - [Installation Process](#installation-Process)
 - [Technology  Used](#technology-Used)
 - [Licence](#licence)
 - [Authors Info](#Authors-Info)
 
 ## Description
 <p>This project is a web application for Asset Inventory Management System, an online asset management system that offers organizations the desired assistance of keeping track of their assets and their states by centralizing information on assets and different users, making efficient tracking and management. This has previously been a challenge because lots of data being handled come from various sources, with the local storage used is mainly spreadsheets that makes the management work tidious. Prioritizing of assets in terms of urgency is also a challenge. Besides, the application gives organizations the opportunity to plan their finances in managing assets.</p>

## Features
As a user of the application,you will be able to
1. Log in using credintials provided by the Admin, and navigate to specific page depending on their roles; e.g. whether manager or general employee.
2. Admins creates employees in the application and performs all other management roles.
3. The Procurement Manager manages assets within the application from their creation to assigning and managing requests for repairs of assigned assets or need for new ones.
 
 ###  Requirements
 * Access to a computer, a laptop or any other garget
 * Access to internet
 
 ### Installation Process
 ****
* Clone to this repo : git clone https://github.com/Rose-Maina/Asset-Inventory-Mgt-System
* Unzip the downloaded files in a folder of choice.
* Ensure that your gadget has all the necessary installations for running a react frontend, rails backend, & postgresql database application.
* Open the files in a code editor of choice and in the terminal run 'bundle install', followed by 'npm install --prefix client' to install all the necessary dependencies needed to successfully run the application.
* To get the app running online, get to the terminal within the directory and run 'rails db:create db:migrate db:seed', then followed by 'rails s' to load the rails backend and in another terminal window, run 'npm start --prefix client' to load the react frontend of the application.
 ****

### Live Link
-

### Technologies  Used
* HTML5 -  used in creating the skeleton structure of the application
* CSS -  used in the custom styling of the application and features
* BOOTSTRAP -  used in creating the mobile-first-view responsiveness
* JAVASCRIPT - which was used for writing manipulation scripts and app interactivity in react.
* REACT JS LIBRARY - which was used to build the frontend user interface.
* RUBY ON RAILS - which was used to build the backend that contains cocre functionality & feeds data to the app's frontend.
* POSTGRESQL - which is used to build the database that stores the app's core data
* FIGMA - which is used to design the UI/UX features of the application
* DBDIAGRAM.IO - which is used to design the the Database structure and Entity Relationships.

## Known Bugs
* Use of Device for the authentication, which was a little difficult and later reverted to JWT.

## Licence
MIT License
Copyright (c) [2022] [Vincent, Jackson, Rose, James, & Vinson]
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Authors Info
Github Profiles - [Vincent Nduri](https://github.com/ndurivin)
                  [Jackson Ohhalo](https://github.com/jacksonohallo)
                  [Rose Maina](https://github.com/Rose-Maina)
                  [James Odiwuor](https://github.com/pengoJames)
                  [Vinson Steve](https://github.com/ndalilavin)

LinkedIn - [Vincent Nduri](https://www.linkedin.com/in/vincent-nduri-8b2228b5/)
           [Jackson Ohallo](linkedin.com/in/jackson-otieno-52618619b)
           [Rose Maina](https://www.linkedin.com/in/rose-wairimu-320430119/)
           [James Odiwuor](https://www.linkedin.com/in/james-odiwuor-7b7730190)
           [Vinson Steve](https://www.linkedin.com/in/vinson-ndalila-689b54b7)
