var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur ='Triceratops';
var dinosaurUpperCased = dinosaur.toUpperCase();

console.log(dinosaurUpperCased);

var textCharsAfter = text.replace('Velociraptor', dinosaur);

var textLenght = textCharsAfter.slice(0,text.length/2);

console.log(textLenght);



