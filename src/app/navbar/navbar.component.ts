import { Component, OnInit } from '@angular/core';
// import {MenubarModule} from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

    constructor(private router: Router) { }

    items: MenuItem[];

    loginRoute() {
        // this.router.navigate(['/login', 5]);
        this.router.navigate(['/login']);
    }

    login1Route() {
        this.router.navigate(['/login1']);
    }

    login2Route() {
        this.router.navigate(['/login2']);
    }

    attendanceRoute() {
        this.router.navigate(['/attendance']);
    }

    ngOnInit() {
        this.items = [
            {
                label: 'Home',
                // command: (onclick) => { this.loginRoute(); }
            },
            {
                label: 'Login',
                command: (onclick) => { this.loginRoute(); }
            },
            {
                label: 'Login V2',
                command: (onclick) => { this.login1Route(); }
            },
            {
                label: 'Login V3',
                command: (onclick) => { this.login2Route(); }
            },
            {
                label: 'Attendence Log',
                command: (onclick) => this.attendanceRoute()
            },
            {
                label: 'File',
                items: [{
                    label: 'New',
                    icon: 'pi pi-fw pi-plus',
                    items: [
                        { label: 'Project' },
                        { label: 'Other' },
                    ]
                },
                { label: 'Open' },
                { label: 'Quit' }
                ]
            }
        ];
    }
}
