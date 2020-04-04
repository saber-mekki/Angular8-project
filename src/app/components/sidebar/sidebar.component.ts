import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/containers', title: 'الصفحة الرئيسية',  icon: 'ni-ungroup', class: '' },
 
  { path: '/volumes', title: 'قضية',  icon: 'ni-app', class: '' },
 
  { path: '/users', title: 'متطوع',  icon: 'ni-single-02', class: '' },
  { path: '/sandboxes', title: 'للتبرع',  icon: 'ni-sound-wave', class: '' },
  { path: '/images', title: 'اتصل بنا',  icon: 'ni-box-2', class: '' }

];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public menuItems: any[];
  public isCollapsed = true;

  constructor(private router: Router) { }
  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
    this.router.events.subscribe((event) => {
      this.isCollapsed = true;
   });
  }
}