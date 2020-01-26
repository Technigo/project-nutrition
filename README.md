# Can I eat this?
This project uses data from the Open Food Facts database to display allergens and traces information for food products. The user can scan a product's barcode with their camera and get info about the product if it's available in the database.

## Se the project in action
[Can I eat this website](https://can-i-eat-this.netlify.com/)

## Tech and techniques
* React
* Redux (with Redux Toolkit)
* JSX
* JavaScript
* Styled components

## What did I do?
I started with looking at some product responses from the API and planned what data I should display.

A lot of products don't exist in the database and a lot of those that do have inconclusive data. I had to handle when a product didn't exist as well as when some or all of the data I was looking for was missing. I also had to strip the results from prefixes before displaying the data on the site.

In this project I decided to try out styled components and make my components more reusable. I still think I can imrpove on that.

Other things I'd like to improve is to filter out languages that I don't want to use, because sometimes several instances of the same trace is returned but in different languages.