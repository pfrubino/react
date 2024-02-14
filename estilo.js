import React from 'react';

export const estilo = () => {
  return (
    <div>
        <h2>componente1</h2>
        <ul>
            <li>dato1</li>
            <li>dato2</li>
            <li>dato3</li>
        </ul>
    </div>
  )
}

const styles = {
  inputContainer: {
    display: 'flex',
    fontSize: '11px',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  input: {
    height: '20px',
    width: '800px',
    fontSize: '11px',
    padding: '5px',
    borderColor: 'gray',
    borderWidth: '1px',
    marginLeft: '10px',
  },
  picker: {
    height: '25px',
    width: '25px',
    fontSize: '11px',
    marginLeft: '10px',
    padding: '5px',
  },
};

const styles2 = {
  inputContainer: {
    display: 'flex',
    fontSize: '11px',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },
  input: {
    height: '40px',
    width: '800px',
    fontSize: '11px',
    padding: '5px',
    borderColor: 'gray',
    borderWidth: '1px',
    marginLeft: '10px',
  },
  picker: {
    height: '25px',
    width: '25px',
    fontSize: '11px',
    marginLeft: '10px',
    padding: '5px',
  },
};

const styles3 = {
  buttonContainer: {
    backgroundColor: 'orange',
    borderColor: 'black',
    width: '300px',
    marginTop: '5px',
    marginBottom: '10px',
  },
};
