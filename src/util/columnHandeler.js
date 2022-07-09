import { ID_Length } from "./constants.js";
import { genColumndata } from "./dataHandler";
export function appendRight(options = genColumndata()) {
  window.layout.push(genColumndata(options));
  refreshAll();
}
export function appendLeft(options = genColumndata()) {
  window.layout.unshift(genColumndata(options));
  refreshAll();
}
export function moveRight(id, index) {
  if (window.ctrlKey) {
    appendRight(genColumndata({ id: id, type: "Filetree" }));
    return;
  }
  console.log(id, index);
  let targetIndex = index + 1;
  console.log(window.layout, window.layout[targetIndex]);
  if (window.layout && window.layout[targetIndex]) {
    let targetId = window.layout[targetIndex]["id"];
    if (!targetId && window.layout[targetIndex]["data"]["notebook"]) {
      moveFileByNotebook(id, window.layout[targetIndex]["data"]["notebook"]);
      return;
    } else if (!targetId && !window.layout[targetIndex]["data"]["notebook"]) {
      return;
    } else {
      moveFileById(id, targetId);
    }
  } else {
    appendRight(genColumndata({ id: id, type: "Filetree" }));
  }
}
export function moveLeft(id, index) {
  if (window.ctrlKey) {
    appendLeft({ id: id, type: "Filetree" });
    return;
  }
  console.log(id, index);
  let targetIndex = index - 1;
  console.log(window.layout);
  if (window.layout && window.layout[targetIndex]) {
    let targetId = window.layout[targetIndex]["id"];
    if (!targetId && window.layout[targetIndex]["data"]["notebook"]) {
      moveFileByNotebook(id, window.layout[targetIndex]["data"]["notebook"]);
      return;
    } else if (!targetId && !window.layout[targetIndex]["data"]["notebook"]) {
      return;
    }
    moveFileById(id, targetId);
  } else {
    genColumndata({ id: id, type: "Filetree" });
  }
}
export async function moveFileById(id, targetId, query) {
  console.log(id, targetId);
  // let sql = `select * from blocks where id ='${id}' or id ='${targetId}'`;
  let fromBlock = await window.核心api.getBlockInfo({ id: id }, "", (data) => {
    console.log(data);
  });
  let toBlock = await window.核心api.getBlockInfo(
    { id: targetId },
    "",
    (data) => {
      console.log(data);
    }
  );
  window.核心api.moveDoc(
    {
      fromNotebook: fromBlock.box,
      fromPath: fromBlock.path,
      toNotebook: toBlock.box,
      toPath: toBlock.path,
    },
    "",
    (data) => {
      console.log(window.layout);
      !query ? refreshAll() : null;
    }
  );
}
function moveFileByNotebook(id, notebook, query) {
  let sql = `select * from blocks where id ='${id}' `;
  window.核心api.sql({ stmt: sql }, "", (data) => {
    if (data && data[0]) {
      window.核心api.moveDoc(
        {
          fromNotebook: data[0].box,
          fromPath: data[0].path,
          toNotebook: notebook,
          toPath: "/",
        },
        "",
        (data) => {
          console.log(window.layout);
          !query ? refreshAll() : null;
        }
      );
    }
  });
}
export function remove(index) {
  window.layout.splice(index, 1);
  refreshAll();
}
export function refreshAll() {
  console.log(window.layout);
  let left = window.layoutCenter.value.scrollLeft;
  console.log(left);
  window.layout.forEach((element, i) => {
    let json1 = JSON.parse(JSON.stringify(element));
    let json2 = JSON.parse(JSON.stringify(element["data"]));

    window.layout[i] = null;
    console.log(i);
    console.log(element);
    setTimeout(() => {
      window.layout[i] = json1;
      window.layout[i]["data"] = json2;
    }, 0);
    setTimeout(() => {
      window.layoutCenter.value.scrollTo(left, 0);
    }, 500);
  });
}

export function refreshIndex(index) {
  let json = JSON.parse(JSON.stringify(window.layout[index]));
  let json2 = JSON.parse(JSON.stringify(window.layout[index]["data"]));

  window.layout[index] = null;
  setTimeout(() => {
    window.layout[index] = json;
    window.layout[index]["data"] = json2;
  }, 100);
}

export function checkSelected(id) {
  let flag = false;
  let index = undefined;
  for (let i = 0; i < window.selectedBlock.length; i++) {
    let blockArray = window.selectedBlock[i];
    index = JSON.stringify(blockArray).indexOf(id);
    flag = index >= 0 ? true : false;
    console.log(flag,id)
    if (flag && id) {
      console.log(flag);
      console.log(JSON.stringify(blockArray), id, index);
      console.log(JSON.stringify({ selected: flag, selectedBlockIndex: i }));
      return JSON.stringify({
        selected: flag,
        selectedBlockIndex: (window.Digit && window.Digit.num) || i,
      });
    }
   
  }
    return JSON.stringify({
      selected: false,
      selectedBlockIndex: undefined,
    });
  
}
export function selectBlock(id) {
  console.log(window.selectedBlockIndex);
  let selectedBlock = window.selectedBlock[window.selectedBlockIndex.value];
  console.log(window.selectedBlockIndex, selectedBlock);
  selectedBlock.push(id);
}
export function UnSelectBlock(id) {
  if (window.ctrlKey) {
    UnSelectAllBlock();
    return;
  }
  window.selectedBlock.forEach((selectedBlock) => {
    selectedBlock.forEach((item, index) => {
      item == id ? selectedBlock.splice(index, 1) : null;
      if (item == id && index == 0) {
        selectedBlock[0] = null;
      }
    });
  });
}
export function UnSelectAllBlock() {
  let selectedBlock = window.selectedBlock[window.selectedBlockIndex.value];
  selectedBlock.forEach((item, index) => {
    selectedBlock[index] = null;
  });
  refreshAll();
}
export function insertColumn(index) {
  navigator.clipboard.readText().then((str) => {
    console.log(str);
    let stmt = `select * from blocks where id = '${str}'`;
    window.核心api.sql({ stmt: stmt }, "", (data) => {
      if (data && data[0]) {
        appendRight({ id: data[0]["root_id"], type: "Filetree" });
        window.layout.splice(index + 1, 0, {
          id: data[0]["root_id"],
          type: "filter",
        });
        refreshAll();
      } else {
        window.layout.splice(index + 1, 0, genColumndata());
        refreshAll();
      }
    });
  });
}
export function moveTemp(index) {
  let selectedBlock = window.selectedBlock[window.selectedBlockIndex.value];

  let targetId = window.layout[index]["id"];
  if (targetId) {
    selectedBlock.forEach((block) => {
      moveFileById(block, targetId, true);
    });
    setTimeout(() => {
      refreshAll();
    }, 1000);
  }
  if (!targetId) {
    let notebook = window.layout[index]["data"]["notebook"];
    selectedBlock.forEach((block) => {
      console.log(block, notebook);
      moveFileByNotebook(block, notebook, true);
    });

    setTimeout(() => {
      refreshAll();
    }, 1000);
  }
}
export function switchToLeft(index) {
  if (window.layout[index] && window.layout[index - 1]) {
    let JSON1 = JSON.parse(JSON.stringify(window.layout[index]));
    let JSON2 = JSON.parse(JSON.stringify(window.layout[index - 1]));

    window.layout[index] = null;
    window.layout[index - 1] = null;

    window.layout[index - 1] = JSON1;
    window.layout[index] = JSON2;
    refreshAll();
  }
}

export function switchToPreviewer(index) {
  if (window.layout[index]) {
    window.layout[index].type = "Previewer";
  }
}
export function switchToFiletree(index) {
  if (window.layout[index]) {
    window.layout[index].type = "Filetree";
  }
}
export function miniMize(index) {
  let currentdata = window.layout[index]["data"];
  if (currentdata) {
    currentdata.rowSize = JSON.stringify(currentdata.size);
    currentdata.size = { width: 0, height: 200 };
    refreshIndex(index);
  }
}
export function maxMize(index) {
  let currentdata = window.layout[index]["data"];
  if (currentdata && currentdata.rowSize) {
    if (currentdata.size && currentdata.size.width == 0) {
      currentdata.size = JSON.parse(currentdata.rowSize);
      currentdata.rowSize = "";
      refreshIndex(index);
    }
  }
}
export function switchSize(index) {
  let currentdata = window.layout[index]["data"];
  if (currentdata && currentdata.rowSize) {
    maxMize(index);
  } else {
    miniMize(index);
  }
}
