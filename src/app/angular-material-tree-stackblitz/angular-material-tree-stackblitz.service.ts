import { TodoItemFlatNode } from './angular-material-tree-stackblitz.component';
import { Injectable } from "../../../node_modules/@angular/core";
import { BehaviorSubject } from "../../../node_modules/rxjs";

@Injectable()
export class ChecklistDatabase {
  dataChange = new BehaviorSubject<TodoItemNode[]>([]);

  get data(): TodoItemNode[] {
    return this.dataChange.value;
  }

  constructor() {
    this.initialize();
  }

  initialize() {
    const data = this.buildFileTree(menu_tree, 0);

    // console.log(data);

    this.dataChange.next(data);
  }

  buildFileTree(tree_data: object, level: number): TodoItemNode[] {
    return Object.keys(tree_data).reduce<TodoItemNode[]>(
      (accumulator, index) => {
        const value = tree_data[index].children;

        const node = new TodoItemNode();
        node.Module_Id = 0;
        node.Module_Name = tree_data[index].Module_Name;
        if (tree_data[index].route) {
          node.route = tree_data[index].route;
        }
        // node.children = [];
        // if (level > 2) {
        //   node.add = false;
        // } else {
        //   node.add = true;
        // }
        node.children = [];
        node.level = level;
        node.editflag = false;

        if (value != null) {
          if (value.length !== 0) {
            node.children = this.buildFileTree(value, level + 1);
          } else {
            node.Module_Name = tree_data[index].Module_Name;
            node.Module_Id = 0;
            if (tree_data[index].route) {
              node.route = tree_data[index].route;
            }
            node.level = level;
            // node.children = [];
          }
        }
        return accumulator.concat(node);
      },
      []
    );
  }

  /** Add an item to to-do list */
  insertItem(parent: TodoItemNode, newData: TodoItemNode) {
    debugger;
    if (parent.children) {
      parent.children.push(newData as TodoItemNode);
      this.dataChange.next(this.data);
    }
  }

  updateItem(node: TodoItemNode, name: any) {
    debugger;
    node.Module_Name = name;
    this.dataChange.next(this.data);
  }

  cancelItem(parent: TodoItemNode) {
    parent.children.pop();
    this.dataChange.next(this.data);
  }

  editItem(parent: TodoItemNode, node_value: string) {
    debugger;
    parent.editflag = !parent.editflag;
    this.dataChange.next(this.data);
  }

  modifyItem(node: TodoItemNode, name: any) {
    debugger;
    node.Module_Name = name;
    node.editflag = !node.editflag;
    this.dataChange.next(this.data);
  }

  cancelUpdate(node: TodoItemNode) {
    node.editflag = !node.editflag;
    this.dataChange.next(this.data);
  }

  deleteNode(parentNode: TodoItemNode, node: TodoItemFlatNode) {
    console.log(parentNode);
    console.log(node);
    for(let i = 0; i < parentNode.children.length; i++){
      if(parentNode.children[i].Module_Name === node.Module_Name){
        parentNode.children.splice(i,1);
      }
    }
    this.dataChange.next(this.data);
  }

  deleteParent(parentNode: TodoItemNode){
    console.log(this.data);
    for(let i = 0; i < this.data.length; i++){
      if(this.data[i].Module_Name === parentNode.Module_Name){
        this.data.splice(i,1);
      }
    }
    this.dataChange.next(this.data);
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

/** Flat to-do item node with expandable and level information */

// Experiement

export class module {
  Module_Id: number;
  Module_Name: string;
  Active: boolean;
  route?: string;
  children?: module[] | null;
}

let menu_tree: module[] = [
  {
    Module_Id: 1,
    Module_Name: "HR",
    Active: true,
    children: [
      {
        Module_Id: 3,
        Module_Name: "Community Master",
        Active: true,
        route: "/Community",
        children: null
      },
      {
        Module_Id: 4,
        Module_Name: "Blood Group",
        Active: true,
        route: "/BloodGroup",
        children: [
          {
            Module_Id: 3,
            Module_Name: "Community Master",
            Active: true,
            route: "/Community",
            children: [
              {
                Module_Id: 3,
                Module_Name: "Religion Master",
                Active: true,
                route: "/Religion",
                children: []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    Module_Id: 2,
    Module_Name: "Control Panel",
    Active: true,
    children: [
      {
        Module_Id: 5,
        Module_Name: "User List",
        Active: true,
        route: "/UserList",
        children: [
          {
            Module_Id: 3,
            Module_Name: "Community Master",
            Active: true,
            route: "/Community",
            children: []
          }
        ]
      },
      {
        Module_Id: 6,
        Module_Name: "Menu Master",
        Active: true,
        route: "/MenuMaster",
        children: []
      }
    ]
  }
];

/*

buildFileTree(Tree_Data: object, level: number): module[] {
    debugger;
    return Object.keys(obj).reduce<module[]>((accumulator, index) => {
      const value = obj[key].Children;
      const node = new module();
      node.Module_Id = key;
      node.Module_Name = obj[key].Module_Name;
      node.Active = obj[key].Active;

      if (value != null) {
        if (typeof value === 'object') {
          node.children = this.buildFileTree(value, level + 1);
        } else {
          node.item = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }



*/
