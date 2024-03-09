import { useSelector } from 'react-redux'

const History = () => {
  const actionLogs = useSelector(
    (state: any) => state.favoritesReducer.actionLogs,
  )

  return (
    <div>
      <h2>История избранного</h2>
      <br />
      <ul>
        {actionLogs.map((log: any, index: number) => (
          <li key={index}>{JSON.stringify(log)}</li>
        ))}
      </ul>
    </div>
  )
}

export default History
