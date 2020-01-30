
function doGet(e){

    return HtmlService.createTemplateFromFile("index")
           .evaluate()
           .setTitle("VueJS and Google Apps Script Boilerplate")
           .addMetaTag("viewport","width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui");
}
  
function include(file){
  
    return HtmlService.createHtmlOutputFromFile(file).getContent();
}