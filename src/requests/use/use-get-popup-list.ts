import {useQuery, UseQueryReturnType} from '@tanstack/vue-query'
import {getPopupList, GetPopupListParams, PopupList} from '../fetches'
import {reactive} from 'vue'

export const useGetPopupList = (
  payload: GetPopupListParams
): UseQueryReturnType<PopupList | null, unknown> => {
  const _payload = reactive(payload)
  return useQuery({
    queryKey: ['getPopupList', _payload],
    queryFn: () => getPopupList({..._payload})
  })
}
