import dayjs from "dayjs"
import relativeTime from "dayjs/plugin/relativeTime"
import customParseFormat from "dayjs/plugin/customParseFormat"
import "dayjs/locale/en"

dayjs.extend(relativeTime)
dayjs.extend(customParseFormat)

dayjs.locale("en")
