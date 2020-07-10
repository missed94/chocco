let myMap;

const init = () => {
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.03, 82.92],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 16,
    controls:[]
});

const coords = [
  [55.030439, 82.924504],
  [55.028631, 82.918379],
  [55.031376, 82.917726]
];


var myCollection = new ymaps.GeoObjectCollection({},{

  draggable: false,
  iconLayout: 'default#image',
  iconImageHref: './icons/icon_map.svg',
    iconImageSize: [46, 57],
    iconImageOffset: [-35, -52]
});

coords.forEach(coord => {
  myCollection.add(new ymaps.Placemark(coord))
});

myMap.geoObjects.add(myCollection);

myMap.behaviors.disable('scrollZoom');

}

ymaps.ready(init);