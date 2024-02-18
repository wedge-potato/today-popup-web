import {Order, OrderBy} from '../../requests'

export interface OrderOption {
    text: string,
    orderBy: OrderBy,
    order: Order
}
