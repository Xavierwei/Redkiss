var images = [[1,2,3,4],[[5,6,7,8],[9,10,11],[12,13,14]],[[15,16,17,18],[19,20,21],[22,23,24]]];
var regroup = function(group, section, item, pos) {
	if(item == pos) {
		return;
	}
	var currentItem = group[section].splice(item--, 1);
	group[section].splice(pos--, 0, currentItem[0]);
}

regroup(images, 2, 2, 0);
console.log(images);
var frames = _.flatten(images);
console.log(frames);