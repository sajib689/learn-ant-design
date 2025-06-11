
import { Button, DatePicker, message, Space } from 'antd'
import './App.css'
import { useState } from 'react';

function App() {
const [date, setDate] = useState(null);
  const [messageApi, contextHolder] = message.useMessage();


  const handleDatePicer = (value) => {
    messageApi.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
    setDate(value);
  };


  return (
    <>
      <div style={{ width: 400, margin: '100px auto' }}>
      <DatePicker onChange={handleDatePicer} />
      <div style={{ marginTop: 16 }}>
        Selected Date: {date ? date.format('YYYY-MM-DD') : 'None'}
      </div>
      {contextHolder}
    </div>
    </>
  )
}

export default App
