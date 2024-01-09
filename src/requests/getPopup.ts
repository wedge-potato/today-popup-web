export interface PopupDetail {
  id: number,
  title: string,
  startDate?: string,
  endDate?: string,
  region?: string
  img?: string,
  time: string,
  description: string,
  location: string,
  link: string,
  category: string,
}

const mock: PopupDetail = {
  id: 0,
  title: 'TAMBURINS at The Hyundai Seoul ',
  startDate: '2023-12-14',
  endDate: '2034-12-27',
  region: '성동구',
  img: '',
  time: '12:00 ~ 22:00',
  description: '탬버린즈(TAMBURINS)가 홀리데이 시즌을 맞아 더현대 서울에서 단독 팝업 스토어를 오픈합니다. \n' +
      '\n' +
      '이번 팝업 스토어는 성수 플래그십 스토어를 연상시키는 콘크리트 골조 인테리어를 중심으로 새로운 퍼퓸 컬렉션 8종과 알 모양 ‘더 에그 퍼퓸’ 3종 그리고 쉘 핸드 퍼퓸 3종을 선보입니다.\n' +
      '\n' +
      '연말 선물로도 제격인 ‘퍼퓸 캔들’은 펌키니부터 홀리메탈, 레이트어텀 그리고 베이더인더레이크까지 4가지의 다채로운 향으로 만나볼 수 있죠',
  location: '서울시 성동구 성수동2가 273-13, 성수 에스팩토리 D동',
  link: 'https://www.instagram.com/p/Cs8UYdivFQ9/?igshid=MTI1ZDU5ODQ3Yw%3D%3D',
  category: '팝업스토어'
}

export const getPopup = (): PopupDetail => {
  return mock
}
