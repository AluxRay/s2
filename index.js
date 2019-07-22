const s2 = require('bindings')('s2');

console.log("s2", s2);
const x = new s2.Point(20);
console.log(x.plusOne());

console.log(new s2.LatLng(35.6586, 139.7454).toString());
const y = new s2.LatLng(35.6586, 69.69).normalized();
console.log(y.toString());

const z = new s2.CellId(y);
console.log(z.id());
//console.log(z.child(0).id());
console.log(z.parent(0).id());

const coordinates94102 = [[-122.417529,37.783311],[-122.418063,37.783243],[-122.418458,37.783192],[-122.419182,37.783101],[-122.419119,37.782794],[-122.418993,37.782169],[-122.420541,37.781973],[-122.420689,37.781955],[-122.420738,37.782053],[-122.42081,37.782417],[-122.420906,37.782883],[-122.422464,37.782685],[-122.422369,37.782219],[-122.422293,37.78184],[-122.422287,37.781752],[-122.422391,37.78173],[-122.423918,37.781536],[-122.424108,37.782477],[-122.427396,37.782057],[-122.427312,37.781652],[-122.427203,37.781117],[-122.427017,37.780193],[-122.4269,37.779611],[-122.426829,37.779258],[-122.42819,37.779086],[-122.428182,37.778629],[-122.428084,37.778145],[-122.428909,37.778039],[-122.429152,37.778007],[-122.429771,37.777929],[-122.429849,37.777919],[-122.429929,37.777909],[-122.429757,37.776967],[-122.429677,37.776595],[-122.429626,37.776513],[-122.429622,37.776329],[-122.429554,37.776044],[-122.42946,37.775577],[-122.429366,37.775111],[-122.429273,37.774649],[-122.429178,37.774181],[-122.429085,37.773722],[-122.42899,37.773248],[-122.42889,37.772754],[-122.428802,37.772316],[-122.428708,37.77185],[-122.428614,37.771383],[-122.42852,37.770918],[-122.428426,37.770452],[-122.428275,37.769701],[-122.42822,37.769441],[-122.426684,37.769534],[-122.426402,37.769596],[-122.424929,37.770778],[-122.423641,37.771828],[-122.423267,37.772058],[-122.42262,37.772503],[-122.422186,37.772909],[-122.421989,37.773074],[-122.421916,37.773123],[-122.421089,37.773775],[-122.420714,37.774078],[-122.420254,37.774359],[-122.420177,37.774457],[-122.419681,37.774871],[-122.419334,37.77521],[-122.41931,37.775233],[-122.419219,37.775316],[-122.419161,37.775385],[-122.418704,37.775645],[-122.417615,37.7766],[-122.416292,37.777494],[-122.416261,37.777572],[-122.416009,37.777773],[-122.414835,37.778701],[-122.414782,37.778744],[-122.414721,37.778791],[-122.413365,37.779862],[-122.412609,37.780459],[-122.412548,37.780508],[-122.412492,37.780552],[-122.411985,37.780952],[-122.4117,37.781177],[-122.411457,37.781369],[-122.410391,37.782211],[-122.410336,37.782245],[-122.410271,37.782306],[-122.410052,37.782479],[-122.409184,37.783164],[-122.409086,37.783125],[-122.409018,37.783112],[-122.408575,37.783434],[-122.408563,37.783535],[-122.408684,37.78344],[-122.408688,37.783556],[-122.40816,37.783973],[-122.408104,37.78402],[-122.407451,37.784604],[-122.406291,37.785508],[-122.406062,37.785757],[-122.404743,37.786778],[-122.40485,37.78681],[-122.405346,37.786748],[-122.406399,37.786615],[-122.40659,37.787568],[-122.406683,37.788033],[-122.406771,37.788499],[-122.408402,37.788293],[-122.408595,37.789226],[-122.410242,37.789016],[-122.410561,37.788975],[-122.410903,37.788932],[-122.411031,37.788916],[-122.411251,37.788888],[-122.411886,37.788808],[-122.411819,37.78848],[-122.411755,37.788169],[-122.412405,37.788087],[-122.412344,37.78779],[-122.412531,37.787767],[-122.412736,37.787741],[-122.413354,37.787664],[-122.413295,37.787384],[-122.413161,37.78673],[-122.413573,37.786677],[-122.413701,37.78666],[-122.413823,37.786645],[-122.414807,37.78652],[-122.41471,37.786041],[-122.414617,37.785582],[-122.414566,37.785333],[-122.414521,37.785105],[-122.41443,37.784657],[-122.414345,37.784239],[-122.414242,37.783724],[-122.414585,37.783681],[-122.415883,37.783516],[-122.417529,37.783311]];
console.log("THIS IS THE LENGTH", coordinates94102.length);
const lls = coordinates94102.slice(1).map((lnglat) => {
  const [ lng, lat ] = lnglat;
  return new s2.LatLng(lat, lng).normalized();
});

console.log("here?");

const loop = new s2.Loop(lls);
console.log("loop", loop);

const builder = new s2.Builder();
builder.addLoop(loop);
const polygon = builder.build();
console.log("builder / polygon", builder, polygon);

//const p = new s2.Polygon(arraybuffer);
//console.log("poly", p);

//const coverer = new s2.RegionCoverer({ min: 14, max: 14 });
const coverer = new s2.RegionCoverer({ min: 2, max: 20 });
const covering = coverer.getCovering(polygon);
console.log("cover / covering", coverer, covering);

console.log(
  covering.map((c) => c.id())
);

console.log(covering.map((c) => c.token()).join(','));

const t = Array.from(covering);
console.log(t, t.length);

module.exports = s2;
