export const enviarPreguntaAI = async (mensaje) => {
  const respuesta = await fetch('http://localhost:5050/api/fcc/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ mensaje })
  });

  const data = await respuesta.json();
  return data.respuesta;
};