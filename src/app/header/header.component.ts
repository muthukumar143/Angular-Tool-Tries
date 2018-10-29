import { HostBinding, Component, OnInit, Inject } from "@angular/core";
import { OverlayContainer } from "@angular/cdk/overlay";
import { MatDialog } from "@angular/material";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  groupList: any[] = [];
  getList: any;
  subGroupList: any[] = [];
  SubSubGroupList: any[] = [];
  menuList: any[] = [];
  userName: string;
  navItems: NavItem[] = [];

  constructor(
    public _overlayContainer: OverlayContainer,
    public dialog: MatDialog
  ) {}

  @HostBinding("class")
  componentCssClass;

  ngOnInit() {
    this.navItems = [
      {
        Menu_Id: 1,
        displayName: "Administrator",
        children: [
          {
            Menu_Id: 2,
            displayName: "Creating User Account",
            route: ""
          },
          {
            Menu_Id: 3,
            displayName: "Location",
            children: [
              {
                Menu_Id: 4,
                displayName: "Country",
                route: ""
              },
              {
                Menu_Id: 5,
                displayName: "State",
                route: ""
              },
              {
                Menu_Id: 6,
                displayName: "City",
                route: ""
              },
              {
                Menu_Id: 7,
                displayName: "Area",
                route: ""
              }
            ]
          },
          {
            Menu_Id: 8,
            displayName: "Role Library",
            children: [
              {
                Menu_Id: 9,
                displayName: "Creating Role",
                route: ""
              },
              {
                Menu_Id: 10,
                displayName: "Role Menu Privilage",
                route: ""
              },
              {
                Menu_Id: 11,
                displayName: "User Menu Privilage",
                route: ""
              }
            ]
          },
          {
            Menu_Id: 12,
            displayName: "Organization",
            children: [
              {
                Menu_Id: 13,
                displayName: "Company Initiation",
                route: ""
              },
              {
                Menu_Id: 14,
                displayName: "Organization Level",
                route: ""
              },
              {
                Menu_Id: 15,
                displayName: "Organization Level Chart",
                route: ""
              }
            ]
          }
        ]
      },
      {
        Menu_Id: 16,
        displayName: "Human Resource",
        children: [
          {
            Menu_Id: 17,
            displayName: "Designation",
            route: ""
          },
          {
            Menu_Id: 18,
            displayName: "Department",
            route: ""
          },
          {
            Menu_Id: 19,
            displayName: "Employee",
            route: ""
          }
        ]
      }
    ];
  }

  // MenuBarCreation() {
  //   debugger;
  //   let menuFlag = 0;
  //   let subMenuFlag = 0;
  //   //Group_Menu

  //   if (this.groupList.length !== 0) {
  //     for (let i = 0; i < this.groupList.length; i++) {
  //       this.navItems[i] = Object.assign({
  //         Menu_Id: this.groupList[i].Group_Id,
  //         displayName: this.groupList[i].Group_Name,
  //         iconName: "fa fa-chevron-circle-down",
  //         children: []
  //       });
  //     }
  //   }
  //   //Main_Menu

  //   debugger;
  //   if (this.menuList.length !== 0 && this.groupList.length !== 0) {
  //     for (let i = 0; i < this.navItems.length; i++) {
  //       for (let j = 0; j < this.menuList.length; j++) {
  //         if (this.navItems[i].Menu_Id === this.menuList[j].Group_Id) {
  //           if (this.subGroupList.length !== 0) {
  //             for (let k = 0; k < this.subGroupList.length; k++) {
  //               if (this.subGroupList[k].Menu_Id === this.menuList[j].Menu_Id) {
  //                 menuFlag = 1;
  //                 break;
  //               } else {
  //                 menuFlag = 0;
  //               }
  //             }
  //           }
  //           if (menuFlag === 1) {
  //             this.navItems[i].children.push(
  //               Object.assign({
  //                 Menu_Id: this.menuList[j].Menu_Id,
  //                 displayName: this.menuList[j].Menu_Name,
  //                 iconName: "fa fa-chevron-circle-down",
  //                 children: []
  //               })
  //             );
  //           } else {
  //             this.navItems[i].children.push(
  //               Object.assign({
  //                 Menu_Id: this.menuList[j].Menu_Id,
  //                 displayName: this.menuList[j].Menu_Name,
  //                 iconName: "fa fa-chevron-circle-down",
  //                 children: [],
  //                 route: "/main" + this.menuList[j].Menu_Path
  //               })
  //             );
  //           }
  //           menuFlag = 0;
  //         }
  //       }
  //     }
  //   }
  //   //Sub_Group_Menu

  //   debugger;
  //   if (
  //     this.subGroupList.length !== 0 &&
  //     this.menuList.length !== 0 &&
  //     this.groupList.length !== 0
  //   ) {
  //     for (let i = 0; i < this.navItems.length; i++) {
  //       for (let j = 0; j < this.navItems[i].children.length; j++) {
  //         for (let k = 0; k < this.subGroupList.length; k++) {
  //           if (
  //             this.navItems[i].children[j].Menu_Id ===
  //             this.subGroupList[k].Menu_Id
  //           ) {
  //             if (this.SubSubGroupList.length !== 0) {
  //               for (let l = 0; l < this.SubSubGroupList.length; l++) {
  //                 if (
  //                   this.subGroupList[k].Sub_Group_Id ===
  //                   this.SubSubGroupList[l].Sub_Group_Id
  //                 ) {
  //                   subMenuFlag = 1;
  //                   break;
  //                 } else {
  //                   subMenuFlag = 0;
  //                 }
  //               }
  //             }
  //             if (subMenuFlag === 1) {
  //               debugger;
  //               this.navItems[i].children[j].children.push(
  //                 Object.assign({
  //                   Menu_Id: this.subGroupList[k].Sub_Group_Id,
  //                   displayName: this.subGroupList[k].Menu_Name,
  //                   iconName: "fa fa-chevron-circle-down",
  //                   children: []
  //                 })
  //               );
  //             } else {
  //               debugger;
  //               this.navItems[i].children[j].children.push(
  //                 Object.assign({
  //                   Menu_Id: this.subGroupList[k].Sub_Group_Id,
  //                   displayName: this.subGroupList[k].Menu_Name,
  //                   iconName: "fa fa-chevron-circle-down",
  //                   children: [],
  //                   route: "/main" + this.subGroupList[k].Menu_Path
  //                 })
  //               );
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  //   console.log(this.navItems);
  // }
}

export interface NavItem {
  Menu_Id: number;
  displayName: string;
  route?: string;
  children?: NavItem[];
}
