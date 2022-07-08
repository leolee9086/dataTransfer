import { ID_Length } from "./constants.js";
export function getLayout(){

}
export function genColumndata(options) {
  let data = {
    id: "20200812220555-lj3enxa",
    type: "Filetree",
    data: {
      notebook: "",
      files: [],
      path: "",
      Hpath: "",
      boxIcon: "",
      notebookConf: {},
      pathArray: [],
      nameDict: {},
      name: "",
      size:{width: 350,
        htight: 350,}
    },
  };
  if (options) {
    data["data"]['id']=options.id
    for (let prop in options) {
      if (data.hasOwnProperty(prop)) {
        data[prop] = JSON.parse(JSON.stringify(options[prop]));
      } else {
        data["data"][prop] = JSON.parse(JSON.stringify(options[prop]));
      }
    }
    
  }
  return data;
}
export function mergeData(fromData, toData) {
  let realData = genColumndata(toData);
  for (let prop in fromData) {
    if (realData.hasOwnProperty(prop)) {
      realData[prop] = fromData[prop];
    } else {
      realData["data"][prop] = fromData[prop];
    }
  }
  toData = realData;
  return realData;
}

export function setName(name, index) {
  window.layout[index]["data"].name = window.layout[index].name = name;
}
export function goToPath(notebook, path, index) {
  console.log(window.layout[index],index);
  let currentdata = window.layout[index]["data"];
  window.核心api.listDocsByPath(
    { path: path, notebook: notebook },
    "",
    (data) => {
      if (data) {
        currentdata.notebook = notebook;
        currentdata.path = path;
        currentdata.files = data.files;
        currentdata.subtype = "Filetree";
        console.log(currentdata);
        getHpath(index);
        getNotebookConf(index);
        getPathArray(index);
        setId(path, index);
        setNoteBook(notebook, index);
        window.layout[index].id=currentdata.id
      }
    }
  );
  
}
export function getHpath(index) {
  let currentdata = window.layout[index]["data"];
  window.核心api.getHPathByPath(
    { notebook: currentdata.notebook, path: currentdata.path },
    "",
    (data) => {
      currentdata.Hpath = data;
    }
  );
}
export function getNotebookConf(index) {
  let currentdata = window.layout[index]["data"];

  window.核心api.getNotebookConf(
    { notebook: currentdata.notebook },
    "",
    (data) => {
      currentdata.notebookConf = data;
      if(currentdata.path=='/'){
        currentdata.name=data.name
      }
    }
  );
}
export function getPathArray(index) {
  let currentdata = window.layout[index]["data"];

  let array = currentdata.path.split("/");
  currentdata.pathArray = array;
  array.forEach((item) => getPathItemInfor(item, index));
}
export function getPathItemInfor(pathItem, index) {
  let currentdata = window.layout[index]["data"];

  let id = pathItem.slice(0, "20210808180117-czj9bvb".length);

  let sql = `select * from blocks where id = '${id}'`;
  window.核心api.sql({ stmt: sql }, "", (data) => {
    console.log(data);
    data && data[0] ? (currentdata.nameDict[pathItem] = data[0]) : null;
    console.log(currentdata.nameDict);
    if(pathItem.endsWith('.sy')&&data&&data[0]){
      currentdata.name=data[0]['content']
    }
    
  });
}
export function setId(idPath, index, notebook) {
  if (!window.layout[index]) {
    return;
  }
  if (!idPath) {
    window.layout[index]["id"] = "";
  }
  console.log(idPath, index);
  if (idPath.length >= ID_Length) {
    let id = idPath.slice(-3 - ID_Length).slice(0, ID_Length);
    window.layout[index]["data"]["id"] = id;
    window.layout[index]['id']=id
  } else {
    window.layout[index]["data"]["id"] = "";
  }
  if (notebook) {
    window.layout[index]["data"]["notebook"] = notebook;
  }
}
export function setNoteBook(notebook, index) {
  if (!window.layout[index]) {
    return;
  }
  window.layout[index]["data"]["notebook"] = notebook;
}
export function getNotebooks(index) {
  let currentdata = window.layout[index]["data"];
  let notebooks = window.notebooks;

  window.核心api.lsNotebooks({}, "", (data) => {
    currentdata.notebook = "";
    currentdata.files = [];
    currentdata.path = "";
    currentdata.Hpath = "";
    currentdata.boxIcon = "";
    currentdata.notebookConf = {};
    currentdata.pathArray = [];
    currentdata.nameDict = {};
    currentdata.subtype = "NoteBooks";
    notebooks.value = data.notebooks;
  });
}

