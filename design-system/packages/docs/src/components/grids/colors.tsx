import { colors } from '@ignite-d-kja/tokens'
import { getContrast } from 'polished'

export const ColorGrid = () => {
  return Object.entries(colors).map(([key, color]) => (
    <div
      key={`${key}-${color}`}
      style={{
        backgroundColor: color,
        padding: '2rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          fontFamily: 'monospace',
          color: getContrast(color, '#fff') < 3.5 ? '#000' : '#fff',
        }}
      >
        <strong>{key}</strong>
        <span>{color}</span>
      </div>
    </div>
  ))
}
