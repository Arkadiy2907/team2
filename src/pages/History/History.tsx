import { useSelector } from 'react-redux'
import { RootState } from '../../services/types'

const History = () => {
  const actionLogs = useSelector(
    (state: RootState) => state.favoritesReducer.actionLogs,
  )

  return (
    <div style={{ margin: '100px 0 0 0' }}>
      <h2>Favorites story</h2>
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
