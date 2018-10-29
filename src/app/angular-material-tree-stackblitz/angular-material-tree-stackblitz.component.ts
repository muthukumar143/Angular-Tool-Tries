import { debug } from "util";
import { Observable, of as ObservableOf } from "rxjs";
import { SelectionModel } from "@angular/cdk/collections";
import { FlatTreeControl } from "@angular/cdk/tree";
import { Component, Injectable, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import {
  MatTreeFlatDataSource,
  MatTreeFlattener
} from "@angular/material/tree";
import { ChecklistDatabase } from "./angular-material-tree-stackblitz.service";
import { notEqual } from "assert";

@Component({
  selector: "app-angular-material-tree-stackblitz",
  templateUrl: "./angular-material-tree-stackblitz.component.html",
  styleUrls: ["./angular-material-tree-stackblitz.component.css"],
  providers: [ChecklistDatabase]
})
export class AngularMaterialTreeStackblitzComponent implements OnInit {
  flatNodeMap = new Map<TodoItemFlatNode, TodoItemNode>();

  nestedNodeMap = new Map<TodoItemNode, TodoItemFlatNode>();

  selectedParent: TodoItemFlatNode | null = null;

  newItemName = "";

  treeControl: FlatTreeControl<TodoItemFlatNode>;

  treeFlattener: MatTreeFlattener<TodoItemNode, TodoItemFlatNode>;

  dataSource: MatTreeFlatDataSource<TodoItemNode, TodoItemFlatNode>;

  checklistSelection = new SelectionModel<TodoItemFlatNode>(true);

  constructor(private database: ChecklistDatabase) {
    this.treeFlattener = new MatTreeFlattener(
      this.transformer,
      this.getLevel,
      this.isExpandable,
      this.getChildren
    );
    this.treeControl = new FlatTreeControl<TodoItemFlatNode>(
      this.getLevel,
      this.isExpandable
    );
    this.dataSource = new MatTreeFlatDataSource(
      this.treeControl,
      this.treeFlattener
    );

    database.dataChange.subscribe(data => {
      this.dataSource.data = data;
      // console.log(this.dataSource);
    });
  }

  ngOnInit() {
    // console.log(this.treeControl);
    // console.log(this.dataSource);
  }

  getLevel = (node: TodoItemFlatNode) => node.level;

  isExpandable = (node: TodoItemFlatNode) => node.expandable;

  getChildren = (node: TodoItemNode): Observable<TodoItemNode[]> =>
    ObservableOf(node.children);

  hasChild = (_: number, _nodeData: TodoItemFlatNode) => _nodeData.expandable;

  hasNoContent = (_: number, _nodeData: TodoItemFlatNode) =>
    _nodeData.Module_Name === "";

  isEditable = (_: number, _nodeData: TodoItemFlatNode) => {
    debugger;
    _nodeData.edit;
  };

  transformer = (node: TodoItemNode, level: number) => {
    // debugger;
    const existingNode = this.nestedNodeMap.get(node);
    // console.log("node: todoitemnode", node);
    // console.log("existingNode", existingNode);
    const flatNode =
      existingNode && existingNode.Module_Name === node.Module_Name
        ? existingNode
        : new TodoItemFlatNode();
    flatNode.Module_Name = node.Module_Name;
    flatNode.level = level;
    if (node.children.length !== 0) {
      flatNode.haschildren = true;

      let addFlag = 0;
      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i].Module_Name === "") {
          addFlag = 1;
          break;
        }
      }
      if (addFlag === 1) {
        flatNode.add = false;
      } else {
        flatNode.add = true;
      }
    } else {
      flatNode.add = true;
      flatNode.haschildren = false;
    }
    // flatNode.expandable = !!node.children;

    // flatNode.expandable =
    //   node.children.length === 0 || node.children === null ? false : true;

    if (level >= 3) {
      flatNode.expandable = false;
    } else {
      flatNode.expandable = true;
    }
    flatNode.edit = node.editflag;

    this.flatNodeMap.set(flatNode, node);
    this.nestedNodeMap.set(node, flatNode);
    return flatNode;
  };

  addNewItem(node: TodoItemFlatNode) {
    debugger;
    const parentNode = this.flatNodeMap.get(node);
    // parentNode.add = false;
    let newData = {
      Module_Id: 0,
      Module_Name: "",
      Active: true,
      route: "",
      level: 0,
      children: [],
      editflag: false
    };
    this.database.insertItem(parentNode!, newData);
    this.treeControl.expand(node);
  }

  saveNode(node: TodoItemFlatNode, itemValue: string) {
    debugger;
    const nestedNode = this.flatNodeMap.get(node);
    this.database.updateItem(nestedNode!, itemValue);
  }

  cancelNode(node: TodoItemFlatNode) {
    const parent = this.flatNodeMap.get(this.getParents(node));
    this.database.cancelItem(parent);
  }

  editNode(node: TodoItemFlatNode) {
    debugger;
    const parentNode = this.flatNodeMap.get(node);
    this.database.editItem(parentNode!, node.Module_Name);
    console.log(this.dataSource);
  }

  updateNode(node: TodoItemFlatNode, itemValue: string) {
    debugger;
    const nestedNode = this.flatNodeMap.get(node);
    this.database.modifyItem(nestedNode!, itemValue);
  }

  cancelUpdate(node: TodoItemFlatNode){
    console.log(node);
    const parent = this.flatNodeMap.get(node);
    this.database.cancelUpdate(parent!);
  }

  deleteNode(node: TodoItemFlatNode){
    if(node.level !== 0){
      const parentNode = this.flatNodeMap.get(this.getParents(node));
      this.database.deleteNode(parentNode,node);
    } else {
      const parentNode = this.flatNodeMap.get(node);
      this.database.deleteParent(parentNode);
    }
  }

  checkdescendants(node: TodoItemFlatNode) {
    // const descendants = this.treeControl.getDescendants(node);
    // const descendants = this.treeControl.getLevel(node);
    // console.log(descendants);
    const parent = this.getParents(node);
    // console.log(parent);
  }

  // get parent test

  getParents(node: TodoItemFlatNode) {
    const parent = this.getParent(node);
    return parent;
  }

  getHierarchyOfParents(node: TodoItemFlatNode) {
    const parent = this.getParent(node);
    this.treeControl.expand(parent);

    if (parent && parent.level > 0) {
      this.getHierarchyOfParents(parent);
    }
  }

  getParent(node: TodoItemFlatNode) {
    const { treeControl } = this;
    const currentLevel = treeControl.getLevel(node);

    if (currentLevel < 1) {
      return null;
    }

    const startIndex = treeControl.dataNodes.indexOf(node) - 1;

    for (let i = startIndex; i >= 0; i--) {
      const currentNode = treeControl.dataNodes[i];

      if (treeControl.getLevel(currentNode) < currentLevel) {
        return currentNode;
      }
    }
  }
}

export class TodoItemNode {
  Module_Id: number;
  Module_Name: string;
  Active: boolean;
  route?: string;
  level: number;
  editflag?: boolean;
  children: TodoItemNode[] | null;
}

export class TodoItemFlatNode {
  Module_Name: string;
  level: number;
  expandable: boolean;
  haschildren: boolean;
  add?: boolean;
  edit?: boolean;
}
