import { Component, OnInit } from "@angular/core";
import { SelectionModel } from "@angular/cdk/collections";
import { FlatTreeControl, NestedTreeControl } from "@angular/cdk/tree";
import {
  MatTreeFlatDataSource,
  MatTreeFlattener,
  MatTreeNestedDataSource
} from "@angular/material/tree";
import { BehaviorSubject, Observable, of as observableOf } from "rxjs";
import { debug } from "util";

@Component({
  selector: "app-angular-material-tree",
  templateUrl: "./angular-material-tree.component.html",
  styleUrls: ["./angular-material-tree.component.css"]
})
export class AngularMaterialTreeComponent implements OnInit {
  menu_tree_Data = menu_tree;

  parents: number[] = [];

  nestedTreeControl: NestedTreeControl<Menutree>;
  nestedDataSource: MatTreeNestedDataSource<Menutree>;
  dataChange: BehaviorSubject<Menutree[]> = new BehaviorSubject<Menutree[]>([]);

  flatNodeMap = new Map<Menutree, Menutree>();

  nestedNodeMap = new Map<Menutree, Menutree>();

  constructor() {
    this.nestedTreeControl = new NestedTreeControl<Menutree>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();
    this.dataChange.subscribe(data => {
      console.log(data);
      this.nestedDataSource.data = data;
    });

    this.dataChange.next(this.menu_tree_Data);
  }

  buildFileTree(obj: object, level: number): Menutree[] {
    return Object.keys(obj).reduce<Menutree[]>((accumulator, key) => {
      const value = obj[key];
      const node = new Menutree();
      node.id = +key;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.name = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }

  ngOnInit() {}

  private _getChildren = (node: Menutree) => {
    return observableOf(node.children);
  };

  hasNestedChild = (_: number, nodeData: Menutree) => {
    return nodeData.children.length !== 0 ? true : false;
  };

  hasNoContent = (_: number, nodeData: Menutree) => {
    return nodeData.id === 0 ? true : false;
  };

  findParent(node: Menutree) {
    // console.log(node);
  }

  merge(node: Menutree) {
    debugger;
    if (!this.parents.includes(node.id)) {
      this.parents.push(node.id);
    } else {
      this.parents.splice(this.parents.indexOf(node.id));
    }
    console.log(this.parents);
  }
}

export class Menutree {
  id: number;
  name: string;
  Active: boolean;
  route?: string;
  children?: Menutree[];
}

let menu_tree: Menutree[] = [
  {
    id: 0,
    name: "Modules",
    Active: true,
    children: [
      {
        id: 1,
        name: "HR",
        Active: true,
        children: [
          {
            id: 3,
            name: "Community Master",
            Active: true,
            route: "/Community",
            children: []
          },
          {
            id: 4,
            name: "Blood Group",
            Active: true,
            route: "/BloodGroup",
            children: [
              {
                id: 3,
                name: "Community Master",
                Active: true,
                route: "/Community",
                children: []
              }
            ]
          }
        ]
      },
      {
        id: 2,
        name: "Control Panel",
        Active: true,
        children: [
          {
            id: 5,
            name: "User List",
            Active: true,
            route: "/UserList",
            children: [
              {
                id: 3,
                name: "Community Master",
                Active: true,
                route: "/Community",
                children: []
              }
            ]
          },
          {
            id: 6,
            name: "Menu Master",
            Active: true,
            route: "/MenuMaster",
            children: []
          }
        ]
      }
    ]
  }
];
