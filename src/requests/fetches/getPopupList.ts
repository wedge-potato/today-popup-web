import {oaxios} from '../axios.ts'
export interface Popup {
  //누락
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

// const mock: PopupList = {
//   data: [
//     {
//       'thumbnail': 'http://example.com/thumb109.jpg',
//       'title': 'Title 109',
//       'id': 1,
//       'category': '팝업스토어',
//       'startDate': '2023-01-23',
//       'endDate': '2023-01-26',
//       'location': '서울 광진구'
//     }
//   ],
//   pagination: {
//     'previousCursor': null,
//     'nextCursor': 'llcveYn2lGw8ky7l6byva0RUGkWsz3RoQCaU31GtiAk=',
//     'hasPrevious': false,
//     'hasNext': true,
//     'totalCount': 1
//   }
// }

export interface GetPopupListParams {
  region?: string,
  cursor?: string,
  orderBy?: 'startDate'|'endDate',
  order?: 'asc'|'desc'
}

export const getPopupList = async (params: GetPopupListParams) => {
  const response = await oaxios.get('/popups', {params})
  return response.data
}
