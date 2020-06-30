# Node Challenge - London Mini-Guide

In this challenge you are going to build a full stack application (server & client) that shows the number of hospitals, doctors, pharmacies and colleges in some London's boroughs.

## Time to Complete

Between 4 and 15 hours

## Live Version

You can find the website running live here:

https://london-mini-guide-challenge.netlify.app/

You don't need to know where the server is actually hosted.

### Final Project Screenshot

![project screenshot](https://i.imgur.com/Or1tNpV.png)

## Data Source

The data is provided to you in a folder `./data` which contains 3 files: `Harrow.json`, `Heathrow.json` and `Stratford.json`.

Each file in this format:

  ```js
  {
      "pharmacies" : [
          {
              "name" :
              "address":
              "website":
              "phone" :
          }
      ],

      "colleges" : [
          {
              "name" :
              "address":
              "website":
              "phone" :
          }
      ],

      "doctors" : [
          {
              "name" :
              "address":
              "website":
              "phone" :
          }
      ],

      "hospitals" : [
          {
              "name" :
              "address":
              "website":
              "phone" :
          }
      ]
  }
  ```

Data source: https://www.yell.com/

Data has been collected using `web scraping` technique, if you are more curious about this please check [this repo](https://github.com/ahmad-ali14/web-scraping---get-all-businesses-data-in-any-city) or [this youtube video](https://github.com/ahmad-ali14/web-scraping---get-all-businesses-data-in-any-city). and this is completely optional.

## Server

You should implement your server logic using `node` and `express`

### Server Level 100

Make a new express server and deploy it to `repl.it` or `heroku`.

On the route `/` respond with the routes you are planing to implement, example:

```js
{
    "/pharmcies": "retruns an array of pharmacies in a specific area"
    ...
}
```

### Server Level 200

Make your server working for only one city, example: `Stratford`

In this level you should have 4 routes:

  |    route    |                result                 |
  | :---------: | :-----------------------------------: |
  | /pharmacies | returns pharmacies list for stratford |
  |  /colleges  |  returns colleges list for stratford  |
  |  /doctors   |  returns doctors list for stratford   |
  | /hospitals  | returns hospitals list for stratford  |

### Server Level 300

Now make your city dynamic. You should be able to return data based on any city that is passed to the server.

Routes will change:

|       route       |              result               |
| :---------------: | :-------------------------------: |
| /:city/pharmacies | returns pharmacies list for :city |
|  /:city/colleges  |  returns colleges list for :city  |
|  /:city/doctors   |  returns doctors list for :city   |
| /:city /hospitals | returns hospitals list for :city  |

### Server Level 500

Make all of that in one single route as:

|      route       |              result              |
| :--------------: | :------------------------------: |
| /:city/:category | returns :category list for :city |

### Server Level 999

You have the full control over this level

Some suggestions:

  - Add new cities.
  - Add routes to add entries to our data.
  - Make sure that you are saving the entered values to the `json` file.

## Client

- You need to implement your client (or front-end) logic using `react.js`.

### Client Level 100

In this level you should

- Display a title in the center on the website
- Display the available cities in a dropdown menu
- Display the category buttons
- Display table with fake data
  - No need to do a fetch at this time
  - Just make sure it works with the JSON from the Server.

### Client Level 200

In this level you should

- Make sure that selecting a city will update the state
- Make sure that clicking on a specific category will activate it 
  - The style of the button should also change to distingush it from other buttons
- Show an error if user tries to choose a category before chosing a city

![show an error if user tries to choose a category before chosing a city](https://i.imgur.com/vVPsMUe.png)

### Client Level 300

In this level you should

- Make fetch request to your server for a specific city.
- Choosing any category will display the data specified to that city in the table.
- Add loading spinner while you're fetching the data your server.

### Client Level 500

In this level you should

- Make city selection dynamic.
- Selecting a city then selecting a category should displays the data of the selected city in the table.

### Client Level 999

You have the full control over this level!

Some suggestions

  - Add a section contains some data about each city.
  - Add a form for adding more entries to the data.
