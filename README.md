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
