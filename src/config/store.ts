import { Injectable } from '@angular/core';
import { User } from './config.service';

@Injectable()
export class Store {
    user: User;
}