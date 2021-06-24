let lyrics;
let wordList = [];
let stroke_color;
let fill_color;
let mySound;
function preload() {
	//loads our assets
	lyrics = loadStrings('./assets/lyrics.txt');
	soundFormats('mp3', 'ogg');
	mysound = loadSound('assets/usblues.mp3');
	console.log(lyrics);
}
function setup() {
	createCanvas(windowWidth, windowHeight);
	background(250);
	strokeWeight(3);
	stroke_color = color('pink');
	fill_color = color('white');
	textSize(40);
	lyrics.forEach((line) => {
			wordList.push(...line.split(' '));
			});
	console.log(wordList);
	mysound.play();
}
function draw() {
	fill(fill_color);
	stroke(stroke_color);
	let rateNum = 3;
	if (frameCount % rateNum == 0) {
		let currWord = wordList[frameCount/rateNum % wordList.length];
		text(currWord, mouseX, mouseY);
	}
}
