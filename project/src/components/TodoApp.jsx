import React, { useState } from 'react';
import "./TodoApp.css";

const TodoApp = () => {

    // estado para armazenar a lista de tarefas

    const [tarefas, setTarefas] = useState([]);

    // estado para armazenar o texto do input

    const [inputValue, setInputValue] = useState('');

    // função para adicionar uma nova tarefa

    const handleSubmit = (e) => {

        e.preventDefault(); // previne o comportamento padrão do formulário

        if (inputValue.trim() !== '') { // verifica se o input não está vazio

            const newTarefa = {
                id: Date.now(), // cria um id único com timestamp
                text: inputValue
            };

            setTarefas((prevTarefas) => [...prevTarefas, newTarefa]); // adiciona a nova tarefa à lista

            setInputValue(''); // limpa o input após adicionar
        }
    };

    // função para remover uma tarefa ao clicar nela

    const handleTarefaConcluida = (id) => {

        setTarefas(tarefas.filter((tarefa) => tarefa.id !== id)); // remove a tarefa com o id correspondente

    };

    return (

        <div className='app-container'>
            <h1 className='title'>Lista de Tarefas</h1>

            {/* formulário para adicionar tarefas */}

            <form onSubmit={handleSubmit} className='form-container'>

                <input
                    type="text"
                    placeholder='Adicione uma tarefa'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)} // atualiza o estado com o valor digitado
                    className='input-field'
                />

                <button type="submit" className='add-button'>Adicionar</button>

            </form>

            {/* exibe mensagem se não houver tarefas */}

            {tarefas.length === 0 ? (
                <p className='empty'>Não existem tarefas!</p>
            ) : (
                <ul className='task-list'>

                    {/* mapeia as tarefas e exibe cada uma como um item de lista */}

                    {tarefas.map((tarefa) => (
                        <li key={tarefa.id} className='task-item'>

                          {tarefa.text} <img src="verificar.png" alt="verificar" className='image'onClick={() => handleTarefaConcluida(tarefa.id)} /> {/* ao clicar, remove a tarefa*  */}
                              
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default TodoApp;
