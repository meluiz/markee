/* ------| Estilos |------ */
import { Editing, Saved, Saving, Wrapper } from './styles'

/* ------| Tipagem |------ */
type FileStatsType = {
  stats: 'none' | 'editing' | 'saving' | 'saved'
}

export const FileStats = ({ stats }: FileStatsType) => {
  return (
    <Wrapper>
      {stats === 'editing' && (
        <Editing />
      )}

      {stats === 'saving' && (
        <Saving width='13' height='13' viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M6.72796 12.5C7.0041 12.5 7.22796 12.2761 7.22796 12C7.22796 11.7239 7.0041 11.5 6.72796 11.5V12.5ZM6.72796 1L6.73143 0.5H6.72796V1ZM11.4394 7.43558C11.4037 7.70941 11.5968 7.96029 11.8706 7.99594C12.1445 8.03159 12.3954 7.8385 12.431 7.56467L11.4394 7.43558ZM6.72796 11.5C3.8213 11.5 1.5 9.24248 1.5 6.5H0.5C0.5 9.83265 3.30768 12.5 6.72796 12.5V11.5ZM1.5 6.5C1.5 3.75752 3.8213 1.5 6.72796 1.5V0.5C3.30768 0.5 0.5 3.16735 0.5 6.5H1.5ZM6.72449 1.49999C8.10469 1.50956 9.39878 2.07832 10.2879 3.08833C11.1723 4.09284 11.6829 5.56502 11.4394 7.43558L12.431 7.56467C12.7082 5.43522 12.1304 3.66785 11.0385 2.42756C9.95148 1.19276 8.38159 0.511459 6.73143 0.500012L6.72449 1.49999Z' fill='currentColor' />
        </Saving>
      )}

      {stats === 'saved' && (
        <Saved width='14' height='10' viewBox='0 0 14 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
          <path d='M13 1L4.75 9.25L1 5.5' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='1.5' />
        </Saved>
      )}
    </Wrapper>
  )
}
