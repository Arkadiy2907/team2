import { useSelector } from 'react-redux'
import { RootState } from '../../services/types'

const History = () => {
  const actionLogs = useSelector(
    (state: RootState) => state.favoritesReducer.actionLogs,
  )

  return (
    <div>
      <h2>История избранного</h2>
      <br />
      <ul>
        {actionLogs.map((log, index: number) => (
          <li key={index}>{JSON.stringify(log)}</li>
        ))}
      </ul>
    </div>
  )
}

export default History
