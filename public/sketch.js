var serial; // instance of the serialport library
var portName = '/dev/cu.usbmodemFA131';
var inData; // variable for incoming serial data

function setup() {
	createCanvas(400, 400);
	serial = new p5.SerialPort(); // new instance of serialport library
	serial.on('connected', serverConnected); // callback for connecting to the server
	serial.on('open', portOpen); // callback for the port opening
	serial.on('data', serialEvent); //callback for when new data arrives
	serial.on('error', serialError); //callback for errors
	serial.on('close', portClose); //callback for the port closing
	serial.open(portName); // open a serial port
	console.log(serverConnected);
}



function serverConnected() {
	println('connected to server');
}

function portOpen() {
	println('port opened.');
}

function serialEvent() {
	inData = Number(serial.read());
}

function serialError(err) {
	println('Something went wrong with the serial port.' + err);
}

function portClose() {
	println('port closed.');
}

function draw(){
  background('violet');
	console.log(inData);
}
