# SOME USEFUL JAVASCRIPT LIBRARIES

**Warning !**

This post contents are just for purpose of sharing some issues I faced during my Internship projects for design iframe for gadget designing. Hope it will be same work for html pages too.

**Accordion - Not a Library**

This is inside the JQuery, you need to add the JQuery related js files and css files and also JQuery ui related js and css file for better functioning.Download Images folder too to get the relavent Images for accordion styles.

Sample toggling function of expand and collapse, this will display the collapse data during first click and collapse it back in second click.

```javascript
$('.accordion-toggle').click(function() {
if($('.accordion-toggle').hasClass('collapsed')){
$('.accordion-toggle').removeClass('collapsed');
$('.accordion-inner').removeClass('collapse');
}else{
$('.accordion-toggle').addClass('collapsed')
$('.accordion-inner').addClass('collapse');
}
});
```

For case where you use more than two Accordion it is better to deal with id rather than using the class, and we need to add function when we are dynamically generating it(if we are dynamically generating it)

**Select2**

Select2 is a developed combo box with single, multiple selection, searching,branched selection and remove selection option, and it styles the combo box.Look at it's github page[1] for it source code and it's website for more examples[2].It was really cool thing to use. And when we created combobox using this to run efficiently we need to add the required select2.css, select2.js and select2.min.js files whether locally or online. When using locally include the images folder inside the css folder, other wise some styles related to images won't appear. And to initialize the select2 we generally follow following syntax

```javascript
$(".js-example-basic-single").select2();
```

This can be worked fine both id and class, but declaring for class is easy and efficient in most practices.

**Leaflet**

This is used for creating dynamic maps with our custom styles and standards.

Note : When loading contents first load the div then run function, or setup timeout or async property to work it fine.

```javascript
setTimeout( function() {
mymap = L.map('mapid').setView([45, -180], 2);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
attribution: 'Map data © [OpenStreetMap](http://openstreetmap.org) contributors, [CC-BY-SA](http://creativecommons.org/licenses/by-sa/2.0/), 
```
**Warning !**

This post contents are just for purpose of sharing some issues I faced during my Internship projects for design iframe for gadget designing. Hope it will be same work for html pages too.

**Accordion - Not a Library**

This is inside the JQuery, you need to add the JQuery related js files and css files and also JQuery ui related js and css file for better functioning.Download Images folder too to get the relavent Images for accordion styles.

Sample toggling function of expand and collapse, this will display the collapse data during first click and collapse it back in second click.

```javascript
$('.accordion-toggle').click(function() {
if($('.accordion-toggle').hasClass('collapsed')){
$('.accordion-toggle').removeClass('collapsed');
$('.accordion-inner').removeClass('collapse');
}else{
$('.accordion-toggle').addClass('collapsed')
$('.accordion-inner').addClass('collapse');
}
});
```

For case where you use more than two Accordion it is better to deal with id rather than using the class, and we need to add function when we are dynamically generating it(if we are dynamically generating it)

**Select2**

Select2 is a developed combo box with single, multiple selection, searching,branched selection and remove selection option, and it styles the combo box.Look at it's github page[1] for it source code and it's website for more examples[2].It was really cool thing to use. And when we created combobox using this to run efficiently we need to add the required select2.css, select2.js and select2.min.js files whether locally or online. When using locally include the images folder inside the css folder, other wise some styles related to images won't appear. And to initialize the select2 we generally follow following syntax

$(".js-example-basic-single").select2();

This can be worked fine both id and class, but declaring for class is easy and efficient in most practices.

**Leaflet**

This is used for creating dynamic maps with our custom styles and standards.

Note : When loading contents first load the div then run function, or setup timeout or async property to work it fine.

```javascript
    setTimeout( function() {
    mymap = L.map('mapid').setView([45, -180], 2);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data © [OpenStreetMap](http://openstreetmap.org) contributors, [CC-BY-SA](http://creativecommons.org/licenses/by-sa/2.0/), Imagery © [Mapbox](http://mapbox.com)',
    maxZoom: 18,
    id: '**yourMapId**',
    accessToken: '**yourAccessToken**'
    }).addTo(mymap);
    }, 10);
```

Here we need to set yourMapId, and yourAccessToken by registering on https://www.mapbox.com/.

**Data-tables**

My last post is about data-tables, since I omit it's contents here.

References I have Looked In,

1.  https://jqueryui.com/accordion/
2.  [https://github.com/select2/select2](https://github.com/select2/select2)
3.  [https://select2.github.io/](https://select2.github.io/)
4.  http://leafletjs.com/index.htmlagery © [Mapbox](http://mapbox.com)',
maxZoom: 18,
id: '**yourMapId**',
accessToken: '**yourAccessToken**'
}).addTo(mymap);
}, 10);

Here we need to set yourMapId, and yourAccessToken by registering on https://www.mapbox.com/.

**Data-tables**

My last post is about data-tables, since I omit it's contents here.

References I have Looked In,

1.  https://jqueryui.com/accordion/
2.  [https://github.com/select2/select2](https://github.com/select2/select2)
3.  [https://select2.github.io/](https://select2.github.io/)
4.  http://leafletjs.com/index.html
