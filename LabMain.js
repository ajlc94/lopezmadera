var Simulation = require("./simulation");
var LabEnv = require('./LabEnv');
var LabAgent = require('./LabAgent');

var env = new LabEnv();
var agent = new LabAgent();

var config = {
	delay : 500,
	ticks: 10
};

var sim = new Simulation(agent,env,config);

sim.execute();
