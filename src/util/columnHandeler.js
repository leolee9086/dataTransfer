export function appendRight(options = { id: "", type: "filter" }) {
  window.layout.push(options);
}
export function appendLeft(options = { id: "", type: "filter" }) {
  window.layout.unshift(options);
  refreshAll();
}
export function moveRight(id, index) {
  if (window.ctrlKey) {
    appendRight({ id: id, type: "filter" });
    return;
  }
  console.log(id, index);
  let targetIndex = index + 1;
  console.log(window.layout);
  if (window.layout && window.layout[targetIndex]) {
    let targetId = window.layout[targetIndex]["id"];
    if (!targetId && window.layout[targetIndex]["noteBook"]) {
      moveFileByNotebook(id, window.layout[targetIndex]["noteBook"]);
      return;
    }
    moveFileById(id, targetId);
  } else {
    appendRight({ id: id, type: "filter" });
  }
}
export function moveLeft(id, index) {
  if (window.ctrlKey) {
    appendLeft({ id: id, type: "filter" });
    return;
  }
  console.log(id, index);
  let targetIndex = index - 1;
  console.log(window.layout);
  if (window.layout && window.layout[targetIndex]) {
    let targetId = window.layout[targetIndex]["id"];
    if (!targetId && window.layout[targetIndex]["noteBook"]) {
      moveFileByNotebook(id, window.layout[targetIndex]["noteBook"]);
      return;
    }
    moveFileById(id, targetId);
  } else {
    appendLeft({ id: id, type: "filter" });
  }
}
async function moveFileById(id, targetId, query) {
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

  /* window.核心api.sql({ stmt: sql }, "", (data) => {
    if (data && data[1]) {
      let fromBlock = data[0].id == id ? data[0] : data[1];
      let toBlock = data[0].id == id ? data[1] : data[0];
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
  });*/
}
function moveFileByNotebook(id, noteBook, query) {
  let sql = `select * from blocks where id ='${id}' `;
  window.核心api.sql({ stmt: sql }, "", (data) => {
    if (data && data[0]) {
      window.核心api.moveDoc(
        {
          fromNotebook: data[0].box,
          fromPath: data[0].path,
          toNotebook: noteBook,
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
export function setId(idPath, index, noteBook) {
  if (!window.layout[index]) {
    return;
  }
  if (!idPath) {
    window.layout[index]["id"] = "";
  }
  console.log(idPath, index);
  if (idPath.length >= "20200812220555-lj3enxa".length) {
    let id = idPath
      .slice(-3 - "20200812220555-lj3enxa".length)
      .slice(0, "20200812220555-lj3enxa".length);
    window.layout[index]["id"] = id;
  } else {
    window.layout[index]["id"] = "";
  }
  if (noteBook) {
    window.layout[index]["noteBook"] = noteBook;
  }
}
export function remove(index) {
  window.layout.splice(index, 1);
  refreshAll();
}
export function refreshAll() {
  window.layout.forEach((element, i) => {
    let json = JSON.parse(JSON.stringify(element));
    window.layout[i] = null;
    setTimeout(() => {
      window.layout[i] = json;
    }, 100);
  });
}

export function setNoteBook(noteBook, index) {
  if (!window.layout[index]) {
    return;
  }
  window.layout[index]["noteBook"] = noteBook;
}
export function refreshIndex(index) {
  let json = JSON.parse(JSON.stringify(window.layout[index]));
  window.layout[index] = null;
  setTimeout(() => {
    window.layout[index] = json;
  }, 100);
}
export function selectBlock(id) {
  console.log(window.selectedBlockIndex);
  let selectedBlock = window.selectedBlock[window.selectedBlockIndex.value];
  console.log(window.selectedBlockIndex, selectedBlock);
  selectedBlock.push(id);
}
export function UnSelectBlock(id) {
  let selectedBlock = window.selectedBlock[window.selectedBlockIndex.value];

  if (window.ctrlKey) {
    UnSelectAllBlock();
    return;
  }
  selectedBlock.forEach((item, index) => {
    item == id ? selectedBlock.splice(index, 1) : null;
    if (item == id && index == 0) {
      selectedBlock[0] = null;
    }
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
        appendRight({ id: data[0]["root_id"], type: "filter" });
        window.layout.splice(index + 1, 0, {
          id: data[0]["root_id"],
          type: "filter",
        });
        refreshAll();
      } else {
        window.layout.splice(index + 1, 0, { id: "", type: "filter" });
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
    let noteBook = window.layout[index]["noteBook"];
    selectedBlock.forEach((block) => {
      console.log(block, noteBook);
      moveFileByNotebook(block, noteBook, true);
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
export function checkSelected(id) {
  let flag = false;
  let index = undefined;
  for (let i = 0; i < window.selectedBlock.length; i++) {
    let blockArray = window.selectedBlock[i];
    index = JSON.stringify(blockArray).indexOf(id);
    flag = index >= 0 ? true : false;
    if (flag) {
      console.log(flag);
      console.log(JSON.stringify(blockArray), id, index);
      console.log(JSON.stringify({ selected: flag, selectedBlockIndex: i }));
      return JSON.stringify({ selected: flag, selectedBlockIndex: window.Digit&&window.Digit.num||i });
    }
  }
}
