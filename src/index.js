import {HTMLResponse} from "flame-response";
try{
var nunjucks = require('nunjucks');
}catch(_){
  nunjucks = require("parent-require")("nunjucks");
}

export default class RenderResponse extends HTMLResponse{

  constructor(req,res){
    super(req,res);
  }

  send(view,data){
    super.send(nunjucks.render(view,data));
  }


  render(view,data){
    this.send(view,data);
  }
}
