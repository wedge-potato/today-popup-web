import {useQuery, UseQueryReturnType} from '@tanstack/vue-query'
import {reactive} from 'vue'
import {getPopup, GetPopupParams, Popup} from '../fetches/getPopup.ts'

export const useGetPopup = (
  payload: GetPopupParams
): UseQueryReturnType<Popup | null, unknown> => {
  const _payload = reactive(payload)
  return useQuery({
    queryKey: ['getPopupList', _payload],
    queryFn: () => getPopup({..._payload})
  })
}
