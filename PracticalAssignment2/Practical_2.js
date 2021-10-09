
var os = require('os');
console.log("Os CPU Architecture: " + os.arch());
console.log("Free Memory Of System: " + os.freemem());
console.log("Total memory of the system: " + os.totalmem());
console.log("Platform: " + os.platform());
console.log("Information about the current user: " + os.userInfo());