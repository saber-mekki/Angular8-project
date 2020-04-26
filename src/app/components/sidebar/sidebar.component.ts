import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}
export const ROUTES: RouteInfo[] = [
  { path: '/', title: 'الصفحة الرئيسية',  icon: 'ni-ungroup', class: '' },
 
  { path: '/kadya', title: 'قضيتك',  icon: 'ni-app', class: '' },
 
  { path: '/volunteer', title: 'متطوع',  icon: 'ni-single-02', class: '' },
  { path: '/benefactor', title: 'للتبرع',  icon: 'ni-sound-wave', class: '' },
  { path: '/contact', title: 'اتصل بنا',  icon: 'ni-box-2', class: '' }

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