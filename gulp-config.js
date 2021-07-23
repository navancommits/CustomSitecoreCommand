module.exports = function () {
    var instanceRoot = "C:\\inetpub\\wwwroot\\sc1011sc.dev.local";
  var config = {
    websiteRoot: instanceRoot + "\\",
    sitecoreLibraries: instanceRoot + "\\bin",
    licensePath: instanceRoot + "\\App_Data\\license.xml",
      packageXmlBasePath: ".\\src\\Project\\CustomSitecoreCommand\\code\\App_Data\\packages\\CustomSitecoreCommand.xml",
    packagePath: instanceRoot + "\\App_Data\\packages",
    solutionName: "CustomSitecoreCommand",
    buildConfiguration: "Debug",
    buildToolsVersion: '16.0',
    buildMaxCpuCount: 0,
    buildVerbosity: "minimal",
    buildPlatform: "Any CPU",
    publishPlatform: "AnyCpu",
    runCleanBuilds: false
  };
  return config;
}
