export interface PopupDetail {
  id: number,
  title: string,
  startDate?: string,
  endDate?: string,
  region?: string[]
  img?: string,
  time: string,
  description: string,
  location: string,
  link: string,
}

const mock: PopupDetail = {
  id: 0,
  title: '빵빵이와 끼꼬의 크리스마스 팝업스토어',
  startDate: '2024-01-01',
  endDate: '2024-01-01',
  region: ['서울시', '성동구'],
  img: '',
  time: '12:00 ~ 22:00',
  description: '귀엽고 재밌는 빵빵이 굿즈들과 500평 규모의 초대형 스케일로 구성된 전시 공간, 콜라보 제품까지! 다양한 이야기와 볼거리가 어우러진  어쩌구',
  location: '서울시 성동구 성수동2가 273-13, 성수 에스팩토리 D동',
  link: 'booking.kakao.com/detail/ticketStore/21869',
}

export const getPopup = (): PopupDetail => {
  return mock
}
