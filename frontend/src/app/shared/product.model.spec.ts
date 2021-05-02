import { Server } from 'node:http';
import { User } from './user.model';

describe('Product', () => {
  it('should create an instance', () => {
    expect(new User()).toBeTruthy();
  });
});
