import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState({});

  const onSubmit = (formData) => {
    setData(JSON.stringify(formData));
    console.log(data); // {name: ''}
  };

  return (
    <div className='App'>
      <div className='container'>
        <h1>Foodnd 外送師培訓申請</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className=''>
            <label htmlFor='name'>姓名</label>
            <input type='text' id='name' {...register("name")} />
          </div>

          <button type='submit'>傳送</button>
        </form>
      </div>
    </div>
  );
}

export default App;
