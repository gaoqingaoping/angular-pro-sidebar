import { Injectable } from '@angular/core';

@Injectable()
export class MenusService {
    getMenu(): Promise<any[]> {
        const MENUS = [
            {
                name: 'forms-demo',
                type: 'button',
                expand: false,
                subMenu: [
                    { name: 'active-form-1', type: 'link', url: 'active-form' },
                    { name: 'active-form-2', type: 'link', url: 'active-form2' },
                    { name: 'dynamic form', type: 'link', url: 'dynamic-form' }
                ]
            }
        ];
        return Promise.resolve(MENUS);
    }
}
