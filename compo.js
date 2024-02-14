import React, { useState } from 'react';

const TuComponente = () => {
  const [Personificar, setPersonificar] = useState('');
  const [tarea, settarea] = useState('');
  const [contexto, setContexto] = useState('');
  const [periodo, setPeriodo] = useState('');
  const [ejemplo, setEjemplo] = useState('');
  const [respuesta, setRespuesta] = useState('');
  const [publico, setPublico] = useState('');
  const [tipo, setTipo] = useState('');
  const [limitaciones, setLimitaciones] = useState('');
  const [tono, setTono] = useState('');
  const [formatoRedaccion, setFormatoRedaccion] = useState('');
  const [estiloRedaccion, setEstiloRedaccion] = useState('');
  const [puntoVista, setPuntoVista] = useState('');
  const [basadoFuentes, setBasadoFuentes] = useState('');
  const [evaluacionRespuesta, setEvaluacionRespuesta] = useState('');
  const [resultado, setResultado] = useState('');

    // Opciones de menú para cada campo
    const opcionesMenuPersonificar = [
        '',
        'Hola Chat, conversemos sobre ',
        'Hola Chat, quiero que me contestes como si fueras un experto en  ',
        'Analiza informacion y redacta un resumen sobre ',
    ];

    const opcionesMenutarea = [
        '',
        'Dame instrucciones paso a paso',
        'Elabora ',
        'Compara ',
        'Redacta ',
        'Lista/Plan detallado',
    ];

    const opcionesMenuContexto = ['', 'En el periodo', 'Desde', 'ideas'];

    const opcionesMenuPeriodo = ['', 'En el periodo', 'Desde', 'ideas'];

    const opcionesMenuEjemplo = [
        '',
        'Hacelo siguiendo el siguiente formato y orden:',
        'ampliar',
    ];

    const opcionesMenuRespuesta = [
        '',
        'Especializado en',
        'Chef en cocina internacional',
        'Periodista / Medico / Historiador / Investigador Academico',
    ];

    const opcionesMenuPublico = [
        '',
        'Profesional',
        'Amplio',
        'Entusiasta',
        'Adulto',
        'Consumidor promedio',
    ];

    const opcionesMenuTipo = ['', 'Extensa', 'Resumida'];

    const opcionesMenuLimitaciones = [
        '',
        'Evita términos complejos',
        'Sé claro y conciso',
        'Evita términos ambiguos',
        'Limítate a cierto número de palabras',
        'Escribe párrafos cortos',
    ];

    const opcionesMenuTono = [
        '',
        'Formal',
        'Informal',
        'Inspirador',
        'Profesional',
    ];

    const opcionesMenuFormatoRedaccion = [
        '',
        'Bullets con emojis',
        'Mapa conceptual',
        'Párrafos cortos',
    ];

    const opcionesMenuEstiloRedaccion = [
        '',
        'Narrativa',
        'Ensayo',
        'Poético',
        'Cuento infantil',
    ];

    const opcionesMenuPuntoVista = [
        '',
        'Investigación académica',
        'Expertos',
        'Experiencias personales',
    ];

    const opcionesMenuBasadoFuentes = ['', 'Investigación académica'];

    const opcionesMenuEvaluacionRespuesta = [
        '',
        'Asegura tener fuentes válidas',
        'Revisa no tener falacias presentes en el argumento',
    ];



// estilos
    const desp = { marginBottom: '10px' };
    const sdesp = { display: 'flex', alignItems: 'flex-start', width: '5%' };
    const texto1 = { width: '100%', height: '40px' };
    const texto2 = { width: '100%', height: '20px' };
    const button = {
        background: 'linear-gradient(to right, #0f0c29, #302b63, #24243e)',
        border: 'none',
        color: 'white',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '16px',
        transitionDuration: '0.4s',
        cursor: 'pointer',
        borderRadius: '5px',
        padding: '10px 24px',
        textShadow: '0px 0px 10px rgba(0, 255, 255, 0.5)',
        boxShadow: '0px 0px 10px rgba(0, 255, 255, 0.5)',
      };

      const estiloTexto = {
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px', // Tamaño de fuente fijo en píxeles
        lineHeight: '1.5', // Espacio entre líneas
        display: 'block',
        color: '', // Color de texto
        textAlign: '', // Centrado horizontal
        maxWidth: '100%', // Ancho máximo del contenedor
        margin: 'auto', // Centrado horizontal
        overflowY: 'block', // Deshabilitar desplazamiento vertical
        display: 'block', // Cambio a display flex
        alignItems: 'center', // Alineación vertical
    

      };
   
 //  otros estilos

      const estiloFuturista = {
        fontFamily: 'Arial, sans-serif',
        fontSize: '16px',
        color: '#FFFFFF', // Texto blanco
        textAlign: 'center',
        width: '100%', // Ancho total de la pantalla
        height: '100%', // Altura total de la pantalla
        backgroundColor: '#0f0c29', // Color de fondo oscuro
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0', // Elimina el relleno para maximizar el espacio
        margin: '0', // Elimina el margen para llenar completamente la pantalla
      };
      
      const tituloEstilo = {
        fontSize: '2rem', // Tamaño de fuente grande para el título
        marginBottom: '2rem', // Margen inferior para separarlo del contenido
      };
      
      const contenidoEstilo = {
        width: '100%', // Ancho máximo del contenido para que no se vea demasiado extendido
        padding: '2rem', // Añadir un relleno para separar el contenido del borde
        borderRadius: '10px', // Bordes redondeados para suavizar el aspecto
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Color de fondo semi-transparente
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Sombra suave para resaltar el contenido
      };
      
      const botonEstilo = {
        background: 'linear-gradient(to right, #ff5e62, #ff9966)', // Gradiente de colores llamativos
        border: 'none',
        color: '#FFFFFF',
        textAlign: 'center',
        textDecoration: 'none',
        display: 'inline-block',
        fontSize: '1rem', // Tamaño de fuente normal para los botones
        cursor: 'pointer',
        borderRadius: '5px',
        padding: '10px 24px',
        margin: '1rem 0', // Margen superior e inferior para separar los botones
      };
      
     
      


// Función para restablecer los campos a su estado inicial
    const restablecer = () => {
        setPersonificar('');
        settarea('');
        setContexto('');
        setPeriodo('');
        setEjemplo('');
        setRespuesta('');
        setPublico('');
        setTipo('');
        setLimitaciones('');
        setTono('');
        setFormatoRedaccion('');
        setEstiloRedaccion('');
        setPuntoVista('');
        setBasadoFuentes('');
        setEvaluacionRespuesta('');
        setResultado('');
      };

  // Función para copiar el resultado de la concatenación
  const copiarPrompt = () => {
    const elResultado = resultado; // Obtener el resultado actual
    if (elResultado.trim() !== '') {
      // Copiar al portapapeles
      navigator.clipboard
        .writeText(elResultado)
        .then(() => alert('¡Resultado copiado al portapapeles!'))
        .catch((error) =>
          console.error('Error al copiar el resultado:', error)
        );
    } else {
      alert(
        'No hay nada para copiar. ¡Completa los campos y concatena primero!'
      );
    }
  };

  const concatenar = () => {
    let concatenado = '';

    if (Personificar.trim() !== '') {
      concatenado += Personificar + '. ';
    }
    if (tarea.trim() !== '') {
      concatenado += tarea + '. \n';
    }
    if (contexto.trim() !== '') {
      concatenado += contexto + '. ';
    }
    if (periodo.trim() !== '') {
      concatenado += periodo + '. ';
    }
    if (ejemplo.trim() !== '') {
      concatenado += ejemplo + '.';
    }
    if (respuesta.trim() !== '') {
      concatenado += '\n' + "Responde como si fueras "+ respuesta + '. ';
    }
    if (publico.trim() !== '') {
      concatenado += '\n' + "Dirigido a publico tipo "+ publico + '. ';
    }
    if (tipo.trim() !== '') {
      concatenado += '\n' + "Tipo de respuesta "+ tipo + '. ';
    }
    if (limitaciones.trim() !== '') {
      concatenado += '\n' + "Considera las siguiente limitaciones "+ limitaciones + '. ';
    }
    if (tono.trim() !== '') {
      concatenado += '\n' + "En un tono "+ tono + '. ';
    }
    if (formatoRedaccion.trim() !== '') {
      concatenado += '\n' + "Con un formato de redaccion tipo "+ formatoRedaccion + '. ';
    }
    if (estiloRedaccion.trim() !== '') {
      concatenado += '\n' +  "Con un estilo de redaccion tipo "+ estiloRedaccion + '. ';
    }
    if (puntoVista.trim() !== '') {
      concatenado += '\n' + "Desde el punto de vista de un "+ puntoVista + '. ';
    }
    if (basadoFuentes.trim() !== '') {
      concatenado += '\n' +  "Basado en fuente de tipo " + basadoFuentes + '. ';
    }
    if (evaluacionRespuesta.trim() !== '') {
      concatenado += '\n' +  "Considera "+ evaluacionRespuesta + '. ';
    }

    // Actualiza el estado para mostrar el resultado
    setResultado(concatenado.trim());
  };


  return (
         <div style={{ textAlign: 'justify', padding: '20px', justifyContent: 'space-between' }}>
            <h2>Completa los campos:</h2>


      <button style={botonEstilo} onClick={restablecer}>Restablecer Campos</button>
      <p></p>

      {/* Campo Personificar */}
      <div div style={desp}>            
      <select style={sdesp} value={Personificar}  onChange={e => setPersonificar(e.target.value)}>
        {opcionesMenuPersonificar.map((opcion, index) => (
      <option key={index} value={opcion}>{opcion}</option>
    ))}
  </select>
        <textarea
          style={texto1}
          placeholder="Personificar"
          onChange={e => setPersonificar(e.target.value)}
          value={Personificar}
        />
      </div>

      {/* Campo Tarea */}
      <div div style={desp}> 
      <select style={sdesp} value={tarea} onChange={e => settarea(e.target.value)}>
          {opcionesMenutarea.map((opcion, index) => (
            <option key={index} value={opcion}>{opcion}</option>
          ))}
        </select>
        <textarea
        style={texto1}
          placeholder="Tarea"
          onChange={e => settarea(e.target.value)}
          value={tarea}
        />
      </div>

      {/* Campo Contexto */}
      <div>
      <select style={sdesp} value={contexto} onChange={e => setContexto(e.target.value)}>
          {opcionesMenuContexto.map((opcion, index) => (
            <option key={index} value={opcion}>{opcion}</option>
          ))}
        </select>
        <textarea
        style={texto1}
          placeholder="Contexto"
          onChange={e => setContexto(e.target.value)}
          value={contexto}
        />
      </div>

      {/* Campo Periodo */}
      <div>
      <select style={sdesp} value={periodo} onChange={e => setPeriodo(e.target.value)}>
          {opcionesMenuPeriodo.map((opcion, index) => (
            <option key={index} value={opcion}>{opcion}</option>
          ))}
        </select>
        <textarea
        style={texto1}
          placeholder="Periodo"
          onChange={e => setPeriodo(e.target.value)}
          value={periodo}
        />
      </div>

      {/* Campo Ejemplo */}
      <div>
      <select style={sdesp} value={ejemplo} onChange={e => setEjemplo(e.target.value)}>
          {opcionesMenuEjemplo.map((opcion, index) => (
            <option key={index} value={opcion}>{opcion}</option>
          ))}
        </select>
        <textarea
        style={texto1}
          placeholder="Ejemplo"
          onChange={e => setEjemplo(e.target.value)}
          value={ejemplo}
        />
      </div>

      {/* Campo Respuesta */}
      <div>
      <select style={sdesp} value={respuesta} onChange={e => setRespuesta(e.target.value)}>
      {opcionesMenuRespuesta.map((opcion, index) => (
      <option key={index} value={opcion}>{opcion}</option>
      ))}
      </select>
      <textarea
      style={texto2}
      placeholder="Tipo de Respuesta"
      onChange={e => setRespuesta(e.target.value)}
      value={respuesta}
      />
      </div>


      {/* Campo Público */}
      <div>
      <select style={sdesp} value={publico} onChange={e => setPublico(e.target.value)}>
          {opcionesMenuPublico.map((opcion, index) => (
            <option key={index} value={opcion}>{opcion}</option>
          ))}
        </select>
        <textarea
        style={texto2}
          placeholder="Dirigido a Público"
          onChange={e => setPublico(e.target.value)}
          value={publico}
        />
      </div>

      {/* Campo Tipo */}
      <div>
      <select style={sdesp} value={tipo} onChange={e => setTipo(e.target.value)}>
          {opcionesMenuTipo.map((opcion, index) => (
            <option key={index} value={opcion}>{opcion}</option>
          ))}
        </select>
        <textarea
        style={texto2}
          placeholder="Tipo"
          onChange={e => setTipo(e.target.value)}
          value={tipo}
        />
      </div>

      {/* Campo Limitaciones */}
      <div>
      <select style={sdesp} value={limitaciones} onChange={e => setLimitaciones(e.target.value)}>
          {opcionesMenuLimitaciones.map((opcion, index) => (
            <option key={index} value={opcion}>{opcion}</option>
          ))}
        </select>
        <textarea
        style={texto2}
          placeholder="Limitaciones"
          onChange={e => setLimitaciones(e.target.value)}
          value={limitaciones}
        />
      </div>

      {/* Campo Tono */}
      <div>
      <select style={sdesp} value={tono} onChange={e => setTono(e.target.value)}>
          {opcionesMenuTono.map((opcion, index) => (
            <option key={index} value={opcion}>{opcion}</option>
          ))}
        </select>
        <textarea
        style={texto2}
          placeholder="Tono"
          onChange={e => setTono(e.target.value)}
          value={tono}
        />
      </div>

      {/* Campo Formato de Redacción */}
      <div>
      <select style={sdesp} value={formatoRedaccion} onChange={e => setFormatoRedaccion(e.target.value)}>
          {opcionesMenuFormatoRedaccion.map((opcion, index) => (
            <option key={index} value={opcion}>{opcion}</option>
          ))}
        </select>
        <textarea
        style={texto2}
          placeholder="Formato de Redacción"
          onChange={e => setFormatoRedaccion(e.target.value)}
          value={formatoRedaccion}
        />
      </div>

      {/* Campo Estilo de Redacción */}
      <div>
      <select style={sdesp} value={estiloRedaccion} onChange={e => setEstiloRedaccion(e.target.value)}>
          {opcionesMenuEstiloRedaccion.map((opcion, index) => (
            <option key={index} value={opcion}>{opcion}</option>
          ))}
        </select>
        <textarea
        style={texto2}
          placeholder="Estilo de Redacción"
          onChange={e => setEstiloRedaccion(e.target.value)}
          value={estiloRedaccion}
        />
      </div>

      {/* Campo Punto de Vista */}
      <div>
      <select style={sdesp} value={puntoVista} onChange={e => setPuntoVista(e.target.value)}>
          {opcionesMenuPuntoVista.map((opcion, index) => (
            <option key={index} value={opcion}>{opcion}</option>
          ))}
        </select>
        <textarea
        style={texto2}
          placeholder="Punto de Vista"
          onChange={e => setPuntoVista(e.target.value)}
          value={puntoVista}
        />
      </div>

      {/* Campo Basado en Fuentes */}
      <div>
      <select style={sdesp} value={basadoFuentes} onChange={e => setBasadoFuentes(e.target.value)}>
          {opcionesMenuBasadoFuentes.map((opcion, index) => (
            <option key={index} value={opcion}>{opcion}</option>
          ))}
        </select>
        <textarea
        style={texto2}
          placeholder="Basado en Fuentes"
          onChange={e => setBasadoFuentes(e.target.value)}
          value={basadoFuentes}
        />
      </div>

      {/* Campo Evaluación de la Respuesta */}
      <div>
      <select style={sdesp} value={evaluacionRespuesta} onChange={e => setEvaluacionRespuesta(e.target.value)}>
          {opcionesMenuEvaluacionRespuesta.map((opcion, index) => (
            <option key={index} value={opcion}>{opcion}</option>
          ))}
        </select>
        <textarea
        style={texto2}
          placeholder="Evaluación de la Respuesta"
          onChange={e => setEvaluacionRespuesta(e.target.value)}
          value={evaluacionRespuesta}
        />
      </div>
      <p></p>

      <button  style={button} onClick={concatenar}>Concatenar</button>
      <p></p>
      <button style={button} onClick={copiarPrompt}>Copiar Resultado</button>

      <div style={estiloTexto}>
      <pre>{resultado}</pre>
      </div>
    </div>
  );
};


export default TuComponente;
