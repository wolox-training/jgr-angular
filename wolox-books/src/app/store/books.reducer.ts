import { Action } from '@ngrx/store';
import { Book } from '../screens/auth/screens/book-list/book';
import * as BookActions from './books.actions';

const initialState: Book[] =
  [
    {
      author: 'Paula Hawkins',
      description: null,
      genre: 'suspense',
      id: 18,
      image_url: 'http://wolox-training.s3.amazonaws.com/uploads/content.jpeg',
      publisher: 'Riverhead Books',
      title: 'The Girl on the Train↵',
      year: '2015'
    },
    {
      author: 'Andy Weir',
      description: null,
      genre: 'fiction',
      id: 19,
      image_url: 'http://wolox-training.s3.amazonaws.com/uploads/41DNuJfahyL._SX322_BO1_204_203_200_.jpg',
      publisher: 'Crown Publishing Group',
      title: 'The Martian',
      year: '2011'
    }
  ];

export function reducer(state: Book[] = initialState, action: BookActions.Actions) {

  switch (action.type) {
    case BookActions.ADD_BOOK:
      return [...state, action.payload];
    default:
      return state;
      case BookActions.REMOVE_BOOK:
        return [...state, action.payload];
  }
}
