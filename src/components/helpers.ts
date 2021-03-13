import ISquare, { IProp } from "../context/interfaces";
import {get} from 'lodash';

export const propsToValues = (obj?:ISquare) => {
  if(!obj) return {};
  return Object.keys(obj).reduce((acc, key) => {
    const prop:IProp = get(obj, key)
    return {
      ...acc,
      [key]: prop.display
    }
  }, {})
}