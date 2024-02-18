import {oaxios} from '../axios.ts'

export interface GetPopupParams {
    id: number
}

export interface Popup {
    images: string[],
    category: string,
    title: string,
    startDate: string,
    endDate: string,
    startTime: string,
    endTime: string,
    urlLink: string,
    introduction: string,
    sido: string,
    sigungu: string,
    location: Location
}

export interface Location {
    address: string,
    lat: string,
    lng: string,
}

export const getPopup = async (params: GetPopupParams) => {
  const response = await oaxios.get(`/popup/${params.id}`,)
  return response.data
}
