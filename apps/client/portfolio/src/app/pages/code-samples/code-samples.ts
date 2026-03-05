import { Component } from '@angular/core';

import { CardModule } from 'primeng/card';
import { Tabs } from 'primeng/tabs';
import { TabList } from 'primeng/tabs';
import { Tab } from 'primeng/tabs';
import { TabPanels } from 'primeng/tabs';
import { TabPanel } from 'primeng/tabs';

@Component({
  selector: 'app-code-samples',
  imports: [CardModule, Tabs, TabList, Tab, TabPanels, TabPanel],
  template: `
    <div class="code-samples-page">
      <h1>Code Quality Samples</h1>
      <p class="lead">Examples of clean, well-structured code</p>
      <p-tabs value="0">
        <p-tablist>
          <p-tab value="0">Angular Component</p-tab>
          <p-tab value="1">NestJS Controller</p-tab>
          <p-tab value="2">Unit Test</p-tab>
        </p-tablist>
        <p-tabpanels>
          <p-tabpanel value="0">
            <p-card>
              <h3>Perfect Angular Component</h3>
              <pre><code>{{angularSample}}</code></pre>
            </p-card>
          </p-tabpanel>
          <p-tabpanel value="1">
            <p-card>
              <h3>Clean NestJS Controller</h3>
              <pre><code>{{nestjsSample}}</code></pre>
            </p-card>
          </p-tabpanel>
          <p-tabpanel value="2">
            <p-card>
              <h3>Comprehensive Unit Test</h3>
              <pre><code>{{testSample}}</code></pre>
            </p-card>
          </p-tabpanel>
        </p-tabpanels>
      </p-tabs>
    </div>
  `,
  styles: [
    `
      .code-samples-page {
        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .lead {
          font-size: 1.25rem;
          margin-bottom: 3rem;
          color: var(--text-color-secondary);
        }
        pre {
          background: var(--surface-900);
          color: #e5e7eb;
          padding: 1.5rem;
          border-radius: 8px;
          overflow-x: auto;
        }
      }
    `,
  ],
})
export class CodeSamples {
  angularSample = `@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  users$ = this.userService.getUsers();
  
  constructor(private userService: UserService) {}
}`;

  nestjsSample = `@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Post()
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }
}`;

  testSample = `describe('UserService', () => {
  let service: UserService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UserService]
    });
    service = TestBed.inject(UserService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should fetch users', () => {
    const mockUsers = [{ id: 1, name: 'Test' }];
    service.getUsers().subscribe(users => {
      expect(users).toEqual(mockUsers);
    });
    const req = httpMock.expectOne('/api/users');
    expect(req.request.method).toBe('GET');
    req.flush(mockUsers);
  });
});`;
}
