## Week 2 Assignment: Student Store

Submitted by: Flor Hernandez Rodriguez

Deployed Application (optional): [Student Store Deployed Site](ADD_LINK_HERE)

### Application Features

#### CORE FEATURES

- [x] The API should contain an endpoint that serves an array of all products in the store
- [x] A Store model should handle all data management logic for the API and be the interface for read/write operations to the JSON file.
- [x] The frontend should include a landing page that displays the products available for purchase.
- [x] Each product should have an individual page that shows the details of the product.

#### STRETCH FEATURES

- [ ] Deploy your website with Heroku & Surge. 
- [ ] An endpoint should exist for creating orders and saving them to a JSON file. Each order should contain the email of the person placing the order, the items associated with the order, and the quantity of each item purchased.
- [ ] There should be a `Sidebar` component that appears on every page and has two states - `open` and `closed`. When the sidebar is opened, it should display a shopping cart of all the products the user currently has in their cart. It should also calculate and display the total amount in dollars for the checked-out items. When it's closed, the sidebar should be much thinner and not display its internal content.
- [ ] A checkout form should be available that allows the user to enter their email and send their order to the API.
- [ ] Create an endpoint for fetching all orders in the database, and an endpoint for serving an individual order based on its id.
- [x] Create an endpoint that serves only a single product based on the product's id
- [ ] Build a page in the UI that displays the list of all past orders and lets the user click on any individual order to take them to a more detailed page of the transaction.
- [ ] Allow users to use an input to filter orders by the email of the person who placed the order.

### Walkthrough Video

`<iframe src="https://giphy.com/embed/VupNJSYArvQjIsDnoj" width="480" height="278" frameBorder="0" class="giphy-embed" allowFullScreen></iframe><p><a href="https://giphy.com/gifs/VupNJSYArvQjIsDnoj">via GIPHY</a></p>`

`https://media.giphy.com/media/VupNJSYArvQjIsDnoj/giphy.gif`


### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

- The lab we did on Wednesday was a great help in the assignment as it consisted of the same consepts regarding the backend creating the api and endpoints and the frontend being able to route and link the api to call the functions and display our array of products. I was unprepared to do the shopping cart element in the assignment as I still had trouble wrapping my head around the concept. 

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
- If I had more time I would have implemented the stretch features. I was able to write code for the shopping cart and receipt information for the user but I did not finish implementing it correctly. I would also have liked to add accesibility features in the application to make it more user friendly to all users. 

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

- After a lot of struggling I was able to implement my array function to display the products into the main page and took time to make it look appealing for the user. However, when displaying the product details, my css does not look the best. My peers presented some amazing looking projects that inspired me to try out different styling features. 

### Open-source libraries used

- Add any links to open-source libraries used in your project.

https://www.figma.com/files/recent?fuid=987383298857523633
https://www.sitepoint.com/how-to-create-an-ecommerce-site-with-react/


Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.
- The intructors and TA were a major help with the many errors I kept dealing with. At some point, Paige, Elie and Raahima came into my breakout room to help me fix an error that I could not find. 