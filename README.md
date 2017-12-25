# cake-dec

Create your own cakes!

![Final Product Example](https://github.com/junior-devleague/cake-dec/blob/master/assets/example.jpg);

## Objective

Use **HTML Select and Drag and Drop** and **JavaScript Functions, Event Listeners, and Switch Statements** to create a website that will create and customize cakes.

## Prerequisites

To complete this project, students should have the following:
* Basic understanding of HTML structures and attributes.
* Basic understanding of Flexbox.
* Intermediate understanding of JavaScript and DOM (Switch Statements, Event Handling, Functions)

## Concepts

HTML | Description
select | A drop-down list element.  

JS | Description
-- | -----------
Switch Statement | Statement used to perform different actions based on different conditions.
appendChild() | A method that appends a node as the last child of a node.
node | An HTML element.

## Your Challenge

### Part I

To complete Part I, fulfill the following requirements:
1. Set up your project file structure through the command line.
2. Create the following:
* HTML file
* CSS file
* JS file
3. Link all of your files correctly.

### Part II HTML

To complete Part II, fulfill the following requirements:

1. Create a ```div``` with an ```id``` of "container".
  * **Inside** of this div, create the following HTML elements. Parent and child relationships are represented by the indentations:
  * ```div``` with an ```id``` of "options".
    * ```div``` with an ```id``` of "searchtab" and ```class``` of "active tablink". Separating class name with a space means that we are adding 2 classes to it: active and tablink.
      * ```img``` with the source to the blue.png asset.
      * ```h2``` with the text "SEARCH".
    * ```div``` with an ```id``` of "layertab" and ```class``` of "tablink".
      * ```img``` with the source to the blue.png asset.
      * ```h2``` with the text "LAYER"
    * ```div``` with an ```id``` of "decortab" and ```class``` of "tablink".
      * ```img``` with the source to the blue.png asset.
      * ```h2``` with the text ```DECOR```.
    * ```div``` with an ```id``` of "caketab" and ```class``` of "tablink".
      * ```img``` with the source to the blue.png asset.
      * ```h2``` with the text "CAKES".

**So far, the nesting should look as follows:**

![HTML Example](https://github.com/junior-devleague/cake-dec/blob/master/assets/htmlexample.png)

**The following "sidebar" div is a SIBLING to the above div with an id of options.**

  * ```div``` with an ```id``` of "sidebar".
    * ```div``` with an ```id``` of "topbar".
      * ```input``` with an ```id``` of "search" and ```placeholder``` attribute of 'Search...'.
    * ```div``` with an ```id``` of "options-content"
      * ```div``` with a ```class``` of "tabcontent" and ```id``` of "searchcontent".
        * ```h1``` with the text "Search".
      * ```div``` with a ```class``` of "tabcontent" and ```id``` of "layercontent".
        * ```h1``` with text of "Layer".
        * ```div``` with an ```id``` of "layerselect-container"
          * ```div``` with a ```class``` of "row" and ```id``` of "row1".
            * ```div``` with an ```id``` of "layerselect-type-container".
              * ```h2``` with text of "Type".
              * ```select``` with ```id``` of "layerselect-type".
                * ```option``` with ```value``` attribute of "strawberry" and text "Strawberry".
                * ```option``` with ```value``` attribute of "vanilla" and text "Vanilla".
                * ```option``` with ```value``` attribute of "chocolate" and text "Chocolate".
                * ```option``` with ```value``` attribute of "cookies-and-cream" and text "Cookies and Cream".
                * ```option``` with ```value``` of "candle" and text "Candle".
          * ```div``` with a ```class``` of "row" and ```id``` of "row2".
            * ```div``` with an ```id``` of "layerselect-width-container".
              * ```h2``` with text "Width".
              * ```select``` with an ```id``` of "layerselect-width".
                * ```option``` with ```value``` attribute of "100px" and text "Less Wide".
                * ```option``` with ```value``` attribute "200px" and text "Wide".
                * ```option``` with ```value``` attribute "300px" and text "Most Wide".
            * ```div``` with an ```id``` of "layerselect-height-container".
              * ```h2``` with text "Height".
              * ```select``` with ```id``` of "layerselect-height".
                * ```option``` with ```value``` attribute of "20px" and text "Cream".
                * ```option``` with ```value``` attribute of "30px" and text "Short".
                * ```option``` with ```value``` attribute of "40px" and text "Medium".
                * ```option``` with ```value``` attribute of "50px" and text "Tall".
        * ```button``` with ```id``` of "add-layer" and text "Add".
        * ```button``` with ```id``` of "restart" and text "Restart".
      * ```div``` with ```id``` of "decorcontent" and ```class``` of "tabcontent".
        * ```h1``` with text "Decor".
        * ```div``` with ```id``` of "decorselect-container".
          * ```div``` with an ```id``` of "decor1", ```class``` of "dot", ```draggable``` attribute equal to "true" and ```ondragstart``` attribute equal to "drag(event)".
          * ```div``` with an ```id``` of "decor2", ```class``` of "dot", ```draggable``` attribute equal to "true" and ```ondragstart``` attribute equal to "drag(event)".
          * ```div``` with an ```id``` of "decor3", ```class``` of "dot", ```draggable``` attribute equal to "true" and ```ondragstart``` attribute equal to "drag(event)".
          * ```img``` with an ```id``` of "candle" and source equal to the path to the candle.png file. Set the ```draggable``` attribute equal to "true" and ```ondragstart``` attribute equal to "drag(event)".
        * ```button``` with an ```id``` of "add-decor" and text "Add Decor".
      * ```div``` with an ```id``` of "cakecontent" and ```class``` of "tabcontent".
        * ```h1``` with text "Cakes".
  * ```div``` with an ```id``` of "cake-container".
    * ```div``` with an ```id``` of "cakebase".
    * ```div``` with an ```id``` of "cake", ```ondrop``` attribute set equal to "drop(event)" and ```ondragover``` attribute equal to "allowDrop(event)".
  * ```div``` with an ```id``` of "cashbox".
    * ```button``` with an ```id``` of "sell" and text "Sell".
    * ```h2``` with an ```id``` of "current-cash" and text "$0".
    * ```button``` with an ```id``` of "reset" and text "Reset".

---

### Part II CSS

To complete Part II, fulfill the following requirements:

1. Target the ```body``` element.
  * Set the ```margin``` to 0.
2. Target the ```button``` element.
  * Set the ```margin-top``` to 100px.
  * Set the ```font-size``` to 20px.
  * Set the ```border-radius``` to 20px.
3. Target the ```id``` of "container".
  * Set the ```height``` to calc(100vh);
  * Set the ```width``` to calc(100vw);
  * Activate flexbox!
  * Set the direction of elements to ```row``` using flexbox.
4. Target the ```id``` of "options".
  * Set the ```width``` to 10%.
  * Set the ```background-color``` to rgb(50,50,50).
  * Set the ```font-size``` to 10px.
5. Target the ```h2``` of the ```id``` of options div.
  * Set the ```width``` to 30px.
  * Set the ```height``` to 30px.
6. Target the ```img``` of the ```id``` of options div.
  * Set the ```width``` to 30px.
  * Set the ```height``` to 30px.
7. Target the ```class``` of "tablink".
  * Set the ```width``` to 100%.
  * Set the ```height``` to 100px.
  * Activate flexbox!
  * Center the items horizontally and vertically using flexbox.
  * Set the direction of elements to a ```column``` using flexbox.
  * Set the ```color``` to rgb(150,150,150);
  * Set the ```letter-spacing``` to 1px (letter spacing is what it sounds like - it allows us to change the space between the letters for aesthetic appeal!)
8. Target the ```active``` class.
  * Set the ```background-color``` to rgb(100,100,100);
  * Set the ```color``` to rgb(250,250,250);
9. Target the ```inactive``` class.
  * Set the ```background-color``` to rgb(50,50,50);
  * Set the ```color``` to rgb(150,150,150);
10. Target the ```id``` of "sidebar".
  * Set the ```height``` to calc(100vh);
  * Set the ```width``` to 30%;
  * Set the ```background-color``` to rgb(100,100,100).
11. Target the ```id``` of "topbar".
  * Set the ```width``` to 100%.
  * Set the ```height``` to 80px.
  * Activate flexbox!
  * Center the items horizontally and vertically using flexbox.
12. Target the ```id``` of "search".
  * Set the ```width``` to 80%.
  * Set the ```height``` to 45%.
  * Set the ```border-radius``` to 5px.
  * Set the ```border``` to none.
13. Target the ```id``` of "options-content".
  * Set the ```height``` to 85%.
  * Set the ```width``` to 100%.
  * Set the ```background-color``` to rgb(100,100,100).
14. Target the ```class``` of "tabcontent".
  * Set the ```display``` to none.
  * Set the ```width``` to 100%.
  * Set the ```height``` to 100%.
  * Change the direction of the items to ```column``` using flexbox. Even though we haven't activated flexbox yet, we will through our JavaScript later on!
  * Center the items horizontally using flexbox.
  * Allow wrapping to occur using flexbox.
15. Target the ```h2``` of the ```class``` tabcontent. ex. .tabcontent h2
  * Activate flexbox!
  * Center the items horizontally using flexbox.
16. Target the ```class``` of row.
  * Set the ```width``` to 100%.
  * Activate flexbox!
  * Allow horizontal space around the elements using flexbox! (Hint: Use the justify-content property)
17. Target the ```id``` of decorselect-container.
  * Activate flexbox!
  * Allow horizontal space around the elements using flexbox.
  * Center the items vertically using flexbox.
  * Allow wrapping of the elements to occur using flexbox.
  * Set the ```padding``` to 20px.
18. Target the ```class``` of "dot".
  * Set the ```width``` to 20px.
  * Set the ```height``` to 20px.
  * Set the ```border-radius``` to 200px.
  * Set the ```background-color``` to white.
  * Set the ```margin``` to 10px.
19. Target the ```id``` of candle.
  * Set the ```height``` to 90px.
  * Set the ```width``` to 100px.
20. Target the ```id``` of cake-container.
  * Set the ```height``` to calc(100vh);
  * Set the ```width``` to 70%.
  * Set the ```background-color``` to rgb(230,230,230);
  * Activate flexbox!
  * Center the items horizontally and vertically using flexbox.
  * Set the ```flex-direction``` to column-reverse.
21. Target the ```id``` of "cake".
  * Activate flexbox!
  * Set the ```flex-direction``` to column-reverse.
  * Center the items vertically using flexbox.
22. Target the ```class``` of prevCake.
  * Activate flexbox!
  * Set the ```flex-direction``` to column-reverse.
  * Center the items vertically.
  * Set the ```margin``` to 10px.
23. Target the ```class``` of cakelayer.
  * Activate flexbox!
  * Center the items horizontally and vertically using flexbox.
  * Set the direction of items to ```row``` using flexbox.
24. Target the ```id``` of cakebase.
  * Set the ```width``` to 300px.
  * Set the ```height``` to 20px.
  * Set the ```border-radius``` to 200px.
  * Set the ```background-color``` to rgb(240,240,240);
  * Set the ```box-shadow``` to ```inset 0 0 10px #000000;```
25. Target the ```id``` of cashbox.
  * Set the ```width``` to 20%.
  * Set the ```height``` to auto.
  * Set the ```position``` to fixed.
  * Set the ```bottom``` to 0.
  * Set the ```right``` to 0.
  * Set the ```background-color``` to white.
  * Activate flexbox.
  * Set the direction of items to ```column``` using flexbox.
  * Create space around the items vertically using flexbox.
  * Center the items horizontally.
  * Set the ```box-shadow``` to ```0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22);```
26. Target the ```id``` of cashbox's button element.
  * Set the ```margin``` to 10px.
27. Target the ```id``` of price-container.
  * Activate flexbox!
  * Create space around the elements horizontally.
  * Center the items vertically.
28. Target the ```class``` of strawberry.
  * Set the ```background-color``` to pink.
29. Target the ```class``` of chocolate.
  * Set the ```background-color``` to brown.
30. Target the ```class``` of vanilla.
  * Set the ```background-color``` to beige.
31. Target the ```class``` of cookies-and-cream.
  * Set the ```background-color``` to grey.
32. Target the ```class``` of candle.
  * Set the ```background-color``` to none.

---

Woohoo! That was a lot of HTML and CSS great job!

### Part III JS

To complete Part III, fulfill the following requirements:

1. Create a function called allowDrop that will take in an ```event``` as the parameter.
  * In this function, call the method preventDefault from the event object.
2. Create a function called drag that will take in an ```event``` as the parameter.
  * In this function type in the following:
  * event.dataTransfer.setData('text', event.target.id); This will retrieve the id of the element that is firing off the event and set it into 'text'.
3. Create  a function called drop that will take in an ```event``` as the parameter.
  * In this function, create a variable called data that will use the method getData('text') from event.dataTransfer to retrieve the id of the element firing off the drag event.
  * Then, append the element with id of data to the element that is firing off the drop event as follows:

  ``` JavaScript
  function drop(event) {
    var data = event.dataTransfer.getData('text');
    event.target.appendChild(document.getElementById(data));
  }
  ```

4. Create a window.onload function to start the rest of the code onload as follows:

``` javascript
window.onload = function(){
  //other code goes in here
}
```

5. Create the following variables to obtain the elements we want to work with:
  * ```variable``` called searchBar to store the element with ```id``` of "search".
  * ```variable``` called tab to store the elements with ```class``` of "tablink".
  * ```variable``` called tabcontent to store the elements with ```class``` of "tabcontent".
  * ```variable``` called layerSelect to store the element with ```id``` of "layerselect".
  * ```variable``` called typeSelect to store the element with ```id``` of "layerselect-type".
  * ```variable``` called widthSelect to store the element with ```id``` of "layerselect-width".
  * ```variable``` called heightSelect to store the element with ```id``` of "layerselect-height".
  * ```variable``` called cakeArea to store the element with ```id``` of "cake".
  * ```variable``` called pastCakeArea to store the element with ```id``` of "cakecontent".
  * ```variable``` called addLayerButton to store the element with ```id``` of "add-layer".
  * ```variable``` called restartButton to store the element with ```id``` of "restart".
  * ```variable``` called sellButton to store the element with ```id``` of "sell".
  * ```variable``` called resetButton to store the element with ```id``` of "reset".
  * ```variable``` called addDecorButton to store the element with ```id``` of "add-decor".
  * ```variable``` called profit to store the element with ```id``` of "current-cash".
  * ```variable``` called currentCash that equals 0.

6. Add an Event Listener on the addLayerButton that listens for a click. In the function, do the following:
  * Create a variable called newLayer that will create a new ```div``` element.
  * Set the ```width``` of the newLayer to the value of ```widthSelect``` as follows:
  ``` JavaScript
  newLayer.style.width = widthSelect.value
  ```
  This takes the value of the width that the user chose in the dropdown and set it to the newLayer.
  * Set the ```height``` of the newLayer to the value of ```heightSelect```.
  * Add the ```className``` typeSelect.value to newLayer. In our CSS, we made classes for the different types (strawberry, chocolate...etc.) to change the background color.
  * Add the ```className``` " cakelayer" to newLayer. **We need the space before the "c" in "cake" so that we don't override the previous class we just set, but add on to it so we have as an example: class = "strawberry cakelayer"**
  * Append newLayer to the cakeArea.

7. Add an Event Listener on the restartButton to listen for a click. In the function, do the following:
  * Make the cake layers go away by setting the innerHTML of cakeArea to "" (nothing).

8. Add an Event Listener on the sellButton to listen for a click. In the function, do the following:
  * Create an if statement that checks if the innerHTML of cakeArea is NOT equal to nothing. If so, do the following:
    * Set the innerHTML of newCake equal to the innerHTML of cakeArea. This populates our cake tab with the cake we just made.
    * Give newCake a new ```className``` "prevCake">
    * Append newCake to pastCakeArea.
    * Set the innerHTML of cakeArea to "" (nothing).
    * Set currentCash equal to the value of currentCash + 100.
    * Change the innerHTML of profit to the value of currentCash.
  * If the if statement is false and there is no cake layer present, create an alert that says ("No cake to sell!").

9. Add an Event Listener on the resetButton to listen for aclick. In the function, do the following:
  * Set currentCash equal to 0.
  * Set the innerHTML of profit equal to the value of currentCash.

10. Create a for loop that will loop through the length of the tab nodelist. When we created the variable tab to store elements with the class name tablink, we got a nodelist to work with since it returned multiple elements from that class. We can loop through the length of the nodelist just like an array as follows:

``` javascript
for (i=0; i<tab.length; i++) {
  // more code
}
```
  * In this for loop, do the following:
  * For each element in the tab nodelist, (Hint: Use the variable i to help lessen repetition!) add an Event Listener that will listen for a click. Make the function take in an ```event``` as a parameter.
    * In this for loop, call the function called deactivate which we will make soon.
    * Set the className of the currentTarget of the ```event``` object to " tablink active". Hint: Use object notation! currentTarget is a property of ```event``` and ```className``` is a property of ```event.currentTarget```!
    * Call the function switchTab with parameter event.currentTarget. We will also make this function soon.

11. Create a function called deactivate which will take no parameters. In this function, do the following:
  * Create a for loop that will loop through the length of the tab nodelist and increment the variable i by 1 every time.
    * In this for loop, set each tab nodelist element's ```className``` to " tablink inactive". (Hint: Use i to help lessen repetition!).
    * Set the display of each element in the tabcontent nodelist to "none". (Hint: Use i to help lessen repetition!).

12. Create a function called switchTab that will take in the word target as a placeholder for a parameter.
  * Create a switch statement where it will switch upon the ```target.id```.
    * If the ```target.id``` is "searchtab", set the display property of the 1st element in the tabcontent nodelist to "flex".
    * If the ```target.id``` is "layertab", set the display property of the 2nd element in the tabcontent nodelist to "flex".
    * If the ```target.id``` is "decortab", set the display property of the 3rd element in the tabcontent nodelist to "flex".
    * If the ```target.id``` is "caketab", set the display property of the 4th element in the tabcontent nodelist to "flex".

## COMBO

To unlock your lock, do the following:

1. Console.log the number of all the HTML Elements on your page. You can retrieve this number by using the following:

``` JavaScript
document.getElementsByTagName("*").length;
```
2. Add this value to the value from the last instruction from the funky-functions repository.

3. Multiply the value from #2 by 2.

4. Subtract 11 from the value from #3 and that's your combo! 
