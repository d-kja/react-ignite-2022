import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'

export const dayFormat = (date: Date | dayjs.Dayjs, format: string) =>
  dayjs(date).locale('pt-br').format(format)
