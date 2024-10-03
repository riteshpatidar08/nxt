
 
export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos', {
    headers: {
      'Content-Type': 'application/json',
      
    },
  })
  const data = await res.json()
 
  return Response.json({ data })
}