
/**
 * Module dependencies.
 */
"use strict";
var express = require("express"),
    path = require("path"),
    ejs = require("ejs"),
    app = express(),
    server = require("http").createServer(app);
	// compression = require("compression");

// app.use(compression({level:9}));//express compression to support gzip

app.set("port", process.env.PORT || 3333);
app.set("views", __dirname + "/views");
app.engine(".html", ejs.__express);
app.set("view engine", "html"); //替换文件扩展名ejs为html
app.use(express.favicon());
app.use(express.logger("dev"));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
//app.use(express.static(path.join(__dirname, "medWeb1.0")));
app.use(express.static(path.join(__dirname, "app")));
if (app.get("env") === "development") {
  app.use(express.errorHandler());
}

// angular启动页
app.get("/", function (req, res) {
    res.sendfile("app/index.html");
});
app.get("/sankey", function (req, res) {
    res.sendfile("app/sankey.html");
});
app.get("/FPSankey", function (req, res) {
    res.sendfile("app/FPSankey.html");
});
app.get("/hierarchicalPatition", function (req, res) {
    res.sendfile("app/hierarchicalPatition.html");
});
app.get("/brush", function (req, res) {
    res.sendfile("app/brush.html");
});
app.get("/circlePacking", function (req, res) {
    res.sendfile("app/circlePacking.html");
});
app.get("/customNoCollisionBrush", function (req, res) {
    res.sendfile("app/customNoCollisionBrush.html");
});
app.get("/CPPatternVis", function (req, res) {
    res.sendfile("app/CPPatternVis.html");
});
app.get("/overview_medication_0.15", function (req, res) {
    res.sendfile("app/overview_medication_0.15.html");
});
app.get("/overview_medication_new_0.15", function (req, res) {
    res.sendfile("app/overview_medication_new_0.15.html");
});
app.get("/overview_medication_new_kmeans_0.15", function (req, res) {
    res.sendfile("app/overview_medication_new_kmeans_0.15.html");
});
app.get("/overview_ori", function (req, res) {
    res.sendfile("app/overview_ori.html");
});
server.listen(app.get("port"), function () {
  console.log("Express server listening on port " + app.get("port"));
});
