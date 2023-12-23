export interface Popup {
  id: number,
  title: string,
  startDate?: string,
  endDate?: string,
  region?: string[]
  img?: string,
}

export interface PopupList {
  count: number;
  list: Popup[];
}

const mock: Popup = {
  id: 0,
  title: '빵빵이와 끼꼬의 크리스마스 팝업스토어',
  startDate: '2024-01-01',
  endDate: '2024-01-01',
  region: ['서울시', '성동구'],
  img: '',
}

const mockList: Popup[] = [mock, mock, mock, mock, mock]


export const getPopupList = (): PopupList => {
  return {
    count: 5,
    list: mockList,
  }
}
