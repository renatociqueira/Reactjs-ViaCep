import './App.css';
import { FaMapMarkedAlt } from "react-icons/fa";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import React from 'react';
import { useForm } from 'react-hook-form';

function App() {

  const { register, handleSubmit, setValue, setFocus } = useForm();


  const onSubmit = (e) => {
    console.log(e);
  }

  const Getcep = (e) => {

    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep);

    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then(res => res.json()).then(data => {
        console.log(data);
        setValue('endereco', data.logradouro);
        setValue('bairro', data.bairro);
        setValue('cidade', data.localidade);
        setValue('uf', data.uf);
        setFocus('addressNumber');
      });
  }

  return (
    <div className="App">
      <div style={{ backgroundColor: '#282c34', marginBottom: '-50px' }}>
        <button id='btn' style={{ width: '250px', marginRight: '10px', marginTop: '10px' }} className='btn btn-info' onClick={() => window.location.href = 'https://www.linkedin.com/in/renato-ciqueira-2008aa121/'}><FiLinkedin /> Linkedin </button>
        <button id='btn' style={{ width: '250px', marginTop: '10px' }} className='btn btn-info' onClick={() => window.location.href = 'https://github.com/renatociqueira'}><FiGithub /> Github </button>
      </div>
    
      <form className="App-header" onSubmit={handleSubmit(onSubmit)}>
        <p>Busca de Endereço ao digitar o CEP <FaMapMarkedAlt /></p>
        <label className='App-link'>
          Cep
        </label>
        <input style={{ width: '500px' }} placeholder='Cep' {...register("cep")} onBlur={Getcep} ></input>
        <label className='App-link'>
          Numero
        </label>
        <input style={{ width: '500px' }} placeholder='Numero'{...register("addressNumber")}></input>
        <label className='App-link'>
          Complemento
        </label>
        <input style={{ width: '500px' }} placeholder='Complemento'></input>
        <label className='App-link'>
          Logradouro
        </label>
        <input style={{ width: '500px' }} placeholder='Logradouro' {...register("endereco")}></input>
        <label className='App-link'>
          Bairro
        </label>
        <input style={{ width: '500px' }} placeholder='Bairro' {...register("bairro")}></input>
        <label className='App-link'>
          Localidade
        </label>
        <input style={{ width: '500px' }} placeholder='Localidade' {...register("cidade")}></input>
        <label className='App-link'>
          UF
        </label>
        <input style={{ width: '500px' }} placeholder='UF' {...register("uf")}></input>
      </form>
     
    </div>
  );
}

export default App;
