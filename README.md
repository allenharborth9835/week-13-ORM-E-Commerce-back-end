# E-commerce Back End Starter Code
<img src="https://img.shields.io/badge/license-Unlicensed-blue" alt="Unlicensed">   

## Description
  in this project we had to complete a e-commerce website using sequelize. The first thing I had to do was create the varible sequlize in the server file and sync it before the port is started. 
  I then create the columns for the models. I first created the category columns which will consist of an id which will be the primary key and the category name. the next columns I created were for the tags which are similar to the category model with just an id and tag name. the next columns I made where for the product model. in the products model I created the id, name, price, stock, and a category id that will link the product to a category. the last model I worked on was the product tag and I only had to give it an id, product id, and a tag id. This is to allow products to be connected to many different tags. I then had to create the connection of the models index file. I made product belongs to category through category id. I then made category to have many products. I finally made it where tags and products will have many connections to each other product tags. I then started to work on the routes. I made the get all in all of the route files similary, they also include the conections between products and categories. the next connections I made the files was the get one that has a passed parameter. For that I would take the in the id then match it with the git all route in that it includes the cinnections between products and categories. The nexts routes I created were the post routes. The post routes was already created in the started code but I had to create the other post which all I had to do was make a create function and have it take in the req.body and where input. the next routes were the put routes and once again it was already created for the the product routes. the other routes I created for the put is almost Idenical to the post route instead of using create I used update. the last routes I made were the delete routes which are identical to the get one routes but it uses the destroy method.

## Table of Contents
  * [Installation](#installation)
  * [Contributions](#contributions)
  * [Usage](#usage)
  * [License](#license)
  * [Contact-Info](#contact-info)

## Installation  

Node must be installed please go to https://nodejs.org/en/ to install node.
After node is installed simply type “npm Install” to install all of the necessary packages needed for this project.


## Contributions

The starter code was given for the project by class
Github repo: https://github.com/coding-boot-camp/fantastic-umbrella

## Usage



## License
  <div style="height:300px; width:90%; overflow:auto;">

      This is free and unencumbered software released into the public domain.
    
      Anyone is free to copy, modify, publish, use, compile, sell, or
      distribute this software, either in source code form or as a compiled
      binary, for any purpose, commercial or non-commercial, and by any
      means.
      
      In jurisdictions that recognize copyright laws, the author or authors
      of this software dedicate any and all copyright interest in the
      software to the public domain. We make this dedication for the benefit
      of the public at large and to the detriment of our heirs and
      successors. We intend this dedication to be an overt act of
      relinquishment in perpetuity of all present and future rights to this
      software under copyright law.
      
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
      EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
      MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
      IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
      OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
      ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
      OTHER DEALINGS IN THE SOFTWARE.
  </div>
For more information, please refer to https://unlicense.org

## Contact-Info
this project was created by Allen D Harborth  
Github(s)[allenharborth9835](https://github.com/allenharborth9835)

get in contact by sending an email at allenharborth9835@gmail.com