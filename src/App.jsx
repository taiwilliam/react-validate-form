import { useState } from "react";
import { useForm } from "react-hook-form";
import TextField from "./components/TextField";

function App() {
  const { register, handleSubmit, formState } = useForm();
  const [data, setData] = useState({});

  const onSubmit = (formData) => {
    setData(JSON.stringify(formData));
    console.log(data); // {name: ''}
  };

  console.log(formState); // 獲取錯誤訊息

  return (
    <div className='App'>
      <div className='container'>
        <h1>Foodnd 外送師培訓申請</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            label='姓名'
            name='name'
            id='name'
            className='mb-3'
            placeholder='報上名來'
          />

          <button type='submit' className='btn'>
            傳送
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
