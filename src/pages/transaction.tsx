import { useRouter } from 'next/dist/client/router'
import React, { useEffect } from 'react'
// import { SimulationInputs } from '../components/FrenteSimul/FrenteSimul'

const Transaction = (): JSX.Element => {
  const router = useRouter()
  const inputs = router.query
  // const [correspondentId, setCorrespondentId] = useState<number>()

  useEffect(() => {
    const t = localStorage.getItem('@r4cambio-web:frente-token')
    if (t)
      fetch('/api/frente/validate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token: t }),
      })
        .then((res) => {
          console.log(res)
          // setCorrespondentId(data.correspondentId)
        })
        .catch(() => {
          fetch('/api/frente/correspondetLogin', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
          }).then((res) => {
            console.log(res)
            // setCorrespondentId(data.correspondentId)
          })
        })
  }, [])
  console.log(inputs)
  return <h1>Happy Transaction</h1>
}

export default Transaction
