import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Wisess() {
  const [inputValue, setInputValue] = useState('')

  const showSwal = () => {
    withReactContent(Swal).fire({
      title: <i>Winner</i>, 
      imageUrl: './assets/winner.gif', 
      imageAlt: 'Winner image', 
      imageWidth: 200,
      imageHeight: 100, 
      confirmButtonText: 'OK',
    })
  }

  return (
    <>
      <span onClick={showSwal()}></span>
    </>
  )
}
export default Wisess