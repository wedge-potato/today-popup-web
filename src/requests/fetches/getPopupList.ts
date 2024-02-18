import {oaxios} from '../axios.ts'
export interface Popup {
  id: number,
  category: string,
  thumbnail: string,
  title: string,
  startDate: string,
  endDate: string,
  location: string
}

export interface PopupList {
  data: Popup[],
  pagination: {
    previousCursor: string | null,
    nextCursor: string,
    hasPrevious: boolean,
    hasNext: boolean,
    totalCount: number
  }
}

export interface GetPopupListParams {
  region?: string,
  cursor?: string,
  orderBy?: OrderBy,
  order?: Order
}

export type OrderBy = 'startDate'|'endDate'
export type Order = 'asc'|'desc'

export const getPopupList = async (params: GetPopupListParams) => {
  const response = await oaxios.get('/popups', {params})
  return response.data
}
