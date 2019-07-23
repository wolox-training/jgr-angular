import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Book } from '../screens/auth/screens/book-list/book';

export const ADD_BOOK       = '[BOOK] Add';
export const REMOVE_BOOK   = '[BOOK] Remove';

export class AddBook implements Action {
  readonly type = ADD_BOOK;

  constructor(public payload: Book) {}
}

export class RemoveBook implements Action {
  readonly type = REMOVE_BOOK;

  constructor(public payload: number) {}
}

export type Actions = AddBook | RemoveBook;
