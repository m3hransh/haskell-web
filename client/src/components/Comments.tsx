import axios from 'axios'
import { useEffect, useState } from 'react'


interface Comment {
  id: number
  message: string
}
const Comment = () => {
  const [comments, setComments] = useState<Comment[]>([])


    useEffect(() => {
      axios.get<Comment[]>(`http://localhost:3000/comments`)
    .then((response) => {
      setComments(response.data)
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
    }, [])
  return (

  <table className='text-gray-300 text-sm text-left border-gray-400 bg-slate-800 dark:text-gray-400'>
  <thead >
    <tr>
    <th className=' p-2 border-b border-r border-gray-400'>Ids</th> 
    <th className='p-2 border-b border-r border-gray-400'>Comments</th>
    </tr>
  </thead>
  <tbody>
    {comments.map((comment) => (
      <tr key={comment.id}>
        <td className='p-2 border-b border-r border-gray-400'>{comment.id}</td>
        <td className='p-2 border-b border-r border-gray-400'>{comment.message}</td>
      </tr>
    ))}
      </tbody>
</table>



  )
}

export default Comment