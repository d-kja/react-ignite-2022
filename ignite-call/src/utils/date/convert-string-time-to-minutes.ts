/**
 * @params example
 *  stringTime: 18:00
 */

export const convertStringTimeToMinutes = (stringTime: string) => {
  const [hours, minutes] = stringTime.split(':').map(Number)

  return hours * 60 + minutes
}
