import { Component, OnInit, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() menu = {
    'type': 'category',
    'name': 'menu',
    'submenu': [
    {'type': 'header', 'name': 'Style'}, {
      'type': 'link',
      'link': ['style', 'single-comp'],
      'name': 'Simple Style', 'icon': null,
    }, {
      'type': 'link',
      'link': ['style', 'multi-comp'],
      'name': 'Multi Style', 'icon': null,
    }, {
      'type': 'category',
      'link': ['css'],
      'name': 'css', 'icon': null,
      'submenu': [
        {
          'type': 'link',
          'link': ['css', 'simple-transition'],
          'name': 'Transition', 'icon': null,
        }, {
          'type': 'link',
          'link': ['css', 'complex-transition'],
          'name': 'Transition Complexe', 'icon': null,
        }, {
          'type': 'link',
          'link': ['css', 'basic-animation'],
          'name': 'Animation', 'icon': null,
        }, {
          'type': 'link',
          'link': ['css', 'complex-animation'],
          'name': 'Animation Complexe', 'icon': null,
        },
      ]
    }, {
      'type': 'category',
      'link': ['ng'],
      'name': 'Animation en angular', 'icon': null,
      'submenu': [
        {
          'type': 'link',
          'link': ['ng', 'basics'],
          'name': 'Angular animation base', 'icon': null,
        }, {
          'type': 'link',
          'link': ['ng', 'transition'],
          'name': 'ng-animation Transition', 'icon': null,
        }, {
          'type': 'link',
          'link': ['ng', 'temporary-state'],
          'name': 'Status temporaire', 'icon': null,
        }, {
          'type': 'link',
          'link': ['ng', 'multi-step-transition'],
          'name': 'Transition Multi transition', 'icon': null,
        }, {
          'type': 'link',
          'link': ['ng', 'multi-transition'],
          'name': 'Multi transition (simultané)', 'icon': null,
        },
      ]
    }, {
      'type': 'category',
      'link': ['nga'],
      'name': 'Advanced Animation en angular', 'icon': null,
      'submenu': [
        {
          'type': 'link', 'active': 'active',
          'link': ['nga', 'event'],
          'name': 'Angular animation Event', 'icon': null,
        }, {
          'type': 'link', 'active': 'unactive',
          'link': ['nga', 'dimension'],
          'name': 'dimention drop', 'icon': null,
        }, {
          'type': 'link', 'active': 'unactive',
          'link': ['nga', 'keyframes'],
          'name': 'keyframes', 'icon': null,
        }, {
          'type': 'link', 'active': 'unactive',
          'link': ['nga', 'list'],
          'name': 'list', 'icon': null,
        }, {
          'type': 'link', 'active': 'unactive',
          'link': ['nga', 'meta'],
          'name': 'meta state', 'icon': null,
        }, {
          'type': 'link', 'active': 'unactive',
          'link': ['nga', 'timing'],
          'name': 'timing', 'icon': null,
        },
      ]
    }
  ]
};

  constructor(private router: Router) { }

  ngOnInit() {
  }

  launchRedirecte(itemMenu) {
    if (itemMenu.type === 'link' && itemMenu.active !== 'unactive') {
      this.go(itemMenu.link);
    }
  }

  go(path: any[], query?: object, extras?: NavigationExtras) {
    if (path) {
      this.router.navigate(path, { queryParams: query, ...extras });
    }
  }

  printIcon(icon) {
    return icon ? `<i class='${icon}'></i>` : '';
  }

}
