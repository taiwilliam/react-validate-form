import { useState } from "react";
import { useForm } from "react-hook-form";

function App() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState("");

  const onSubmit = (formData) => {
    // setData(JSON.stringify(formData));
    console.log(formData); // {name: ''}
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

          <div className=''>
            <label htmlFor='phone'>電話</label>
            <input type='tel' id='phone' />
          </div>

          <div className=''>
            <label htmlFor='age'>年齡</label>
            <input type='number' id='age' />
          </div>

          <div className=''>
            <label htmlFor='email'>信箱</label>
            <input type='email' id='email' />
          </div>

          <div className=''>
            <label htmlFor='why'>為什麼想加入Foodnd</label>
            <textarea id='why' />
          </div>

          <button type='submit'>傳送</button>
        </form>
      </div>
    </div>
  );
}

export default App;
