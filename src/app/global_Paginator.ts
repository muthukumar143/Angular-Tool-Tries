export class pagination {
  constructor() {}

  returnType: returns = {
    records: [],
    nextState: false,
    prevState: false,
    firstState: false,
    lastState: false
  };

  onStart(totalTableRecords: any[], paginatorSize: number): returns {
    debugger;
    if (totalTableRecords.length < paginatorSize) {
      this.returnType.records = totalTableRecords;
      this.returnType.firstState = true;
      this.returnType.nextState = true;
      this.returnType.prevState = true;
      this.returnType.lastState = true;
    } else {
      for (let i = 0; i < paginatorSize; i++) {
        this.returnType.records.push(totalTableRecords[i]);
      }
      this.returnType.firstState = true;
      this.returnType.nextState = false;
      this.returnType.prevState = true;
      this.returnType.lastState = false;
    }
    return this.returnType;
  }

  nextPage(
    currentTableRecord: any[],
    totalTableRecord: any[],
    paginatorSize: number
  ): returns {
    debugger;
    let currentLastNumber = currentTableRecord.length - 1;
    let currentLastDataIndex = totalTableRecord.findIndex(
      datas => datas === currentTableRecord[currentLastNumber]
    );
    let nextRecords: any[] = [];
    for (
      let i = currentLastDataIndex + 1, j = 1;
      i < totalTableRecord.length;
      i++, j++
    ) {
      if (j <= paginatorSize) {
        nextRecords.push(totalTableRecord[i]);
      } else {
        break;
      }
    }
    let nextRecordsLastIndex = totalTableRecord.findIndex(
      datas => datas === nextRecords[nextRecords.length - 1]
    );
    if (
      nextRecords.length < paginatorSize ||
      nextRecordsLastIndex === totalTableRecord.length - 1
    ) {
      this.returnType.nextState = true;
      this.returnType.prevState = false;
      this.returnType.lastState = true;
      this.returnType.firstState = false;
    } else {
      this.returnType.nextState = false;
      this.returnType.prevState = false;
      this.returnType.lastState = false;
      this.returnType.firstState = false;
    }
    this.returnType.records = nextRecords;
    return this.returnType;
  }

  previousPage(
    currentTableRecord: any[],
    totalTableRecord: any[],
    paginatorSize: number
  ): returns {
    let firstIndexOfCurrentRecord = totalTableRecord.findIndex(
      datas => datas === currentTableRecord[0]
    );
    let prevRecords: any[] = [];

    for (let i = firstIndexOfCurrentRecord - 1, j = 1; i >= 0; i--, j++) {
      if (j <= paginatorSize) {
        prevRecords.push(totalTableRecord[i]);
      } else {
        break;
      }
    }
    let prevRecordFirstIndex = totalTableRecord.findIndex(
      datas => datas === prevRecords[prevRecords.length - 1]
    );
    if (prevRecordFirstIndex === 0) {
      this.returnType.nextState = false;
      this.returnType.lastState = false;
      this.returnType.prevState = true;
      this.returnType.firstState = true;
    } else {
      this.returnType.nextState = false;
      this.returnType.lastState = false;
      this.returnType.prevState = false;
      this.returnType.firstState = false;
    }

    this.returnType.records = prevRecords.reverse();
    return this.returnType;
  }

  firstPage(totalTableRecords: any[], paginatorSize: number): returns {
    debugger;
    let firstPageRecords: any[] = [];
    if (totalTableRecords.length >= paginatorSize) {
      for (let i = 0; i < paginatorSize; i++) {
        firstPageRecords.push(totalTableRecords[i]);
      }
    } else {
      firstPageRecords = totalTableRecords;
    }
    this.returnType.records = firstPageRecords;
    this.returnType.firstState = true;
    this.returnType.prevState = true;
    this.returnType.nextState = false;
    this.returnType.lastState = false;
    return this.returnType;
  }

  lastPage(totalTableRecord: any[], paginatorSize: number): returns {
    debugger;
    let remainingDatasLength = totalTableRecord.length % paginatorSize;
    let lastRecords: any[] = [];
    if (remainingDatasLength !== 0) {
      for (
        let i = totalTableRecord.length - 1, j = 1;
        j <= remainingDatasLength;
        i--, j++
      ) {
        lastRecords.push(totalTableRecord[i]);
      }
    } else {
      for (
        let i = totalTableRecord.length - 1, j = 1;
        j <= paginatorSize;
        j++
      ) {
        lastRecords.push(totalTableRecord[i]);
      }
    }
    this.returnType.records = lastRecords.reverse();
    this.returnType.firstState = false;
    this.returnType.prevState = false;
    this.returnType.nextState = true;
    this.returnType.lastState = true;
    return this.returnType;
  }
}

export class returns {
  records: any[];
  nextState: boolean;
  prevState: boolean;
  firstState: boolean;
  lastState: boolean;
}
