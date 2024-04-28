const Entry = ({ entry }) => {
  return (
    <div>
      <h3>{entry.htsno}</h3>
      <table>
        <tbody>
          <tr>
            <th>htsno</th>
            <td>{entry.htsno}</td>
          </tr>
          <tr>
            <th>description</th>
            <td>{entry.description}</td>
          </tr>
          <tr>
            <th>unit</th>
            <td>{entry.units ? entry.units.join(', ') : ""}</td>
          </tr>
          <tr>
            <th>rates of duty 1</th>
            <td>
              <table>
                <tbody>
                  <tr>
                    <th>general</th>
                    <td>{entry.general}</td>
                  </tr>
                  <tr>
                    <th>special</th>
                    <td>{entry.special}</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
          <tr>
            <th>rates of duty 2</th>
            <td>{entry.other}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Entry
